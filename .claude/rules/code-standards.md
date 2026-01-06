# Standards de Code - Veoma & Co

## 📋 Règles Générales

### Principes Fondamentaux

1. **Clean Code**: Le code doit être lisible et auto-documenté
2. **DRY (Don't Repeat Yourself)**: Éviter la duplication de code
3. **KISS (Keep It Simple, Stupid)**: Privilégier la simplicité
4. **YAGNI (You Aren't Gonna Need It)**: Ne pas anticiper des besoins futurs
5. **Separation of Concerns**: Séparer les responsabilités

### TypeScript Strict Mode

Toujours activer le mode strict dans `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true
  }
}
```

## 🎯 TypeScript

### Typage Explicite

```typescript
// ✅ BON: Types explicites et précis
interface ProductCardProps {
  product: Product
  onAddToCart?: (productId: string) => void
  showBadge?: boolean
}

function formatPrice(amount: number, currency: string = 'EUR'): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency
  }).format(amount)
}

// ❌ MAUVAIS: Types any ou implicites
function formatPrice(amount: any) {
  return amount.toString()
}

const product: any = { /* ... */ }
```

### Enums vs Union Types

```typescript
// ✅ BON: Union types pour des valeurs statiques
type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ProductCategory = 'hotellerie' | 'cuisine' | 'accueil' | 'securite'

// Acceptable: Enum pour des valeurs qui peuvent évoluer
enum OrderStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled'
}

// ❌ MAUVAIS: String enum sans valeurs
enum Colors {
  Blue,
  Gold,
  Grey
}
```

### Utility Types

```typescript
// Utiliser les utility types de TypeScript
type PartialProduct = Partial<Product>
type RequiredProduct = Required<Product>
type ProductPreview = Pick<Product, 'id' | 'title' | 'price' | 'image'>
type ProductWithoutImages = Omit<Product, 'images'>

// Créer ses propres utility types
type Nullable<T> = T | null
type Optional<T> = T | undefined
type AsyncData<T> = {
  data: T | null
  loading: boolean
  error: Error | null
}
```

### Génériques

```typescript
// ✅ BON: Utiliser les génériques pour la réutilisabilité
function getFirstItem<T>(array: T[]): T | undefined {
  return array[0]
}

interface ApiResponse<T> {
  data: T
  status: number
  message: string
}

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  const response = await fetch(url)
  return response.json()
}

// Usage
const products = await fetchData<Product[]>('/api/products')
```

## ⚛️ React Best Practices

### Composants Fonctionnels

```tsx
// ✅ BON: Composant fonctionnel avec types
interface UserProfileProps {
  user: User
  onEdit?: () => void
}

export function UserProfile({ user, onEdit }: UserProfileProps) {
  return (
    <div>
      <h2>{user.name}</h2>
      {onEdit && <button onClick={onEdit}>Éditer</button>}
    </div>
  )
}

// ❌ MAUVAIS: Composant classe (éviter sauf cas très spécifiques)
class UserProfile extends React.Component {
  render() {
    return <div>...</div>
  }
}
```

### Hooks Rules

```tsx
'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'

export function ProductFilter({ products }: { products: Product[] }) {
  // 1. Hooks toujours au top level
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // 2. useEffect pour les side effects
  useEffect(() => {
    // Sauvegarder les préférences
    localStorage.setItem('lastCategory', selectedCategory ?? '')
  }, [selectedCategory])

  // 3. useCallback pour les fonctions passées en props
  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term.toLowerCase())
  }, [])

  // 4. useMemo pour les calculs coûteux
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm)
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [products, searchTerm, selectedCategory])

  return (
    <div>
      {/* UI */}
    </div>
  )
}
```

### Custom Hooks

```typescript
// hooks/useLocalStorage.ts
import { useState, useEffect } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error loading ${key} from localStorage:`, error)
      return initialValue
    }
  })

  const setValue = (value: T) => {
    try {
      setStoredValue(value)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value))
      }
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error)
    }
  }

  return [storedValue, setValue]
}

// Usage
function MyComponent() {
  const [cart, setCart] = useLocalStorage<CartItem[]>('cart', [])
}
```

### Props Drilling vs Context

```tsx
// ✅ BON: Context pour state global
'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (item: CartItem) => {
    setItems(prev => [...prev, item])
  }

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setItems([])
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}

// Usage
function CartButton() {
  const { items } = useCart()
  return <button>Panier ({items.length})</button>
}
```

### Conditional Rendering

```tsx
// ✅ BON: Patterns de rendu conditionnel clairs
export function ProductCard({ product }: { product: Product }) {
  // Early return pour les cas vides
  if (!product) {
    return null
  }

  return (
    <article>
      <h3>{product.title}</h3>

      {/* Ternaire pour deux états */}
      {product.inStock ? (
        <span className="text-sage-green">En stock</span>
      ) : (
        <span className="text-error-red">Rupture</span>
      )}

      {/* && pour affichage conditionnel simple */}
      {product.isCustomizable && (
        <Badge>Personnalisable</Badge>
      )}

      {/* Éviter les ternaires imbriqués */}
      {/* ❌ MAUVAIS */}
      {product.inStock ? (
        product.isNew ? <Badge>Nouveau</Badge> : <Badge>Disponible</Badge>
      ) : (
        <Badge>Rupture</Badge>
      )}

      {/* ✅ BON: Extraire la logique */}
      <ProductBadge product={product} />
    </article>
  )
}

