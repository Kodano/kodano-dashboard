"use client";

import Link from 'next/link';
import Image from 'next/image';
import { DocumentTextIcon, CalendarIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const cards = [
  {
    href: '/anotacoes',
    icon: DocumentTextIcon,
    title: 'Anotações',
    description: 'Registre ideias, decisões e insights importantes do projeto',
    gradient: 'from-kodano-600 to-kodano-700',
  },
  {
    href: '/timeline',
    icon: CalendarIcon,
    title: 'Timeline Trimestral',
    description: 'Visualize o roadmap por trimestre: Gateway → Subadquirente',
    gradient: 'from-accent-500 to-accent-600',
  },
  {
    href: '/escopo',
    icon: ChartBarIcon,
    title: 'Definição de Escopo',
    description: 'Features por fase: Gateway, Transição e Subadquirente',
    gradient: 'from-kodano-500 to-accent-500',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-900 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-kodano-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-kodano-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <header className="text-center mb-16 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32 hover:scale-110 transition-transform duration-300">
              <Image
                src="/kodano-logo.png"
                alt="Kodano Logo"
                width={128}
                height={128}
                className="object-contain filter drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          <h1 className="text-6xl font-bold mb-4 text-gradient animate-slide-up">
            Dashboard Pessoal
          </h1>
          <p className="text-xl text-gray-400 font-inter animate-slide-up animation-delay-200">
            Planejamento Estratégico: <span className="text-kodano-400 font-semibold">Gateway</span> → <span className="text-accent-400 font-semibold">Subadquirente</span>
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <Link
              key={card.href}
              href={card.href}
              className="group card p-8 hover:scale-105 transform transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Icon with gradient background */}
              <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <card.icon className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-gray-100 mb-3 text-center group-hover:text-gradient transition-all duration-300">
                {card.title}
              </h2>
              <p className="text-gray-400 text-center font-inter text-sm leading-relaxed">
                {card.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`h-1 w-16 bg-gradient-to-r ${card.gradient} rounded-full`}></div>
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-20 text-center text-gray-500 animate-fade-in animation-delay-1000">
          <p className="text-sm font-inter">
            Kodano Merchant Platform • Dashboard de Planejamento Estratégico
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Desenvolvido com Next.js 15 + Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}
