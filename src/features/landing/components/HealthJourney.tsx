/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PhoneCall, Calendar, Activity, CheckSquare, Dumbbell, MessageSquare } from 'lucide-react';

const STEPS = [
  {
    step: 1,
    title: 'Contato com a Central',
    description: 'O cliente entra em contato com a nossa Central CONTA COMIGO por WhatsApp, telefone ou APP para solicitar e agendar sua consulta médica.',
    Icon: PhoneCall,
    color: 'border-brand-blue-deep text-brand-blue-deep bg-brand-blue-deep/5',
  },
  {
    step: 2,
    title: 'Agendamento Inteligente',
    description: 'Nossa central realiza o agendamento de acordo com a proximidade da sua casa ou trabalho, buscando o parceiro credenciado ideal.',
    Icon: Calendar,
    color: 'border-brand-blue-light text-brand-blue-light bg-brand-blue-light/5',
  },
  {
    step: 3,
    title: 'Consulta & Prescrição',
    description: 'Após a sua consulta médica presencial ou por telemedicina, nossa equipe realiza de imediato o agendamento de todos os exames prescritos.',
    Icon: Activity,
    color: 'border-brand-yellow text-amber-500 bg-brand-yellow/10',
  },
  {
    step: 4,
    title: 'Retorno Automatizado',
    description: 'Com os exames em mãos, agendamos o seu retorno de consulta com agilidade para você receber o diagnóstico final seguro.',
    Icon: CheckSquare,
    color: 'border-emerald-500 text-emerald-655 bg-emerald-50',
  },
  {
    step: 5,
    title: 'Medicamentos Próximos',
    description: 'Direcionamos você para a drogaria parceira mais próxima (Droga Raia, Drogasil, Pague Menos) para adquirir os medicamentos com descontos extras.',
    Icon: Dumbbell,
    color: 'border-indigo-500 text-indigo-600 bg-indigo-50',
  },
  {
    step: 6,
    title: 'Acompanhamento do Cuidado',
    description: 'Ao final do ciclo, recebemos sua avaliação por SMS e chat garantindo atendimento humanizado continuado (NPS de excelência 81.5!).',
    Icon: MessageSquare,
    color: 'border-pink-500 text-pink-655 bg-pink-50',
  },
];

