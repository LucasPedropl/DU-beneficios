/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './features/landing/components/Header';
import Hero from './features/landing/components/Hero';
import BenefitsCatalog from './features/landing/components/BenefitsCatalog';
import SavingsSimulator from './features/landing/components/SavingsSimulator';
import CustomerStories from './features/landing/components/CustomerStories';
import NetworkStats from './features/landing/components/NetworkStats';
import HealthJourney from './features/landing/components/HealthJourney';
import TimelineHistory from './features/landing/components/TimelineHistory';
import ValuePlans from './features/landing/components/ValuePlans';
import LeadForm from './features/landing/components/LeadForm';
import Footer from './features/landing/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans overflow-x-hidden antialiased selection:bg-brand-yellow/30 selection:text-brand-blue-deep">
      {/* Header Navigation */}
      <Header />
      
      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        
        {/* Dynamic Partner Catalogue of Benefits */}
        <BenefitsCatalog />
        
        {/* Interactive Value Simulator */}
        <SavingsSimulator />

        {/* Customer Success Stories & Personas */}
        <CustomerStories />
        
        {/* Statistics Dashboard and Telemedicine TopMed Info */}
        <NetworkStats />
        
        {/* Coordinated Health Steps Timeline Stepper */}
        <HealthJourney />
        
        {/* 8-Year Company Growth Milestones */}
        <TimelineHistory />
        
        {/* Included Benefit Plans Tier Grid */}
        <ValuePlans />
        
        {/* Lead Handoff Registration and Interactive Mock Voucher Sheet */}
        <LeadForm />
      </main>
      
      {/* Footer corporate block */}
      <Footer />
    </div>
  );
}
