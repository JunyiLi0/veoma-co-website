# Guidelines Frontend - Veoma & Co

## 🏗️ Architecture Next.js 15

### Structure de Projet

```
veoma-co-website/
├── app/
│   ├── (marketing)/          # Routes publiques
│   │   ├── page.tsx          # Homepage
│   │   ├── boutique/
│   │   │   ├── page.tsx      # Catalogue
│   │   │   └── [slug]/
│   │   │       └── page.tsx  # Fiche produit
│   │   ├── projet/
│   │   │   └── page.tsx      # Formulaire wizard
│   │   ├── expertise/
│   │   │   ├── page.tsx      # Hub expertise
│   │   │   └── [secteur]/
│   │   │       └── page.tsx  # Page métier
│   │   └── contact/
│   │       └── page.tsx
│   ├── (legal)/              # Pages légales
│   │   ├── mentions-legales/
│   │   ├── cgv/
│   │   └── faq/
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Styles globaux
├── components/
│   ├── ui/                   # Composants réutilisables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   ├── layout/               # Composants layout
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/             # Sections de page
│   │   ├── Hero.tsx
│   │   ├── ProductGrid.tsx
│   │   └── ...
│   └── forms/                # Composants formulaires
│       ├── ProjectWizard/
│       └── ...
├── lib/
│   ├── utils.ts              # Utilitaires
│   ├── constants.ts          # Constantes
│   └── types.ts              # Types TypeScript
└── public/
    ├── images/
    └── icons/
```

### Règles d'Organisation

1. **Route Groups**: Utiliser `(marketing)`, `(legal)`, etc. pour organiser sans affecter l'URL
2. **Colocation**: Placer les composants proches de leur usage
3. **Barrel Exports**: Créer des `index.ts` pour faciliter les imports
4. **Naming**:
   - Composants: PascalCase (`ProductCard.tsx`)
   - Utilitaires: camelCase (`formatPrice.ts`)
   - Constantes: SCREAMING_SNAKE_CASE (`PRODUCT_CATEGORIES`)

## ⚛️ Composants React

### Règles de Composition

#### 1. Server Components par Défaut
```tsx
// app/boutique/page.tsx
// Server Component (par défaut)
export default async function BoutiquePage() {
  // Fetching côté serveur
  const products = await fetchProducts()

  return (
    <main className="container py-12">
      <h1 className="font-display text-4xl text-[#1B2A41] mb-8">
        Notre Boutique
      </h1>
      <ProductGrid products={products} />
    </main>
  )
}
```

#### 2. Client Components Uniquement si Nécessaire
```tsx
'use client'

// components/forms/ProjectWizard/StepSelector.tsx
import { useState } from 'react'

export function StepSelector() {
  const [selectedStep, setSelectedStep] = useState(1)

  // Interactions client nécessaires
  return (
    <div>
      {/* ... */}
    </div>
  )
}
```

**Règle**: Ajouter `'use client'` UNIQUEMENT si vous utilisez:
- `useState`, `useEffect`, hooks React
- Event handlers (`onClick`, `onChange`, etc.)
- Browser APIs (`window`, `localStorage`, etc.)

#### 3. Composition Props
```tsx
// ✅ BON: Props typées et destructurées
interface ProductCardProps {
  title: string
  price: number
  category: string
  image: string
  isCustomizable?: boolean
}

export function ProductCard({
  title,
  price,
  category,
  image,
  isCustomizable = false
}: ProductCardProps) {
  return (
    <article className="group bg-white hover:shadow-2xl transition-shadow duration-300">
      {/* ... */}
    </article>
  )
}

// ❌ MAUVAIS: Props non typées
export function ProductCard(props) {
  return <div>{props.title}</div>
}
```

### Pattern de Composants

#### Composant UI Réutilisable
```tsx
// components/ui/Button.tsx
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Styles de base
          'font-body font-semibold uppercase tracking-wide rounded transition-all duration-300',
          'focus-visible:outline-2 focus-visible:outline-offset-2',

          // Variants
          variant === 'primary' && 'bg-[#C5A065] text-white hover:bg-[#B39055] focus-visible:outline-[#C5A065]',
          variant === 'secondary' && 'bg-transparent text-[#1B2A41] border-2 border-[#1B2A41] hover:bg-[#1B2A41] hover:text-white',
          variant === 'ghost' && 'bg-transparent text-[#1B2A41] hover:bg-[#F9F9F7]',

          // Sizes
          size === 'sm' && 'px-4 py-2 text-sm',
          size === 'md' && 'px-8 py-4',
          size === 'lg' && 'px-12 py-5 text-lg',

          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
```

#### Composant de Section
```tsx
// components/sections/Hero.tsx
interface HeroProps {
  title: string
  subtitle: string
  backgroundImage: string
  ctaPrimary: {
    label: string
    href: string
  }
  ctaSecondary?: {
    label: string
    href: string
  }
}

export function Hero({
  title,
  subtitle,
  backgroundImage,
  ctaPrimary,
  ctaSecondary
}: HeroProps) {
  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B2A41]/30 to-[#1B2A41]/60" />

      {/* Content */}
      <div className="relative z-10 container text-center text-white">
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
          {title}
        </h1>
        <p className="font-body text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" asChild>
            <a href={ctaPrimary.href}>{ctaPrimary.label}</a>
          </Button>

          {ctaSecondary && (
            <Button variant="secondary" size="lg" asChild>
              <a href={ctaSecondary.href}>{ctaSecondary.label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
```

