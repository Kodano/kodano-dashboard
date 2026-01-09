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
  features: Feature[];
}

const PHASES: Phase[] = [
  {
    id: 'gateway',
    name: 'Gateway (Q1-Q3 2026)',
    description: 'Fase inicial como gateway de pagamentos. Foco em integrações com adquirentes e merchants.',
    color: 'blue',
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
  must: { label: 'Must Have', color: 'bg-red-100 text-red-800 border-red-300' },
  should: { label: 'Should Have', color: 'bg-yellow-100 text-yellow-800 border-yellow-300' },
  could: { label: 'Could Have', color: 'bg-gray-100 text-gray-800 border-gray-300' },
};

export default function Escopo() {
  const [selectedPhase, setSelectedPhase] = useState<string>(PHASES[0].id);
  const currentPhase = PHASES.find(p => p.id === selectedPhase) || PHASES[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-kodano-600 hover:text-kodano-700 mb-4"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Voltar
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Definição de Escopo
          </h1>
          <p className="text-gray-600">
            Features planejadas por fase: Gateway → Subadquirente
          </p>
        </div>

        {/* Legenda de Prioridades */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-bold mb-4">MoSCoW Prioritization</h3>
          <div className="flex flex-wrap gap-4">
            {Object.entries(PRIORITY_LABELS).map(([key, { label, color }]) => (
              <div key={key} className={`px-4 py-2 rounded-lg border ${color}`}>
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Seletor de Fases */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {PHASES.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setSelectedPhase(phase.id)}
              className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
                selectedPhase === phase.id
                  ? `bg-${phase.color}-600 text-white shadow-lg`
                  : `bg-white text-gray-700 hover:bg-gray-100`
              }`}
            >
              {phase.name}
            </button>
          ))}
        </div>

        {/* Descrição da Fase */}
        <div className={`bg-${currentPhase.color}-50 rounded-lg p-6 mb-8 border-l-4 border-${currentPhase.color}-600`}>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentPhase.name}</h2>
          <p className="text-gray-700">{currentPhase.description}</p>
        </div>

        {/* Features */}
        <div className="grid gap-6">
          {currentPhase.features.map((feature) => {
            const priorityConfig = PRIORITY_LABELS[feature.priority];

            return (
              <div
                key={feature.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 flex-1">{feature.name}</h3>
                  <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${priorityConfig.color} ml-4`}>
                    {priorityConfig.label}
                  </span>
                </div>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Resumo */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-6">Resumo de Features por Fase</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {PHASES.map((phase) => (
              <div key={phase.id} className={`p-6 rounded-lg bg-${phase.color}-50`}>
                <h4 className="font-bold text-lg mb-4">{phase.name}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Total:</span>
                    <span className="font-bold">{phase.features.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-700">Must Have:</span>
                    <span className="font-bold">{phase.features.filter(f => f.priority === 'must').length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-yellow-700">Should Have:</span>
                    <span className="font-bold">{phase.features.filter(f => f.priority === 'should').length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Could Have:</span>
                    <span className="font-bold">{phase.features.filter(f => f.priority === 'could').length}</span>
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
