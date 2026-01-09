"use client";

import Link from 'next/link';
import { ArrowLeftIcon, CheckCircleIcon, ClockIcon, PlayCircleIcon } from '@heroicons/react/24/outline';

interface Milestone {
  id: string;
  quarter: string;
  year: number;
  phase: 'gateway' | 'transicao' | 'subadquirente';
  title: string;
  description: string;
  deliverables: string[];
  status: 'completed' | 'in-progress' | 'planned';
}

const MILESTONES: Milestone[] = [
  {
    id: '1',
    quarter: 'Q1',
    year: 2026,
    phase: 'gateway',
    title: 'MVP Gateway de Pagamentos',
    description: 'Lançamento inicial como gateway com funcionalidades básicas',
    deliverables: [
      'Integração com 3-4 adquirentes (Rede, Cielo, Stone)',
      'Portal Merchant v1 (dashboard, relatórios)',
      'BackOffice administrativo',
      'Sistema de onboarding (KYC básico)',
      'Autenticação FusionAuth/Auth0',
    ],
    status: 'in-progress',
  },
  {
    id: '2',
    quarter: 'Q2',
    year: 2026,
    phase: 'gateway',
    title: 'Consolidação Gateway',
    description: 'Melhoria de performance e expansão de integrações',
    deliverables: [
      'Integração com plataformas e-commerce (VTEX, Shopify)',
      'APIs públicas para desenvolvedores',
      'Dashboard de analytics avançado',
      'Suporte a webhooks',
      'Compliance PCI-DSS v4.0',
    ],
    status: 'planned',
  },
  {
    id: '3',
    quarter: 'Q3',
    year: 2026,
    phase: 'gateway',
    title: 'Escala e Otimização',
    description: 'Crescimento da base de merchants e otimização de custos',
    deliverables: [
      'Autenticação adaptativa (risk-based)',
      'MFA obrigatório para admins',
      'Sistema de antifraude básico',
      'Split de pagamentos v1',
      'Meta: 5-10k MAUs',
    ],
    status: 'planned',
  },
  {
    id: '4',
    quarter: 'Q4',
    year: 2026,
    phase: 'transicao',
    title: 'Preparação Subadquirente',
    description: 'Início da transição para modelo de subadquirente',
    deliverables: [
      'Certificação PCI-DSS nível adequado',
      'Integração direta com bandeiras (Visa/Mastercard)',
      'Sistema de liquidação e conciliação',
      'Estrutura de compliance e auditoria',
      'Contratação de equipe especializada',
    ],
    status: 'planned',
  },
  {
    id: '5',
    quarter: 'Q1',
    year: 2027,
    phase: 'transicao',
    title: 'Licenciamento e Regulação',
    description: 'Obtenção de licenças e aprovações regulatórias',
    deliverables: [
      'Registro como subadquirente no Banco Central',
      'Aprovação das bandeiras',
      'Infraestrutura de processamento própria',
      'Sistema de gestão de risco robusto',
      'Antifraude avançado (ML)',
    ],
    status: 'planned',
  },
  {
    id: '6',
    quarter: 'Q2',
    year: 2027,
    phase: 'subadquirente',
    title: 'Lançamento Subadquirente',
    description: 'Go-live como subadquirente completo',
    deliverables: [
      'Processamento direto de transações',
      'Produtos financeiros (crédito, antecipação)',
      'App mobile para merchants',
      'Banking integrado (split, saques)',
      'Meta: 20-30k MAUs',
    ],
    status: 'planned',
  },
  {
    id: '7',
    quarter: 'Q3',
    year: 2027,
    phase: 'subadquirente',
    title: 'Expansão de Produtos',
    description: 'Lançamento de novos produtos financeiros',
    deliverables: [
      'Crédito para merchants',
      'Carteiras digitais',
      'Pix integrado',
      'Open Finance / Open Banking',
      'Parcerias com fintechs',
    ],
    status: 'planned',
  },
  {
    id: '8',
    quarter: 'Q4',
    year: 2027,
    phase: 'subadquirente',
    title: 'Escala Subadquirente',
    description: 'Crescimento acelerado e consolidação de mercado',
    deliverables: [
      'Expansão para novos segmentos (B2C, marketplaces)',
      'Integrações internacionais',
      'FIDO2/WebAuthn (passwordless)',
      'Biometria mobile',
      'Meta: 50-75k MAUs',
    ],
    status: 'planned',
  },
];

