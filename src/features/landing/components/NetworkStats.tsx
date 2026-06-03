/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Users, Building, ShieldCheck, HeartPulse, UserCheck, Star, Sparkles } from 'lucide-react';

export default function NetworkStats() {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-blue-deep to-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      {/* Background Image of People */}
      <img
        src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1600"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.35] mix-blend-overlay pointer-events-none select-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-center relative z-10">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:shadow-xl hover:border-white/20 transition-all hover:bg-white/10">
            <Users className="w-8 h-8 text-brand-yellow mx-auto mb-3 pointer-events-none" />
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-white">4 Milhões</p>
            <p className="text-[10px] text-slate-350 uppercase tracking-widest font-mono mt-1">Vidas Atendidas</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:shadow-xl hover:border-white/20 transition-all hover:bg-white/10">
            <Building className="w-8 h-8 text-brand-yellow mx-auto mb-3 pointer-events-none" />
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-white">12.000+</p>
            <p className="text-[10px] text-slate-350 uppercase tracking-widest font-mono mt-1">Pontos Atendimento</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:shadow-xl hover:border-white/20 transition-all hover:bg-white/10">
            <HeartPulse className="w-8 h-8 text-brand-yellow mx-auto mb-3 pointer-events-none" />
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-white">799</p>
            <p className="text-[10px] text-slate-350 uppercase tracking-widest font-mono mt-1">Cidades Atendidas</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:shadow-xl hover:border-white/20 transition-all hover:bg-white/10">
            <Star className="w-8 h-8 text-brand-yellow mx-auto mb-3 pointer-events-none" />
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-white">81.5 NPS</p>
            <p className="text-[10px] text-slate-350 uppercase tracking-widest font-mono mt-1">Grau Excelência</p>
          </div>
        </div>        {/* Detailed Grid: TopMed Telemed + Real Persona Problem Solving (Horizontal layout with large photos) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-8 border-t border-white/10 relative z-10">
          
          {/* TopMed Telemedicine Highlight */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-[2.2rem] text-left flex flex-col justify-between text-white relative overflow-hidden shadow-xl hover:border-white/20 transition-all duration-350">
            <div className="absolute right-[-10%] top-[-10%] w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch h-full">
              {/* Left Column: Large Rectangular Photo */}
              <div className="md:col-span-5 shadow-lg flex">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500"
                  alt="Consulta Médica Online da TopMed"
                  className="w-full h-full min-h-[220px] object-cover rounded-2xl pointer-events-none select-none"
                />
              </div>

              {/* Right Column: Content */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-brand-blue-deep/20 text-brand-blue-light border border-brand-blue-deep/30 px-3.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider mb-3">
                    <HeartPulse className="w-3.5 h-3.5 text-brand-blue-light" />
                    <span>Parceria TopMed Saúde Digital</span>
                  </div>
                  <h3 className="font-display text-xl font-extrabold text-white tracking-tight leading-snug">
                    Telemedicina 24h por dia, 7 dias por semana
                  </h3>
                  <p className="mt-3 text-slate-300 text-xs leading-relaxed">
                    Nossa telemedicina é operada pela TopMed, uma das maiores plataformas de saúde digital do Brasil. Tenha pronto atendimento imediato sempre que precisar, sem filas ou burocracia.
                  </p>
                </div>

                {/* Stats highlights */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 text-center">
                    <p className="text-[8px] uppercase font-mono text-slate-400">Total Consultas</p>
                    <p className="text-xs font-bold text-brand-yellow font-display mt-0.5">+5M</p>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 text-center">
                    <p className="text-[8px] uppercase font-mono text-slate-400">Resolutividade</p>
                    <p className="text-xs font-bold text-emerald-400 font-display mt-0.5">95%</p>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 text-center">
                    <p className="text-[8px] uppercase font-mono text-slate-405">NPS</p>
                    <p className="text-xs font-bold text-white font-display mt-0.5">93 pts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-[9px] text-slate-500 font-mono">
              *Dados auditados referentes aos últimos 3 anos de operações. Telemedicina ilimitada sem coparticipação.
            </div>
          </div>

          {/* Social Proof Persona Profile (Dona Selma) */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-[2.2rem] text-left flex flex-col justify-between text-white relative overflow-hidden shadow-xl hover:border-white/20 transition-all duration-350">
            <div className="absolute right-[-15%] bottom-[-10%] opacity-5 pointer-events-none">
              <Sparkles className="w-56 h-56 text-[#2563eb]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch h-full">
              {/* Left Column: Large Rectangular Photo */}
              <div className="md:col-span-5 shadow-lg flex">
                <img
                  src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&q=80&w=500"
                  alt="Família feliz beneficiária"
                  className="w-full h-full min-h-[220px] object-cover rounded-2xl pointer-events-none select-none"
                />
              </div>

              {/* Right Column: Content */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="text-brand-yellow text-[9px] font-mono font-bold uppercase tracking-widest block leading-none mb-1">
                    Conhecendo nosso Perfil
                  </span>
                  <h3 className="font-display text-xl font-extrabold text-white tracking-tight leading-tight mt-1.5">
                    A Razão do Nosso Trabalho
                  </h3>
                  <p className="text-slate-350 text-xs leading-relaxed mt-2">
                    Nossa missão nasceu do cuidado real com as despesas das famílias brasileiras de diversas classes sociais:
                  </p>
                </div>

                <div className="space-y-2 mt-4">
                  <div className="flex items-start space-x-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-1.5 shrink-0" />
                    <p><strong className="text-white">77%</strong> sem plano de saúde tradicional.</p>
                  </div>
                  <div className="flex items-start space-x-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-1.5 shrink-0" />
                    <p><strong className="text-white">40%</strong> da verba vai para remédios.</p>
                  </div>
                  <div className="flex items-start space-x-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-1.5 shrink-0" />
                    <p><strong className="text-white">65%</strong> quer rede de vantagens.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-[10px] text-slate-500 font-semibold leading-relaxed">
              Oferecemos economia, dignidade e proteção financeira de verdade para quem mais precisa.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
