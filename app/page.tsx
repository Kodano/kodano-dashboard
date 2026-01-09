"use client";

import Link from 'next/link';
import { DocumentTextIcon, CalendarIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kodano-50 to-kodano-100">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-kodano-900 mb-4">
            Kodano Dashboard
          </h1>
          <p className="text-xl text-kodano-700">
            Planejamento Estratégico: Gateway → Subadquirente
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Anotações */}
          <Link
            href="/anotacoes"
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-kodano-600"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-kodano-100 rounded-full mb-6 mx-auto">
              <DocumentTextIcon className="w-8 h-8 text-kodano-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
              Anotações
            </h2>
            <p className="text-gray-600 text-center">
              Registre ideias, decisões e insights importantes do projeto
            </p>
          </Link>

          {/* Timeline Trimestral */}
          <Link
            href="/timeline"
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-kodano-600"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-kodano-100 rounded-full mb-6 mx-auto">
              <CalendarIcon className="w-8 h-8 text-kodano-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
              Timeline Trimestral
            </h2>
            <p className="text-gray-600 text-center">
              Visualize o roadmap por trimestre: Gateway → Subadquirente
            </p>
          </Link>

          {/* Definição de Escopo */}
          <Link
            href="/escopo"
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-kodano-600"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-kodano-100 rounded-full mb-6 mx-auto">
              <ChartBarIcon className="w-8 h-8 text-kodano-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
              Definição de Escopo
            </h2>
            <p className="text-gray-600 text-center">
              Features por fase: Gateway, Transição e Subadquirente
            </p>
          </Link>
        </div>

        <footer className="mt-16 text-center text-kodano-700">
          <p className="text-sm">
            Kodano Merchant Platform • Dashboard de Planejamento Estratégico
          </p>
        </footer>
      </div>
    </div>
  );
}
