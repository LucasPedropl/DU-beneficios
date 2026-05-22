/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, Phone, HeartHandshake } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-stone-200 py-3 text-stone-900 shadow-sm' : 'bg-stone-50/50 backdrop-blur-sm py-4 text-stone-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="p-2 rounded-xl flex items-center justify-center bg-brand-blue-deep text-white transition-colors">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="font-display text-xl font-bold text-stone-900">
                  du
                </span>
                <span className="font-sans text-xs uppercase tracking-wider px-1.5 py-0.5 rounded font-bold bg-brand-blue-deep/10 text-brand-blue-deep">
                  Benefícios
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest font-mono font-medium leading-none text-stone-500">
                + Sempre Assistência
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Benefícios', 'Descontos', 'Simulador', 'Histórico', 'Planos'].map((item) => {
              const ids = ['beneficios', 'descontos', 'simulador', 'timeline', 'planos'];
              const targetId = ids[['Benefícios', 'Descontos', 'Simulador', 'Histórico', 'Planos'].indexOf(item)];
              return (
                <button
                   key={item}
                   onClick={() => scrollToSection(targetId)}
                   className="font-medium transition-colors text-sm hover:opacity-80 active:scale-95 text-stone-605 hover:text-brand-blue-deep hover:font-semibold"
                >
                  {item}
                </button>
              );
            })}
          </nav>

          {/* Button CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:08000000000"
              className="flex items-center space-x-1.5 font-mono text-xs font-semibold text-stone-600 hover:text-brand-blue-deep"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>0800 24h</span>
            </a>
            <button
              onClick={() => scrollToSection('contato')}
              className={`px-5 py-2.5 rounded-xl font-display text-xs font-bold uppercase transition-all duration-200 active:scale-95 shadow-sm ${
                isScrolled
                  ? 'bg-brand-blue-deep text-white hover:bg-brand-blue-deep/90 shadow'
                  : 'bg-brand-yellow text-stone-900 hover:bg-brand-yellow/90 font-extrabold'
              }`}
            >
              Garanta Já seu Plano
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-stone-900"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-stone-200 absolute top-full left-0 w-full py-4 px-6 space-y-4 text-stone-900">
          <nav className="flex flex-col space-y-4">
            {['Benefícios', 'Descontos', 'Simulador', 'Histórico', 'Planos'].map((item) => {
              const ids = ['beneficios', 'descontos', 'simulador', 'timeline', 'planos'];
              const targetId = ids[['Benefícios', 'Descontos', 'Simulador', 'Histórico', 'Planos'].indexOf(item)];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(targetId)}
                  className="text-left font-medium text-stone-600 hover:text-brand-blue-deep text-sm py-1.5"
                >
                  {item}
                </button>
              );
            })}
          </nav>
          <div className="border-t border-stone-150 pt-4 flex flex-col space-y-3">
            <a href="tel:08000000000" className="flex items-center space-x-2 font-mono text-xs text-stone-500">
              <Phone className="w-4 h-4" />
              <span>Fale Conosco: 0800 24h</span>
            </a>
            <button
              onClick={() => scrollToSection('contato')}
              className="w-full text-center py-3 bg-brand-blue-deep text-white rounded-xl font-display text-xs font-bold uppercase hover:bg-brand-blue-deep/95 shadow-sm"
            >
              Simular Meu Benefício
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
