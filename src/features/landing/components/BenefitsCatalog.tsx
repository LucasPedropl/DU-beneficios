/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, Percent, Activity, ShieldCheck, ShoppingBag, Pill, Compass, HeartPulse } from 'lucide-react';
import { PharmacyDiscount } from '../../../types/landing';

const CATEGORIES = [
  { id: 'all', label: 'Todos', icon: Compass },
  { id: 'saude', label: 'Saúde & Teleconsulta', icon: HeartPulse },
  { id: 'medicamentos', label: 'Farmácias', icon: Pill },
  { id: 'varejo', label: 'Compras & Lazer', icon: ShoppingBag },
  { id: 'auto', label: 'Sempre Automotivo', icon: ShieldCheck },
];

const PHARMACIES_DATA: PharmacyDiscount[] = [
  { name: 'Droga Raia', genericDiscount: 'Até 45%', brandedDiscount: 'Até 15%', extraInfo: 'Válido em todo o país' },
  { name: 'Drogasil', genericDiscount: 'Até 45%', brandedDiscount: 'Até 15%', extraInfo: 'Todas as unidades' },
  { name: 'Pague Menos', genericDiscount: 'Até 35%', brandedDiscount: 'Até 20%', extraInfo: 'Desconto nacional' },
  { name: 'Drogaria Pacheco', genericDiscount: 'Até 20%', brandedDiscount: 'Até 10%', extraInfo: 'Rio e São Paulo' },
  { name: 'Drogaria São Paulo', genericDiscount: 'Até 20%', brandedDiscount: 'Até 10%', extraInfo: 'Líder regional' },
  { name: 'PanVel', genericDiscount: 'Até 20%', brandedDiscount: 'Até 10%', extraInfo: 'Sul do país' },
  { name: 'Araújo', genericDiscount: 'Até 40%', brandedDiscount: '15% em produtos MIÓ', extraInfo: 'Desconto premium' },
  { name: 'Extrafarma', genericDiscount: 'Até 35%', brandedDiscount: 'Até 20%', extraInfo: 'Presença Norte/Nordeste' },
];

const RETAIL_DATA = [
  { name: 'Riachuelo', category: 'varejo', discount: 'Até 20% OFF', info: 'Roupas e moda' },
  { name: 'Renner', category: 'varejo', discount: 'Até 15% OFF', info: 'Moda feminina e masculina' },
  { name: 'Decathlon', category: 'varejo', discount: 'Até 10% OFF', info: 'Esportes e lazer' },
  { name: 'Domino\'s', category: 'varejo', discount: 'Até 35% OFF', info: 'Pizzas selecionadas' },
  { name: 'Electrolux', category: 'varejo', discount: 'Até 25% OFF', info: 'Eletrodomésticos' },
  { name: 'Conquer', category: 'varejo', discount: 'Até 30% OFF', info: 'Cursos de negócios/skills' },
  { name: 'Acer', category: 'varejo', discount: 'Até 15% OFF', info: 'Notebooks e tecnologia' },
  { name: 'Giolaser', category: 'varejo', discount: 'Até 40% OFF', info: 'Estética e bem-estar' },
];

