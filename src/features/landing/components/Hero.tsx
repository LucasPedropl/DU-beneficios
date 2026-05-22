/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, ShieldCheck, HeartPulse, Shield, Car, Percent } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center bg-stone-50 text-stone-900 pt-28 pb-16 overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-brand-blue-light rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-brand-yellow rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Core Bento layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Hero Card (Large Bento Box on Left) */}
          <div className="lg:col-span-8 bg-white border border-stone-200 rounded-[2rem] p-8 sm:p-10 flex flex-col justify-center relative overflow-hidden text-left shadow-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-20 -mt-20 blur-3xl opacity-60"></div>
            
            {/* Tagline partnership */}
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-blue-deep w-fit mb-4">
              <ShieldCheck className="w-4 h-4 text-brand-blue-deep" />
              <span>Du Benefícios + Sempre Assistência 24h</span>
            </div>

            {/* Bold main headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight text-stone-900">
              A maior rede de vantagens do Brasil na <span className="text-brand-blue-deep">palma da sua mão</span>
            </h1>

            {/* Engaging subtitle */}
            <p className="text-base sm:text-lg text-stone-500 max-w-xl leading-relaxed mb-6">
              Economize de verdade no dia a dia com soluções em saúde, bem-estar, telemedicina ilimitada 24x7, medicamentos e assistência automotiva completa para seu veículo. Tudo por uma mensalidade que cabe no bolso.
            </p>

            {/* Responsive key metrics/badges inside Left Bento */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-xl mb-6">
              <div className="flex items-center space-x-2.5 bg-stone-50 border border-stone-200 rounded-2xl p-3 shadow-none">
                <HeartPulse className="w-5 h-5 text-brand-blue-deep" />
                <div>
                  <p className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider">Telemedicina</p>
                  <p className="text-xs font-bold font-display text-stone-900">24h Ilimitada</p>
                </div>
              </div>
              <div className="flex items-center space-x-2.5 bg-stone-50 border border-stone-200 rounded-2xl p-3 shadow-none">
                <Percent className="w-5 h-5 text-brand-yellow" />
                <div>
                  <p className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider">Vantagens</p>
                  <p className="text-xs font-bold font-display text-stone-900">Até 90% OFF</p>
                </div>
              </div>
              <div className="flex items-center space-x-2.5 bg-stone-50 border border-stone-200 rounded-2xl p-3 col-span-2 sm:col-span-1 shadow-none">
                <Car className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider">Auto Assist</p>
                  <p className="text-xs font-bold font-display text-stone-900">Guincho 24h</p>
                </div>
              </div>
            </div>

            {/* Direct CTA actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
              <button
                onClick={() => scrollToSection('simulador')}
                className="px-8 py-3.5 bg-brand-blue-deep text-white font-display font-bold uppercase rounded-2xl shadow-md hover:bg-brand-blue-deep/90 active:scale-95 transition-all text-xs tracking-wider flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Simule sua Economia</span>
                <ArrowRight className="w-4 h-4 text-brand-yellow font-bold" />
              </button>
              <button
                onClick={() => scrollToSection('beneficios')}
                className="px-8 py-3.5 bg-stone-100 hover:bg-stone-200 text-stone-850 font-display font-semibold rounded-2xl border border-stone-300/85 active:scale-95 transition-all text-xs tracking-wider flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Conhecer Benefícios</span>
              </button>
            </div>
          </div>

          {/* Right Bento Box (Simulated Mobile App Dashboard) */}
          <div className="lg:col-span-4 bg-stone-900 text-stone-100 rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between border border-stone-800 relative overflow-hidden text-left shadow-lg">
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600/20 rounded-full blur-xl animate-pulse"></div>
            
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <span className="text-[10px] bg-stone-800 text-stone-400 font-mono px-2 py-0.5 rounded-full">
                  APP DU BENEFÍCIOS
                </span>
              </div>

              {/* Simulated Virtual Card */}
              <div className="bg-gradient-to-r from-stone-800 to-stone-900 rounded-2xl p-4 shadow-md border border-white/10 relative overflow-hidden mb-5">
                <div className="absolute right-[-10%] top-[-20%] w-24 h-24 bg-brand-yellow/10 rounded-full blur-xl"></div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-[10px] text-stone-400 uppercase tracking-wider font-mono">Carteira Virtual</p>
                    <h4 className="font-semibold text-white tracking-wide text-sm font-display mt-0.5">Dona Selma Mota</h4>
                  </div>
                  <div className="px-2 py-0.5 bg-brand-yellow text-stone-900 rounded text-[9px] font-bold">VIP PRÓ</div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[9px] text-stone-400">ID do Beneficiário</p>
                    <p className="font-mono text-xs text-stone-200">928.349.12-8</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[8px] text-stone-400">Ativação</p>
                    <p className="text-[10px] font-display text-brand-yellow font-bold uppercase font-extrabold">Imediata</p>
                  </div>
                </div>
              </div>

              {/* App interface buttons showcase */}
              <div className="space-y-3">
                <div className="bg-stone-800/80 p-3 rounded-xl flex items-center justify-between border border-white/5">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-1.5 bg-brand-yellow/20 text-brand-yellow rounded-lg">
                      <HeartPulse className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-stone-200">Consulta Médica</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">Confirmado 24h</span>
                </div>

                <div className="bg-stone-800/80 p-3 rounded-xl flex items-center justify-between border border-white/5">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-1.5 bg-brand-blue-light/20 text-brand-blue-light rounded-lg">
                      <Car className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-stone-200">Guincho Sempre</span>
                  </div>
                  <span className="text-[10px] text-stone-400 font-mono">Ativo</span>
                </div>

                {/* Savings display card inside mobile mockup */}
                <div className="bg-blue-950/40 border border-blue-500/20 rounded-xl p-3 text-center">
                  <span className="text-[10px] text-brand-blue-light uppercase tracking-wider font-semibold block mb-0.5">Economia Total Recorrente</span>
                  <p className="font-display font-extrabold text-lg text-brand-yellow">R$ 1.840,00/ano</p>
                  <span className="text-[8px] text-stone-400 block mt-0.5">Média estimada com clube de vantagens</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] text-stone-400 font-semibold tracking-wider uppercase font-mono">Plataforma Segura</span>
              <span className="text-xs text-brand-yellow font-extrabold">★ ★ ★ ★ ★</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
