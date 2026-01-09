"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon, CheckIcon } from '@heroicons/react/24/outline';

interface Feature {
  id: string;
  name: string;
  description: string;
  priority: 'must' | 'should' | 'could';
}

interface Phase {
  id: string;
  name: string;
  description: string;
  color: string;
  gradient: string;
  features: Feature[];
}

const PHASES: Phase[] = [
  {
    id: 'gateway',
    name: 'Gateway (Q1-Q3 2026)',
    description: 'Fase inicial como gateway de pagamentos. Foco em integrações com adquirentes e merchants.',
    color: 'blue',
    gradient: 'from-blue-500 to-kodano-600',
    features: [
      {
        id: 'g1',
        name: 'Integração com Adquirentes',
        description: 'APIs de integração com Rede, Cielo, Stone e outros adquirentes (autorização, captura, cancelamento)',
        priority: 'must',
      },
      {
        id: 'g2',
        name: 'Portal Merchant',
        description: 'Dashboard para merchants (vendas, relatórios, transações, configurações)',
        priority: 'must',
      },
      {
        id: 'g3',
        name: 'BackOffice Administrativo',
        description: 'Portal interno para operações, suporte e gestão de merchants',
        priority: 'must',
      },
      {
        id: 'g4',
        name: 'Onboarding e KYC',
        description: 'Sistema de cadastro e validação de merchants (KYC básico)',
        priority: 'must',
      },
      {
        id: 'g5',
        name: 'Autenticação OAuth/OIDC',
        description: 'FusionAuth ou Auth0 para autenticação segura (MFA, RBAC)',
        priority: 'must',
      },
      {
        id: 'g6',
        name: 'APIs Públicas',
        description: 'APIs REST para desenvolvedores integrarem com o gateway',
        priority: 'should',
      },
      {
        id: 'g7',
        name: 'Webhooks',
        description: 'Notificações em tempo real de eventos (transações, chargebacks)',
        priority: 'should',
      },
      {
        id: 'g8',
        name: 'Integrações E-commerce',
        description: 'Plugins para VTEX, Shopify, WooCommerce',
        priority: 'should',
      },
      {
        id: 'g9',
        name: 'Split de Pagamentos v1',
        description: 'Divisão automática de valores entre participantes',
        priority: 'should',
      },
      {
        id: 'g10',
        name: 'Antifraude Básico',
        description: 'Regras básicas de prevenção a fraude (IP, velocity)',
        priority: 'could',
      },
    ],
  },
  {
    id: 'transicao',
    name: 'Transição (Q4 2026 - Q1 2027)',
    description: 'Preparação e licenciamento para operar como subadquirente. Compliance e infraestrutura.',
    color: 'yellow',
    gradient: 'from-yellow-500 to-orange-500',
    features: [
      {
        id: 't1',
        name: 'Certificação PCI-DSS',
        description: 'Compliance PCI-DSS nível adequado para subadquirente',
        priority: 'must',
      },
      {
        id: 't2',
        name: 'Integração com Bandeiras',
        description: 'Conexão direta com Visa, Mastercard, Elo',
        priority: 'must',
      },
      {
        id: 't3',
        name: 'Sistema de Liquidação',
        description: 'Conciliação, liquidação e repasse de valores',
        priority: 'must',
      },
      {
        id: 't4',
        name: 'Registro Banco Central',
        description: 'Licenciamento como instituição de pagamento no Banco Central',
        priority: 'must',
      },
      {
        id: 't5',
        name: 'Compliance e Auditoria',
        description: 'Estrutura de compliance, LGPD, trilhas de auditoria',
        priority: 'must',
      },
      {
        id: 't6',
        name: 'Gestão de Risco',
        description: 'Sistema robusto de análise de risco de crédito e fraude',
        priority: 'must',
      },
      {
        id: 't7',
        name: 'Infraestrutura de Processamento',
        description: 'Escalabilidade para processar alto volume de transações',
        priority: 'should',
      },
      {
        id: 't8',
        name: 'Antifraude ML',
        description: 'Machine Learning para detecção avançada de fraude',
        priority: 'should',
      },
    ],
  },
  {
    id: 'subadquirente',
    name: 'Subadquirente (Q2 2027+)',
    description: 'Operação completa como subadquirente com produtos financeiros.',
    color: 'green',
    gradient: 'from-green-500 to-emerald-600',
    features: [
      {
        id: 's1',
        name: 'Processamento Direto',
        description: 'Processamento próprio de transações com bandeiras',
        priority: 'must',
      },
      {
        id: 's2',
        name: 'Crédito para Merchants',
        description: 'Antecipação de recebíveis e linhas de crédito',
        priority: 'must',
      },
      {
        id: 's3',
        name: 'Banking Integrado',
        description: 'Conta digital, split avançado, saques, transferências',
        priority: 'must',
      },
      {
        id: 's4',
        name: 'App Mobile Merchants',
        description: 'App nativo iOS/Android para gestão mobile',
        priority: 'must',
      },
      {
        id: 's5',
        name: 'Pix Integrado',
        description: 'Pagamentos e recebimentos via Pix',
        priority: 'must',
      },
      {
        id: 's6',
        name: 'Carteiras Digitais',
        description: 'Integração com Apple Pay, Google Pay, Samsung Pay',
        priority: 'should',
      },
      {
        id: 's7',
        name: 'Open Finance',
        description: 'APIs Open Banking para compartilhamento de dados',
        priority: 'should',
      },
      {
        id: 's8',
        name: 'FIDO2/WebAuthn',
        description: 'Autenticação passwordless com biometria',
        priority: 'should',
      },
      {
        id: 's9',
        name: 'Marketplace Features',
        description: 'Funcionalidades específicas para marketplaces (split complexo)',
        priority: 'could',
      },
      {
        id: 's10',
        name: 'Integrações Internacionais',
        description: 'Processamento de transações internacionais',
        priority: 'could',
      },
    ],
  },
];

