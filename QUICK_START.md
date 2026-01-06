# 🚀 Quick Start - Veoma & Co

Bienvenue sur le projet Veoma & Co ! Ce guide vous permettra de démarrer rapidement.

## ⚡ Démarrage Express (2 minutes)

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir dans votre navigateur
# → http://localhost:3000
```

C'est tout ! Le site est maintenant accessible localement.

---

## 📖 Documentation du Projet

Le projet dispose d'une documentation complète organisée ainsi:

### 🎯 Pour Commencer

| Document | Description | Lire en priorité |
|----------|-------------|------------------|
| **[README.md](README.md)** | Vue d'ensemble du projet, stack technique, structure | ⭐⭐⭐ |
| **[DESIGN_GUIDE.md](DESIGN_GUIDE.md)** | Charte graphique complète (couleurs, typo, composants) | ⭐⭐⭐ |
| **[QUICK_START.md](QUICK_START.md)** | Ce fichier - Guide de démarrage rapide | ⭐⭐⭐ |

### 🎨 Design & UX

| Document | Description |
|----------|-------------|
| [DESIGN_GUIDE.md](DESIGN_GUIDE.md) | Charte graphique Veoma & Co |
| [.claude/rules/design-system.md](.claude/rules/design-system.md) | Design system technique détaillé |

### 💻 Développement

| Document | Description |
|----------|-------------|
| [.claude/rules/frontend-guidelines.md](.claude/rules/frontend-guidelines.md) | Guidelines React/Next.js, architecture |
| [.claude/rules/code-standards.md](.claude/rules/code-standards.md) | Standards TypeScript, conventions |
| [.claude/PROJECT_STRUCTURE.md](.claude/PROJECT_STRUCTURE.md) | Arborescence complète du projet |

---

## 🎨 Charte Graphique en 30 Secondes

### Couleurs

```css
--midnight-blue: #1B2A41   /* Textes, navigation */
--muted-gold: #C5A065      /* CTA, accents (max 1 par section) */
--off-white: #F9F9F7       /* Fonds de page */
--slate-grey: #6B7280      /* Textes secondaires */
```

### Typographie

- **Titres**: Playfair Display (serif élégant)
- **UI/Corps**: Lato (sans-serif moderne)

### Règle d'Or

> Maximum **1 bouton Or Mat** (`#C5A065`) par section visible à l'écran.

**Documentation complète**: [DESIGN_GUIDE.md](DESIGN_GUIDE.md)

---

## 🏗️ Structure du Projet

```
veoma-co-website/
├── app/                    # Next.js App Router
│   ├── (marketing)/       # Pages publiques
│   ├── (legal)/           # Pages légales
│   └── api/               # API Routes
├── components/
│   ├── ui/                # Composants réutilisables
│   ├── layout/            # Header, Footer, Nav
│   ├── sections/          # Sections de page
│   └── forms/             # Formulaires
├── lib/                   # Utilitaires, types, hooks
├── public/                # Assets statiques
└── .claude/               # Configuration & règles
```

**Documentation complète**: [.claude/PROJECT_STRUCTURE.md](.claude/PROJECT_STRUCTURE.md)

---

## 🔧 Commandes Utiles

```bash
# Développement
npm run dev              # Serveur de développement
npm run build            # Build de production
npm run start            # Serveur de production

# Quality Assurance
npm run lint             # ESLint
npm run type-check       # Vérification TypeScript
npm run format           # Formatage Prettier

# Vérifier tout avant commit
npm run lint && npm run type-check
```

---

## 🤖 Développer avec Claude Code

Ce projet est optimisé pour le développement assisté par Claude Code.

### Configuration

Les règles de développement sont définies dans [`.claude/`](.claude/):
- **Design System**: Couleurs, typographie, composants
- **Frontend Guidelines**: React, Next.js, Tailwind
- **Code Standards**: TypeScript, conventions, sécurité

### Exemples de Prompts

