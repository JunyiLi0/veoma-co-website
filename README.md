# Veoma & Co - Site Web Corporate & E-commerce

> **"L'uniforme – un art qui vous ressemble"**

Site web pour Veoma & Co, entreprise spécialisée dans la création d'uniformes professionnels sur-mesure et la vente en ligne de vêtements pour différents métiers (hôtellerie, restauration, sécurité, corporate, etc.).

## 🎯 À Propos du Projet

Le site combine trois objectifs principaux:
1. **Vitrine de marque** - Présenter l'expertise et les valeurs de Veoma & Co
2. **E-commerce** - Boutique en ligne de vêtements professionnels
3. **Capture de projets** - Formulaire wizard pour devis sur-mesure

### Philosophie Design
**"L'Élégance Fonctionnelle"** - Équilibre entre l'art de la couture (prestige, style) et la rigueur technique (fonctionnalité, professionnalisme B2B).

📖 Voir le [Guide de Design Complet](DESIGN_GUIDE.md)

## 🚀 Quick Start

### Prérequis
- Node.js 18.17 ou supérieur
- npm, yarn, pnpm ou bun

### Installation

```bash
# Cloner le projet
git clone [url-du-repo]
cd veoma-co-website

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Scripts Disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Linter ESLint
npm run type-check   # Vérification TypeScript
```

## 🏗️ Stack Technique

