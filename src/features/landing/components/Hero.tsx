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
      {/* Background Image of People & Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Background Image overlay */}
        <img 
          src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1920" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-[0.12] mix-blend-multiply"
        />
        {/* Glow Orbs */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-[10%] left-[-5%] w-[45vw] h-[45vw] bg-gradient-to-tr from-brand-blue-deep to-brand-blue-light rounded-full blur-3xl animate-pulse duration-10000"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-gradient-to-br from-brand-yellow to-orange-400 rounded-full blur-3xl opacity-70"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Core Bento layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Hero Card (Large Bento Box on Left) */}
          <div className="lg:col-span-7 bg-white/85 backdrop-blur-md border border-slate-200/60 rounded-[2.5rem] p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden text-left shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
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

            {/* Avatar Group of People (Real photos) */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex -space-x-3 overflow-hidden">
                {[
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120&h=120',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120',
                  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120'
                ].map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt={`Beneficiário ${i + 1}`}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shrink-0"
                  />
                ))}
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1">
                  <div className="flex text-amber-500">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-800">4.9/5</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">Recomendado por mais de 4 milhões de vidas atendidas</p>
              </div>
            </div>
          </div>

          {/* Right Bento Box Container (Large Image Card + Coordinator card) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Bento Box de Imagem Grande de Pessoas */}
            <div className="relative rounded-[2.5rem] overflow-hidden min-h-[350px] border border-slate-200/60 shadow-xl group hover:shadow-2xl transition-all duration-500 flex-grow flex flex-col justify-end p-6 sm:p-8 text-left">
              {/* Imagem de Fundo de Pessoas */}
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800"
                alt="Família feliz e protegida"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
              />
              {/* Overlay Gradiente Escuro para contraste */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none"></div>
              
              {/* Conteúdo sobre a Imagem */}
              <div className="relative z-10">
                <span className="inline-flex items-center bg-brand-yellow text-slate-950 text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3 shadow-sm">
                  Ativação Imediata
                </span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white leading-tight mb-2 drop-shadow-sm">
                  A ajuda de verdade que sua família precisa
                </h3>
                <p className="text-slate-200 text-[11px] leading-relaxed max-w-sm drop-shadow-sm">
                  Cuidado de ponta a ponta com telemedicina ilimitada 24h, assistência veicular Sempre e descontos de até 90% em medicamentos e serviços.
                </p>
              </div>
            </div>

            {/* Coordinator Status Card with Real Image */}
            <div className="bg-white border border-slate-200/60 rounded-3xl p-5 shadow-lg shadow-slate-100/40 hover:shadow-xl transition-all duration-300 flex items-center gap-4 relative overflow-hidden group border-l-4 border-l-brand-blue-deep">
              <div className="absolute right-0 top-0 w-16 h-16 bg-brand-blue-deep/5 rounded-bl-full"></div>
              {/* Image Area for Coordinator */}
              <div className="relative shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200"
                  alt="Coordenadora de Vendas"
                  className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shadow-sm"
                />
                {/* Active/Online indicator dot */}
                <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
                </span>
              </div>
              <div className="text-left">
                <span className="text-[9px] uppercase font-mono tracking-wider text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                  Online Agora
                </span>
                <h4 className="font-display font-extrabold text-sm text-slate-900 mt-1">Central de Vendas</h4>
                <p className="text-[11px] text-slate-500">Tire dúvidas em menos de 10 min</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
