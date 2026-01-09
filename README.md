# Kodano Dashboard

Dashboard interno para planejamento estratégico da Kodano: transição de Gateway para Subadquirente.

## 🎯 Funcionalidades

### 1. **Anotações**
- Registro de decisões, ideias e insights do projeto
- Categorização: Decisão, Ideia, Reunião, Técnico, Negócio
- Timestamps automáticos
- CRUD completo

### 2. **Timeline Trimestral**
- Visualização do roadmap 2026-2027
- 3 fases: Gateway → Transição → Subadquirente
- 8 milestones com entregas específicas
- Status: Concluído, Em Andamento, Planejado

### 3. **Definição de Escopo**
- Features detalhadas por fase
- Priorização MoSCoW (Must/Should/Could Have)
- **Gateway (Q1-Q3 2026)**: 10 features
- **Transição (Q4 2026 - Q1 2027)**: 8 features
- **Subadquirente (Q2 2027+)**: 10 features

## 🚀 Tecnologias

- **Next.js 15** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Heroicons**
- **date-fns** (formatação de datas)
- **Zustand** (state management - opcional)

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
npm start
```

Acesse: [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura

```
kodano-dashboard/
├── app/
│   ├── anotacoes/          # Página de anotações
│   ├── timeline/           # Timeline trimestral
│   ├── escopo/             # Definição de escopo
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Home
│   └── globals.css         # Estilos globais
├── public/                 # Assets estáticos
├── tailwind.config.ts      # Config Tailwind
├── tsconfig.json           # Config TypeScript
└── package.json
```

## 🎨 Paleta de Cores

**Kodano Brand Colors** (tons de azul):
- `kodano-50` a `kodano-950`
- Base: `#0ea5e9` (azul céu)

## 📝 Roadmap do Projeto

### Fase 1: Gateway (Q1-Q3 2026)
- **Objetivo**: Lançar MVP como gateway de pagamentos
- **MAUs**: 2-10k
- **Features principais**: Integrações adquirentes, Portal Merchant, BackOffice

### Fase 2: Transição (Q4 2026 - Q1 2027)
- **Objetivo**: Preparar infraestrutura e licenciamento
- **Compliance**: PCI-DSS, Banco Central
- **Features principais**: Integração bandeiras, liquidação, risco

### Fase 3: Subadquirente (Q2 2027+)
- **Objetivo**: Operar como subadquirente completo
- **MAUs**: 25-75k
- **Features principais**: Processamento direto, crédito, banking, mobile

## 🔐 Segurança

- Autenticação: FusionAuth/Auth0
- MFA obrigatório para admins
- RBAC por tenant
- Compliance: PCI-DSS, LGPD, Banco Central

## 📊 Dados Persistidos

Atualmente, os dados são armazenados em **memória (estado React)**.

**Próximos passos**:
- [ ] Integrar com backend (.NET)
- [ ] Persistência em PostgreSQL
- [ ] APIs REST para CRUD
- [ ] Autenticação real

## 👥 Equipe

- **CEO**: Definição de estratégia e roadmap
- **Tech Lead**: Arquitetura e implementação
- **Product**: Priorização de features
- **Compliance**: PCI-DSS, LGPD, regulações

---

**Kodano** • Gateway → Subadquirente • 2026-2027