export default function HealthJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const [lastInteraction, setLastInteraction] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeSinceInteraction = Date.now() - lastInteraction;
      if (timeSinceInteraction >= 30000) {
        setActiveStep((prev) => (prev + 1) % STEPS.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [lastInteraction]);

  const handleStepChange = (idx: number) => {
    setActiveStep(idx);
    setLastInteraction(Date.now());
  };

  return (
    <section id="jornada" className="py-24 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-brand-blue-deep font-black bg-brand-blue-deep/5 px-3 py-1.5 rounded-full block w-fit mx-auto mb-3">
            Atendimento
          </span>
          <h2 className="font-display text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Sua Jornada da Saúde Sem Complicações
          </h2>
          <p className="mt-4 text-slate-550 text-sm leading-relaxed">
            Você não precisa sair ligando para dezenas de clínicas buscando preço ou horário. <strong>A DU cuida de tudo para você do início ao fim!</strong>
          </p>
        </div>

        {/* Desktop timeline horizontal dots */}
        <div className="hidden lg:grid grid-cols-6 gap-6 mb-12 relative">
          <div className="absolute top-[34%] left-[8%] right-[8%] h-0.5 border-t-2 border-dashed border-slate-200 -z-0"></div>
          
          {STEPS.map((s, idx) => {
            const Icon = s.Icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={s.step}
                onClick={() => handleStepChange(idx)}
                className="flex flex-col items-center text-center cursor-pointer group focus:outline-none relative z-10 transition-all"
              >
                <div className={`w-15 h-15 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  isSelected 
                    ? 'scale-110 shadow-lg shadow-brand-blue-deep/20 ring-4 ring-brand-blue-deep/15 border-brand-blue-deep bg-brand-blue-deep text-white' 
                    : 'border-slate-200 bg-white text-slate-400 group-hover:border-slate-350 group-hover:text-slate-600'
                }`}>
                  <Icon className="w-5 h-5 pointer-events-none" />
                </div>
                <p className={`mt-3.5 text-[10px] uppercase font-mono tracking-wider font-bold transition-colors ${
                  isSelected ? 'text-brand-blue-deep' : 'text-slate-400'
                }`}>
                  Passo {s.step}
                </p>
                <h4 className={`text-xs font-bold mt-1 max-w-[120px] transition-colors leading-tight ${
                  isSelected ? 'text-slate-900' : 'text-slate-500'
                }`}>
                  {s.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Selected Step Card Details */}
        <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-200/60 max-w-4xl mx-auto text-left relative overflow-hidden transition-all duration-500 shadow-xl shadow-slate-100/40">
          <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-gradient-to-b from-brand-blue-deep to-indigo-600"></div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center space-x-5">
              <div className={`p-4.5 rounded-2xl border-2 shrink-0 ${STEPS[activeStep].color}`}>
                {React.createElement(STEPS[activeStep].Icon, { className: 'w-7 h-7 pointer-events-none' })}
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-blue-deep font-bold bg-brand-blue-deep/5 px-2.5 py-0.5 rounded-md">
                  Passo {STEPS[activeStep].step} de 6
                </span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 mt-2.5">
                  {STEPS[activeStep].title}
                </h3>
              </div>
            </div>

            <div className="flex space-x-2 shrink-0">
              <button
                disabled={activeStep === 0}
                onClick={() => handleStepChange(activeStep - 1)}
                className="px-4.5 py-2.5 bg-slate-50 hover:bg-slate-100 disabled:opacity-45 rounded-xl text-slate-700 text-xs font-bold border border-slate-200 transition-all cursor-pointer"
              >
                Anterior
              </button>
              <button
                disabled={activeStep === STEPS.length - 1}
                onClick={() => handleStepChange(activeStep + 1)}
                className="px-4.5 py-2.5 bg-brand-blue-deep hover:bg-blue-750 text-white rounded-xl text-xs font-bold transition-all active:scale-[0.97] cursor-pointer shadow-md shadow-brand-blue-deep/10"
              >
                Próximo
              </button>
            </div>
          </div>

          <p className="mt-6 text-slate-650 text-sm sm:text-base leading-relaxed pl-0 sm:pl-22">
            {STEPS[activeStep].description}
          </p>

          {/* Central Conta Comigo banner inside the active state */}
          <div className="mt-12 border-t border-slate-100 pt-10 flex flex-col md:flex-row items-stretch gap-8 pl-0 sm:pl-22">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=250"
              alt="Equipe Central Conta Comigo" 
              className="w-full md:w-64 h-40 object-cover rounded-[1.8rem] border border-slate-150 shadow-md shrink-0"
            />
            <div className="text-left flex flex-col justify-between">
              <div>
                <span className="text-[10px] sm:text-xs font-mono font-black text-brand-blue-deep uppercase tracking-widest block mb-1.5">
                  Central de Acolhimento
                </span>
                <h4 className="font-display font-extrabold text-base sm:text-lg text-slate-900 leading-snug">
                  Aqui você fala com pessoas de verdade, prontas para ajudar.
                </h4>
                <p className="mt-2 text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Nossos coordenadores de saúde ligam ou mandam WhatsApp para agendar suas consultas e exames, encontrar o menor preço de medicamentos e te acompanhar de perto. É acolhimento e dedicação sem barreiras de robôs.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-[9px] sm:text-xs font-mono font-extrabold text-brand-blue-deep bg-brand-blue-deep/5 border border-brand-blue-deep/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  #contacomigo
                </span>
                <span className="text-[9px] sm:text-xs font-mono text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full font-bold">
                  Média de 06:30 min por acolhimento
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
