# CSS Structure Documentation

## Overview
The CSS has been consolidated from 28 duplicate files into an organized, maintainable structure.

## File Organization

```
css/
├── base.css              # Foundation: Reset, variables, typography
├── components.css        # Shared UI components (cards, icons, etc.)
├── globals.css          # Shared utility styles (legacy, can be merged with base.css)
├── styleguide.css       # CSS variables only (legacy, merged into base.css)
├── dashboard-ministry-leader-1.css
├── notifications-ministry-leader.css
├── series-ministry-leader-1.css
├── series-ministry-leader-2.css
└── series-ministry-leader-3.css
```

## Import Order (Recommended)

In your HTML files, import CSS in this order:

```html
<!-- 1. Base styles (reset, variables, typography) -->
<link rel="stylesheet" href="css/base.css" />

<!-- 2. Shared components -->
<link rel="stylesheet" href="css/components.css" />

<!-- 3. Page-specific styles -->
<link rel="stylesheet" href="css/dashboard-ministry-leader-1.css" />
```

## CSS Variables

All design tokens are defined in `css/base.css`:

### Colors
```css
--bali-hai: #8a99ac;
--black: #000000;
--concrete: #f2f2f2;
--paarl: #a34924;
--pickled-bluewood: #2c4859;
--pickled-bluewood-2: #324856;
--white: #ffffff;
--white-2: #ffffffad;
```

### Font Sizes
```css
--font-size-m: 16px;
--font-size-l: 18px;
--font-size-xl: 22px;
--font-size-xxl: 28px;
--font-size-xxxl: 32px;
--font-size-xxxxl: 38px;
--font-size-xxxxxl: 48px;
```

### Font Families
```css
--font-family-manrope: "Manrope", Helvetica;
--font-family-inter: "Inter", Helvetica;
```

## Typography Classes

Use these utility classes for consistent typography:

- `.manrope-bold-pickled-bluewood-16px`
- `.manrope-bold-pickled-bluewood-22px`
- `.manrope-bold-white-18px`
- `.manrope-bold-white-16px`
- `.manrope-extra-bold-pickled-bluewood-22px`
- `.manrope-medium-white-22px`
- `.manrope-bold-white-48px`
- `.manrope-bold-pickled-bluewood-38px`
- `.manrope-extra-bold-white-16px`
- `.manrope-medium-pickled-bluewood-16px`

## Component Classes

Shared components in `css/components.css`:

- `.card` - Card container
- `.series-card` - Series/episode card
- `.episode-title` - Episode title text
- `.thumbnail` - Image thumbnail
- `.section-header` - Section headers
- `.bell` - Notification bell icon
- Icons: `.layer_1`, `.ellipse-14`

## Migration Notes

### What Was Changed
1. ✅ Removed 28 duplicate CSS files (`globals*.css` and `style*.css` from root)
2. ✅ Created consolidated `css/base.css` with all foundation styles
3. ✅ Created `css/components.css` for shared UI components
4. ✅ Kept page-specific CSS files in `css/` folder

### What Was Kept
- Page-specific CSS files remain separate for maintainability
- Existing class names unchanged (no breaking changes)
- Original folder structure in `css/` directory

### Next Steps for Developers
1. Update HTML files to use new import order (see above)
2. Consider merging `css/globals.css` into `css/base.css` (they overlap)
3. Add interactive behaviors with JavaScript
4. Document component usage patterns