export default function BenefitsCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPharmacies = useMemo(() => {
    if (selectedCategory !== 'all' && selectedCategory !== 'medicamentos') return [];
    return PHARMACIES_DATA.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [selectedCategory, searchQuery]);

  const filteredRetail = useMemo(() => {
    if (selectedCategory !== 'all' && selectedCategory !== 'varejo') return [];
    return RETAIL_DATA.filter(r => 
      r.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [selectedCategory, searchQuery]);

  return (
    <section id="descontos" className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section with slide info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-xl text-left">
            <span className="text-xs uppercase font-mono tracking-widest text-[#2563eb] font-bold block mb-2">
              Clube de Vantagens
            </span>
            <h2 className="font-display text-4xl font-extrabold text-stone-900 tracking-tight">
              Medicamentos e Compras com Desconto de Verdade
            </h2>
            <p className="mt-3 text-stone-500 text-sm leading-relaxed">
              Tenha acesso a mais de 290 conveniadas e 24 mil lojas cadastradas para economizar na hora de renovar sua receita ou fazer compras online e físicas.
            </p>
          </div>

          {/* Highlight pill R$35 Millions saving */}
          <div className="bg-white border border-stone-200 text-stone-900 rounded-3xl p-5 md:max-w-xs text-left shadow-sm">
            <p className="text-[10px] uppercase font-mono text-stone-400 font-bold">Histórico Comprovado</p>
            <p className="font-display text-2xl font-extrabold mt-1 text-[#2563eb]">R$ 35 Milhões</p>
            <p className="text-xs text-stone-500 mt-0.5">Em economia de verdade gerada para nossos parceiros e clientes em todo o Brasil.</p>
          </div>
        </div>

        {/* Dynamic Filters & Search Input */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 mb-8 bg-white p-3 rounded-2xl border border-stone-200 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-brand-blue-deep text-white shadow-sm'
                      : 'hover:bg-stone-100 text-stone-600 bg-stone-50/50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Pesquisar drogaria, loja ou parceiro..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full lg:w-72 pl-10 pr-4 py-2 bg-stone-50 text-xs font-medium border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue-deep focus:border-transparent transition-all shadow-sm text-stone-900"
            />
          </div>
        </div>

        {/* Dynamic Partner Lists Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Render Pharmacy items */}
          {filteredPharmacies.map((item, index) => (
            <div key={`pharmacy-${index}`} className="bg-white hover:bg-stone-50/50 rounded-3xl p-5 border border-stone-200 flex flex-col justify-between transition-all duration-200 text-left group shadow-sm hover:shadow-md">
              <div>
                <p className="text-[10px] uppercase font-semibold font-mono text-stone-400">Medicamentos</p>
                <h4 className="font-display font-bold text-lg text-stone-900 group-hover:text-brand-blue-deep transition-colors mt-1">
                  {item.name}
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">{item.extraInfo}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex justify-between items-center bg-stone-50/60 p-3 rounded-xl">
                <div>
                  <p className="text-[8px] uppercase tracking-wider font-semibold text-stone-400">Genérico</p>
                  <p className="text-base font-extrabold text-[#2563eb] font-display">{item.genericDiscount}</p>
                </div>
                <div className="text-right">
                  <p className="text-[8px] uppercase tracking-wider font-semibold text-stone-400">Marca</p>
                  <p className="text-sm font-bold text-brand-blue-light font-display">{item.brandedDiscount}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Render Retail items */}
          {filteredRetail.map((item, index) => (
            <div key={`retail-${index}`} className="bg-white hover:bg-stone-50/50 rounded-3xl p-5 border border-stone-200 flex flex-col justify-between transition-all duration-200 text-left group shadow-sm hover:shadow-md">
              <div>
                <p className="text-[10px] uppercase font-semibold font-mono text-stone-400">Varejo e Lazer</p>
                <h4 className="font-display font-bold text-lg text-stone-900 group-hover:text-[#2563eb] transition-colors mt-1">
                  {item.name}
                </h4>
                <p className="text-xs text-stone-500 mt-1">{item.info}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-1 bg-green-500/10 text-green-700 rounded-md">
                  {item.discount}
                </span>
                <span className="text-[10px] text-stone-400 font-medium font-mono">Clube Du</span>
              </div>
            </div>
          ))}

          {/* Show full Automotivo benefit indicators if needed */}
          {(selectedCategory === 'all' || selectedCategory === 'auto') && searchQuery === '' && (
            <div className="bg-stone-900 text-white rounded-[2rem] p-6 lg:col-span-2 text-left shadow-lg flex flex-col justify-between border border-stone-800 relative overflow-hidden group">
              <div className="absolute right-[-10%] top-[-20%] w-32 h-32 bg-brand-blue-deep/10 rounded-full blur-2xl"></div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-blue-light font-bold">Assistência Automotiva</span>
                <h4 className="font-display font-extrabold text-2xl text-white mt-1.5 leading-snug">SEMPRE Assistência 24h</h4>
                <p className="text-xs text-stone-350 mt-2 leading-relaxed">
                  Tranquilidade nas ruas com guincho 24 horas, chaveiro, reboque por sinistro, socorro elétrico na bateria e auxílio mecânico emergencial para o veículo cadastrado.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-4 text-xs">
                <div>
                  <p className="text-[9px] uppercase font-mono text-stone-400">Tipo de Atendimento</p>
                  <p className="font-bold font-display text-brand-yellow">Presencial no Local</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase font-mono text-stone-400">Abrangência Nacional</p>
                  <p className="font-bold font-display text-brand-yellow font-bold text-emerald-400">27 Estados Protegidos</p>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