const PHASE_COLORS = {
  gateway: {
    bg: 'bg-blue-50',
    border: 'border-blue-500',
    text: 'text-blue-700',
    label: 'Gateway',
  },
  transicao: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-500',
    text: 'text-yellow-700',
    label: 'Transição',
  },
  subadquirente: {
    bg: 'bg-green-50',
    border: 'border-green-500',
    text: 'text-green-700',
    label: 'Subadquirente',
  },
};

const STATUS_ICONS = {
  completed: { icon: CheckCircleIcon, color: 'text-green-600', label: 'Concluído' },
  'in-progress': { icon: PlayCircleIcon, color: 'text-blue-600', label: 'Em Andamento' },
  planned: { icon: ClockIcon, color: 'text-gray-400', label: 'Planejado' },
};

export default function Timeline() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
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
            Timeline Trimestral
          </h1>
          <p className="text-gray-600">
            Roadmap Gateway → Subadquirente (2026-2027)
          </p>
        </div>

        {/* Legenda de Fases */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-bold mb-4">Fases do Projeto</h3>
          <div className="flex flex-wrap gap-4">
            {Object.entries(PHASE_COLORS).map(([key, { bg, border, text, label }]) => (
              <div key={key} className={`px-4 py-2 rounded-lg border-l-4 ${bg} ${border}`}>
                <span className={`font-medium ${text}`}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha vertical */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-300"></div>

          <div className="space-y-8">
            {MILESTONES.map((milestone, index) => {
              const phaseConfig = PHASE_COLORS[milestone.phase];
              const statusConfig = STATUS_ICONS[milestone.status];
              const StatusIcon = statusConfig.icon;

              return (
                <div key={milestone.id} className="relative pl-20">
                  {/* Ícone na timeline */}
                  <div className={`absolute left-4 w-9 h-9 rounded-full ${phaseConfig.bg} border-4 ${phaseConfig.border} flex items-center justify-center bg-white`}>
                    <StatusIcon className={`w-5 h-5 ${statusConfig.color}`} />
                  </div>

                  {/* Card do milestone */}
                  <div className={`bg-white rounded-lg shadow-lg p-6 border-l-4 ${phaseConfig.border}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-sm font-bold ${phaseConfig.text}`}>
                            {milestone.quarter} {milestone.year}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${phaseConfig.bg} ${phaseConfig.text}`}>
                            {phaseConfig.label}
                          </span>
                          <span className={`text-sm ${statusConfig.color}`}>
                            {statusConfig.label}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{milestone.title}</h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{milestone.description}</p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Entregas:</h4>
                      <ul className="space-y-2">
                        {milestone.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-kodano-600 mt-1">•</span>
                            <span className="text-gray-700">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer com resumo */}
        <div className="mt-12 bg-kodano-50 rounded-lg p-6 border-l-4 border-kodano-600">
          <h3 className="text-xl font-bold text-kodano-900 mb-4">Resumo do Roadmap</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {MILESTONES.filter(m => m.phase === 'gateway').length}
              </div>
              <div className="text-gray-700">Trimestres Gateway</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                {MILESTONES.filter(m => m.phase === 'transicao').length}
              </div>
              <div className="text-gray-700">Trimestres Transição</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {MILESTONES.filter(m => m.phase === 'subadquirente').length}
              </div>
              <div className="text-gray-700">Trimestres Subadquirente</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
