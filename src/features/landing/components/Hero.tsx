/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, ShieldCheck, HeartPulse, Percent, Car, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center bg-slate-50 text-slate-950 pt-28 pb-16 overflow-hidden">
      {/* Glow Orbs background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[45vw] h-[45vw] bg-gradient-to-tr from-brand-blue-deep to-brand-blue-light rounded-full blur-3xl animate-pulse duration-10000"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-gradient-to-br from-brand-yellow to-orange-400 rounded-full blur-3xl opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Core Bento layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Hero Card (Large Bento Box on Left) */}
          <div className="lg:col-span-8 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-[2.5rem] p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden text-left shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-50 to-indigo-50/30 rounded-full -mr-20 -mt-20 blur-3xl opacity-80"></div>
            
            {/* Tagline partnership */}
            <div className="inline-flex items-center space-x-2 bg-brand-blue-deep/5 border border-brand-blue-deep/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-brand-blue-deep w-fit mb-6 transition-all duration-300 hover:bg-brand-blue-deep/10">
              <ShieldCheck className="w-4 h-4 text-brand-blue-deep animate-pulse" />
              <span>Du Benefícios + Sempre Assistência 24h</span>
            </div>

            {/* Bold main headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] mb-6 tracking-tight text-slate-900">
              Mais cuidado, menos custos e <span className="bg-gradient-to-r from-brand-blue-deep to-indigo-600 bg-clip-text text-transparent">ajuda de verdade</span> para você
            </h1>

            {/* Engaging subtitle */}
            <p className="text-base sm:text-lg text-slate-500 max-w-2xl leading-relaxed mb-8">
              A DU nasceu para levar saúde de qualidade, descontos em farmácias e proteção veicular 24h para quem mais precisa. Economize de verdade no dia a dia com um atendimento humanizado de verdade.
            </p>

            {/* Responsive key metrics/badges inside Left Bento */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-2xl mb-8">
              <div className="flex items-center space-x-3 bg-slate-50/60 border border-slate-150 rounded-2xl p-4 shadow-sm hover:bg-white hover:border-brand-blue-light/30 hover:shadow-md transition-all duration-300 group">
                <div className="p-2 bg-brand-blue-deep/5 text-brand-blue-deep rounded-xl group-hover:scale-110 transition-transform">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Telemedicina</p>
                  <p className="text-xs font-black font-display text-slate-800">24h Ilimitada</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-slate-50/60 border border-slate-150 rounded-2xl p-4 shadow-sm hover:bg-white hover:border-brand-yellow/30 hover:shadow-md transition-all duration-300 group">
                <div className="p-2 bg-brand-yellow/10 text-brand-yellow rounded-xl group-hover:scale-110 transition-transform">
                  <Percent className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Vantagens</p>
                  <p className="text-xs font-black font-display text-slate-800">Até 90% OFF</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-slate-50/60 border border-slate-150 rounded-2xl p-4 shadow-sm hover:bg-white hover:border-emerald-500/30 hover:shadow-md transition-all duration-300 col-span-2 sm:col-span-1 group">
                <div className="p-2 bg-emerald-55/10 text-emerald-600 rounded-xl group-hover:scale-110 transition-transform">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Sempre Auto</p>
                  <p className="text-xs font-black font-display text-slate-800">Guincho 24h</p>
                </div>
              </div>
            </div>

            {/* Direct CTA actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
              <button
                onClick={() => scrollToSection('simulador')}
                className="px-8 py-4 bg-brand-blue-deep hover:bg-blue-700 text-white font-display font-bold uppercase rounded-2xl shadow-lg shadow-brand-blue-deep/20 hover:shadow-xl active:scale-[0.98] transition-all text-xs tracking-wider flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Simule sua Economia</span>
                <ArrowRight className="w-4 h-4 text-brand-yellow font-bold" />
              </button>
              <button
                onClick={() => scrollToSection('jornada')}
                className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-display font-semibold rounded-2xl border border-slate-250 active:scale-[0.98] transition-all text-xs tracking-wider flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Como Cuidamos de Você</span>
              </button>
            </div>
          </div>

          {/* Right Bento Box (Simulated Mobile App Dashboard) */}
          <div className="lg:col-span-4 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between border border-slate-800 relative overflow-hidden text-left shadow-2xl transition-all duration-500 hover:shadow-brand-blue-deep/10 hover:border-slate-700/60">
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-brand-blue-deep/20 rounded-full blur-2xl animate-pulse"></div>
            
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-white/5 mb-6">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-[9px] bg-slate-800 border border-white/5 text-slate-350 font-mono px-2.5 py-0.5 rounded-full tracking-wider">
                  APP DU BENEFÍCIOS
                </span>
              </div>

              {/* Simulated Virtual Card */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/90 rounded-2xl p-5 shadow-xl border border-white/10 relative overflow-hidden mb-6">
                <div className="absolute right-[-10%] top-[-20%] w-24 h-24 bg-brand-yellow/10 rounded-full blur-xl"></div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-[9px] text-slate-400 uppercase tracking-widest font-mono">Carteira Virtual</p>
                    <h4 className="font-semibold text-white tracking-wide text-sm font-display mt-0.5">Dona Selma Mota</h4>
                  </div>
                  <div className="px-2 py-0.5 bg-brand-yellow text-slate-950 rounded text-[9px] font-black uppercase tracking-wider shadow-sm">VIP PRÓ</div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[8px] text-slate-400 font-mono">ID do Beneficiário</p>
                    <p className="font-mono text-xs text-slate-200">928.349.12-8</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[8px] text-slate-400">Ativação</p>
                    <p className="text-[10px] font-display text-brand-yellow font-black uppercase tracking-wider">Imediata</p>
                  </div>
                </div>
              </div>

              {/* App interface buttons showcase */}
              <div className="space-y-3.5">
                <div className="bg-slate-850/60 backdrop-blur-sm p-3.5 rounded-xl flex items-center justify-between border border-white/5 hover:border-white/10 hover:bg-slate-850/80 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="p-1.5 bg-brand-yellow/20 text-brand-yellow rounded-lg">
                      <HeartPulse className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-slate-200">Consulta Médica</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">Confirmado</span>
                </div>

                <div className="bg-slate-850/60 backdrop-blur-sm p-3.5 rounded-xl flex items-center justify-between border border-white/5 hover:border-white/10 hover:bg-slate-850/80 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="p-1.5 bg-brand-blue-light/20 text-brand-blue-light rounded-lg">
                      <Car className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-slate-200">Guincho Sempre</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono font-bold bg-white/5 px-2 py-0.5 rounded-md">Ativo</span>
                </div>

                {/* Savings display card inside mobile mockup */}
                <div className="bg-blue-950/20 border border-brand-blue-light/10 rounded-xl p-4 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-deep/5 to-transparent"></div>
                  <span className="text-[9px] text-brand-blue-light uppercase tracking-widest font-bold block mb-1">Economia Recorrente Estimada</span>
                  <p className="font-display font-extrabold text-xl text-brand-yellow">R$ 1.840,00/ano</p>
                  <span className="text-[8px] text-slate-400 block mt-1">Média estimada com clube de vantagens</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[9px] text-slate-400 font-bold tracking-widest uppercase font-mono">Plataforma Segura</span>
              <div className="flex items-center space-x-1.5 bg-white/5 border border-white/5 px-2.5 py-0.5 rounded-lg text-xs text-brand-yellow font-extrabold">
                <Sparkles className="w-3 h-3 text-brand-yellow fill-current" />
                <span>5.0</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
