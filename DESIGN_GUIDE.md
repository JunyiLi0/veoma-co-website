# Guide de Design - Veoma & Co

> **"L'Élégance Fonctionnelle"** - L'uniforme, un art qui vous ressemble.

Ce guide présente la direction artistique et la charte graphique du site Veoma & Co, entreprise spécialisée dans la création d'uniformes professionnels sur-mesure.

## 🎯 Positionnement de la Marque

Veoma & Co se situe à la **croisée du corporate et de la mode**:
- **Corporate**: Uniforme, fonctionnalité, rigueur, B2B
- **Mode**: Style, sur-mesure, élégance, couture

Le design doit refléter cette dualité: **valoriser l'image de marque** tout en **rassurant sur la capacité technique**.

---

## 🎨 Palette de Couleurs

### Couleurs Principales

#### Midnight Blue (Bleu Nuit Profond)
```
Hex: #1B2A41
Usage: Textes principaux, navigation, footer
```
Évoque l'autorité et le sérieux avec plus de douceur que le noir pur.

#### Muted Gold (Or Mat)
```
Hex: #C5A065
Usage: CTA principaux, icônes clés, accents
```
Apporte la touche "Art", "Couture" et "Prestige". **Maximum 1 bouton Or Mat par section.**

### Couleurs Secondaires

#### Off-White (Blanc Cassé Pierre)
```
Hex: #F9F9F7
Usage: Fonds de page, blocs de contenu
```
Évite la fatigue visuelle du blanc pur.

#### Slate Grey (Gris Ardoise)
```
Hex: #6B7280
Usage: Textes secondaires, bordures, métadonnées
```

### Couleur Sémantique

#### Sage Green (Vert Sauge)
```
Hex: #4A7C59
Usage: Validation, succès, RSE
```

---

## ✍️ Typographie

### Playfair Display (Serif) - Display Font
- **Usage**: Titres (H1, H2), slogans, citations clients
- **Style**: Utiliser en *italic* pour mettre en valeur des mots-clés
- **Inspiration**: Élégance, mode, luxe

```css
font-family: 'Playfair Display', serif;
```

### Lato (Sans-Serif) - UI Font
- **Usage**: Corps de texte, descriptions, boutons, formulaires, menus
- **Style**: Lisible, moderne, géométrique
- **Inspiration**: Clarté, modernité, fonctionnalité

```css
font-family: 'Lato', sans-serif;
```

**⚠️ Règle d'or**: JAMAIS Playfair Display dans les éléments UI (boutons, inputs, labels).

---

## 🔘 Composants UI

### Boutons

