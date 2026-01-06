# Structure Complète du Projet - Veoma & Co

## 📊 Vue d'Ensemble

Ce document décrit l'architecture complète du site Veoma & Co, incluant tous les fichiers, dossiers et leur rôle.

## 🗂️ Arborescence Détaillée

```
veoma-co-website/
│
├── 📁 .claude/                          # Configuration Claude Code
│   ├── claude.json                      # Config principale
│   ├── README.md                        # Documentation Claude
│   ├── PROJECT_STRUCTURE.md             # Ce fichier
│   └── 📁 rules/                        # Règles de développement
│       ├── design-system.md             # Charte graphique complète
│       ├── frontend-guidelines.md       # Guidelines React/Next.js
│       └── code-standards.md            # Standards TypeScript
│
├── 📁 app/                              # Next.js 15 App Router
│   │
│   ├── 📁 (marketing)/                  # Route group - Pages publiques
│   │   ├── page.tsx                     # Homepage "/"
│   │   ├── layout.tsx                   # Layout marketing (Header + Footer)
│   │   │
│   │   ├── 📁 boutique/                 # E-commerce "/boutique"
│   │   │   ├── page.tsx                 # Catalogue produits
│   │   │   ├── loading.tsx              # Loading state
│   │   │   └── 📁 [slug]/               # Route dynamique produit
│   │   │       └── page.tsx             # Fiche produit "/boutique/chemise-service"
│   │   │
│   │   ├── 📁 projet/                   # Formulaire wizard "/projet"
│   │   │   ├── page.tsx                 # Formulaire multi-étapes
│   │   │   └── success/                 # Page de confirmation
│   │   │       └── page.tsx
│   │   │
│   │   ├── 📁 expertise/                # Pages métier "/expertise"
│   │   │   ├── page.tsx                 # Hub expertise (liste des métiers)
│   │   │   └── 📁 [secteur]/            # Pages secteur
│   │   │       ├── page.tsx             # "/expertise/hotellerie"
│   │   │       └── layout.tsx
│   │   │
│   │   └── 📁 contact/                  # Contact "/contact"
│   │       └── page.tsx
│   │
│   ├── 📁 (legal)/                      # Route group - Pages légales
│   │   ├── layout.tsx                   # Layout simplifié (sans navigation)
│   │   ├── 📁 mentions-legales/
│   │   │   └── page.tsx
│   │   ├── 📁 cgv/                      # Conditions générales de vente
│   │   │   └── page.tsx
│   │   ├── 📁 politique-confidentialite/
│   │   │   └── page.tsx
│   │   └── 📁 faq/
│   │       └── page.tsx
│   │
│   ├── 📁 api/                          # API Routes (optionnel)
│   │   ├── 📁 contact/
│   │   │   └── route.ts                 # POST /api/contact
│   │   └── 📁 projet/
│   │       └── route.ts                 # POST /api/projet
│   │
│   ├── layout.tsx                       # Root layout (global)
│   ├── globals.css                      # Styles CSS globaux + Tailwind
│   ├── error.tsx                        # Error boundary global
│   ├── not-found.tsx                    # Page 404
│   └── loading.tsx                      # Loading global
│
├── 📁 components/                       # Composants React
│   │
│   ├── 📁 ui/                           # Composants UI réutilisables
│   │   ├── Button.tsx                   # Bouton (primary, secondary, ghost)
│   │   ├── Card.tsx                     # Carte générique
│   │   ├── Badge.tsx                    # Badge "Personnalisable", etc.
│   │   ├── Input.tsx                    # Input avec floating label
│   │   ├── Textarea.tsx                 # Textarea avec floating label
│   │   ├── Select.tsx                   # Select custom
│   │   ├── CardSelect.tsx               # Carte sélectionnable (wizard)
│   │   ├── ProgressBar.tsx              # Barre de progression wizard
│   │   ├── Modal.tsx                    # Modale
│   │   ├── Toast.tsx                    # Notifications toast
│   │   └── index.ts                     # Barrel export
│   │
│   ├── 📁 layout/                       # Composants de layout
│   │   ├── Header.tsx                   # Header principal
│   │   ├── Footer.tsx                   # Footer
│   │   ├── Navigation.tsx               # Menu navigation
│   │   ├── MobileMenu.tsx               # Menu burger mobile
│   │   └── index.ts
│   │
│   ├── 📁 sections/                     # Sections de page
│   │   ├── Hero.tsx                     # Hero section homepage
│   │   ├── ProductGrid.tsx              # Grille de produits
│   │   ├── ProductCard.tsx              # Carte produit
│   │   ├── ProductFilter.tsx            # Filtres produits
│   │   ├── CategoryShowcase.tsx         # Showcase des catégories
│   │   ├── Testimonials.tsx             # Section témoignages clients
│   │   ├── LogoCloud.tsx                # Logos clients
│   │   ├── ProcessSteps.tsx             # Étapes du processus
│   │   ├── CTASection.tsx               # Call-to-action section
│   │   └── index.ts
│   │
│   └── 📁 forms/                        # Composants formulaires
│       ├── 📁 ProjectWizard/            # Formulaire wizard projet
│       │   ├── index.tsx                # Composant principal
│       │   ├── StepIndicator.tsx        # Indicateur d'étapes
│       │   ├── StepOne.tsx              # Étape 1: Coordonnées
│       │   ├── StepTwo.tsx              # Étape 2: Type de besoin
│       │   ├── StepThree.tsx            # Étape 3: Style & Détails
│       │   ├── StepFour.tsx             # Étape 4: Validation
│       │   ├── useWizardState.ts        # Hook custom state wizard
│       │   ├── types.ts                 # Types TypeScript
│       │   └── constants.ts             # Constantes (étapes, etc.)
│       │
│       └── ContactForm.tsx              # Formulaire contact simple
│
├── 📁 lib/                              # Utilitaires & Logique
│   ├── utils.ts                         # Fonctions utilitaires (cn, etc.)
│   ├── formatters.ts                    # Formatage prix, dates, etc.
│   ├── validators.ts                    # Validation email, téléphone, etc.
│   ├── constants.ts                     # Constantes globales
│   ├── types.ts                         # Types TypeScript globaux
│   └── 📁 hooks/                        # Custom hooks
│       ├── useLocalStorage.ts           # Hook localStorage
│       ├── useCart.ts                   # Hook panier
│       └── useMediaQuery.ts             # Hook responsive
│
├── 📁 public/                           # Assets statiques
│   ├── 📁 images/                       # Images
│   │   ├── 📁 products/                 # Photos produits
│   │   ├── 📁 hero/                     # Images hero sections
│   │   ├── 📁 expertise/                # Images métiers
│   │   ├── 📁 process/                  # Images processus
│   │   └── logo.svg                     # Logo Veoma & Co
│   │
│   ├── 📁 icons/                        # Icônes SVG custom
│   │   ├── scissors.svg
│   │   ├── measuring-tape.svg
│   │   └── ...
│   │
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
│
├── 📁 styles/                           # Styles additionnels (optionnel)
│   └── animations.css                   # Animations custom
│
├── 📁 types/                            # Types TypeScript globaux
│   └── global.d.ts                      # Déclarations globales
│
├── 📄 .env.local                        # Variables d'environnement (ignoré git)
├── 📄 .env.example                      # Exemple de variables
├── 📄 .gitignore                        # Git ignore
├── 📄 .prettierrc                       # Config Prettier
├── 📄 .eslintrc.json                    # Config ESLint
│
├── 📄 next.config.ts                    # Configuration Next.js
├── 📄 tailwind.config.ts                # Configuration Tailwind
├── 📄 postcss.config.mjs                # Configuration PostCSS
├── 📄 tsconfig.json                     # Configuration TypeScript
│
├── 📄 package.json                      # Dépendances npm
├── 📄 package-lock.json
│
├── 📄 README.md                         # Documentation principale
├── 📄 DESIGN_GUIDE.md                   # Guide de design complet
└── 📄 CHANGELOG.md                      # Historique des versions
```

