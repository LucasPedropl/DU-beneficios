/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, User, CheckCircle, ArrowRight, ClipboardCheck, MessageSquare } from 'lucide-react';

export default function LeadForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [plan, setPlan] = useState('familia');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorText, setErrorText] = useState('');

  // Handle auto-masking of phone for Brazilian format: (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // keep only numbers
    if (value.length > 11) value = value.slice(0, 11); // max characters
    // Apply formatting masks
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

    // Custom client-side validations
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
    // Simulate API delay
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <section id="contato" className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-stone-50 border border-stone-200 rounded-[2rem] p-6 sm:p-10 max-w-5xl mx-auto shadow-sm">
          
          {/* Informative Side */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between h-full">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#2563eb] font-bold block mb-2">
                Simulação Sem Compromisso
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
                Pronto para começar a economizar?
              </h2>
              <p className="mt-4 text-stone-500 text-sm leading-relaxed">
                Preencha os campos ao lado e fale com um de nossos consultores de benefícios. Retornamos seu contato em menos de 10 minutos com a simulação completa para sua família.
              </p>
            </div>

            <div className="mt-8 space-y-4 border-t border-stone-200 pt-6">
              <div className="flex items-center space-x-3 text-xs text-stone-600">
                <CheckCircle className="w-4.5 h-4.5 text-[#2563eb] shrink-0 font-bold" />
                <span>Atendimento humanizado via WhatsApp</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-stone-600">
                <CheckCircle className="w-4.5 h-4.5 text-[#2563eb] shrink-0 font-bold" />
                <span>Simulação 100% gratuita sem taxas ocultas</span>
              </div>
            </div>
          </div>

          {/* Form Intake State Side */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-stone-200 relative overflow-hidden">
            
            {success ? (
              /* Success Card State UI */
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4 border-2 border-green-200 shadow-sm">
                  <ClipboardCheck className="w-8 h-8" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-stone-900 tracking-tight">Comprovante de Solicitação</h3>
                <p className="text-stone-500 text-sm mt-2 max-w-sm leading-relaxed">
                  Olá, <strong className="text-stone-900 font-semibold">{name}</strong>! Recebemos sua solicitação do <strong className="text-brand-blue-deep font-semibold">
                    {plan === 'individual' ? 'Plano Individual' : plan === 'familia' ? 'Plano Sempre Família' : 'Plano Corporativo'}
                  </strong>.
                </p>
                
                {/* Simulated Coupon */}
                <div className="bg-stone-50 border-2 border-dashed border-stone-200 rounded-xl p-4 my-6 text-left w-full max-w-xs font-mono text-xs text-stone-650">
                  <p className="text-stone-400 text-center font-bold tracking-wider uppercase pb-2 border-b border-stone-200">Protocolo DU-948301</p>
                  <p className="mt-3"><strong>Cliente:</strong> {name}</p>
                  <p className="mt-1"><strong>Telefone:</strong> {phone}</p>
                  <p className="mt-1"><strong>Canal:</strong> WhatsApp Coordenador</p>
                  <p className="mt-1"><strong>Ação:</strong> Cotação de Desconto</p>
                </div>

                <p className="text-xs text-stone-400">Em instantes entraremos em contato via dístico e WhatsApp para formalização.</p>
                <button
                  onClick={() => { setSuccess(false); setName(''); setEmail(''); setPhone(''); }}
                  className="mt-6 px-6 py-2.5 bg-brand-blue-deep font-sans font-bold text-xs text-white rounded-xl uppercase active:scale-95 transition-all cursor-pointer"
                >
                  Fazer Nova Simulação
                </button>
              </div>
            ) : (
              /* Form Intake Fields State UI */
              <form onSubmit={handleFormSubmission} className="space-y-4 text-left">
                {errorText && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs font-semibold text-red-655">
                    {errorText}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Nome Completo</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Dona Selma Mota"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-stone-50 text-xs border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue-deep focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">E-mail para contato</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
                      <input
                        type="email"
                        required
                        placeholder="Ex: selma@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-stone-50 text-xs border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue-deep focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Celular / WhatsApp (com DDD)</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
                      <input
                        type="text"
                        required
                        placeholder="(31) 99999-9999"
                        value={phone}
                        onChange={handlePhoneChange}
                        className="w-full pl-10 pr-4 py-2.5 bg-stone-50 text-xs border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue-deep focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Plano desejado</label>
                  <select
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                    className="w-full px-3 py-2.5 bg-stone-50 text-xs border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue-deep appearance-none cursor-pointer text-stone-800"
                  >
                    <option value="individual">Plano Individual DU — R$ 19,90/mês</option>
                    <option value="familia">Plano Sempre Família — R$ 49,90/mês (Popular)</option>
                    <option value="corporativo">Plano DU Corporativo — Sob Consulta</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-brand-blue-deep hover:bg-brand-blue-deep/95 disabled:bg-stone-300 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-[0.98] cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <span>{submitting ? 'Aguarde, enviando...' : 'Simular Meu Benefício de Graça'}</span>
                    {!submitting && <ArrowRight className="w-4 h-4 text-brand-yellow font-bold pointer-events-none" />}
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
