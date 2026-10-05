# Scroll-Based Animated Landing Page

## Live Demo
YOUR_VERCEL_URL

## GitHub Repository
YOUR_GITHUB_REPOSITORY_URL

## About
A premium, scroll-driven landing page for a fictional digital studio, **Auralis**. Built for the Algoryx Frontend Internship (Task 2) with reusable React components, Framer Motion animations, dark/light theming and a focus on performance and accessibility.

## Features
- Responsive navbar with hamburger menu and scroll-shrink effect
- Animated hero with floating cards, particles and gradient background
- Smooth scrolling to every section
- Scroll reveal animations (fade, slide left/right, scale, staggered)
- Parallax effects (hero layers, services visuals), reduced on mobile
- Animated counters triggered on scroll
- Alternating vertical timeline (single column on mobile)
- Interactive cards with hover glow
- Testimonials carousel with keyboard-accessible controls
- Pricing plans with a recommended plan
- Validated contact form with success message
- Dark/light theme with localStorage and system preference
- Scroll progress bar
- Respects `prefers-reduced-motion`

## Tech Stack
React 18, Vite 6, Tailwind CSS 3, Framer Motion, Lucide React, JavaScript (ES6+)

## Project Structure
```
scroll-animated-landing-page/
├── public/assets/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx  Hero.jsx  ScrollProgress.jsx  Stats.jsx
│   │   ├── Timeline.jsx  InteractiveCards.jsx  Testimonials.jsx
│   │   ├── Services.jsx  Pricing.jsx  Contact.jsx
│   │   └── Footer.jsx  ThemeToggle.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── .gitignore
```

## Installation
```bash
npm install
```

## Run Locally
```bash
npm run dev
```

## Production Build
```bash
npm run build
npm run preview
```

## Deployment
1. Push the project to GitHub.
2. Sign in at vercel.com with GitHub and choose **Add New > Project**.
3. Import the repository. Vercel detects Vite (build `npm run build`, output `dist`).
4. Click **Deploy**. No environment variables are needed.

## Responsive Design
Designed mobile-first for 320px phones, 768px tablets, 1024px laptops, 1440px desktops and 1920px large screens, with no horizontal overflow.

## Accessibility
Semantic landmarks, labelled form fields with error messages (`aria-invalid`, `role="alert"`), accessible names on all icon buttons, keyboard-focusable controls with visible focus rings, ARIA carousel and progress roles, and reduced-motion support.

## Author
Sachin Bairwa

GitHub: https://github.com/Sachinbairwa