## 🎯 Navigation & Routes

### Pages Publiques (Marketing)

| URL | Fichier | Description |
|-----|---------|-------------|
| `/` | `app/(marketing)/page.tsx` | Homepage |
| `/boutique` | `app/(marketing)/boutique/page.tsx` | Catalogue produits |
| `/boutique/[slug]` | `app/(marketing)/boutique/[slug]/page.tsx` | Fiche produit |
| `/projet` | `app/(marketing)/projet/page.tsx` | Formulaire wizard |
| `/projet/success` | `app/(marketing)/projet/success/page.tsx` | Confirmation projet |
| `/expertise` | `app/(marketing)/expertise/page.tsx` | Hub expertise |
| `/expertise/hotellerie` | `app/(marketing)/expertise/[secteur]/page.tsx` | Page métier |
| `/contact` | `app/(marketing)/contact/page.tsx` | Contact |

### Pages Légales

| URL | Fichier | Description |
|-----|---------|-------------|
| `/mentions-legales` | `app/(legal)/mentions-legales/page.tsx` | Mentions légales |
| `/cgv` | `app/(legal)/cgv/page.tsx` | CGV |
| `/politique-confidentialite` | `app/(legal)/politique-confidentialite/page.tsx` | RGPD |
| `/faq` | `app/(legal)/faq/page.tsx` | FAQ |