function ProductBadge({ product }: { product: Product }) {
  if (!product.inStock) return <Badge variant="error">Rupture</Badge>
  if (product.isNew) return <Badge variant="success">Nouveau</Badge>
  return <Badge>Disponible</Badge>
}
```

## 🎨 Styling

### Tailwind CSS Classes Order

```tsx
// Ordre recommandé des classes Tailwind
<div className="
  // 1. Layout (display, position)
  flex items-center justify-between
  relative

  // 2. Sizing
  w-full h-screen
  max-w-7xl

  // 3. Spacing
  p-4 mx-auto
  gap-4

  // 4. Typography
  font-body text-lg
  text-midnight-blue

  // 5. Visual
  bg-white
  border-2 border-slate-grey
  rounded-lg
  shadow-md

  // 6. Misc
  transition-all duration-300
  cursor-pointer

  // 7. States (hover, focus, etc.)
  hover:shadow-lg
  focus:outline-none
  focus-visible:ring-2
">
```

### Extraction de Classes Répétées

```tsx
// ❌ MAUVAIS: Répétition de classes
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">

// ✅ BON: Composant réutilisable
function Card({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={cn(
      "bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow",
      className
    )}>
      {children}
    </div>
  )
}

// Ou: Classe @apply dans globals.css
@layer components {
  .card {
    @apply bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow;
  }
}
```

### Utility Function cn()

```typescript
// lib/utils.ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind classes avec gestion des conflits
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Usage
<div className={cn(
  "base-classes",
  isActive && "active-classes",
  isPrimary ? "primary-variant" : "secondary-variant",
  className // Props externe
)} />
```

## 🔧 Utilitaires & Helpers

### Formatage

```typescript
// lib/formatters.ts

/**
 * Formate un prix en euros avec les bonnes conventions françaises
 */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
  }).format(amount)
}

/**
 * Formate une date en français
 */
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date

  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(dateObj)
}

/**
 * Tronque un texte avec ellipse
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

/**
 * Génère un slug URL-friendly
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Retirer les accents
    .replace(/[^\w\s-]/g, '') // Retirer caractères spéciaux
    .replace(/\s+/g, '-') // Espaces -> tirets
    .replace(/--+/g, '-') // Tirets multiples -> tiret simple
    .trim()
}
```

### Validation

```typescript
// lib/validators.ts

/**
 * Valide un email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Valide un numéro de téléphone français
 */
export function isValidPhoneFR(phone: string): boolean {
  const phoneRegex = /^(?:(?:\+|00)33|0)[1-9](?:[0-9]{8})$/
  return phoneRegex.test(phone.replace(/[\s.-]/g, ''))
}

/**
 * Valide la taille d'un fichier (en bytes)
 */
export function isValidFileSize(file: File, maxSizeMB: number): boolean {
  const maxSizeBytes = maxSizeMB * 1024 * 1024
  return file.size <= maxSizeBytes
}

/**
 * Valide le type MIME d'un fichier
 */
export function isValidFileType(file: File, allowedTypes: string[]): boolean {
  return allowedTypes.includes(file.type)
}
```

## 🛡️ Gestion d'Erreurs

### Try/Catch Patterns

```typescript
// ✅ BON: Gestion d'erreur explicite
async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch('/api/products')

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    if (error instanceof Error) {
      console.error('Failed to fetch products:', error.message)
    }
    throw error // Re-throw pour permettre au composant de gérer
  }
}

// Usage dans composant
export default async function ProductsPage() {
  try {
    const products = await fetchProducts()
    return <ProductGrid products={products} />
  } catch (error) {
    return <ErrorState message="Impossible de charger les produits" />
  }
}
```

### Error Boundaries (Client)

```tsx
'use client'

import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-display text-2xl text-midnight-blue mb-4">
              Une erreur est survenue
            </h2>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="btn-primary"
            >
              Réessayer
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Usage
<ErrorBoundary>
  <ProductWizard />
</ErrorBoundary>
```

## 📁 Organisation de Fichiers

### Barrel Exports

```typescript
// components/ui/index.ts
export { Button } from './Button'
export { Card } from './Card'
export { Input } from './Input'
export { Badge } from './Badge'

// Permet d'importer ainsi:
import { Button, Card, Input } from '@/components/ui'
```

### Colocation

```
components/
├── forms/
│   └── ProjectWizard/
│       ├── index.tsx              # Composant principal
│       ├── StepIndicator.tsx      # Sous-composant
│       ├── StepOne.tsx
│       ├── StepTwo.tsx
│       ├── useWizardState.ts      # Hook custom
│       ├── types.ts               # Types spécifiques
│       └── constants.ts           # Constantes
```

## 🔒 Sécurité

### Validation Input Utilisateur

```typescript
// ❌ MAUVAIS: Utiliser directement l'input
function updateUser(data: any) {
  db.query(`UPDATE users SET name = '${data.name}'`) // SQL Injection!
}