## 🎨 Tailwind CSS

### Configuration (tailwind.config.ts)

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#1B2A41',
        'muted-gold': '#C5A065',
        'off-white': '#F9F9F7',
        'slate-grey': '#6B7280',
        'sage-green': '#4A7C59',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      aspectRatio: {
        'product': '3/4',
      },
      transitionDuration: {
        'fast': '200ms',
        'base': '300ms',
        'slow': '500ms',
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
}

export default config
```

### Classes Utilitaires Personnalisées

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --font-display: 'Playfair Display', serif;
    --font-body: 'Lato', sans-serif;
  }

  body {
    @apply font-body text-midnight-blue bg-off-white;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display;
  }
}

@layer components {
  .container {
    @apply max-w-7xl mx-auto px-4 md:px-8 lg:px-12;
  }

  .section-spacing {
    @apply py-16 md:py-24 lg:py-32;
  }

  .btn-primary {
    @apply bg-muted-gold text-white font-body font-semibold uppercase tracking-wide px-8 py-4 rounded transition-all duration-base hover:bg-[#B39055] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-muted-gold;
  }

  .btn-secondary {
    @apply bg-transparent text-midnight-blue border-2 border-midnight-blue font-body font-medium uppercase tracking-wide px-8 py-4 rounded transition-all duration-base hover:bg-midnight-blue hover:text-white;
  }

  .input-floating {
    @apply peer w-full px-4 pt-6 pb-2 border-2 border-slate-grey rounded font-body text-midnight-blue transition-all duration-200 focus:border-muted-gold focus:outline-none;
  }

  .label-floating {
    @apply absolute left-4 top-1/2 -translate-y-1/2 text-slate-grey font-body transition-all duration-200 pointer-events-none peer-focus:top-3 peer-focus:text-xs peer-focus:text-midnight-blue peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

### Bonnes Pratiques Tailwind

#### ✅ À FAIRE
```tsx
// Utiliser les classes de la config
<div className="bg-midnight-blue text-white">

// Grouper les classes logiquement
<button className="
  bg-muted-gold text-white
  px-8 py-4
  rounded
  hover:bg-[#B39055]
  focus-visible:outline-2
">

// Responsive avec mobile-first
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

// Utiliser cn() pour la composition conditionnelle
<div className={cn(
  'base-classes',
  isActive && 'active-classes',
  className
)}>
```

#### ❌ À ÉVITER
```tsx
// Ne pas utiliser de styles inline si possible
<div style={{ backgroundColor: '#1B2A41' }}>

// Ne pas créer de classes custom inutiles
// Préférer Tailwind directement
<div className="my-custom-card">

// Ne pas utiliser !important
<div className="!bg-red-500">

// Ne pas utiliser de valeurs arbitraires quand une classe config existe
<div className="bg-[#1B2A41]"> // ❌
<div className="bg-midnight-blue"> // ✅
```

## 📊 Gestion de Données

### Fetching Côté Serveur (Recommandé)

```tsx
// app/boutique/page.tsx
import { Product } from '@/lib/types'

async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://api.example.com/products', {
    next: { revalidate: 3600 } // Cache 1h
  })

  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }

  return res.json()
}

export default async function BoutiquePage() {
  const products = await getProducts()

  return (
    <main>
      <ProductGrid products={products} />
    </main>
  )
}
```

### State Management Client

```tsx
'use client'

import { useState, useCallback } from 'react'

export function ProductFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500])

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category)
  }, [])

  return (
    <aside>
      {/* Filters UI */}
    </aside>
  )
}
```

### Types TypeScript

```typescript
// lib/types.ts
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

export enum ProductCategory {
  HOTELLERIE = 'hotellerie',
  CUISINE = 'cuisine',
  ACCUEIL = 'accueil',
  SECURITE = 'securite',
  CORPORATE = 'corporate',
}

export interface ProductImage {
  url: string
  alt: string
  width: number
  height: number
}

export interface WizardStep {
  id: number
  title: string
  description: string
  isCompleted: boolean
  isActive: boolean
}

export interface ProjectFormData {
  companyName: string
  contactEmail: string
  jobTypes: string[]
  quantity: number
  description: string
  attachments?: File[]
}
```

## ♿ Accessibilité

### Règles WCAG AA

#### 1. Contraste de Couleurs
```tsx
// ✅ BON: Contraste suffisant
<p className="text-midnight-blue">Texte principal</p>
<div className="bg-midnight-blue text-white">Texte sur fond sombre</div>

// ❌ MAUVAIS: Contraste insuffisant
<p className="text-muted-gold">Texte Or sur fond blanc</p>
```

#### 2. Focus Visible
```tsx
// Toujours ajouter un focus visible
<button className="
  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-muted-gold