### API Routes

| Endpoint | Méthode | Fichier | Description |
|----------|---------|---------|-------------|
| `/api/contact` | POST | `app/api/contact/route.ts` | Envoi formulaire contact |
| `/api/projet` | POST | `app/api/projet/route.ts` | Soumission projet wizard |

## 🎨 Composants Clés

### UI Components (`components/ui/`)

| Composant | Fichier | Usage | Props Clés |
|-----------|---------|-------|------------|
| **Button** | `Button.tsx` | CTA primaire/secondaire | `variant`, `size`, `disabled` |
| **Card** | `Card.tsx` | Container générique | `className`, `padding` |
| **Badge** | `Badge.tsx` | "Personnalisable", etc. | `variant`, `children` |
| **Input** | `Input.tsx` | Champ texte floating label | `label`, `error`, `required` |
| **CardSelect** | `CardSelect.tsx` | Sélection wizard | `selected`, `onSelect`, `icon` |
| **ProgressBar** | `ProgressBar.tsx` | Barre wizard | `currentStep`, `totalSteps` |

### Layout Components (`components/layout/`)

| Composant | Fichier | Description |
|-----------|---------|-------------|
| **Header** | `Header.tsx` | Header avec logo, nav, CTA projet |
| **Footer** | `Footer.tsx` | Footer bleu nuit avec liens |
| **Navigation** | `Navigation.tsx` | Menu principal desktop |
| **MobileMenu** | `MobileMenu.tsx` | Menu burger mobile |

### Section Components (`components/sections/`)

| Composant | Fichier | Usage | Props |
|-----------|---------|-------|-------|
| **Hero** | `Hero.tsx` | Hero homepage | `title`, `subtitle`, `backgroundImage`, `cta` |
| **ProductGrid** | `ProductGrid.tsx` | Grille produits | `products[]`, `columns` |
| **ProductCard** | `ProductCard.tsx` | Carte produit | `product`, `onAddToCart` |
| **ProductFilter** | `ProductFilter.tsx` | Filtres boutique | `onFilterChange`, `categories` |
| **Testimonials** | `Testimonials.tsx` | Citations clients | `testimonials[]` |
| **LogoCloud** | `LogoCloud.tsx` | Logos clients | `logos[]` |

