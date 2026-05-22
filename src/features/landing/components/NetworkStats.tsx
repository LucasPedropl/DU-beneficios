/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Users, Building, ShieldCheck, HeartPulse, UserCheck, Star, Sparkles } from 'lucide-react';

export default function NetworkStats() {
  return (
    <section className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-center">
          <div className="bg-white border border-stone-200 rounded-3xl p-6 hover:shadow-md hover:border-brand-blue-deep/30 transition-all">
            <Users className="w-8 h-8 text-brand-blue-deep mx-auto mb-3 pointer-events-none" />
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-stone-900">4 Milhões</p>
            <p className="text-[10px] text-stone-400 uppercase tracking-widest font-mono mt-1">Vidas Atendidas</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-3xl p-6 hover:shadow-md hover:border-brand-blue-deep/30 transition-all">
            <Building className="w-8 h-8 text-brand-blue-deep mx-auto mb-3 pointer-events-none" />
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-stone-900">12.000+</p>
            <p className="text-[10px] text-stone-400 uppercase tracking-widest font-mono mt-1">Pontos Atendimento</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-3xl p-6 hover:shadow-md hover:border-brand-blue-deep/30 transition-all">
            <HeartPulse className="w-8 h-8 text-brand-blue-deep mx-auto mb-3 pointer-events-none" />
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-stone-900">799</p>
            <p className="text-[10px] text-stone-400 uppercase tracking-widest font-mono mt-1">Cidades Atendidas</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-3xl p-6 hover:shadow-md hover:border-brand-blue-deep/30 transition-all">
            <Star className="w-8 h-8 text-brand-yellow mx-auto mb-3 pointer-events-none" />
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-stone-900">81.5 NPS</p>
            <p className="text-[10px] text-stone-400 uppercase tracking-widest font-mono mt-1">Grau Excelência</p>
          </div>
        </div>

        {/* Detailed Grid: TopMed Telemed + Real Persona Problem Solving */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-6 border-t border-stone-200">
          
          {/* TopMed Telemedicine Highlight */}
          <div className="lg:col-span-7 bg-stone-900 border border-stone-800 p-6 sm:p-8 rounded-[2rem] text-left flex flex-col justify-between text-white relative overflow-hidden shadow-lg">
            <div className="absolute right-[-10%] top-[-10%] w-32 h-32 bg-blue-600/10 rounded-full blur-2xl"></div>
            <div>
              <div className="inline-flex items-center space-x-2 bg-brand-blue-deep/20 text-brand-blue-light border border-brand-blue-deep/30 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6">
                <HeartPulse className="w-4 h-4 text-brand-blue-light" />
                <span>Parceria TopMed Saúde Digital</span>
              </div>
              <h3 className="font-display text-2xl font-extrabold text-white tracking-tight leading-snug">
                Telemedicina 24 horas por dia, 7 dias por semana
              </h3>
              <p className="mt-3 text-stone-350 text-xs sm:text-sm leading-relaxed">
                Nossa telemedicina é operada pela TopMed, uma das maiores e mais completas plataformas de saúde digital do Brasil. Esqueça filas, aglomerações e horas de espera em UPAs. Tenha pronto atendimento imediato sempre que precisar.
              </p>

              {/* Stats highlights */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <p className="text-[9px] uppercase font-mono text-stone-400">Total Consultas</p>
                  <p className="text-xs font-bold text-brand-yellow font-display mt-0.5">+5 Milhões</p>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <p className="text-[9px] uppercase font-mono text-stone-400">Resolutividade</p>
                  <p className="text-xs font-bold text-emerald-400 font-display mt-0.5">95% Sucesso</p>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <p className="text-[9px] uppercase font-mono text-stone-400">NPS TopMed</p>
                  <p className="text-xs font-bold text-white font-display mt-0.5">93 Pontos</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-[10px] text-stone-500 font-mono">
              *Dados auditados referentes aos últimos 3 anos de operações. Telemedicina ilimitada sem coparticipação.
            </div>
          </div>

          {/* Social Proof Persona Profile (Dona Selma) */}
          <div className="lg:col-span-5 bg-white border border-stone-200 p-6 sm:p-8 rounded-[2rem] text-left flex flex-col justify-between relative overflow-hidden shadow-sm">
            <div className="absolute right-[-15%] bottom-[-10%] opacity-15 pointer-events-none">
              <Sparkles className="w-56 h-56 text-[#2563eb]" />
            </div>

            <div>
              <span className="text-brand-blue-deep text-xs font-mono font-bold uppercase tracking-widest block mb-1">
                Conhecendo nosso Perfil
              </span>
              <h3 className="font-display text-2xl font-extrabold text-stone-900 tracking-tight leading-snug">
                A Razão do Nosso Trabalho
              </h3>
              <p className="mt-3 text-stone-500 text-xs sm:text-sm leading-relaxed">
                Nossa missão nasceu de dados reais da população brasileira e do cuidado com cidadãos de diversas classes sociais:
              </p>

              <div className="space-y-3.5 mt-6">
                <div className="flex items-start space-x-2.5 text-xs text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-deep mt-1.5 shrink-0" />
                  <p><strong className="text-stone-900">77% da nossa base</strong> não possui ou não pode arcar com planos de saúde tradicionais.</p>
                </div>
                <div className="flex items-start space-x-2.5 text-xs text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-deep mt-1.5 shrink-0" />
                  <p><strong className="text-stone-900">Cerca de 40%</strong> de todas as despesas familiares com saúde vão estritamente para remédios.</p>
                </div>
                <div className="flex items-start space-x-2.5 text-xs text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-deep mt-1.5 shrink-0" />
                  <p><strong className="text-stone-900">Mais de 65% de brasileiros</strong> desejam uma rede integrada de vantagens e descontos.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-150 text-[11px] text-stone-500 font-semibold leading-relaxed">
              Oferecemos economia, dignidade e proteção financeira de verdade para quem mais precisa.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
