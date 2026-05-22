/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BenefitItem {
  id: string;
  category: 'saude' | 'medicamentos' | 'varejo' | 'conveniencia' | 'sempre' | 'funeral';
  title: string;
  highlights: string[];
  description: string;
  badge?: string;
}

export interface PharmacyDiscount {
  name: string;
  logoUrl?: string;
  genericDiscount: string;
  brandedDiscount: string;
  extraInfo?: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface PlanOption {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}
