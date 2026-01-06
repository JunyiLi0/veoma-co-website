# Charte Graphique Veoma & Co - Design System

## 🎨 Système de Couleurs

### Variables CSS Obligatoires

```css
:root {
  /* Couleurs Principales */
  --midnight-blue: #1B2A41;
  --muted-gold: #C5A065;

  /* Couleurs Secondaires */
  --off-white: #F9F9F7;
  --slate-grey: #6B7280;

  /* Couleurs Sémantiques */
  --sage-green: #4A7C59;
  --error-red: #DC2626;

  /* Typographie */
  --font-display: 'Playfair Display', serif;
  --font-body: 'Lato', sans-serif;

  /* Espacements */
  --spacing-xs: 0.25rem;   /* 4px */
  --spacing-sm: 0.5rem;    /* 8px */
  --spacing-md: 1rem;      /* 16px */
  --spacing-lg: 1.5rem;    /* 24px */
  --spacing-xl: 2rem;      /* 32px */
  --spacing-2xl: 3rem;     /* 48px */
  --spacing-3xl: 4rem;     /* 64px */

  /* Breakpoints */
  --mobile: 375px;
  --tablet: 768px;
  --desktop: 1024px;
  --wide: 1440px;

  /* Transitions */
  --transition-fast: 200ms;
  --transition-base: 300ms;
  --transition-slow: 500ms;
}
```

### Règles d'Application des Couleurs

#### Midnight Blue (#1B2A41)
- ✅ Textes principaux (headings, paragraphes)
- ✅ Navigation principale
- ✅ Footer background
- ✅ Bordures de boutons secondaires
- ❌ JAMAIS pour du texte sur fond sombre (utiliser blanc pur)

#### Muted Gold (#C5A065)
- ✅ CTA principaux (background)
- ✅ Icônes clés et soulignements
- ✅ États actifs (barre de progression)
- ✅ Liens hover dans footer
- ❌ Maximum 1 bouton Or Mat par section visible
- ❌ JAMAIS pour du texte corps sur fond clair (contraste insuffisant)

