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
    <section id="planos" className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-[#2563eb] font-bold block mb-2">
            Valores e Planos
          </span>
          <h2 className="font-display text-4xl font-extrabold text-stone-900 tracking-tight">
            Valores Transparentes que Cabem no Bolso
          </h2>
          <p className="mt-4 text-stone-500 text-sm leading-relaxed">
            Nenhuma taxa surpresa ou carência abusiva. Escolha o plano ideal para você, sua família ou sua empresa e comece a economizar de imediato.
          </p>
        </div>

        {/* Pricing Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
          {PLANS.map((plan, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col justify-between rounded-3xl p-6 sm:p-8 text-left transition-all duration-300 relative ${
                  plan.popular
                    ? 'bg-stone-900 text-white shadow-xl scale-[1.03] border-t-8 border-brand-yellow md:-translate-y-2 border-stone-850'
                    : 'bg-white text-stone-850 shadow-sm border border-stone-200 hover:scale-[1.01]'
                }`}
              >
                {/* Popular Highlight Badge */}
                {plan.popular && (
                  <div className="absolute top-4 right-6 bg-brand-yellow text-slate-900 font-sans text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full flex items-center space-x-1 shadow">
                    <Sparkles className="w-3 h-3 pointer-events-none" />
                    <span>Mais Recomendado</span>
                  </div>
                )}

                <div>
                  <h3 className={`font-display font-extrabold text-lg ${plan.popular ? 'text-white' : 'text-stone-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs mt-1 leading-normal ${plan.popular ? 'text-stone-400' : 'text-stone-500'}`}>
                    {plan.description}
                  </p>

                  {/* Price display custom layout */}
                  <div className="my-6 flex items-baseline">
                    <span className={`text-sm ${plan.popular ? 'text-brand-yellow' : 'text-brand-blue-deep'}`}>R$&nbsp;</span>
                    <span className={`font-display text-4xl sm:text-5xl font-extrabold tracking-tight ${plan.popular ? 'text-white' : 'text-stone-900'}`}>
                      {plan.price}
                    </span>
                    {plan.price !== 'Sob Consulta' && (
                      <span className={`text-xs font-medium ml-1.5 ${plan.popular ? 'text-stone-500' : 'text-stone-400'}`}>
                        / mês
                      </span>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <p className={`text-[10px] uppercase font-mono tracking-wider font-bold mb-3 ${plan.popular ? 'text-stone-405' : 'text-stone-500'}`}>
                    O que está incluso:
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs leading-relaxed">
                        <Check className={`w-4 h-4 shrink-0 mr-2.5 mt-0.5 ${
                          plan.popular ? 'text-brand-yellow' : 'text-brand-blue-deep'
                        }`} />
                        <span className={plan.popular ? 'text-stone-300' : 'text-stone-700'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing CTA */}
                <button
                  type="button"
                  onClick={scrollToContact}
                  className={`w-full py-3.5 rounded-2xl font-display text-xs font-bold uppercase transition-all tracking-wider active:scale-95 text-center mt-8 cursor-pointer ${
                    plan.popular
                      ? 'bg-brand-yellow text-slate-900 hover:bg-brand-yellow/90'
                      : 'bg-stone-100 text-stone-900 hover:bg-stone-200 border border-stone-200'
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
