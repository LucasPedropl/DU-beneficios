/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, Sparkles, HeartHandshake, PhoneCall, HelpCircle } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-900">
          
          {/* Brand block */}
          <div className="md:col-span-4 space-y-4 text-left">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={scrollToTop}>
              <div className="p-1.5 bg-white text-slate-950 rounded-xl flex items-center justify-center">
                <HeartHandshake className="w-5 h-5 text-brand-blue-deep" />
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-display text-lg font-extrabold text-white">du</span>
                  <span className="font-sans text-[10px] uppercase tracking-wider bg-white/10 px-1.5 py-0.5 rounded font-bold text-white">
                    Benefícios
                  </span>
                </div>
                <p className="text-[9px] uppercase tracking-wider font-semibold text-slate-500">Grupo Zelo</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-normal max-w-sm">
              Plataforma nacional pioneira de assistência integrada de vantagens, convênios de saúde e assistência automotiva Sempre 24h.
            </p>
          </div>

          {/* Quick links block */}
          <div className="md:col-span-4 space-y-3 text-left">
            <h4 className="text-xs uppercase font-mono font-bold text-white tracking-widest">Contatos Globais</h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-start">
                <PhoneCall className="w-3.5 h-3.5 mr-2 text-brand-yellow shrink-0 mt-0.5 pointer-events-none" />
                <span>Central Conta Comigo: <strong className="text-slate-200">0800 24h</strong></span>
              </p>
              <p className="flex items-start">
                <Shield className="w-3.5 h-3.5 mr-2 text-brand-blue-light shrink-0 mt-0.5 pointer-events-none" />
                <span>Automotivo Sempre: <strong className="text-slate-200">27 estados assistidos</strong></span>
              </p>
            </div>
          </div>

          {/* Extra partners block */}
          <div className="md:col-span-4 space-y-3 text-left">
            <h4 className="text-xs uppercase font-mono font-bold text-slate-350 tracking-widest">Nossos Co-parceiros</h4>
            <p className="text-xs leading-relaxed max-w-xs text-slate-400">
              Operado em parceria estratégica com o <strong>Grupo Zelo</strong> (Líder em Death Care e assistência funeral) e <strong>TopMed Saúde Digital</strong>.
            </p>
          </div>

        </div>

        {/* Regulatory footer and copyrights row */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[10px] text-slate-500 gap-4">
          <div className="text-center sm:text-left space-y-1">
            <p>© 2026 Du Benefícios & Sempre Assistência Automotiva S.A.</p>
            <p className="max-w-2xl leading-relaxed">
              A Du Benefícios não é um plano de saúde propriamente dito, mas sim uma rede de cartões de benefícios de adesão voluntária e desconto em medicamentos, consultas, exames, lazer, e seguros funerais gerenciados pelo Grupo Zelo e TopMed.
            </p>
          </div>

          <div className="flex items-center space-x-1 font-semibold text-slate-400 shrink-0">
            <HelpCircle className="w-4 h-4 text-slate-500 pointer-events-none" />
            <span>Suporte Emergencial 24h</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
