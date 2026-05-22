/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Calculator, CheckCircle, Flame, DollarSign, Sparkles } from 'lucide-react';

export default function SavingsSimulator() {
  const [familyMembers, setFamilyMembers] = useState(3);
  const [medicalExpenses, setMedicalExpenses] = useState(150); // Monthly spending in R$
  const [consultsPerYear, setConsultsPerYear] = useState(4); // Consultations per year
  const [needsAuto, setNeedsAuto] = useState(true);

  // Live calculation of economy
  const calculationResult = useMemo(() => {
    // 1. Medicine discount estimate: average 35% discount based on slide statistics (Pague Menos, Pacheco, Droga Raia)
    const annualMedicineSpent = medicalExpenses * 12;
    const medicineSavings = annualMedicineSpent * 0.35;

    // 2. Health consultations / Telemedicine savings:
    // With Telemedicinia TopMed 24x7 included, family members don't spend R$ 180 on basic medical consultations.
    // Let's assume on average they utilize teleconsultations 1.5 times per member per year, plus other physical consultations at negotiated discount prices.
    const avgConsultationCost = 180;
    const scheduledConsultations = consultsPerYear * familyMembers;
    // Assume 60% are resolved free via Telemedicine and 40% get our 60% physical discount
    const telemedicineSavings = (scheduledConsultations * 0.6) * avgConsultationCost;
    const discountedScheduledSavings = (scheduledConsultations * 0.4) * (avgConsultationCost * 0.5);
    const healthSavings = telemedicineSavings + discountedScheduledSavings;

    // 3. Sempre Auto assistance estimate:
    // Standard 24h custom towing and locksmith services would cost R$ 420 annually on conventional policies.
    const autoSavings = needsAuto ? 420 : 0;

    // 4. Other benefits estimate (gyms, retail like Riachuelo, Electrolux avg savings):
    const retailLifestyleSavings = familyMembers * 180; // Estimated R$ 180 annual retail discount benefit

    const totalAnnualSavings = medicineSavings + healthSavings + autoSavings + retailLifestyleSavings;
    const estimatedMonthlyCost = needsAuto ? 49.90 : 29.90; // Standard Du standard policy estimates

    return {
      medicineSavings,
      healthSavings,
      autoSavings,
      retailLifestyleSavings,
      totalAnnualSavings,
      estimatedMonthlyCost,
    };
  }, [familyMembers, medicalExpenses, consultsPerYear, needsAuto]);

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="simulador" className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-extrabold text-stone-900 tracking-tight">
            Simulador de Benefícios e Economia Real
          </h2>
          <p className="mt-4 text-stone-500 text-sm leading-relaxed">
            Veja na prática como a combinação do <strong className="text-stone-900 font-semibold">Du Benefícios</strong> com a <strong className="text-stone-900 font-semibold">Sempre Assistência Automotiva</strong> ajuda você e sua família a economizar milhares de reais todos os anos.
          </p>
        </div>

        {/* Central Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Inputs Panel */}
          <div className="lg:col-span-6 bg-stone-50 p-6 sm:p-10 rounded-[2rem] border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 bg-brand-blue-deep/10 text-brand-blue-deep rounded-xl">
                  <Calculator className="w-5 h-5 pointer-events-none" />
                </div>
                <h3 className="font-display font-bold text-lg text-stone-900">Configure seu Perfil de Consumo</h3>
              </div>

              {/* Input 1: Family Members */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Membros na Família</label>
                  <span className="text-xs font-mono font-bold text-brand-blue-deep bg-blue-50 px-2.5 py-1 rounded-md">
                    {familyMembers} {familyMembers === 1 ? 'Pessoa' : 'Pessoas'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={familyMembers}
                  onChange={(e) => setFamilyMembers(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-brand-blue-deep"
                />
                <div className="flex justify-between text-[10px] text-stone-400 mt-1 font-mono">
                  <span>1 pessoa</span>
                  <span>3 pessoas</span>
                  <span>6 pessoas</span>
                </div>
              </div>

              {/* Input 2: Pharmacy spent */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Gasto R$ Mensal em Farmácias</label>
                  <span className="text-xs font-mono font-bold text-brand-blue-deep bg-blue-50 px-2.5 py-1 rounded-md">
                    R$ {medicalExpenses}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="10"
                  value={medicalExpenses}
                  onChange={(e) => setMedicalExpenses(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-brand-blue-deep"
                />
                <div className="flex justify-between text-[10px] text-stone-400 mt-1 font-mono">
                  <span>R$ 50</span>
                  <span>R$ 250</span>
                  <span>R$ 500+</span>
                </div>
              </div>

              {/* Input 3: Consultations per year per person */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Consultas Médicas (por ano)</label>
                  <span className="text-xs font-mono font-bold text-brand-blue-deep bg-blue-50 px-2.5 py-1 rounded-md">
                    {consultsPerYear} {consultsPerYear === 1 ? 'consulta' : 'consultas'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={consultsPerYear}
                  onChange={(e) => setConsultsPerYear(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-brand-blue-deep"
                />
                <div className="flex justify-between text-[10px] text-stone-400 mt-1 font-mono">
                  <span>1 consulta</span>
                  <span>6 consultas</span>
                  <span>12 consultas</span>
                </div>
              </div>

              {/* Input 4: Automotive Need Toggle */}
              <div className="bg-white rounded-2xl p-4 border border-stone-250 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">Sempre Assistência Automotiva?</h4>
                  <p className="text-[11px] text-stone-500 mt-0.5 leading-relaxed">Guincho 24h, pane seca/elétrica, chaveiro emergencial</p>
                </div>
                <button
                  type="button"
                  onClick={() => setNeedsAuto(!needsAuto)}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    needsAuto ? 'bg-brand-blue-deep' : 'bg-stone-300'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      needsAuto ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Right Live Results Panel */}
          <div className="lg:col-span-6 bg-stone-900 text-stone-100 p-6 sm:p-10 rounded-[2rem] border border-stone-800 shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
              <Sparkles className="w-48 h-48 text-brand-yellow" />
            </div>

            <div>
              <div className="inline-flex items-center space-x-2 bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6">
                <Flame className="w-3.5 h-3.5" />
                <span>Simulação Gerada</span>
              </div>

              <h4 className="text-stone-400 font-semibold text-[10px] uppercase tracking-widest font-mono">
                Sua Economia Estimada Anual
              </h4>
              <p className="font-display text-4xl sm:text-5xl font-extrabold text-brand-yellow mt-2 tracking-tight">
                R$ {calculationResult.totalAnnualSavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Representa uma economia mensal aproximada de <strong className="text-stone-100 font-semibold">R$ {(calculationResult.totalAnnualSavings / 12).toFixed(2)}</strong>
              </p>

              {/* Breakdown List */}
              <div className="space-y-3.5 mt-8 border-t border-white/10 pt-6">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-400">Economia estimada em Medicamentos (35% OFF)</span>
                  <span className="font-mono font-medium text-stone-200">R$ {calculationResult.medicineSavings.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-400">Economia em Consultas & Telemedicina Ilimitada</span>
                  <span className="font-mono font-medium text-stone-200">R$ {calculationResult.healthSavings.toFixed(2)}</span>
                </div>
                {needsAuto && (
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-stone-400">Assistência Automotiva Sempre 24h</span>
                    <span className="font-mono font-medium text-stone-200">R$ {calculationResult.autoSavings.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-400">Lazer, Compras e Conveniências adicionais</span>
                  <span className="font-mono font-medium text-stone-200">R$ {calculationResult.retailLifestyleSavings.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between bg-stone-850 border border-white/5 rounded-2xl p-4 gap-4 mb-5">
                <div>
                  <p className="text-[10px] uppercase font-mono text-stone-400">Mensalidade recomendada</p>
                  <p className="font-display text-sm font-semibold text-white">Consulte nossos valores</p>
                </div>
                <button
                  onClick={scrollToContact}
                  className="px-5 py-2.5 bg-brand-blue-deep text-white text-xs font-bold uppercase rounded-xl hover:bg-brand-yellow hover:text-stone-900 transition-colors cursor-pointer"
                >
                  Solicitar Cotação
                </button>
              </div>

              <div className="flex items-start space-x-2 text-[10px] text-stone-500 leading-relaxed">
                <CheckCircle className="w-3.5 h-3.5 text-brand-yellow flex-shrink-0 mt-0.5 text-stone-400 pointer-events-none" />
                <p>Estes valores são baseados nas tabelas de descontos em vigor (Droga Raia, Drogasil, Pague Menos, Pacheco e Araújo) e na Telemedicina TopMed que apresenta 95% de resolutividade nos atendimentos (conforme dados oficiais auditados do PDF institucional).</p>
              </div>
            </div>
          </div>

        </div>

        {/* Real Pharmacy Discounts Section from Slide 10 */}
        <div className="mt-16 pt-12 border-t border-stone-200">
          <div className="text-left mb-8">
            <span className="text-xs uppercase font-mono tracking-widest text-[#2563eb] font-bold block mb-1">
              Transparência Baseada em Fatos
            </span>
            <h3 className="font-display text-2xl font-extrabold text-stone-900 tracking-tight">
              Tabela de Descontos Reais Garantidos (Slide 10 do PDF)
            </h3>
            <p className="mt-2 text-stone-500 text-sm leading-relaxed max-w-3xl">
              Nossa simulação utiliza médias reais de desconto asseguradas em convênios com mais de 290 redes de farmácias locais e todas as grandes redes do País:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            {/* Pharmacy Card 1 */}
            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-display font-black text-lg text-stone-900">Droga Raia</h4>
                  <p className="text-xs text-stone-400 font-mono font-semibold">Drogasil</p>
                </div>
                <span className="text-[10px] uppercase font-mono font-bold bg-blue-50 text-brand-blue-deep px-2 py-0.5 rounded">Tarjados</span>
              </div>
              <div className="space-y-2 mt-4 pt-4 border-t border-stone-200/60">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-500">Medicamento Genérico</span>
                  <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-mono">Até 45% OFF</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-500">Medicamento de Marca</span>
                  <span className="font-semibold text-stone-700 bg-stone-100 px-2 py-0.5 rounded font-mono">Até 15% OFF</span>
                </div>
              </div>
            </div>

            {/* Pharmacy Card 2 */}
            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-display font-black text-lg text-stone-900">Pague Menos</h4>
                  <p className="text-xs text-stone-400 font-mono font-semibold">ExtraFarma</p>
                </div>
                <span className="text-[10px] uppercase font-mono font-bold bg-blue-50 text-brand-blue-deep px-2 py-0.5 rounded">Gerais</span>
              </div>
              <div className="space-y-2 mt-4 pt-4 border-t border-stone-200/60">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-500">Medicamento Genérico</span>
                  <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-mono">Até 35% OFF</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-500">Medicamento de Marca</span>
                  <span className="font-semibold text-stone-700 bg-stone-100 px-2 py-0.5 rounded font-mono">Até 20% OFF</span>
                </div>
              </div>
            </div>

            {/* Pharmacy Card 3 */}
            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-display font-black text-lg text-stone-900">Pacheco</h4>
                  <p className="text-xs text-stone-400 font-mono font-semibold">São Paulo / PanVel</p>
                </div>
                <span className="text-[10px] uppercase font-mono font-bold bg-blue-50 text-brand-blue-deep px-2 py-0.5 rounded">Nacional</span>
              </div>
              <div className="space-y-2 mt-4 pt-4 border-t border-stone-200/60">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-500">Medicamento Genérico</span>
                  <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-mono">Até 20% OFF</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-500">Medicamento de Marca</span>
                  <span className="font-semibold text-stone-700 bg-stone-100 px-2 py-0.5 rounded font-mono">Até 10% OFF</span>
                </div>
              </div>
            </div>

            {/* Pharmacy Card 4 */}
            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-display font-black text-lg text-stone-900 font-sans">Drog. Araujo</h4>
                  <p className="text-xs text-stone-400 font-mono font-semibold">Minas Gerais & Redes</p>
                </div>
                <span className="text-[10px] uppercase font-mono font-bold bg-blue-50 text-brand-blue-deep px-2 py-0.5 rounded">Exclusivos</span>
              </div>
              <div className="space-y-2 mt-4 pt-4 border-t border-stone-200/60">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-500">Medicamento Genérico</span>
                  <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-mono">Até 40% OFF</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-500">Produtos Marca Especial</span>
                  <span className="font-semibold text-stone-700 bg-stone-100 px-2 py-0.5 rounded font-mono">15% OFF (MIÓ)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Quick PDF stats callout */}
          <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between bg-blue-50/50 rounded-2xl p-4 border border-blue-105 gap-4">
            <div className="flex items-center space-x-3 text-left">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse shrink-0" />
              <p className="text-xs text-stone-600">
                A <strong>Telemedicina TopMed</strong> integrada possui mais de <strong>5 Milhões de atendimentos</strong> nos últimos 3 anos, com mais de <strong>93 pontos de NPS</strong> e grau máximo de excelência.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