- **Framework**: [Next.js 15](https://nextjs.org) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Fonts**: Playfair Display (Display) + Lato (UI)
- **Icônes**: [Heroicons](https://heroicons.com)
- **Déploiement**: [Vercel](https://vercel.com)

## 📁 Structure du Projet

```
veoma-co-website/
├── app/                          # Next.js App Router
│   ├── (marketing)/             # Routes publiques
│   │   ├── page.tsx             # Homepage
│   │   ├── boutique/            # Catalogue e-commerce
│   │   ├── projet/              # Formulaire wizard
│   │   ├── expertise/           # Pages métier
│   │   └── contact/
│   ├── (legal)/                 # Pages légales
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Styles globaux
├── components/
│   ├── ui/                      # Composants réutilisables
│   ├── layout/                  # Header, Footer, Nav
│   ├── sections/                # Sections de page
│   └── forms/                   # Formulaires
├── lib/
│   ├── utils.ts                 # Utilitaires
│   ├── types.ts                 # Types TypeScript
│   └── constants.ts             # Constantes
├── public/
│   ├── images/
│   └── icons/
├── .claude/                     # Configuration Claude Code
│   ├── claude.json
│   └── rules/                   # Charte graphique & guidelines
├── DESIGN_GUIDE.md              # Guide de design
└── README.md                    # Ce fichier
```

## 🎨 Charte Graphique

### Palette de Couleurs

| Couleur | Hex | Usage |
|---------|-----|-------|
| **Midnight Blue** | `#1B2A41` | Textes principaux, navigation, footer |
| **Muted Gold** | `#C5A065` | CTA principaux, accents |
| **Off-White** | `#F9F9F7` | Fonds de page |
| **Slate Grey** | `#6B7280` | Textes secondaires, bordures |
| **Sage Green** | `#4A7C59` | Validation, succès |

### Typographie

- **Display (Titres)**: Playfair Display - Élégance, mode, luxe
- **UI (Corps, Boutons)**: Lato - Lisibilité, modernité, clarté

**Règle**: JAMAIS Playfair Display dans les éléments UI (boutons, inputs, labels).

### Composants Clés

- **Boutons Primaires**: Fond Or Mat (#C5A065) - Maximum 1 par section
- **Boutons Secondaires**: Ghost button avec bordure Bleu Nuit
- **Cartes Produits**: Ratio 3:4, fond détourage Off-White, ombre au survol
- **Formulaires**: Floating labels avec transition fluide
- **Wizard**: Barre de progression avec points Or Mat (actif) / Bleu Nuit (complété)

📖 **Documentation complète**: [DESIGN_GUIDE.md](DESIGN_GUIDE.md)

## 🤖 Développement Assisté par Claude Code

Ce projet utilise [Claude Code](https://claude.com/claude-code) avec des règles personnalisées définies dans [.claude/](.claude/).

### Configuration
- **Design System**: [.claude/rules/design-system.md](.claude/rules/design-system.md)
- **Frontend Guidelines**: [.claude/rules/frontend-guidelines.md](.claude/rules/frontend-guidelines.md)
- **Code Standards**: [.claude/rules/code-standards.md](.claude/rules/code-standards.md)

### Exemples de Prompts
```
"Créer un composant ProductCard suivant la charte graphique"
→ Claude appliquera automatiquement couleurs, typographie, structure

"Créer la page boutique avec filtres"
→ Architecture Next.js + Design system

"Vérifier la conformité de ce composant"
→ Comparaison avec les règles (couleurs, accessibilité)
```

## ♿ Accessibilité

Le projet respecte les standards **WCAG 2.1 niveau AA**:
- Contraste minimum 4.5:1 pour tous les textes
- Focus clavier visible sur tous les éléments interactifs
- Labels associés à tous les champs de formulaire
- Attributs ARIA appropriés
- Navigation complète au clavier

## 📊 Performance

Optimisations appliquées:
- ✅ Next.js Image avec lazy loading
- ✅ Server Components par défaut
- ✅ Code splitting automatique
- ✅ Fonts optimisées (next/font)
- ✅ Images WebP avec fallback
- ✅ Cache stratégique (ISR, SSG)

## 🧪 Testing

```bash
# Tests unitaires (à configurer)
npm run test

# Tests E2E (à configurer)
npm run test:e2e

# Coverage
npm run test:coverage
```

## 🚀 Déploiement

### Vercel (Recommandé)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/votre-username/veoma-co-website)

Le déploiement sur Vercel est automatique:
1. Connecter le repo GitHub
2. Configurer les variables d'environnement (si nécessaire)
3. Déployer

### Variables d'Environnement

```env
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://...
# Ajouter vos variables ici
```

⚠️ **Important**: Ne jamais exposer de secrets avec `NEXT_PUBLIC_`.

## 📝 Conventions de Code

### Naming
- **Composants**: PascalCase (`ProductCard.tsx`)
- **Fonctions**: camelCase (`formatPrice`)
- **Constantes**: SCREAMING_SNAKE_CASE (`MAX_PRODUCTS`)
- **Types**: PascalCase (`ProductCardProps`)

### Imports
```tsx
// 1. External libraries
import { useState } from 'react'

// 2. Internal utils
import { cn } from '@/lib/utils'

// 3. Components
import { Button } from '@/components/ui/Button'

// 4. Types
import type { Product } from '@/lib/types'
```

### TypeScript
- Mode strict activé
- Pas de `any` (utiliser `unknown` si nécessaire)
- Interfaces pour les props de composants
- Types explicites pour les fonctions

## ✅ Checklist Pre-Commit

- [ ] `npm run type-check` passe
- [ ] `npm run lint` passe
- [ ] Pas de `console.log` ou `debugger`
- [ ] Composants typés avec interfaces
- [ ] Accessibilité vérifiée (labels, contraste, ARIA)
- [ ] Images optimisées (Next.js Image)
- [ ] Charte graphique respectée

## 📚 Ressources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Design
- [Playfair Display Font](https://fonts.google.com/specimen/Playfair+Display)
- [Lato Font](https://fonts.google.com/specimen/Lato)
- [Heroicons](https://heroicons.com/)
- [Design Guide Complet](DESIGN_GUIDE.md)

## 🤝 Contribution

1. Créer une branche (`git checkout -b feature/ma-fonctionnalite`)
2. Commit (`git commit -m 'feat: ajouter une fonctionnalité'`)
3. Push (`git push origin feature/ma-fonctionnalite`)
4. Ouvrir une Pull Request

### Format de Commit

Suivre [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Documentation
- `style:` Formatage, pas de changement de code
- `refactor:` Refactoring
- `test:` Ajout de tests
- `chore:` Maintenance

## 📄 Licence

[À définir]

## 📞 Contact

- **Website**: [veoma.co](https://veoma.co)
- **Email**: contact@veoma.co
- **Design Questions**: design@veoma.co

---

**Version**: 1.0.0 (Développement)
**Dernière mise à jour**: 2026-01-06
