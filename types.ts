import React from 'react';

export interface NavLink {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

export interface InsightCard {
  id: string;
  title: string;
  type: 'Article' | 'Video' | 'Voice' | 'Guide';
  image?: string;
}