#### Off-White (#F9F9F7)
- ✅ Background principal des pages
- ✅ Background de détourage produits e-commerce
- ✅ Sections alternées (contraste avec blanc)
- ❌ JAMAIS utiliser blanc pur (#FFFFFF) comme fond de page

#### Slate Grey (#6B7280)
- ✅ Textes secondaires, labels, métadonnées
- ✅ Bordures de formulaires (état neutre)
- ✅ Icônes non-actives
- ✅ Séparateurs visuels

#### Sage Green (#4A7C59)
- ✅ Messages de succès, validation
- ✅ Indicateurs positifs
- ✅ Éléments RSE/durabilité
- ❌ Ne pas utiliser comme couleur principale

## ✍️ Typographie

### Hiérarchie et Règles

#### Playfair Display (Serif) - Display Font
```css
/* Titres principaux */
h1 {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--midnight-blue);
  line-height: 1.2;
}

h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--midnight-blue);
  line-height: 1.3;
}

/* Citations clients */
.testimonial-quote {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.25rem;
  line-height: 1.6;
}

/* Mots-clés en emphase */
.keyword-emphasis {
  font-family: var(--font-display);
  font-style: italic;
}
```

#### Lato (Sans-Serif) - UI Font
```css
/* Corps de texte */
body, p {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--midnight-blue);
}

/* Navigation */
nav a {
  font-family: var(--font-body);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Boutons */
button {
  font-family: var(--font-body);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Prix produits */
.product-price {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--midnight-blue);
}

/* Catégories produits */
.product-category {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--slate-grey);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
```

### ❌ Interdictions Typographiques
1. JAMAIS Playfair Display pour: boutons, inputs, labels de formulaire, navigation
2. JAMAIS mélanger les deux polices dans un même bloc de texte
3. JAMAIS utiliser plus de 2 polices dans le projet
4. JAMAIS utiliser font-weight < 400 (trop fin, problème de lisibilité)

## 🔘 Composants UI

### Boutons

#### Primaire (Conversion)
```tsx
// Composant React/Tailwind
<button className="
  bg-[#C5A065]
  text-white
  font-body
  font-semibold
  uppercase
  tracking-wide
  px-8
  py-4
  rounded
  transition-all
  duration-300
  hover:bg-[#B39055]
  hover:shadow-lg
  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-[#C5A065]
">
  Confiez-nous votre projet
</button>
```

**Usage strict:**
- Un seul par section visible
- Réservé aux actions de conversion principales
- Texte: toujours blanc (#FFFFFF)

#### Secondaire (Navigation)
```tsx
<button className="
  bg-transparent
  text-[#1B2A41]
  border-2
  border-[#1B2A41]
  font-body
  font-medium
  uppercase
  tracking-wide
  px-8
  py-4
  rounded
  transition-all
  duration-300
  hover:bg-[#1B2A41]
  hover:text-white
">
  En savoir plus
</button>
```

### Cartes Produits

```tsx
<div className="
  group
  bg-white
  overflow-hidden
  transition-shadow
  duration-300
  hover:shadow-2xl
">
  {/* Image Container */}
  <div className="
    relative
    aspect-[3/4]
    bg-[#F9F9F7]
    overflow-hidden
  ">
    <img
      src="/product.jpg"
      alt="Produit"
      className="
        object-cover
        w-full
        h-full
        transition-transform
        duration-500
        group-hover:scale-105
      "
    />

    {/* Badge Personnalisable */}
    <span className="
      absolute
      top-4
      right-4
      bg-[#C5A065]
      text-white
      text-xs
      font-body
      font-semibold
      uppercase
      px-3
      py-1
      rounded-sm
    ">
      Personnalisable
    </span>
  </div>

  {/* Content */}
  <div className="p-6">
    {/* Catégorie */}
    <p className="
      text-[#6B7280]
      text-sm
      font-body
      uppercase
      tracking-wide
      mb-2
    ">
      Hôtellerie
    </p>

    {/* Titre */}
    <h3 className="
      text-[#1B2A41]
      font-body
      font-bold
      text-lg
      mb-3
    ">
      Chemise Service
    </h3>

    {/* Prix */}
    <p className="
      text-[#1B2A41]
      font-body
      font-bold
      text-xl
    ">
      89,00 €
    </p>
  </div>
</div>
```

### Formulaires - Floating Labels

```tsx
<div className="relative">
  <input
    type="text"
    id="company"
    className="
      peer
      w-full
      px-4
      pt-6
      pb-2
      border-2
      border-[#6B7280]
      rounded
      font-body
      text-[#1B2A41]
      transition-all
      duration-200
      focus:border-[#C5A065]
      focus:outline-none
    "
    placeholder=" "
  />
  <label
    htmlFor="company"
    className="
      absolute
      left-4
      top-1/2
      -translate-y-1/2
      text-[#6B7280]
      font-body
      transition-all
      duration-200
      pointer-events-none
      peer-focus:top-3
      peer-focus:text-xs
      peer-focus:text-[#1B2A41]
      peer-[:not(:placeholder-shown)]:top-3
      peer-[:not(:placeholder-shown)]:text-xs
    "
  >
    Nom de votre société
  </label>
</div>
```

### Card Select (Wizard)

```tsx
<div className="
  group
  relative
  border-2
  border-[#6B7280]
  rounded-lg
  p-6
  cursor-pointer
  transition-all
  duration-300
  hover:border-[#C5A065]
  hover:shadow-md
  data-[selected=true]:border-[#C5A065]
  data-[selected=true]:bg-[#C5A065]/5
">
  {/* Icône */}
  <div className="
    w-16
    h-16
    mx-auto
    mb-4
    text-[#1B2A41]
    group-hover:text-[#C5A065]
    transition-colors
    duration-300
  ">
    {/* SVG Icon */}
  </div>

  {/* Label */}
  <p className="
    text-center
    font-body
    font-semibold
    text-[#1B2A41]
  ">
    Équipe Cuisine
  </p>

  {/* Checkbox visuel */}
  <div className="
    absolute
    top-4
    right-4
    w-6
    h-6
    rounded-full
    border-2
    border-[#6B7280]
    group-data-[selected=true]:border-[#C5A065]
    group-data-[selected=true]:bg-[#C5A065]
    transition-all
    duration-200
  ">
    {/* Checkmark si sélectionné */}
  </div>
</div>
```

### Barre de Progression (Wizard)

```tsx
<div className="flex items-center justify-center gap-4">
  {/* Étape complétée */}
  <div className="flex items-center gap-4">
    <div className="
      w-10
      h-10
      rounded-full
      bg-[#1B2A41]
      border-2
      border-[#1B2A41]
      flex
      items-center
      justify-center
      text-white
      font-body
      font-bold
    ">
      1
    </div>
    <div className="w-16 h-0.5 bg-[#1B2A41]" />
  </div>

  {/* Étape active */}
  <div className="flex items-center gap-4">
    <div className="
      w-10
      h-10
      rounded-full
      bg-[#C5A065]
      border-2
      border-[#C5A065]
      flex
      items-center
      justify-center
      text-white
      font-body
      font-bold
      shadow-lg
    ">
      2
    </div>
    <div className="w-16 h-0.5 bg-[#6B7280]" />
  </div>

  {/* Étape future */}
  <div className="
    w-10
    h-10
    rounded-full
    bg-transparent
    border-2
    border-[#6B7280]
    flex
    items-center
    justify-center
    text-[#6B7280]
    font-body
    font-bold
  ">
    3
  </div>
</div>
```

## 📐 Layout & Structure

### Grid System
```css
/* Container principal */
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 3rem;
  }
}

/* Grilles produits */
.product-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
}

@media (min-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1440px) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### Section Spacing
```css
/* Espacement entre sections */
section {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

@media (min-width: 768px) {
  section {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}

@media (min-width: 1024px) {
  section {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
}
```

## 🎭 Iconographie

### Règles Strictes
- **Set unique**: Heroicons Outline ou Feather Icons
- **Épaisseur**: 1.5px à 2px (stroke-width)
- **Taille minimum**: 24x24px
- **Couleur par défaut**: `--midnight-blue`
- **Couleur accent**: `--muted-gold` (états actifs uniquement)

### Icônes Métier Obligatoires
- ✂️ Ciseaux → Création/Couture
- 📏 Mètre ruban → Sur-mesure
- 👔 Cintre → Vêtements
- 🚚 Camion → Livraison
- 🛡️ Bouclier → Sécurité
- 👨‍🍳 Toque → Cuisine
- 🔔 Cloche → Service
- 🎫 Badge → Accueil

```tsx
// Exemple avec Heroicons
import { ScissorsIcon } from '@heroicons/react/24/outline'

<ScissorsIcon className="w-8 h-8 text-[#1B2A41] group-hover:text-[#C5A065]" />
```

## 📸 Images & Médias

### Images Produits E-commerce
- **Fond**: Détourage sur #F9F9F7 (off-white)
- **Format**: Ratio 3:4 (portrait)
- **Résolution**: Minimum 1200x1600px
- **Angle**: Uniformisé par catégorie
- **Format fichier**: WebP avec fallback JPEG

```tsx
<picture>
  <source srcSet="/product.webp" type="image/webp" />
  <img
    src="/product.jpg"
    alt="Description produit"
    width={1200}
    height={1600}
    loading="lazy"
  />
</picture>
```

### Images Institutionnelles
- **Ambiance**: Lumineuse, naturelle, professionnelle
- **Mise en scène**: Personnel en action, interactions réelles
- **Éclairage**: Lumière naturelle privilégiée
- **Éviter**: Poses statiques, fond blanc pur, flash brutal

### Images Macro (Matières)
- **Usage**: Section "Création sur-mesure"
- **Sujet**: Textures, coutures, broderies, boutons
- **Objectif**: Prouver la qualité "Couture"

## ⚠️ Interdictions Strictes

### À NE JAMAIS FAIRE
1. ❌ Utiliser noir pur (#000000) pour du texte
2. ❌ Utiliser blanc pur (#FFFFFF) comme fond de page
3. ❌ Plus d'un bouton Or Mat (#C5A065) par section
4. ❌ Playfair Display dans les éléments UI (boutons, inputs)
5. ❌ Border-radius > 8px (garder un aspect sérieux)
6. ❌ Images produits sur fond blanc pur
7. ❌ Menus déroulants dans wizard (utiliser Card Select)
8. ❌ Icônes de sets différents dans la même interface
9. ❌ Animations < 200ms ou > 500ms
10. ❌ Emojis dans l'interface (sauf demande explicite)

## ✅ Checklist de Conformité

Avant toute mise en production, vérifier:

- [ ] Toutes les couleurs utilisent les variables CSS définies
- [ ] Aucun noir pur ni blanc pur (exceptions: texte sur bleu nuit, logo inversé)
- [ ] Floating Labels sur tous les formulaires
- [ ] Barre de progression wizard conforme
- [ ] Un seul CTA primaire Or Mat par viewport
- [ ] Images produits détourées sur off-white
- [ ] Icônes toutes Outline du même set
- [ ] Focus clavier visible sur tous les éléments interactifs
- [ ] Ratios de contraste WCAG AA respectés
- [ ] Responsive testé (mobile 375px, tablette 768px, desktop 1024px+)
- [ ] Lazy loading sur toutes les images hors hero
- [ ] Typographie: Playfair pour titres/citations, Lato pour UI
- [ ] Footer en midnight-blue avec logo blanc inversé

---

**Philosophie du Design**: "L'Élégance Fonctionnelle"
Chaque élément doit refléter la dualité Art (Couture, Style, Prestige) et Ressemblance (Fonctionnalité, Technique, Rigueur).
