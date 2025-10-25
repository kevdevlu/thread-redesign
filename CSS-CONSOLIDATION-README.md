# CSS Consolidation Guide

## Overview
This folder contains Figma exports with consolidated CSS for better maintainability. The CSS architecture is now split into three layers for maximum reusability and minimal duplication.

## CSS File Structure

### Root Level CSS Files

#### `globals-shared.css` (LAYER 1: GLOBAL RESET & FONTS)
- **Purpose**: Common reset styles and font imports used across all pages
- **Contents**:
  - Meyer CSS reset
  - Manrope font imports (weights: 400, 500, 700, 800)
  - Global box-sizing and font smoothing
  - Focus styles for accessibility
  - Link reset styles
- **Used by**: All 14 Figma-exported HTML pages (3-16)
- **Load Order**: First

#### `components.css` (LAYER 2: SHARED DASHBOARD SHELL)
- **Purpose**: Shared dashboard UI components used across all pages
- **Contents**:
  - Container backgrounds and layouts
  - Sidebar with navigation, icons, and active states
  - Header bar with search, profile, and user name
  - Logo positioning
  - Scrollbar styling
  - Main content area backgrounds
- **Used by**: All 14 Figma-exported HTML pages (3-16)
- **Load Order**: Second (after globals-shared.css)
- **Benefit**: Eliminates massive duplication - these styles were previously repeated in every single style*.css file

#### `style.css` through `style13.css` (LAYER 3: PAGE-SPECIFIC CONTENT)
- **Purpose**: Page-specific content and layout
- **Contents**: Each file contains unique CSS for its corresponding HTML page's main content area
- **Naming Pattern**:
  - `style.css` → `3. onboarding 1.html`
  - `style1.css` → `4. onboarding 2.html`
  - `style2.css` → `5. onboarding 3.html`
  - ... and so on through `style13.css` → `16. members.html`
- **Load Order**: Third (after components.css)
- **Note**: These files still contain all their original styles. The CSS cascade ensures page-specific styles override component styles where needed.

### `/css/` Subdirectory CSS Files

The following pages use CSS from the `/css/` subdirectory instead of root-level:
- `1. dashboard.html` → uses `css/dashboard-ministry-leader-1.css`, `css/styleguide.css`, `css/globals.css`
- `2. series.html` → uses `css/series-ministry-leader-1.css`, `css/styleguide.css`, `css/globals.css`
- `17. notifications.html` → uses `css/notifications-ministry-leader.css`, `css/styleguide.css`, `css/globals.css`

## File Mapping

| HTML File | Layer 1 (Reset) | Layer 2 (Shell) | Layer 3 (Content) |
|-----------|-----------------|-----------------|-------------------|
| 3. onboarding 1.html | globals-shared.css | components.css | style.css |
| 4. onboarding 2.html | globals-shared.css | components.css | style1.css |
| 5. onboarding 3.html | globals-shared.css | components.css | style2.css |
| 6. onboarding 4.html | globals-shared.css | components.css | style3.css |
| 7. onboarding 5.html | globals-shared.css | components.css | style4.css |
| 8. Starting Point Resources.html | globals-shared.css | components.css | style5.css |
| 9. series 1 intro.html | globals-shared.css | components.css | style6.css |
| 10. series 1 episode 1 overview.html | globals-shared.css | components.css | style7.css |
| 11. series 1 episode 1 - leadership lesson.html | globals-shared.css | components.css | style8.css |
| 12. series 1 episode 1 - sermon starter.html | globals-shared.css | components.css | style9.css |
| 13. series 1 episode 1 - kids church.html | globals-shared.css | components.css | style10.css |
| 14. series 1 episode 1 - sunday service planner.html | globals-shared.css | components.css | style11.css |
| 15. series 1 episode 1 - graphics & media.html | globals-shared.css | components.css | style12.css |
| 16. members.html | globals-shared.css | components.css | style13.css |

## Benefits of This Approach

1. **Massive Reduction in Duplication**:
   - Previously, sidebar, header, and scrollbar styles were duplicated in all 14 style*.css files
   - Now consolidated into a single `components.css` file

2. **Single Source of Truth**:
   - Global styles: `globals-shared.css` (fonts, reset)
   - Dashboard shell: `components.css` (sidebar, header, scrollbar)
   - Page content: individual `style*.css` files

3. **Easier Maintenance**:
   - Want to change the sidebar style? Edit `components.css` once, affects all pages
   - Want to add a new font? Edit `globals-shared.css` once
   - Want to modify page content? Edit the specific `style*.css` file

4. **No Breaking Changes**:
   - All original `style*.css` files remain intact
   - CSS cascade naturally handles conflicts (page-specific styles override component styles)
   - Zero risk of breaking existing pages

5. **Better Performance**:
   - Browser caches `components.css` once, benefits all pages
   - Smaller individual page CSS files (eventually, once duplicates are removed)

6. **Preserved Functionality**: All Figma exports maintain their original appearance and behavior

## For Developers

### Modifying Global Styles (Layer 1)
Edit `globals-shared.css` to change:
- CSS reset behavior
- Font imports
- Global box-sizing
- Focus styles
- Link styles

**Impact**: Affects all 14 pages (3-16)

### Modifying Dashboard Shell (Layer 2) - NEW!
Edit `components.css` to change:
- Sidebar styling and navigation
- Header bar (search, profile, user name)
- Logo positioning
- Scrollbar appearance
- Main content area backgrounds
- Notification badges

**Impact**: Affects all 14 pages (3-16)
**Common Use Cases**:
- Changing sidebar colors or width
- Updating header bar styling
- Modifying the notification badge
- Adjusting the logo size or position

### Modifying Page-Specific Styles (Layer 3)
Edit the corresponding `style*.css` file for the page you're working on. Each file contains unique styling for that page's main content area.

**Impact**: Only affects the specific page
**Examples**:
- `style.css` → onboarding page 1
- `style6.css` → series intro page
- `style13.css` → members page

### Adding Interactive Behavior
The next step is to add JavaScript for button clicks, card interactions, and search functionality. Reference the appropriate files to understand class names:
- Dashboard shell: See `components.css`
- Page content: See the corresponding `style*.css` file

## Common Components Across Pages

The following components are now consolidated in `components.css`:

### Sidebar Navigation
- Container: `.rectangle`, `.rectangle-2` (depending on page)
- Navigation group: `.group`, `.group-2` (depending on page)
- Nav items: `.text-wrapper`, `.div`, `.text-wrapper-2`, `.text-wrapper-3`, `.text-wrapper-4`, `.text-wrapper-5`
- Icons: `.layer`, `.gnwuq`, `.group-3`, `.vector`, etc.
- Notification bell: `.bell`, `.ellipse`
- Settings icon: `.g`
- Active indicator: `.line`

### Header Bar
- Container: `.rectangle-2`, `.rectangle` (depending on page)
- Search bar: `.text-wrapper-6`, `.text-wrapper` (depending on page)
- Search icon: `.group-6`, `.group` (depending on page)
- Profile picture: `.profile`
- User name: `.text-wrapper-7`, `.div` (depending on page)
- Logo: `.LOGO`

### Scrollbar
- Container: `.group-8`, `.group-7` (depending on page)
- Thumb: `.rectangle-4`
- Track: `.rectangle-5`, `.rectangle-7` (depending on page)

### Main Content Area
- Background: `.rectangle-3`
- Page title: `.text-wrapper-8`, `.text-wrapper-13` (depending on page)

**Note**: Class names vary slightly between `.series-welcome`, `.series-ministry`, and `.members` root containers, but the component structure is identical.
