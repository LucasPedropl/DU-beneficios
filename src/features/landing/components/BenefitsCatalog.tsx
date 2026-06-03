/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, Compass, HeartPulse, Pill, ShoppingBag, ShieldCheck } from 'lucide-react';

interface PharmacyDiscount {
  name: string;
  genericDiscount: string;
  brandedDiscount: string;
  extraInfo: string;
  initials: string;
  gradient: string;
}

interface RetailDiscount {
  name: string;
  category: string;
  discount: string;
  info: string;
  initials: string;
  gradient: string;
}

const CATEGORIES = [
  { id: 'all', label: 'Todos', icon: Compass },
  { id: 'saude', label: 'Saúde & Teleconsulta', icon: HeartPulse },
  { id: 'medicamentos', label: 'Farmácias', icon: Pill },
  { id: 'varejo', label: 'Compras & Lazer', icon: ShoppingBag },
  { id: 'auto', label: 'Sempre Automotivo', icon: ShieldCheck },
];

const PHARMACIES_DATA: PharmacyDiscount[] = [
  { name: 'Droga Raia', genericDiscount: 'Até 45%', brandedDiscount: 'Até 15%', extraInfo: 'Válido em todo o país', initials: 'DR', gradient: 'from-emerald-500 to-teal-650' },
  { name: 'Drogasil', genericDiscount: 'Até 45%', brandedDiscount: 'Até 15%', extraInfo: 'Todas as unidades', initials: 'DS', gradient: 'from-rose-500 to-red-600' },
  { name: 'Pague Menos', genericDiscount: 'Até 35%', brandedDiscount: 'Até 20%', extraInfo: 'Desconto nacional', initials: 'PM', gradient: 'from-blue-600 to-indigo-700' },
  { name: 'Drogaria Pacheco', genericDiscount: 'Até 20%', brandedDiscount: 'Até 10%', extraInfo: 'Rio e São Paulo', initials: 'DP', gradient: 'from-sky-500 to-blue-600' },
  { name: 'Drogaria São Paulo', genericDiscount: 'Até 20%', brandedDiscount: 'Até 10%', extraInfo: 'Líder regional', initials: 'SP', gradient: 'from-red-500 to-rose-600' },
  { name: 'PanVel', genericDiscount: 'Até 20%', brandedDiscount: 'Até 10%', extraInfo: 'Sul do país', initials: 'PV', gradient: 'from-violet-550 to-indigo-650' },
  { name: 'Araújo', genericDiscount: 'Até 40%', brandedDiscount: '15% em produtos MIÓ', extraInfo: 'Desconto premium', initials: 'AR', gradient: 'from-amber-500 to-orange-600' },
  { name: 'Extrafarma', genericDiscount: 'Até 35%', brandedDiscount: 'Até 20%', extraInfo: 'Presença Norte/Nordeste', initials: 'EF', gradient: 'from-fuchsia-500 to-pink-600' },
];