">
```

#### 3. Labels de Formulaire
```tsx
// ✅ BON: Label associé
<div>
  <label htmlFor="email" className="sr-only">Email</label>
  <input id="email" type="email" />
</div>

// ❌ MAUVAIS: Pas de label
<input type="email" placeholder="Email" />
```

#### 4. Attributs ARIA
```tsx
// Navigation
<nav aria-label="Navigation principale">

// Barre de progression
<div
  role="progressbar"
  aria-valuenow={currentStep}
  aria-valuemin={1}
  aria-valuemax={totalSteps}
  aria-label={`Étape ${currentStep} sur ${totalSteps}`}
>

// Bouton avec icône
<button aria-label="Fermer le menu">
  <XIcon aria-hidden="true" />
</button>

// Section de produits
<section aria-labelledby="products-heading">
  <h2 id="products-heading">Nos Produits</h2>
</section>
```

#### 5. Navigation Clavier
```tsx
'use client'

import { useRef, KeyboardEvent } from 'react'

export function CardSelect({ onSelect }: { onSelect: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onSelect()
    }
  }

  return (
    <div
      ref={cardRef}
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      className="card-select"
    >
      {/* Content */}
    </div>
  )
}
```

## 🚀 Performance

### Optimisation Images

```tsx
import Image from 'next/image'

// ✅ BON: Next.js Image avec lazy loading
<Image
  src="/products/chemise.jpg"
  alt="Chemise service hôtellerie"
  width={1200}
  height={1600}
  className="object-cover"
  loading="lazy"
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
/>

// Pour les images de fond (Hero)
<div className="relative">
  <Image
    src="/hero-bg.jpg"
    alt=""
    fill
    className="object-cover"
    priority // Pas de lazy loading pour hero
    quality={90}
  />
</div>
```

### Code Splitting

```tsx
// Lazy load de composants lourds
import dynamic from 'next/dynamic'

const ProjectWizard = dynamic(
  () => import('@/components/forms/ProjectWizard'),
  {
    loading: () => <p>Chargement...</p>,
    ssr: false // Désactiver SSR si nécessaire
  }
)

export default function ProjetPage() {
  return (
    <main>
      <h1>Confiez-nous votre projet</h1>
      <ProjectWizard />
    </main>
  )
}
```

### Metadata SEO

```tsx
// app/boutique/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boutique - Uniformes Professionnels | Veoma & Co',
  description: 'Découvrez notre collection d\'uniformes professionnels pour hôtellerie, restauration, sécurité et corporate. Qualité premium et personnalisable.',
  openGraph: {
    title: 'Boutique Veoma & Co',
    description: 'Uniformes professionnels de qualité',
    images: ['/og-image.jpg'],
  },
}

export default function BoutiquePage() {
  return <main>{/* ... */}</main>
}
```

## 🧪 Testing (Recommandations)

### Tests Unitaires (Vitest + React Testing Library)

```tsx
// __tests__/components/Button.test.tsx
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/Button'

describe('Button', () => {
  it('renders primary variant correctly', () => {
    render(<Button variant="primary">Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveClass('bg-muted-gold')
  })

  it('calls onClick handler', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)

    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledOnce()
  })
})
```

## 📝 Conventions de Code

### Naming Conventions
- **Composants**: PascalCase (`ProductCard`, `ProjectWizard`)
- **Fichiers**: Même nom que le composant principal (`ProductCard.tsx`)
- **Hooks**: camelCase avec préfixe `use` (`useProductFilter`)
- **Types/Interfaces**: PascalCase (`ProductCardProps`, `WizardStep`)
- **Constantes**: SCREAMING_SNAKE_CASE (`MAX_UPLOAD_SIZE`, `PRODUCT_CATEGORIES`)
- **Fonctions**: camelCase (`formatPrice`, `handleSubmit`)

### Imports Ordering
```tsx
// 1. External libraries
import { useState } from 'react'
import Image from 'next/image'

// 2. Internal libraries/utils
import { cn } from '@/lib/utils'
import { formatPrice } from '@/lib/helpers'

// 3. Components
import { Button } from '@/components/ui/Button'
import { ProductCard } from '@/components/sections/ProductCard'

// 4. Types
import type { Product } from '@/lib/types'

// 5. Styles (si nécessaire)
import styles from './Component.module.css'
```

### Commentaires
```tsx
// ✅ BON: Commentaires utiles
/**
 * Affiche une carte produit avec image, titre, prix et catégorie.
 * Supporte un badge "Personnalisable" optionnel.
 */
export function ProductCard({ product }: ProductCardProps) {
  // Calculer le prix avec réduction si applicable
  const finalPrice = product.discount
    ? product.price * (1 - product.discount)
    : product.price

// ❌ MAUVAIS: Commentaires évidents
// Définir le state
const [count, setCount] = useState(0)

// Incrémenter le count
const increment = () => setCount(count + 1)
```

---

**Principe directeur**: Écrire du code maintenable, accessible et performant qui respecte les standards Next.js 15 et la charte graphique Veoma & Co.
