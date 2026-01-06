# Configuration Claude Code - Veoma & Co

Ce dossier contient la configuration et les règles pour le développement assisté par Claude Code sur le projet Veoma & Co.

## 📁 Structure

```
.claude/
├── claude.json                      # Configuration principale
├── README.md                        # Ce fichier
└── rules/
    ├── design-system.md            # Charte graphique complète
    ├── frontend-guidelines.md      # Guidelines React/Next.js
    └── code-standards.md           # Standards de code TypeScript
```

## 🎯 Utilisation

### Développement d'un Nouveau Composant

Lorsque vous demandez à Claude de créer un composant, il suivra automatiquement:

1. **Design System** ([design-system.md](rules/design-system.md))
   - Palette de couleurs Veoma & Co
   - Typographie (Playfair Display + Lato)
   - Composants UI (boutons, cartes, formulaires)
   - Iconographie et images

2. **Frontend Guidelines** ([frontend-guidelines.md](rules/frontend-guidelines.md))
   - Architecture Next.js 15
   - Patterns React (hooks, composition)
   - Tailwind CSS configuration
   - Accessibilité WCAG AA

3. **Code Standards** ([code-standards.md](rules/code-standards.md))
   - TypeScript strict mode
   - Conventions de nommage
   - Gestion d'erreurs
   - Performance et sécurité

### Exemples de Prompts

```
"Créer un composant ProductCard suivant la charte graphique"
→ Claude appliquera automatiquement les couleurs, typographie et structure définis

"Créer la page boutique avec filtres"
→ Claude utilisera l'architecture Next.js, le design system et les bonnes pratiques

"Vérifier la conformité de ce composant avec la charte"
→ Claude comparera avec les règles définies (couleurs, accessibilité, etc.)
```

## 🎨 Charte Graphique Résumée

### Couleurs Principales
- **Midnight Blue** `#1B2A41` - Textes, navigation, footer
- **Muted Gold** `#C5A065` - CTA principaux, accents
- **Off-White** `#F9F9F7` - Fonds de page
- **Slate Grey** `#6B7280` - Textes secondaires, bordures

### Typographie
- **Display (Titres)**: Playfair Display (serif)
- **UI (Corps, Boutons)**: Lato (sans-serif)

### Philosophie Design
> "L'Élégance Fonctionnelle" - Équilibre entre l'art de la couture (prestige, style) et la rigueur technique (fonctionnalité, professionnalisme).

## 🚀 Quick Start

### Installer les Dépendances de Fonts

```bash
npm install next/font
```

### Configuration Tailwind avec Variables

Les variables CSS sont définies dans `app/globals.css`:

```css
:root {
  --midnight-blue: #1B2A41;
  --muted-gold: #C5A065;
  --off-white: #F9F9F7;
  --slate-grey: #6B7280;
  --sage-green: #4A7C59;

  --font-display: 'Playfair Display', serif;
  --font-body: 'Lato', sans-serif;
}
```

Utilisation dans Tailwind:

```tsx
<h1 className="font-display text-midnight-blue">
  Titre en Playfair Display
</h1>

<p className="font-body text-slate-grey">
  Texte en Lato
</p>

<button className="bg-muted-gold text-white">
  CTA Principal
</button>
```

## 📋 Checklist de Conformité

Avant de valider un composant ou une page:

### Design
- [ ] Couleurs: Uniquement celles de la palette (pas de noir/blanc pur)
- [ ] Typographie: Playfair pour titres, Lato pour UI
- [ ] Espacement: Utiliser les variables de spacing définis
- [ ] Boutons: Maximum 1 bouton Or Mat (primary) par section

### Accessibilité
- [ ] Contraste WCAG AA respecté (ratio 4.5:1)
- [ ] Labels sur tous les champs de formulaire
- [ ] Focus clavier visible (`focus-visible:outline-2`)
- [ ] ARIA labels sur icônes fonctionnelles

### Performance
- [ ] Images: Next.js Image avec lazy loading
- [ ] Composants lourds: Dynamic import si nécessaire
- [ ] Server Components par défaut, Client Components uniquement si interactivité

### Code Quality
- [ ] TypeScript strict (pas de `any`)
- [ ] Composants typés avec interfaces
- [ ] Pas de console.log ou code commenté
- [ ] Naming conventions respectées

## 🛠️ Maintenance

### Mettre à Jour la Charte

Si la charte graphique évolue:

1. Modifier `rules/design-system.md`
2. Mettre à jour `tailwind.config.ts` et `globals.css`
3. Lancer une revue des composants existants

### Ajouter une Nouvelle Règle

Créer un nouveau fichier dans `rules/` et l'ajouter à `claude.json`:

```json
{
  "rules": [
    ".claude/rules/design-system.md",
    ".claude/rules/frontend-guidelines.md",
    ".claude/rules/code-standards.md",
    ".claude/rules/nouvelle-regle.md"  // Nouvelle règle
  ]
}
```

## 📚 Ressources

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

## 📞 Support

Pour toute question sur les règles ou la configuration:

1. Consulter les fichiers dans `rules/`
2. Demander à Claude: "Explique-moi la règle concernant X"
3. Proposer une modification via pull request

---

**Version**: 1.0.0
**Dernière mise à jour**: 2026-01-06
**Projet**: Veoma & Co - Site Web Corporate & E-commerce
