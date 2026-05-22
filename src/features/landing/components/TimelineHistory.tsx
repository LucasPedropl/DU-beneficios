/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Calendar, Award, Compass, Zap, Building2, Smartphone, TrendingUp } from 'lucide-react';

const MILESTONES = [
  {
    year: '2014',
    title: 'Abertura Pioneira',
    description: 'Fundação da empresa e concepção do primeiro plano piloto da Ducash, focando em ofertar desconto continuado.',
    Icon: compassIcon,
  },
  {
    year: '2015',
    title: 'Lançamento Ducash20',
    description: 'Lançamento do inovador plano Ducash20, onde o usuário pagava R$ 20 de adesão e recebia o valor integral convertido em bônus imediatos para celular.',
    Icon: zapIcon,
  },
  {
    year: '2016',
    title: 'Novos Benefícios',
    description: 'Acréscimo estratégico da rede credenciada de descontos e a inclusão do Seguro de Vida integral ao plano para todos os usuários.',
    Icon: awardIcon,
  },
  {
    year: '2017',
    title: 'Plano Empresa',
    description: 'Início do Plano Empresa focado no corporativo, finalizando o ano com mais de 18.000 clientes ativos e 355 parceiros integrados.',
    Icon: buildingIcon,
  },
  {
    year: '2018',
    title: 'Grupo Zelo',
    description: 'O Grupo Zelo, a maior holding de Death Care e planos funerários preventivos do Brasil, entra como cliente e acionista majoritário.',
    Icon: awardIcon,
  },
  {
    year: '2020',
    title: 'Central & APP',
    description: 'Lançamento da Central de Agendamentos dedicada da empresa ("Conta Comigo") e publicação do primeiro aplicativo mobile próprio.',
    Icon: phoneIcon,
  },
  {
    year: '2021',
    title: 'Expansão Nacional',
    description: 'Abertura das operações nos estados de Goiás, Bahia, Distrito Federal e Tocantins, aliada com a automação por robôs da central.',
    Icon: trendingIcon,
  },
  {
    year: '2022',
    title: 'Evolução da Marca DU',
    description: 'A antiga bandeira Ducash evolui em definitivo para Du Benefícios, acompanhada de novos sistemas, app renovado e ultrapassando 4 milhões de vidas.',
    Icon: awardIcon,
  },
  {
    year: '2023',
    title: 'Marca de Recordes',
    description: 'Distribuição histórica de mais de R$ 30 milhões em descontos líquidos somados nos parceiros da carteira nacional de clientes.',
    Icon: trendingIcon,
  },
];

function compassIcon() { return <Compass className="w-5 h-5 text-brand-yellow" />; }
function zapIcon() { return <Zap className="w-5 h-5 text-brand-yellow" />; }
function awardIcon() { return <Award className="w-5 h-5 text-brand-yellow" />; }
function buildingIcon() { return <Building2 className="w-5 h-5 text-brand-yellow" />; }
function phoneIcon() { return <Smartphone className="w-5 h-5 text-brand-yellow" />; }
function trendingIcon() { return <TrendingUp className="w-5 h-5 text-brand-yellow" />; }

export default function TimelineHistory() {
  const [selectedIdx, setSelectedIdx] = useState(MILESTONES.length - 2); // default to 2022 brand launch
  const [lastInteraction, setLastInteraction] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeSinceInteraction = Date.now() - lastInteraction;
      if (timeSinceInteraction >= 30000) {
        setSelectedIdx((prev) => (prev + 1) % MILESTONES.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [lastInteraction]);

  const handleSelect = (idx: number) => {
    setSelectedIdx(idx);
    setLastInteraction(Date.now());
  };

  return (
    <section id="timeline" className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-mono tracking-widest text-[#2563eb] font-bold block mb-2">
            Nossa História
          </span>
          <h2 className="font-display text-4xl font-extrabold text-stone-900 tracking-tight">
            Uma Trajetória de 8 Anos de Sucesso
          </h2>
          <p className="mt-4 text-stone-500 text-sm leading-relaxed">
            Saiba como crescemos e nos tornamos a principal plataforma de vantagens e assistência integrada da população brasileira.
          </p>
        </div>

        {/* Milestone Selection Timeline Axis */}
        <div className="relative flex items-center justify-start lg:justify-center overflow-x-auto pb-6 pt-4 scrollbar-thin scrollbar-thumb-stone-200">
          <div className="absolute top-[42%] left-0 right-0 h-0.5 bg-stone-200 -z-10 min-w-[700px]"></div>
          
          <div className="flex space-x-4 lg:space-x-8 px-4">
            {MILESTONES.map((m, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={m.year}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  className={`relative flex flex-col items-center shrink-0 cursor-pointer min-w-[64px] focus:outline-none transition-all ${
                    isSelected ? 'scale-105' : 'hover:scale-102'
                  }`}
                >
                  <span className={`text-sm font-bold font-display tracking-tight transition-colors ${
                    isSelected ? 'text-brand-blue-deep bg-brand-yellow px-2.5 py-1 rounded-full' : 'text-stone-400'
                  }`}>
                    {m.year}
                  </span>
                  <div className={`w-3.5 h-3.5 rounded-full mt-3.5 transition-all ${
                    isSelected 
                      ? 'bg-brand-blue-deep border-4 border-brand-yellow ring-4 ring-brand-blue-deep/10' 
                      : 'bg-stone-300 hover:bg-stone-400'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Display Panel of selected year */}
        <div className="bg-stone-50 border border-stone-200 rounded-[2rem] p-6 sm:p-8 max-w-3xl mx-auto mt-8 flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8 text-left transition-all duration-300 shadow-sm">
          <div className="p-4 bg-stone-900 rounded-2xl flex items-center justify-center shrink-0 shadow-md">
            {MILESTONES[selectedIdx].Icon()}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono font-bold text-brand-blue-deep bg-blue-50 px-2 py-0.5 rounded-md">
                Ano {MILESTONES[selectedIdx].year}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
              <p className="text-xs text-stone-500 font-medium font-mono uppercase tracking-wider">Histórico de Conquistas</p>
            </div>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-stone-900 mt-2">
              {MILESTONES[selectedIdx].title}
            </h3>
            <p className="mt-2 text-stone-600 text-sm leading-relaxed">
              {MILESTONES[selectedIdx].description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
