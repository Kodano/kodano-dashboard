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
    bg: 'bg-blue-500/20',
    border: 'border-blue-500',
    text: 'text-blue-400',
    glow: 'shadow-blue-500/50',
    label: 'Gateway',
  },
  transicao: {
    bg: 'bg-yellow-500/20',
    border: 'border-yellow-500',
    text: 'text-yellow-400',
    glow: 'shadow-yellow-500/50',
    label: 'Transição',
  },
  subadquirente: {
    bg: 'bg-green-500/20',
    border: 'border-green-500',
    text: 'text-green-400',
    glow: 'shadow-green-500/50',
    label: 'Subadquirente',
  },
};

const STATUS_ICONS = {
  completed: { icon: CheckCircleIcon, color: 'text-green-400', label: 'Concluído' },
  'in-progress': { icon: PlayCircleIcon, color: 'text-kodano-400', label: 'Em Andamento' },
  planned: { icon: ClockIcon, color: 'text-gray-500', label: 'Planejado' },
};

export default function Timeline() {
  return (
    <div className="min-h-screen bg-dark-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
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
            Timeline Trimestral
          </h1>
          <p className="text-gray-400 font-inter">
            Roadmap Gateway → Subadquirente (2026-2027)
          </p>
        </div>

        {/* Legenda de Fases */}
        <div className="card p-6 mb-8 animate-slide-up">
          <h3 className="text-xl font-bold text-gray-100 mb-4">Fases do Projeto</h3>
          <div className="flex flex-wrap gap-4">
            {Object.entries(PHASE_COLORS).map(([key, { bg, border, text, label }]) => (
              <div key={key} className={`px-5 py-3 rounded-lg border-l-4 ${bg} ${border}`}>
                <span className={`font-semibold ${text}`}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha vertical com gradient */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-yellow-500 to-green-500 opacity-30"></div>

          <div className="space-y-8">
            {MILESTONES.map((milestone, index) => {
              const phaseConfig = PHASE_COLORS[milestone.phase];
              const statusConfig = STATUS_ICONS[milestone.status];
              const StatusIcon = statusConfig.icon;

              return (
                <div key={milestone.id} className="relative pl-20 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  {/* Ícone na timeline */}
                  <div className={`absolute left-4 w-9 h-9 rounded-full ${phaseConfig.bg} border-4 ${phaseConfig.border} flex items-center justify-center bg-dark-800 shadow-lg ${phaseConfig.glow}`}>
                    <StatusIcon className={`w-5 h-5 ${statusConfig.color}`} />
                  </div>

                  {/* Card do milestone */}
                  <div className={`card p-6 border-l-4 ${phaseConfig.border} group hover:${phaseConfig.glow}`}>
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                      <div>
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <span className={`text-sm font-bold ${phaseConfig.text} font-poppins`}>
                            {milestone.quarter} {milestone.year}
                          </span>
                          <span className={`badge ${phaseConfig.bg} ${phaseConfig.text} border ${phaseConfig.border}`}>
                            {phaseConfig.label}
                          </span>
                          <span className={`text-sm ${statusConfig.color} font-inter`}>
                            {statusConfig.label}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-100 group-hover:text-gradient transition-all duration-300">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-5 font-inter">{milestone.description}</p>

                    <div>
                      <h4 className="font-semibold text-gray-200 mb-3 font-poppins">Entregas:</h4>
                      <ul className="space-y-2">
                        {milestone.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className={`${phaseConfig.text} mt-1`}>•</span>
                            <span className="text-gray-300 font-inter">{deliverable}</span>
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
        <div className="mt-12 card p-8 border-l-4 border-kodano-600 animate-fade-in">
          <h3 className="text-2xl font-bold text-gradient mb-6">Resumo do Roadmap</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/30">
              <div className="text-5xl font-bold text-blue-400 mb-2">
                {MILESTONES.filter(m => m.phase === 'gateway').length}
              </div>
              <div className="text-gray-300 font-inter">Trimestres Gateway</div>
            </div>
            <div className="p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
              <div className="text-5xl font-bold text-yellow-400 mb-2">
                {MILESTONES.filter(m => m.phase === 'transicao').length}
              </div>
              <div className="text-gray-300 font-inter">Trimestres Transição</div>
            </div>
            <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/30">
              <div className="text-5xl font-bold text-green-400 mb-2">
                {MILESTONES.filter(m => m.phase === 'subadquirente').length}
              </div>
              <div className="text-gray-300 font-inter">Trimestres Subadquirente</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