### Form Components (`components/forms/`)

| Composant | Fichier | Description |
|-----------|---------|-------------|
| **ProjectWizard** | `ProjectWizard/index.tsx` | Formulaire multi-étapes complet |
| **StepIndicator** | `ProjectWizard/StepIndicator.tsx` | Barre de progression |
| **StepOne** | `ProjectWizard/StepOne.tsx` | Étape 1: Coordonnées |
| **StepTwo** | `ProjectWizard/StepTwo.tsx` | Étape 2: Types de besoins |
| **StepThree** | `ProjectWizard/StepThree.tsx` | Étape 3: Style & Détails |
| **StepFour** | `ProjectWizard/StepFour.tsx` | Étape 4: Récapitulatif |
| **ContactForm** | `ContactForm.tsx` | Formulaire contact simple |

## 🛠️ Utilitaires (`lib/`)

### Fonctions Utilitaires

| Fichier | Fonctions | Usage |
|---------|-----------|-------|
| **utils.ts** | `cn()` | Merge classes Tailwind |
| **formatters.ts** | `formatPrice()`, `formatDate()`, `truncate()`, `slugify()` | Formatage données |
| **validators.ts** | `isValidEmail()`, `isValidPhoneFR()`, `isValidFileSize()` | Validation |
| **constants.ts** | `PRODUCT_CATEGORIES`, `WIZARD_STEPS`, etc. | Constantes |

### Types (`lib/types.ts`)

```typescript
// Principaux types du projet
export interface Product {
  id: string
  title: string
  slug: string
  description: string
  price: number
  category: ProductCategory
  images: ProductImage[]
  isCustomizable: boolean
  inStock: boolean
}

export interface ProjectFormData {
  companyName: string
  contactEmail: string
  jobTypes: string[]
  quantity: number
  description: string
  attachments?: File[]
}

export enum ProductCategory {
  HOTELLERIE = 'hotellerie',
  CUISINE = 'cuisine',
  ACCUEIL = 'accueil',
  SECURITE = 'securite',
  CORPORATE = 'corporate',
}
```

### Custom Hooks (`lib/hooks/`)

| Hook | Fichier | Usage |
|------|---------|-------|
| **useLocalStorage** | `useLocalStorage.ts` | Persist state dans localStorage |
| **useCart** | `useCart.ts` | Gestion panier e-commerce |
| **useMediaQuery** | `useMediaQuery.ts` | Responsive breakpoints |

## 📦 Dépendances Principales

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "@heroicons/react": "^2.0.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^15.0.0",
    "prettier": "^3.0.0",
    "prettier-plugin-tailwindcss": "^0.5.0"
  }
}
```

## 🔧 Configuration

### Next.js (`next.config.ts`)

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig
```

### Tailwind (`tailwind.config.ts`)

Voir [.claude/rules/design-system.md](.claude/rules/design-system.md) pour la configuration complète.

### TypeScript (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": ["./*"]
    },
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 🚀 Scripts NPM

| Script | Commande | Description |
|--------|----------|-------------|
| `dev` | `next dev` | Serveur de développement |
| `build` | `next build` | Build production |
| `start` | `next start` | Serveur production |
| `lint` | `next lint` | ESLint |
| `type-check` | `tsc --noEmit` | Vérification TypeScript |
| `format` | `prettier --write .` | Formatage Prettier |

## 📚 Documentation Associée

- [README.md](../README.md) - Documentation principale du projet
- [DESIGN_GUIDE.md](../DESIGN_GUIDE.md) - Guide de design complet
- [.claude/rules/design-system.md](rules/design-system.md) - Charte graphique détaillée
- [.claude/rules/frontend-guidelines.md](rules/frontend-guidelines.md) - Guidelines React/Next.js
- [.claude/rules/code-standards.md](rules/code-standards.md) - Standards de code

---

**Dernière mise à jour**: 2026-01-06
**Statut**: Architecture initiale définie