// ✅ BON: Valider et sanitizer
import { z } from 'zod'

const userSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().regex(/^[0-9]{10}$/)
})

function updateUser(data: unknown) {
  const validatedData = userSchema.parse(data) // Lance erreur si invalide
  // Utiliser une query paramétrée
  db.query('UPDATE users SET name = $1 WHERE id = $2', [validatedData.name, userId])
}
```

### XSS Prevention

```tsx
// ❌ MAUVAIS: dangerouslySetInnerHTML avec input utilisateur
<div dangerouslySetInnerHTML={{ __html: userContent }} />

// ✅ BON: Sanitizer le HTML ou utiliser du texte brut
import DOMPurify from 'isomorphic-dompurify'

<div dangerouslySetInnerHTML={{
  __html: DOMPurify.sanitize(userContent)
}} />

// Ou mieux: utiliser du texte
<div>{userContent}</div>
```

### Environment Variables

```typescript
// ✅ BON: Typer et valider les env vars
import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
  DATABASE_URL: z.string(),
  STRIPE_SECRET_KEY: z.string(),
})

const env = envSchema.parse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  DATABASE_URL: process.env.DATABASE_URL,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
})

export default env

// ❌ MAUVAIS: Exposer des secrets côté client
// NEXT_PUBLIC_ rend la variable accessible côté client!
const NEXT_PUBLIC_STRIPE_SECRET = '...' // ❌ Dangereux!
```

## 📊 Performance

### Memoization

```tsx
'use client'

import { memo, useMemo } from 'react'

// React.memo pour éviter les re-renders inutiles
export const ProductCard = memo(function ProductCard({ product }: ProductCardProps) {
  return (
    <article>
      {/* ... */}
    </article>
  )
})

// useMemo pour les calculs coûteux
function ProductList({ products }: { products: Product[] }) {
  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => b.price - a.price)
  }, [products])

  return (
    <div>
      {sortedProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
```

### Lazy Loading

```tsx
import dynamic from 'next/dynamic'

// Lazy load d'un composant lourd
const HeavyChart = dynamic(() => import('@/components/charts/HeavyChart'), {
  loading: () => <div>Chargement du graphique...</div>,
  ssr: false // Désactiver SSR si utilise des APIs navigateur
})

// Lazy load conditionnel
function Dashboard() {
  const [showChart, setShowChart] = useState(false)

  return (
    <div>
      <button onClick={() => setShowChart(true)}>
        Afficher les statistiques
      </button>

      {showChart && <HeavyChart />}
    </div>
  )
}
```

## 🧹 Code Cleanup

### Éviter les Magic Numbers

```typescript
// ❌ MAUVAIS
if (products.length > 12) { ... }
setTimeout(() => { ... }, 5000)

// ✅ BON
const MAX_PRODUCTS_PER_PAGE = 12
const TOAST_DURATION_MS = 5000

if (products.length > MAX_PRODUCTS_PER_PAGE) { ... }
setTimeout(() => { ... }, TOAST_DURATION_MS)
```

### Éviter les Comments Redondants

```typescript
// ❌ MAUVAIS: Commentaire évident
// Incrémente le compteur
setCount(count + 1)

// Get the user
const user = await getUser()

// ✅ BON: Code auto-documenté
const incrementCartItemQuantity = () => {
  setCount(prevCount => prevCount + 1)
}

const authenticatedUser = await getCurrentUser()

// ✅ BON: Commentaires pour expliquer le "pourquoi"
// Utiliser un délai pour permettre l'animation de fermeture de la modale
setTimeout(() => closeModal(), ANIMATION_DURATION_MS)

// Workaround pour un bug Safari avec position: sticky
// Voir: https://bugs.webkit.org/show_bug.cgi?id=12345
position: '-webkit-sticky'
```

### Remove Unused Code

```typescript
// ❌ MAUVAIS: Code commenté "au cas où"
// function oldFunction() {
//   return 'old'
// }

function newFunction() {
  return 'new'
}

// ✅ BON: Supprimer complètement (Git garde l'historique)
function newFunction() {
  return 'new'
}
```

## ✅ Checklist Pre-Commit

Avant chaque commit, vérifier:

- [ ] Code TypeScript sans erreurs (`npm run type-check`)
- [ ] Linter passe (`npm run lint`)
- [ ] Prettier formaté (`npm run format`)
- [ ] Pas de `console.log()` ou `debugger` restants
- [ ] Imports utilisés (pas d'imports inutiles)
- [ ] Noms de variables/fonctions descriptifs
- [ ] Composants avec types explicites
- [ ] Accessibilité respectée (labels, ARIA, contraste)
- [ ] Images optimisées (Next.js Image, lazy loading)
- [ ] Pas de secrets exposés (vérifier env vars)
- [ ] Tests passent (si applicable)
- [ ] Charte graphique respectée (couleurs, typographie)

---

**Principe directeur**: Écrire du code qui sera facilement compréhensible par vous-même dans 6 mois, et par vos collègues dès maintenant.
