# HealthDrop Project - LLM Interface Control Document

## Project Overview
This document outlines the structure and purpose of the HealthDrop static website components. The site is built with vanilla HTML, CSS, and JavaScript, prioritizing simplicity, performance, and maintainability.

---

### `index.html`
- **Purpose:** Serves as the single-page container for all website content.
- **Structure:** Follows a semantic HTML5 structure.
    - `<header id="hero">`: Contains the main navigation (`<nav>`) with responsive hamburger menu for mobile and the primary headline/call-to-action.
    - `<main>`: Wraps the core page content.
    - `<section id="problem">`: Compares solutions using a responsive table system. It contains two HTML structures: a full table for desktops, and three separate 2-column tables for mobile. CSS is used to toggle visibility based on screen width.
    - `<section id="solution">`: Details the features of HealthDrop using a grid layout.
    - `<section id="why">`: Describes the project's vision and impact, also using a 3-column card layout.
    - `<section id="roadmap">`: Outlines the project's development phases using a vertical timeline list.
    - `<footer>`: Contains a "Get Involved" section with project contact links and copyright.
- **Key Classes:**
    - `.button`: For primary call-to-action links.
    - `.grid-3-col`, `.grid-2-col`: Container elements for creating responsive grids.
    - `.card`: A reusable component for displaying distinct blocks of information.
    - `.highlight-card`: A variant of the card for emphasis.
    - `.feature-item`: For items in the solution/features list.
- **Dependencies:**
    - `css/style.css` for all visual styling.
    - `js/script.js` for client-side interactivity.
    - Google Fonts API for the 'Inter' typeface.

---

### `css/style.css`
- **Purpose:** Contains all styling rules for the website. It is designed to be mobile-first.
- **Interfacing:** Rules are applied to elements in `index.html` using a combination of element selectors, classes, and IDs.
- **Key Features:**
    - **CSS Variables (`:root`):** Manages the site's color scheme, fonts, and spacing for easy theming and maintenance.
    - **Mobile-First Design:** Base styles are for mobile screens. A media query `@media (min-width: 768px)` overrides styles for larger screens.
    - **Responsive Navigation:** Implements a hamburger menu for mobile with slide-down animation. The menu toggles via the `.active` class and transforms into a horizontal nav bar on desktop.
    - **Layout:** Uses modern CSS Flexbox for component alignment (e.g., nav, hero content) and CSS Grid for page section layouts (`.grid-2-col`, `.grid-3-col`).
    - **Reusable Components:** Defines classes for common elements like `.container`, `.card`, and `.button` to ensure a consistent look and feel.
    - **Timeline Component:** Styles for `.timeline-list` create a vertical timeline with dots and connecting lines using CSS pseudo-elements.
    - **Responsive Table Toggle:** Implements a sophisticated responsive table. It uses a media query at 992px to switch between a mobile-optimized view (stacked 2-column tables) and a desktop-optimized view (a single wide table) by toggling the `display` property of two distinct HTML containers.

---

### `js/script.js`
- **Purpose:** Handles all client-side interactivity. Its primary function is to enable smooth scrolling for all on-page anchor links (`<a href="#...">`).
- **Interfacing:** The script listens for `DOMContentLoaded`, then:
    - Manages hamburger menu toggle functionality for mobile navigation
    - Attaches click event listeners to anchor tags for smooth scrolling
    - Automatically closes the mobile menu when a navigation link is clicked
    - Updates ARIA attributes for accessibility

---

### `assets/`
- **Purpose:** A directory to store all static assets, such as images (.jpg, .png, .svg) and potentially other media.
- **Interfacing:**
    - `hero-image.jpg`: The primary background image for the hero section, referenced in `css/style.css`.
    - `favicon.ico` (and other variants): The site icon, linked in the `<head>` of `index.html`.
    - Other images/icons are referenced via `<img>` tags directly in `index.html`.