#### Primaire (Conversion)
```tsx
<button className="
  bg-[#C5A065]
  text-white
  px-8 py-4
  rounded
  font-semibold uppercase tracking-wide
  hover:bg-[#B39055]
">
  Confiez-nous votre projet
</button>
```
- Fond: Or Mat (#C5A065)
- Texte: Blanc
- Border-radius: 4px (angles légèrement arrondis)
- **Limité à 1 par section visible**

#### Secondaire (Navigation)
```tsx
<button className="
  bg-transparent
  text-[#1B2A41]
  border-2 border-[#1B2A41]
  px-8 py-4
  rounded
  hover:bg-[#1B2A41] hover:text-white
">
  En savoir plus
</button>
```
- Ghost button avec bordure Bleu Nuit

### Cartes Produits

```tsx
<article className="
  bg-white
  hover:shadow-2xl
  transition-shadow duration-300
">
  {/* Image 3:4 sur fond Off-White */}
  <div className="aspect-[3/4] bg-[#F9F9F7]">
    <img src="..." alt="..." />

    {/* Badge Personnalisable */}
    <span className="
      absolute top-4 right-4
      bg-[#C5A065] text-white
      text-xs font-semibold uppercase
      px-3 py-1 rounded-sm
    ">
      Personnalisable
    </span>
  </div>

  {/* Infos */}
  <div className="p-6">
    <p className="text-[#6B7280] text-sm uppercase">Hôtellerie</p>
    <h3 className="text-[#1B2A41] font-bold text-lg">Chemise Service</h3>
    <p className="text-[#1B2A41] font-bold text-xl">89,00 €</p>
  </div>
</article>
```

**Caractéristiques**:
- Pas de bordure visible au repos
- Ombre portée légère au survol uniquement
- Image ratio 3:4 (portrait)
- Fond détourage produit: Off-White (#F9F9F7), jamais blanc pur

### Formulaires - Floating Labels

```tsx
<div className="relative">
  <input
    id="company"
    type="text"
    className="peer w-full px-4 pt-6 pb-2 border-2 border-[#6B7280] rounded"
    placeholder=" "
  />
  <label
    htmlFor="company"
    className="
      absolute left-4 top-1/2 -translate-y-1/2
      text-[#6B7280]
      transition-all
      peer-focus:top-3 peer-focus:text-xs peer-focus:text-[#1B2A41]
    "
  >
    Nom de votre société
  </label>
</div>
```

**Design**: Le label "flotte" vers le haut quand l'input est actif.

### Card Select (Wizard - Sélection Visuelle)

```tsx
<div className="
  border-2 border-[#6B7280]
  rounded-lg p-6
  cursor-pointer
  hover:border-[#C5A065]
  data-[selected=true]:border-[#C5A065]
  data-[selected=true]:bg-[#C5A065]/5
">
  {/* Icône + Label */}
  <div className="w-16 h-16 mx-auto mb-4">
    {/* SVG Icon */}
  </div>
  <p className="text-center font-semibold">Équipe Cuisine</p>

  {/* Checkbox visuel */}
  <div className="absolute top-4 right-4 w-6 h-6 rounded-full border-2">
    {/* Checkmark si sélectionné */}
  </div>
</div>
```

**Usage**: Remplace les menus déroulants classiques dans le formulaire wizard.

### Barre de Progression (Wizard)

```
[1]───────[2]───────○ 3 ───────○ 4

Légende:
[1] Complété (fond Bleu Nuit #1B2A41)
[2] Actif (fond Or Mat #C5A065 + shadow)
○ Futur (bordure Gris #6B7280, fond transparent)
```

**Design**: Minimaliste avec points numérotés reliés par une ligne fine.

---

## 🎭 Iconographie

### Règles
- **Set unique**: Heroicons Outline ou Feather Icons
- **Épaisseur du trait**: 1.5px à 2px (stroke-width)
- **Taille minimum**: 24x24px
- **Couleur par défaut**: Midnight Blue (#1B2A41)
- **Couleur accent**: Muted Gold (#C5A065) pour états actifs

### Icônes Métier Obligatoires
- ✂️ **Ciseaux** → Création / Couture
- 📏 **Mètre ruban** → Sur-mesure
- 👔 **Cintre** → Vêtements
- 🚚 **Camion** → Livraison
- 🛡️ **Bouclier** → Sécurité
- 👨‍🍳 **Toque** → Cuisine
- 🔔 **Cloche** → Service
- 🎫 **Badge** → Accueil

---

## 📸 Direction Photographique

### Images Produits E-commerce
- **Fond**: Détourage sur Off-White (#F9F9F7) - PAS de blanc pur
- **Format**: Ratio 3:4 (portrait) - minimum 1200x1600px
- **Angle**: Uniformisé par catégorie
- **Fichiers**: WebP avec fallback JPEG

### Images Institutionnelles
- **Ambiance**: Lumineuse, naturelle, professionnelle
- **Mise en scène**: Personnel en action, interactions réelles (pas de poses statiques)
- **Éclairage**: Lumière naturelle privilégiée
- **À éviter**: Mannequins figés, fond blanc pur, flash brutal

### Images Macro (Matières)
- **Usage**: Section "Création sur-mesure"
- **Sujet**: Textures, coutures, broderies, boutons (gros plans)
- **Objectif**: Prouver la qualité "Couture"

---

## 📐 Layout & Structure

### Header (Navigation)
```
[ LOGO ] ... [ Expertise | Boutique | Secteurs ] ... [ | Compte | Panier ] [ BOUTON PROJET ]
```

**Caractéristiques**:
- Fond: Blanc
- Logo: Aligné à gauche
- Menu: Centré, uppercase, Lato Medium
- Séparateur visuel: Trait vertical fin entre navigation et outils
- Bouton "Confiez-nous votre projet": Isolé à droite, style Or Mat

### Hero Section
```tsx
<section className="
  relative min-h-[70vh]
  bg-cover bg-center
">
  {/* Overlay gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#1B2A41]/30 to-[#1B2A41]/60" />

  {/* Content */}
  <div className="relative z-10 text-center text-white">
    <h1 className="font-display text-7xl">L'uniforme – un art qui vous ressemble</h1>
    <p className="text-xl">Depuis 20 ans, allier élégance et exigences techniques</p>

    <button className="bg-[#C5A065] ...">Démarrer une création sur-mesure</button>
    <button className="border-2 border-white ...">Explorer la boutique</button>
  </div>
</section>
```

**Règles**:
- Image de fond haute résolution, ambiance premium
- Overlay sombre pour lisibilité
- Maximum 2 CTA (1 primaire Or Mat + 1 secondaire Ghost)

### Grid Produits
```css
/* Mobile: 1 colonne */
grid-template-columns: 1fr;

/* Tablette (768px+): 2 colonnes */
@media (min-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
}

/* Desktop (1024px+): 3 colonnes */
@media (min-width: 1024px) {
  grid-template-columns: repeat(3, 1fr);
}

/* Wide (1440px+): 4 colonnes */
@media (min-width: 1440px) {
  grid-template-columns: repeat(4, 1fr);
}
```

### Footer
```tsx
<footer className="bg-[#1B2A41] text-white">
  <div className="container">
    {/* Logo blanc inversé */}
    <img src="logo.svg" className="filter brightness-0 invert" />

    {/* Menus + Mentions */}
    {/* Liens hover: couleur Or Mat */}
  </div>
</footer>
```

---

## ⚠️ Interdictions Strictes

### À NE JAMAIS FAIRE
1. ❌ Utiliser noir pur (#000000) pour du texte
2. ❌ Utiliser blanc pur (#FFFFFF) comme fond de page
3. ❌ Plus d'un bouton Or Mat (#C5A065) par section visible
4. ❌ Playfair Display dans les éléments UI (boutons, inputs)
5. ❌ Border-radius > 8px (garder un aspect sérieux)
6. ❌ Images produits sur fond blanc pur
7. ❌ Menus déroulants dans wizard (utiliser Card Select)
8. ❌ Icônes de sets différents dans la même interface
9. ❌ Animations < 200ms ou > 500ms
10. ❌ Emojis dans l'interface (sauf demande explicite)

---

## ✅ Checklist de Conformité

Avant validation d'un composant/page:

### Design
- [ ] Couleurs: Uniquement celles de la palette
- [ ] Typographie: Playfair pour titres, Lato pour UI
- [ ] Espacement cohérent
- [ ] Maximum 1 CTA primaire Or Mat par section

### Accessibilité
- [ ] Contraste WCAG AA (ratio 4.5:1)
- [ ] Labels sur tous les champs
- [ ] Focus clavier visible
- [ ] ARIA labels sur icônes fonctionnelles

### Performance
- [ ] Images optimisées (Next.js Image, lazy loading)
- [ ] Composants lourds en dynamic import
- [ ] Responsive testé (mobile, tablette, desktop)

### Qualité
- [ ] TypeScript strict (pas de any)
- [ ] Composants typés
- [ ] Pas de console.log
- [ ] Naming conventions respectées

---

## 📚 Ressources

### Fonts
- [Playfair Display sur Google Fonts](https://fonts.google.com/specimen/Playfair+Display)
- [Lato sur Google Fonts](https://fonts.google.com/specimen/Lato)

### Icônes
- [Heroicons](https://heroicons.com/) (Recommandé - Outline version)
- [Feather Icons](https://feathericons.com/) (Alternative)

### Outils
- [Contrast Checker](https://webaim.org/resources/contrastchecker/) - Vérifier les contrastes WCAG
- [PageSpeed Insights](https://pagespeed.web.dev/) - Performance
- [WAVE](https://wave.webaim.org/) - Accessibilité

---

## 🎯 Philosophie Résumée

> **"L'Élégance Fonctionnelle"**

Chaque élément du design doit incarner la dualité de Veoma & Co:

**L'Art** (Couture, Style, Prestige)
- Playfair Display en italic pour les accents
- Or Mat pour les moments clés
- Images macro de matières nobles
- Citations clients élégantes

**La Ressemblance** (Fonctionnalité, Technique, Rigueur)
- Lato pour une UI claire et professionnelle
- Bleu Nuit pour l'autorité
- Formulaires structurés avec validation
- Grilles produits organisées

Le site ne dit pas simplement "nous vendons des vêtements", mais **"nous valorisons votre image de marque"**.

---

**Version**: 1.0.0
**Dernière mise à jour**: 2026-01-06
**Contact Design**: design@veoma.co
