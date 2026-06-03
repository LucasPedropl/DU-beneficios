/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Calculator, CheckCircle, Flame, Sparkles } from 'lucide-react';

export default function SavingsSimulator() {
  const [familyMembers, setFamilyMembers] = useState(3);
  const [medicalExpenses, setMedicalExpenses] = useState(150);
  const [consultsPerYear, setConsultsPerYear] = useState(4);
  const [needsAuto, setNeedsAuto] = useState(true);

  const calculationResult = useMemo(() => {
    const annualMedicineSpent = medicalExpenses * 12;
    const medicineSavings = annualMedicineSpent * 0.35;

    const avgConsultationCost = 180;
    const scheduledConsultations = consultsPerYear * familyMembers;
    const telemedicineSavings = (scheduledConsultations * 0.6) * avgConsultationCost;
    const discountedScheduledSavings = (scheduledConsultations * 0.4) * (avgConsultationCost * 0.5);
    const healthSavings = telemedicineSavings + discountedScheduledSavings;

    const autoSavings = needsAuto ? 420 : 0;
    const retailLifestyleSavings = familyMembers * 180;

    const totalAnnualSavings = medicineSavings + healthSavings + autoSavings + retailLifestyleSavings;
    const estimatedMonthlyCost = needsAuto ? 49.90 : 29.90;

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
    <section id="simulador" className="py-24 bg-slate-50 border-t border-slate-200/60 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[30vw] h-[30vw] bg-brand-blue-deep rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-brand-blue-deep font-black bg-brand-blue-deep/5 px-3 py-1.5 rounded-full block w-fit mx-auto mb-3">
            Economia Inteligente
          </span>
          <h2 className="font-display text-4xl font-extrabold text-slate-900 tracking-tight">
            Simulador de Economia Real
          </h2>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed">
            Veja na prática como a combinação do <strong className="text-slate-800 font-semibold">Du Benefícios</strong> com a <strong className="text-slate-800 font-semibold">Sempre Assistência</strong> ajuda você e sua família no dia a dia.
          </p>
        </div>

        {/* Central Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Inputs Panel */}
          <div className="lg:col-span-6 bg-white/70 backdrop-blur-sm p-6 sm:p-10 rounded-[2.5rem] border border-slate-200/60 flex flex-col justify-between shadow-xl shadow-slate-100/40">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
                <div className="p-3 bg-brand-blue-deep/10 text-brand-blue-deep rounded-xl">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="font-display font-black text-lg text-slate-900">Configure seu Perfil de Consumo</h3>
              </div>

              {/* Input 1: Family Members */}
              <div className="bg-white p-5 rounded-2xl border border-slate-150 shadow-sm hover:border-slate-350 transition-all">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Membros na Família</label>
                  <span className="text-xs font-mono font-bold text-brand-blue-deep bg-brand-blue-deep/5 px-3 py-1 rounded-full">
                    {familyMembers} {familyMembers === 1 ? 'Pessoa' : 'Pessoas'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={familyMembers}
                  onChange={(e) => setFamilyMembers(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue-deep"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-mono">
                  <span>1 pessoa</span>
                  <span>3 pessoas</span>
                  <span>6 pessoas</span>
                </div>
              </div>

              {/* Input 2: Pharmacy spent */}
              <div className="bg-white p-5 rounded-2xl border border-slate-150 shadow-sm hover:border-slate-350 transition-all">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Gasto Mensal em Farmácias</label>
                  <span className="text-xs font-mono font-bold text-brand-blue-deep bg-brand-blue-deep/5 px-3 py-1 rounded-full">
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
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue-deep"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-mono">
                  <span>R$ 50</span>
                  <span>R$ 250</span>
                  <span>R$ 500+</span>
                </div>
              </div>

              {/* Input 3: Consultations per year */}
              <div className="bg-white p-5 rounded-2xl border border-slate-150 shadow-sm hover:border-slate-350 transition-all">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Consultas Médicas (por ano)</label>
                  <span className="text-xs font-mono font-bold text-brand-blue-deep bg-brand-blue-deep/5 px-3 py-1 rounded-full">
                    {consultsPerYear} {consultsPerYear === 1 ? 'consulta' : 'consultas'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={consultsPerYear}
                  onChange={(e) => setConsultsPerYear(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue-deep"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-mono">
                  <span>1 consulta</span>
                  <span>6 consultas</span>
                  <span>12 consultas</span>
                </div>
              </div>

              {/* Input 4: Automotive Need Toggle */}
              <div className="bg-white rounded-2xl p-5 border border-slate-150 shadow-sm flex items-center justify-between hover:border-slate-350 transition-all">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Sempre Assistência Automotiva?</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Guincho 24h, chaveiro e socorro mecânico emergencial</p>
                </div>
                <button
                  type="button"
                  onClick={() => setNeedsAuto(!needsAuto)}
                  className={`relative inline-flex h-6.5 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none ${
                    needsAuto ? 'bg-brand-blue-deep' : 'bg-slate-200'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5.5 w-5.5 transform rounded-full bg-white shadow-md ring-0 transition duration-300 ease-in-out ${
                      needsAuto ? 'translate-x-5.5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Right Live Results Panel */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 to-slate-950 text-slate-100 p-6 sm:p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Background image overlay to humanize the data */}
            <img
              src="https://images.unsplash.com/photo-1543185377-b75671dfec7e?auto=format&fit=crop&q=80&w=800"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-[0.06] mix-blend-overlay pointer-events-none select-none"
            />
            <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
              <Sparkles className="w-56 h-56 text-brand-yellow" />
            </div>

            <div>
              <div className="inline-flex items-center space-x-2 bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">
                <Flame className="w-4 h-4 text-brand-yellow" />
                <span>Simulação Atualizada</span>
              </div>

              <h4 className="text-slate-400 font-bold text-[10px] uppercase tracking-widest font-mono">
                Economia Média Estimada por Ano
              </h4>
              <p className="font-display text-4.5xl sm:text-6xl font-black text-brand-yellow mt-2 tracking-tight drop-shadow-[0_0_15px_rgba(245,158,11,0.15)] bg-gradient-to-r from-brand-yellow to-amber-400 bg-clip-text text-transparent">
                R$ {calculationResult.totalAnnualSavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Isso representa economizar em torno de <strong className="text-slate-100 font-bold">R$ {(calculationResult.totalAnnualSavings / 12).toFixed(2)}</strong> todos os meses!
              </p>

              {/* Breakdown List */}
              <div className="space-y-4 mt-8 border-t border-white/5 pt-6">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Descontos em Medicamentos (Média 35% OFF)</span>
                  <span className="font-mono font-bold text-slate-200">R$ {calculationResult.medicineSavings.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Consultas & Telemedicina Ilimitada 24h</span>
                  <span className="font-mono font-bold text-slate-200">R$ {calculationResult.healthSavings.toFixed(2)}</span>
                </div>
                {needsAuto && (
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Assistência de Veículos Sempre 24h</span>
                    <span className="font-mono font-bold text-slate-200">R$ {calculationResult.autoSavings.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Lazer, Compras e Parcerias</span>
                  <span className="font-mono font-bold text-slate-200">R$ {calculationResult.retailLifestyleSavings.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/5">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between bg-slate-850/40 border border-white/5 rounded-2xl p-4 gap-4 mb-6 backdrop-blur-sm">
                <div>
                  <p className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Investimento estimado</p>
                  <p className="font-display text-sm font-black text-white">Consulte nossos valores</p>
                </div>
                <button
                  onClick={scrollToContact}
                  className="px-6 py-3 bg-brand-blue-deep hover:bg-brand-yellow hover:text-slate-950 text-white text-xs font-bold uppercase rounded-xl transition-all active:scale-[0.98] cursor-pointer shadow-md"
                >
                  Solicitar Simulação
                </button>
              </div>

              <div className="flex items-start space-x-2 text-[10px] text-slate-500 leading-relaxed">
                <CheckCircle className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-0.5" />
                <p>Cálculo estimado com base nas tabelas de descontos em farmácias credenciadas (Raia, Drogasil, Pague Menos, Pacheco e Araújo) e nos indicadores auditados no PDF de apresentação oficial.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Real Pharmacy Discounts Section from Slide 10 */}
        <div className="mt-20 pt-16 border-t border-slate-200/60">
          <div className="text-left mb-10">
            <span className="text-xs uppercase font-mono tracking-widest text-brand-blue-deep font-bold block mb-1">
              Transparência
            </span>
            <h3 className="font-display text-2xl font-extrabold text-slate-900 tracking-tight">
              Tabela de Descontos Garantidos (Slide 10 do PDF)
            </h3>
            <p className="mt-2 text-slate-500 text-sm leading-relaxed max-w-3xl">
              Nossa simulação utiliza as margens reais de desconto asseguradas nos convênios nacionais com grandes redes e mais de 290 farmácias locais:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            {/* Pharmacy Card 1 */}
            <div className="bg-white border border-slate-200/60 rounded-[2rem] p-6 shadow-md shadow-slate-100/30 hover:border-brand-blue-deep/20 hover:shadow-lg hover:shadow-slate-200/40 hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-display font-black text-lg text-slate-900">Droga Raia</h4>
                  <p className="text-[10px] text-slate-400 font-mono font-bold">Drogasil</p>
                </div>
                <span className="text-[9px] uppercase font-mono font-bold bg-blue-50 border border-blue-100 text-brand-blue-deep px-2.5 py-0.5 rounded-full">Tarjados</span>
              </div>
              <div className="space-y-2.5 mt-4 pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">Genérico</span>
                  <span className="font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-lg font-mono">Até 45% OFF</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">De Marca</span>
                  <span className="font-bold text-slate-700 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-lg font-mono">Até 15% OFF</span>
                </div>
              </div>
            </div>

            {/* Pharmacy Card 2 */}
            <div className="bg-white border border-slate-200/60 rounded-[2rem] p-6 shadow-md shadow-slate-100/30 hover:border-brand-blue-deep/20 hover:shadow-lg hover:shadow-slate-200/40 hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-display font-black text-lg text-slate-900">Pague Menos</h4>
                  <p className="text-[10px] text-slate-400 font-mono font-bold">ExtraFarma</p>
                </div>
                <span className="text-[9px] uppercase font-mono font-bold bg-blue-50 border border-blue-100 text-brand-blue-deep px-2.5 py-0.5 rounded-full">Gerais</span>
              </div>
              <div className="space-y-2.5 mt-4 pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">Genérico</span>
                  <span className="font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-lg font-mono">Até 35% OFF</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">De Marca</span>
                  <span className="font-bold text-slate-700 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-lg font-mono">Até 20% OFF</span>
                </div>
              </div>
            </div>

            {/* Pharmacy Card 3 */}
            <div className="bg-white border border-slate-200/60 rounded-[2rem] p-6 shadow-md shadow-slate-100/30 hover:border-brand-blue-deep/20 hover:shadow-lg hover:shadow-slate-200/40 hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-display font-black text-lg text-slate-900">Pacheco</h4>
                  <p className="text-[10px] text-slate-400 font-mono font-bold">São Paulo / PanVel</p>
                </div>
                <span className="text-[9px] uppercase font-mono font-bold bg-blue-50 border border-blue-100 text-brand-blue-deep px-2.5 py-0.5 rounded-full">Nacional</span>
              </div>
              <div className="space-y-2.5 mt-4 pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">Genérico</span>
                  <span className="font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-lg font-mono">Até 20% OFF</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">De Marca</span>
                  <span className="font-bold text-slate-700 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-lg font-mono">Até 10% OFF</span>
                </div>
              </div>
            </div>

            {/* Pharmacy Card 4 */}
            <div className="bg-white border border-slate-200/60 rounded-[2rem] p-6 shadow-md shadow-slate-100/30 hover:border-brand-blue-deep/20 hover:shadow-lg hover:shadow-slate-200/40 hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-display font-black text-lg text-slate-900">Drog. Araujo</h4>
                  <p className="text-[10px] text-slate-400 font-mono font-bold">Redes Locais</p>
                </div>
                <span className="text-[9px] uppercase font-mono font-bold bg-blue-50 border border-blue-100 text-brand-blue-deep px-2.5 py-0.5 rounded-full">Exclusivos</span>
              </div>
              <div className="space-y-2.5 mt-4 pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">Genérico</span>
                  <span className="font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-lg font-mono">Até 40% OFF</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">Produtos MIÓ</span>
                  <span className="font-bold text-slate-700 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-lg font-mono">15% OFF</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
