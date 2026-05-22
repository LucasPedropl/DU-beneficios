/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PhoneCall, Calendar, Activity, CheckSquare, Dumbbell, MessageSquare, HeartHandshake, Smile } from 'lucide-react';

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
    color: 'border-brand-blue-light text-brand-blue-light bg-[#5cbde51a]',
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
    color: 'border-emerald-500 text-emerald-600 bg-emerald-50',
  },
  {
    step: 5,
    title: 'Medicamentos Próximos',
    description: 'Direcionamos você para a drogaria parceira mais próxima (Droga Raia, Drogasil, Pague Menos) para adquirir os medicamentos com descontos extras.',
    Icon: Dumbbell,
    color: 'border-indigo-500 text-[#112F8A] bg-indigo-50',
  },
  {
    step: 6,
    title: 'Acompanhamento do Cuidado',
    description: 'Ao final do ciclo, recebemos sua avaliação por SMS e chat garantindo atendimento humanizado continuado (NPS de excelência 81.5!).',
    Icon: MessageSquare,
    color: 'border-pink-500 text-pink-600 bg-pink-50',
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
    <section id="jornada" className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-[#2563eb] font-bold block mb-2">
            Central Conta Comigo
          </span>
          <h2 className="font-display text-4xl font-extrabold text-stone-900 tracking-tight">
            Jornada da Saúde Sem Complicações
          </h2>
          <p className="mt-4 text-stone-500 text-sm leading-relaxed">
            Você não precisa sair ligando para clínicas e consultórios buscando preço ou horário. <strong>A Du cuida de tudo para você do início ao fim!</strong>
          </p>
        </div>

        {/* Desktop timeline horizontal dots */}
        <div className="hidden lg:grid grid-cols-6 gap-4 mb-10 relative">
          <div className="absolute top-[34%] left-[8%] right-[8%] h-0.5 border-t border-dashed border-stone-200 -z-0"></div>
          
          {STEPS.map((s, idx) => {
            const Icon = s.Icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={s.step}
                onClick={() => handleStepChange(idx)}
                className="flex flex-col items-center text-center cursor-pointer group focus:outline-none relative z-10 transition-all"
              >
                <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all ${
                  isSelected 
                    ? 'scale-110 shadow-md ring-4 ring-brand-blue-deep/10 border-brand-blue-deep bg-brand-blue-deep text-white' 
                    : 'border-stone-200 bg-white text-stone-400 group-hover:border-stone-300'
                }`}>
                  <Icon className="w-5 h-5 pointer-events-none" />
                </div>
                <p className={`mt-3 text-[11px] uppercase font-mono tracking-wider font-bold transition-colors ${
                  isSelected ? 'text-brand-blue-deep' : 'text-stone-400'
                }`}>
                  Passo {s.step}
                </p>
                <h4 className={`text-xs font-semibold mt-1 max-w-[120px] transition-colors ${
                  isSelected ? 'text-stone-900 font-bold' : 'text-stone-500'
                }`}>
                  {s.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Selected Step Card Details */}
        <div className="bg-stone-50 rounded-3xl p-6 sm:p-10 border border-stone-200 max-w-4xl mx-auto text-left relative overflow-hidden transition-all duration-305 shadow-sm">
          <div className="absolute top-0 left-0 bottom-0 w-2 bg-brand-blue-deep"></div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center space-x-6">
              <div className={`p-4 rounded-2xl border-2 shrink-0 ${STEPS[activeStep].color}`}>
                {React.createElement(STEPS[activeStep].Icon, { className: 'w-8 h-8 pointer-events-none' })}
              </div>
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#2563eb] font-bold">
                  Passo {STEPS[activeStep].step} de 6
                </span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-stone-900 mt-1">
                  {STEPS[activeStep].title}
                </h3>
              </div>
            </div>

            <div className="flex space-x-2 shrink-0">
              <button
                disabled={activeStep === 0}
                onClick={() => handleStepChange(activeStep - 1)}
                className="px-3 py-1.5 bg-white hover:bg-stone-200 disabled:opacity-45 rounded-lg text-stone-700 text-xs font-bold border border-stone-200 transition-all cursor-pointer"
              >
                Anterior
              </button>
              <button
                disabled={activeStep === STEPS.length - 1}
                onClick={() => handleStepChange(activeStep + 1)}
                className="px-3 py-1.5 bg-brand-blue-deep hover:bg-brand-blue-deep/90 text-white rounded-lg text-xs font-bold transition-all cursor-pointer"
              >
                Próximo
              </button>
            </div>
          </div>

          <p className="mt-6 text-stone-600 text-sm sm:text-base leading-relaxed pl-0 sm:pl-20">
            {STEPS[activeStep].description}
          </p>

          <div className="mt-8 border-t border-stone-200 pt-6 flex items-center space-x-2 text-xs text-brand-blue-deep pl-0 sm:pl-20">
            <Smile className="w-4.5 h-4.5 text-brand-yellow shrink-0 font-bold" />
            <span className="font-bold text-stone-700 font-sans">
              Atendimento com acolhimento e atenção no momento que você e sua família mais precisam.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