```
✅ "Créer un composant ProductCard suivant la charte graphique"
→ Claude appliquera automatiquement les couleurs, typo, structure

✅ "Créer la page boutique avec filtres"
→ Architecture Next.js + Design system

✅ "Vérifier la conformité de ce composant"
→ Comparaison avec les règles définies
```

**Documentation Claude**: [.claude/README.md](.claude/README.md)

---

## 📦 Stack Technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| **Next.js** | 15.x | Framework React (App Router) |
| **React** | 19.x | Library UI |
| **TypeScript** | 5.x | Typage strict |
| **Tailwind CSS** | 3.4.x | Styling utility-first |
| **Heroicons** | 2.x | Icônes outline |

---

## ✅ Checklist Premier Composant

Avant de créer votre premier composant:

1. [ ] Lire [DESIGN_GUIDE.md](DESIGN_GUIDE.md) (section couleurs + typo)
2. [ ] Comprendre la structure dans `components/`
3. [ ] Vérifier les composants existants dans `components/ui/`
4. [ ] Respecter les conventions de nommage (PascalCase)
5. [ ] Utiliser TypeScript strict (interfaces pour props)
6. [ ] Appliquer la charte graphique (couleurs, fonts)
7. [ ] Tester l'accessibilité (labels, contraste, focus)

---

## 🎯 Pages à Développer

Le projet nécessite le développement de ces pages principales:

### Pages Marketing
- [ ] **Homepage** (`app/(marketing)/page.tsx`)
  - Hero section
  - Présentation entreprise
  - Aperçu boutique
  - Témoignages clients

- [ ] **Boutique** (`app/(marketing)/boutique/page.tsx`)
  - Grille produits
  - Filtres (catégorie, prix, métier)
  - Pagination

- [ ] **Fiche Produit** (`app/(marketing)/boutique/[slug]/page.tsx`)
  - Images produit (carrousel)
  - Description détaillée
  - Prix, disponibilité
  - Bouton panier

- [ ] **Formulaire Projet** (`app/(marketing)/projet/page.tsx`)
  - Wizard multi-étapes (4 étapes)
  - Validation formulaire
  - Upload fichiers
  - Récapitulatif

- [ ] **Pages Expertise** (`app/(marketing)/expertise/[secteur]/page.tsx`)
  - Hotellerie
  - Cuisine
  - Accueil
  - Sécurité
  - Corporate

- [ ] **Contact** (`app/(marketing)/contact/page.tsx`)

### Pages Légales
- [ ] Mentions légales
- [ ] CGV
- [ ] Politique de confidentialité
- [ ] FAQ

### Composants Prioritaires
- [ ] Header avec navigation
- [ ] Footer
- [ ] Carte produit
- [ ] Boutons (primary, secondary)
- [ ] Input floating label
- [ ] Wizard progression bar

---

## 🆘 Besoin d'Aide ?

### Documentation Interne
1. **Question design** → Lire [DESIGN_GUIDE.md](DESIGN_GUIDE.md)
2. **Question architecture** → Lire [.claude/PROJECT_STRUCTURE.md](.claude/PROJECT_STRUCTURE.md)
3. **Question code** → Lire [.claude/rules/code-standards.md](.claude/rules/code-standards.md)

### Avec Claude Code
```
"Explique-moi la règle concernant X"
"Comment créer un composant Y selon la charte ?"
"Quelle est la structure du dossier Z ?"
```

### Ressources Externes
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Heroicons](https://heroicons.com/)

---

## 🎉 Vous êtes prêt !

Le projet est configuré et documenté. Vous pouvez maintenant:

1. ✅ Développer en suivant la charte graphique
2. ✅ Utiliser les composants UI réutilisables
3. ✅ Respecter les standards de code
4. ✅ Profiter de l'assistance Claude Code

**Bon développement ! 🚀**

---

**Version**: 1.0.0
**Dernière mise à jour**: 2026-01-06
