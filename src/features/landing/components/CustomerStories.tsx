/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Heart, CheckCircle2 } from 'lucide-react';

const STORIES = [
  {
    name: 'Dona Selma Mota',
    age: 62,
    role: 'Aposentada',
    location: 'Belo Horizonte - MG',
    image: 'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?auto=format&fit=crop&q=80&w=400&h=400',
    quote: 'Eu não tenho plano de saúde e gastava quase metade da minha aposentadoria na farmácia. Com a DU, economizo mais de R$ 150 por mês em remédios de uso contínuo, e o atendimento deles por WhatsApp é um carinho só!',
    highlight: 'Economia média de R$ 1.800/ano em medicamentos.',
  },
  {
    name: 'Seu Carlos Andrade',
    age: 45,
    role: 'Motorista de Aplicativo',
    location: 'Salvador - BA',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400',
    quote: 'Meu carro é minha ferramenta de trabalho. Quando tive uma pane elétrica à noite, a assistência Sempre me mandou guincho rápido e não paguei nada a mais por isso. Vale cada centavo.',
    highlight: 'Assistência veicular 24h inclusa sem dor de cabeça.',
  },
  {
    name: 'Mariana Vasconcelos',
    age: 31,
    role: 'Autônoma e Mãe',
    location: 'Goiânia - GO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
    quote: 'Com crianças pequenas, ter a Telemedicina 24h salva vidas. Já usei de madrugada para falar com pediatra, sem precisar pegar fila de hospital. O atendimento é rápido e me deixa em paz.',
    highlight: 'Consultas médicas online ilimitadas a qualquer hora.',
  },
];

export default function CustomerStories() {
  return (
    <section className="py-24 bg-white border-t border-slate-200/60 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-50 -mr-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center space-x-1.5 bg-brand-blue-deep/5 border border-brand-blue-deep/10 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-brand-blue-deep mb-3 animate-pulse">
            <Heart className="w-3.5 h-3.5 fill-current text-brand-blue-deep" />
            <span>Quem nós ajudamos todos os dias</span>
          </span>
          <h2 className="font-display text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Histórias Reais de Cuidado e Economia
          </h2>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed">
            Mais do que números, cuidamos de pessoas. Conheça a história de alguns dos nossos mais de <strong>4 milhões de clientes</strong> beneficiados.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STORIES.map((s, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200/60 rounded-[2.2rem] p-6 sm:p-8 flex flex-col justify-between hover:shadow-2xl hover:border-brand-blue-deep/20 transition-all duration-300 text-left relative shadow-lg shadow-slate-100/50 group"
            >
              {/* Giant Stylized Quote Mark */}
              <span className="font-serif text-9xl text-slate-100 group-hover:text-slate-150 select-none absolute top-[-10px] right-6 transition-colors duration-300 pointer-events-none">
                “
              </span>

              <div className="relative z-10">
                {/* Profile Photo & Info */}
                <div className="flex items-center space-x-4.5 mb-6">
                  <img 
                    src={s.image} 
                    alt={s.name} 
                    className="w-15 h-15 rounded-full object-cover ring-2 ring-brand-yellow ring-offset-2 shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-display font-extrabold text-base text-slate-900 leading-tight">
                      {s.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">
                      {s.age} anos, {s.role}
                    </p>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                      {s.location}
                    </p>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-sans italic relative z-10">
                  "{s.quote}"
                </p>
              </div>

              {/* Benefit Highlight Tag */}
              <div className="mt-auto pt-4.5 border-t border-slate-100 flex items-start space-x-2.5 bg-slate-50/60 p-4 rounded-2xl border border-slate-150">
                <CheckCircle2 className="w-4 h-4 text-emerald-650 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 font-bold leading-normal">
                  {s.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
