import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  longDescription: string;
  features: string[];
  process: { step: number; title: string; description: string }[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  university?: string;
  rating?: number;
  date?: string;
}

export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface University {
  name: string;
  location: string;
}

export interface Country {
  id: string;
  name: string;
  image: string;
  description: string;
  universities: University[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: React.ReactNode; // Using ReactNode to allow simple HTML-like structure
  image: string;
  date: string;
  author: string;
  category: string;
}