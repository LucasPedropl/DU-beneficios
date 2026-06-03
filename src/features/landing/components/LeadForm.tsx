/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, User, CheckCircle, ArrowRight, ClipboardCheck } from 'lucide-react';
import SearchableSelect from './SearchableSelect';

export default function LeadForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [plan, setPlan] = useState('familia');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorText, setErrorText] = useState('');

  const planOptions = [
    { value: 'individual', label: 'Plano Individual DU — R$ 19,90/mês' },
    { value: 'familia', label: 'Plano Sempre Família — R$ 49,90/mês (Popular)' },
    { value: 'corporativo', label: 'Plano DU Corporativo — Sob Consulta' },
  ];

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    setPhone(value);
  };

  const handleFormSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText('');

    if (name.length < 3) {
      setErrorText('Por favor, informe um nome válido de pelo menos 3 caracteres.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorText('Por favor, informe um e-mail válido.');
      return;
    }
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setErrorText('Por favor, insira um telefone completo com DDD.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <section id="contato" className="py-24 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white/80 backdrop-blur-md border border-slate-200/50 rounded-[2.5rem] p-6 sm:p-12 max-w-5xl mx-auto shadow-2xl shadow-slate-100/50">
          
          {/* Informative Side */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between h-full py-2">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-brand-blue-deep font-black bg-brand-blue-deep/5 px-3.5 py-1.5 rounded-full block w-fit mb-4">
                #CONTACOMIGO
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Fale com a gente e economize de verdade!
              </h2>
              <p className="mt-4 text-slate-500 text-sm leading-relaxed">
                Aqui você não fala com robôs. Preencha seus dados ao lado e <strong>um ser humano de verdade</strong> da nossa equipe entrará em contato em até 10 minutos pelo WhatsApp para fazer sua simulação gratuita, sem compromisso e sem complicação!
              </p>
            </div>

            {/* Coordinator Image Area (Destaque Grande) */}
            <div className="my-6 bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col sm:flex-row items-stretch">
              <div className="sm:w-1/3 relative min-h-[140px]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
                  alt="Consultora especialista da DU Benefícios"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                />
              </div>
              <div className="p-5 flex-grow flex flex-col justify-center text-left">
                <span className="text-[8px] font-mono uppercase font-black tracking-wider text-brand-blue-deep bg-brand-blue-deep/5 px-2 py-0.5 rounded w-fit mb-1.5">
                  Fale com um Especialista
                </span>
                <h4 className="text-sm font-bold text-slate-900 leading-snug">Mariana Silveira</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Sua consultora de vantagens</p>
                <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1.5 mt-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Resposta imediata no WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="mt-2 space-y-4 border-t border-slate-100 pt-6">
              <div className="flex items-center space-x-3 text-xs text-slate-600">
                <CheckCircle className="w-4.5 h-4.5 text-brand-blue-deep shrink-0 font-bold" />
                <span>Acolhimento feito por pessoas que te ouvem de verdade</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-slate-600">
                <CheckCircle className="w-4.5 h-4.5 text-brand-blue-deep shrink-0 font-bold" />
                <span>Simulação 100% gratuita e transparente</span>
              </div>
            </div>
          </div>

          {/* Form Intake State Side */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-[2rem] border border-slate-200/60 shadow-xl shadow-slate-100/40 relative overflow-hidden">
            
            {success ? (
              /* Success Card State UI */
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-5 border border-green-100 shadow-md">
                  <ClipboardCheck className="w-8 h-8 animate-bounce" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight">Solicitação Recebida</h3>
                <p className="text-slate-500 text-sm mt-3 max-w-sm leading-relaxed">
                  Olá, <strong className="text-slate-800 font-semibold">{name}</strong>! Recebemos seu pedido de simulação para o <strong className="text-brand-blue-deep font-semibold">
                    {plan === 'individual' ? 'Plano Individual' : plan === 'familia' ? 'Plano Sempre Família' : 'Plano Corporativo'}
                  </strong>.
                </p>
                
                {/* Simulated Coupon */}
                <div className="bg-slate-50 border border-dashed border-slate-200 rounded-2xl p-5 my-6 text-left w-full max-w-xs font-mono text-xs text-slate-600 shadow-inner">
                  <p className="text-slate-400 text-center font-bold tracking-widest uppercase pb-2.5 border-b border-slate-100">Protocolo DU-948301</p>
                  <p className="mt-4"><strong>Cliente:</strong> {name}</p>
                  <p className="mt-1.5"><strong>Telefone:</strong> {phone}</p>
                  <p className="mt-1.5"><strong>Canal:</strong> WhatsApp Coordenador</p>
                  <p className="mt-1.5"><strong>Ação:</strong> Cotação de Desconto</p>
                </div>

                <p className="text-xs text-slate-400">Em instantes nossos coordenadores entrarão em contato no seu WhatsApp.</p>
                <button
                  onClick={() => { setSuccess(false); setName(''); setEmail(''); setPhone(''); }}
                  className="mt-8 px-6 py-3 bg-brand-blue-deep hover:bg-blue-750 font-sans font-bold text-xs text-white rounded-xl uppercase active:scale-95 transition-all shadow-md cursor-pointer"
                >
                  Nova Simulação
                </button>
              </div>
            ) : (
              /* Form Intake Fields State UI */
              <form onSubmit={handleFormSubmission} className="space-y-5 text-left">
                {errorText && (
                  <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl text-xs font-semibold text-rose-600">
                    {errorText}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Nome Completo</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Dona Selma Mota"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50/50 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue-deep focus:border-transparent focus:bg-white transition-all text-slate-900 font-semibold shadow-inner"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">E-mail para contato</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <input
                        type="email"
                        required
                        placeholder="Ex: selma@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50/50 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue-deep focus:border-transparent focus:bg-white transition-all text-slate-900 font-semibold shadow-inner"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">WhatsApp (com DDD)</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <input
                        type="text"
                        required
                        placeholder="(31) 99999-9999"
                        value={phone}
                        onChange={handlePhoneChange}
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue-deep focus:border-transparent focus:bg-white transition-all text-slate-900 font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Plano desejado</label>
                  <SearchableSelect
                    options={planOptions}
                    value={plan}
                    onChange={(val) => setPlan(val)}
                    placeholder="Selecione o plano desejado"
                    searchPlaceholder="Pesquisar plano..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4.5 bg-brand-blue-deep hover:bg-blue-750 disabled:bg-slate-200 text-white font-display font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-lg shadow-brand-blue-deep/20 hover:shadow-xl active:scale-[0.98] cursor-pointer flex items-center justify-center space-x-2.5"
                  >
                    <span>{submitting ? 'Aguarde, conectando...' : 'Falar com Atendimento Humano'}</span>
                    {!submitting && <ArrowRight className="w-4.5 h-4.5 text-brand-yellow font-black pointer-events-none" />}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