const PRIORITY_LABELS = {
  must: { label: 'Must Have', color: 'bg-red-500/20 text-red-400 border-red-500/50' },
  should: { label: 'Should Have', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50' },
  could: { label: 'Could Have', color: 'bg-gray-500/20 text-gray-400 border-gray-500/50' },
};

export default function Escopo() {
  const [selectedPhase, setSelectedPhase] = useState<string>(PHASES[0].id);
  const currentPhase = PHASES.find(p => p.id === selectedPhase) || PHASES[0];

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <Link
            href="/"
            className="inline-flex items-center text-kodano-400 hover:text-kodano-300 mb-6 transition-colors group"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar
          </Link>
          <h1 className="text-5xl font-bold text-gradient mb-2">
            Definição de Escopo
          </h1>
          <p className="text-gray-400 font-inter">
            Features planejadas por fase: Gateway → Subadquirente
          </p>
        </div>

        {/* Legenda de Prioridades */}
        <div className="card p-6 mb-8 animate-slide-up">
          <h3 className="text-xl font-bold text-gray-100 mb-4">MoSCoW Prioritization</h3>
          <div className="flex flex-wrap gap-4">
            {Object.entries(PRIORITY_LABELS).map(([key, { label, color }]) => (
              <div key={key} className={`badge border ${color}`}>
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Seletor de Fases */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2 animate-slide-up animation-delay-200">
          {PHASES.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setSelectedPhase(phase.id)}
              className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all transform ${
                selectedPhase === phase.id
                  ? `bg-gradient-to-r ${phase.gradient} text-white shadow-lg scale-105`
                  : `card hover:scale-105 text-gray-300`
              }`}
            >
              {phase.name}
            </button>
          ))}
        </div>

        {/* Descrição da Fase */}
        <div className={`card p-6 mb-8 border-l-4 border-${currentPhase.color}-500 animate-scale-in`}>
          <h2 className="text-3xl font-bold text-gradient mb-3">{currentPhase.name}</h2>
          <p className="text-gray-300 font-inter leading-relaxed">{currentPhase.description}</p>
        </div>

        {/* Features */}
        <div className="grid gap-6">
          {currentPhase.features.map((feature, index) => {
            const priorityConfig = PRIORITY_LABELS[feature.priority];

            return (
              <div
                key={feature.id}
                className="card p-6 group hover:scale-[1.02] animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between mb-4 gap-4 flex-wrap">
                  <h3 className="text-xl font-bold text-gray-100 flex-1 group-hover:text-gradient transition-all duration-300">
                    {feature.name}
                  </h3>
                  <span className={`badge border ${priorityConfig.color}`}>
                    {priorityConfig.label}
                  </span>
                </div>
                <p className="text-gray-400 font-inter leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Resumo */}
        <div className="mt-12 card p-8 border-l-4 border-kodano-600 animate-fade-in">
          <h3 className="text-2xl font-bold text-gradient mb-8">Resumo de Features por Fase</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {PHASES.map((phase) => (
              <div key={phase.id} className={`p-6 rounded-xl bg-${phase.color}-500/10 border border-${phase.color}-500/30`}>
                <h4 className={`font-bold text-xl mb-6 text-${phase.color}-400`}>{phase.name}</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-inter">Total:</span>
                    <span className="font-bold text-2xl text-gray-100">{phase.features.length}</span>
                  </div>
                  <div className="h-px bg-gray-700"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-red-400 font-inter">Must Have:</span>
                    <span className="font-bold text-red-400">{phase.features.filter(f => f.priority === 'must').length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-400 font-inter">Should Have:</span>
                    <span className="font-bold text-yellow-400">{phase.features.filter(f => f.priority === 'should').length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-inter">Could Have:</span>
                    <span className="font-bold text-gray-400">{phase.features.filter(f => f.priority === 'could').length}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
