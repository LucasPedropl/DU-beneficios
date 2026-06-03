/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, ShieldCheck, HeartPulse, Sparkles, HelpCircle } from 'lucide-react';

const PLANS = [
  {
    name: 'Plano Individual Du',
    price: '19,90',
    description: 'Acesso completo ao clube de benefícios e teleconsulta para uma única pessoa.',
    features: [
      'Clube de Descontos (+24.000 marcas)',
      'Desconto em Farmácias de até 45%',
      'Telemedicina TopMed 24x7 Ilimitada',
      'Central de Agendamentos "Conta Comigo"',
      'Carterinha Virtual Oficial no App',
    ],
    popular: false,
    cta: 'Assinar Individual',
  },
  {
    name: 'Plano Sempre Família',
    price: '49,90',
    description: 'A maior proteção familiar do Brasil. Inclui até 5 dependentes e assistência auto.',
    features: [
      'Garante até 5 dependentes inclusos',
      'Clube de Descontos (+24.000 marcas)',
      'Desconto em Farmácias de até 45%',
      'Telemedicina TopMed 24x7 Ilimitada',
      'Sempre Assistência Automotiva 24h',
      'Assistência Funeral do Grupo Zelo',
      'Central de Agendamentos "Conta Comigo"',
    ],
    popular: true,
    cta: 'Garantir Plano Família',
  },
  {
    name: 'Plano DU Corporativo',
    price: 'Sob Consulta',
    description: 'Desenvolvido para empresas engajarem seus times com campanhas e benefícios.',
    features: [
      'Régua de comunicação customizada',
      'Campanhas de engajamento (WhatsApp/SMS)',
      'Atalhos por necessidades no APP corporativo',
      'Banners e campanhas mensais personalizáveis',
      'Suporte prioritário e relatórios em tempo real',
    ],
    popular: false,
    cta: 'Falar com Consultor B2B',
  },
];

export default function ValuePlans() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="planos" className="py-24 bg-slate-50 border-t border-slate-200/60 relative overflow-hidden">
      {/* Background Image of People */}
      <img
        src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1600"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.28] mix-blend-multiply pointer-events-none select-none"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-[#2563eb] font-bold block mb-2">
            Valores e Planos
          </span>
          <h2 className="font-display text-4xl font-extrabold text-slate-900 tracking-tight">
            Valores Transparentes que Cabem no Bolso
          </h2>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed">
            Nenhuma taxa surpresa ou carência abusiva. Escolha o plano ideal para você, sua família ou sua empresa e comece a economizar de imediato.
          </p>
        </div>

        {/* Pricing Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PLANS.map((plan, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col justify-between rounded-[2.5rem] p-6 sm:p-8 text-left transition-all duration-500 relative ${
                  plan.popular
                    ? 'bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-2xl scale-[1.04] border-t-8 border-brand-yellow md:-translate-y-2 border-slate-950'
                    : 'bg-white/90 backdrop-blur-sm text-slate-800 shadow-xl shadow-slate-100/40 border border-slate-200/50 hover:scale-[1.01]'
                }`}
              >
                {/* Popular Highlight Badge */}
                {plan.popular && (
                  <div className="absolute top-4 right-6 bg-brand-yellow text-slate-950 font-sans text-[10px] font-black uppercase tracking-wide px-3 py-1 rounded-full flex items-center space-x-1 shadow-md shadow-brand-yellow/10">
                    <Sparkles className="w-3.5 h-3.5 fill-current pointer-events-none" />
                    <span>Mais Recomendado</span>
                  </div>
                )}

                <div>
                  <h3 className={`font-display font-black text-xl ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs mt-1 leading-normal ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                    {plan.description}
                  </p>

                  {/* Price display custom layout */}
                  <div className="my-6 flex items-baseline">
                    <span className={`text-sm font-bold ${plan.popular ? 'text-brand-yellow' : 'text-brand-blue-deep'}`}>R$&nbsp;</span>
                    <span className={`font-display text-4xl sm:text-5xl font-black tracking-tight ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                      {plan.price}
                    </span>
                    {plan.price !== 'Sob Consulta' && (
                      <span className={`text-xs font-semibold ml-1.5 ${plan.popular ? 'text-slate-500' : 'text-slate-400'}`}>
                        / mês
                      </span>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <p className={`text-[10px] uppercase font-mono tracking-wider font-bold mb-3.5 ${plan.popular ? 'text-slate-450' : 'text-slate-400'}`}>
                    O que está incluso:
                  </p>
                  <ul className="space-y-3.5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs leading-relaxed">
                        <Check className={`w-4.5 h-4.5 shrink-0 mr-2.5 mt-0.5 ${
                          plan.popular ? 'text-brand-yellow' : 'text-brand-blue-deep'
                        }`} />
                        <span className={plan.popular ? 'text-slate-300' : 'text-slate-650'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing CTA */}
                <button
                  type="button"
                  onClick={scrollToContact}
                  className={`w-full py-4 rounded-2xl font-display text-xs font-bold uppercase transition-all duration-300 tracking-wider active:scale-[0.97] text-center mt-8 cursor-pointer shadow-md ${
                    plan.popular
                      ? 'bg-brand-yellow text-slate-950 hover:bg-amber-500 shadow-brand-yellow/10'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200/50 shadow-slate-100/10'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* FAQs info bar */}
        <div className="mt-14 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center space-x-3 text-xs text-stone-500 bg-white/75 p-4 rounded-2xl border border-stone-200 shadow-sm leading-relaxed">
          <HelpCircle className="w-5 h-5 text-stone-405 shrink-0 mb-2 sm:mb-0" />
          <p className="text-center sm:text-left">
            Dúvidas sobre carência laboral ou contratos corporativos? Fale diretamente no nosso suporte de cotação imediata.
          </p>
        </div>

      </div>
    </section>
  );
}