const RETAIL_DATA: RetailDiscount[] = [
  { name: 'Riachuelo', category: 'varejo', discount: 'Até 20% OFF', info: 'Roupas e moda', initials: 'RCH', gradient: 'from-slate-700 to-slate-900' },
  { name: 'Renner', category: 'varejo', discount: 'Até 15% OFF', info: 'Moda e vestuário', initials: 'REN', gradient: 'from-red-600 to-red-800' },
  { name: 'Decathlon', category: 'varejo', discount: 'Até 10% OFF', info: 'Esportes e lazer', initials: 'DEC', gradient: 'from-cyan-500 to-blue-600' },
  { name: 'Domino\'s', category: 'varejo', discount: 'Até 35% OFF', info: 'Pizzas selecionadas', initials: 'DOM', gradient: 'from-blue-600 via-rose-500 to-red-600' },
  { name: 'Electrolux', category: 'varejo', discount: 'Até 25% OFF', info: 'Eletrodomésticos', initials: 'ELX', gradient: 'from-indigo-900 to-slate-900' },
  { name: 'Conquer', category: 'varejo', discount: 'Até 30% OFF', info: 'Cursos de negócios', initials: 'COQ', gradient: 'from-yellow-500 to-amber-600' },
  { name: 'Acer', category: 'varejo', discount: 'Até 15% OFF', info: 'Notebooks e tecnologia', initials: 'ACR', gradient: 'from-green-600 to-emerald-700' },
  { name: 'Giolaser', category: 'varejo', discount: 'Até 40% OFF', info: 'Estética e depilação', initials: 'GIO', gradient: 'from-pink-400 to-rose-500' },
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
    <section id="beneficios" className="py-24 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section with large image highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 text-left">
            <span className="text-xs uppercase font-mono tracking-widest text-brand-blue-deep font-black bg-brand-blue-deep/5 px-3 py-1.5 rounded-full block w-fit mb-3">
              Clube de Vantagens
            </span>
            <h2 className="font-display text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Medicamentos e Compras com Desconto de Verdade
            </h2>
            <p className="mt-4 text-slate-500 text-sm leading-relaxed max-w-2xl">
              Tenha acesso a mais de 290 farmácias conveniadas e 24 mil lojas físicas e virtuais credenciadas em todo o país. Economia real para as necessidades diárias de sua família.
            </p>
            
            {/* Highlight inline metrics saving */}
            <div className="mt-6 flex items-center space-x-4 bg-white/70 backdrop-blur-sm border border-slate-200/60 p-4.5 rounded-2xl w-fit shadow-sm">
              <span className="text-3xl font-display font-black text-brand-blue-deep shrink-0">+ R$ 35M</span>
              <p className="text-[11px] text-slate-500 leading-normal max-w-xs">
                Em economia gerada para nossos 4 milhões de clientes em todo o país com o clube de descontos.
              </p>
            </div>
          </div>

          {/* Large Image Highlight */}
          <div className="lg:col-span-5 relative rounded-[2rem] overflow-hidden min-h-[250px] shadow-lg border border-slate-200/60 group">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800"
              alt="Compras e Lazer" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
          </div>
        </div>

        {/* Dynamic Filters & Search Input */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 mb-10 bg-white/70 backdrop-blur-md p-4 rounded-3xl border border-slate-200/60 shadow-md shadow-slate-100/30">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center space-x-2 px-4.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer ${
                    isActive
                      ? 'bg-brand-blue-deep text-white shadow-lg shadow-brand-blue-deep/20'
                      : 'hover:bg-slate-100 text-slate-600 bg-slate-50/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Pesquisar parceiro ou drogaria..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full lg:w-80 pl-10 pr-4 py-2.5 bg-slate-50 text-xs border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue-deep focus:border-transparent transition-all shadow-inner text-slate-900"
            />
          </div>
        </div>

        {/* Dynamic Partner Lists Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Render Pharmacy items */}
          {filteredPharmacies.map((item, index) => (
            <div key={`pharmacy-${index}`} className="bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-250/30 rounded-[2rem] p-6 border border-slate-200/60 flex flex-col justify-between transition-all duration-300 text-left group shadow-md shadow-slate-100/40">
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-[9px] uppercase font-bold font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">Medicamentos</span>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-display font-black text-xs shadow-md border border-white/10 shrink-0`}>
                    {item.initials}
                  </div>
                </div>
                <h4 className="font-display font-black text-lg text-slate-900 group-hover:text-brand-blue-deep transition-colors mt-3">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-500 mt-1">{item.extraInfo}</p>
              </div>

              <div className="mt-6 pt-4.5 border-t border-slate-100 flex justify-between items-center bg-slate-50/60 p-3.5 rounded-2xl border border-slate-150">
                <div>
                  <p className="text-[8px] uppercase tracking-widest font-bold text-slate-400">Genérico</p>
                  <p className="text-base font-extrabold text-brand-blue-deep font-display mt-0.5">{item.genericDiscount}</p>
                </div>
                <div className="text-right">
                  <p className="text-[8px] uppercase tracking-widest font-bold text-slate-400">De Marca</p>
                  <p className="text-sm font-bold text-slate-700 font-display mt-0.5">{item.brandedDiscount}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Render Retail items */}
          {filteredRetail.map((item, index) => (
            <div key={`retail-${index}`} className="bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-250/30 rounded-[2rem] p-6 border border-slate-200/60 flex flex-col justify-between transition-all duration-300 text-left group shadow-md shadow-slate-100/40">
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-[9px] uppercase font-bold font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">Varejo e Lazer</span>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-display font-black text-[10px] tracking-tight shadow-md border border-white/10 shrink-0`}>
                    {item.initials}
                  </div>
                </div>
                <h4 className="font-display font-black text-lg text-slate-900 group-hover:text-brand-blue-deep transition-colors mt-3">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-500 mt-1">{item.info}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-lg">
                  {item.discount}
                </span>
                <span className="text-[9px] text-slate-400 font-mono">Convênio DU</span>
              </div>
            </div>
          ))}

          {/* Show Sempre Automotivo special card if category allows */}
          {(selectedCategory === 'all' || selectedCategory === 'auto') && searchQuery === '' && (
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-[2rem] p-6.5 lg:col-span-2 text-left shadow-xl shadow-slate-950/20 flex flex-col justify-between border border-slate-800 relative overflow-hidden group hover:border-slate-700 transition-all duration-300">
              <div className="absolute right-[-10%] top-[-20%] w-36 h-36 bg-brand-blue-deep/20 rounded-full blur-3xl"></div>
              <div>
                <span className="text-[9px] uppercase font-mono tracking-widest text-brand-blue-light font-bold">Assistência Automotiva</span>
                <h4 className="font-display font-extrabold text-2.5xl text-white mt-2 leading-snug">SEMPRE Assistência 24h</h4>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  Assistência completa nas ruas e estradas com guincho 24 horas, reboque por sinistro, carga na bateria, chaveiro e socorro mecânico no local. Cobertura completa e rápida.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/5 pt-4.5 text-xs">
                <div>
                  <p className="text-[9px] uppercase font-mono text-slate-400">Atendimento</p>
                  <p className="font-bold font-display text-brand-yellow mt-0.5">Presencial 24 Horas</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase font-mono text-slate-400">Abrangência</p>
                  <div className="flex items-center space-x-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <p className="font-bold font-display text-emerald-400">Nacional (27 Estados)</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
