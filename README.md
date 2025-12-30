# Anjasfedo | Full-Stack Engineer Portfolio

![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fanjasfedo.github.io%2F&style=flat-square&label=Status&logo=github)
![CI/CD](https://github.com/Anjasfedo/Anjasfedo.github.io/actions/workflows/deploy.yml/badge.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

> **"Building the Bridge Between Complex Backends and Beautiful Frontends."**

This is the repository for my personal portfolio website, designed to showcase my projects, skills, and engineering philosophy. It is built with a focus on **performance**, **accessibility**, and **interactive design**.

## 🔗 Live Demo
🚀 **[anjasfedo.github.io](https://anjasfedo.github.io/)**

---

## 🛠️ Tech Stack

This project leverages a modern, high-performance stack:

-   **Framework:** [Astro](https://astro.build/) (Static Site Generation for speed)
-   **UI Library:** [React](https://reactjs.org/) (For interactive islands like the Dock)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first styling)
-   **Animations:** [Motion](https://motion.dev/) (Framer Motion for layout transitions)
-   **Icons:** [Tabler Icons](https://tabler-icons.io/)
-   **Deployment:** GitHub Pages via GitHub Actions (CI/CD)

## ✨ Key Features

-   **Hybrid Rendering:** Uses Astro's Island Architecture to hydrate React components only when needed.
-   **Mac-style Dock:** A fully interactive, physics-based floating navigation dock.
-   **Responsive Design:** Mobile-first architecture that adapts to any screen size.
-   **Automated Deployment:** Commits to `main` trigger a complete build and deploy cycle via GitHub Actions.
-   **SEO Optimized:** Includes sitemap generation and semantic HTML structure.

## 📂 Project Structure

```text
/
├── public/           # Static assets (images, fonts, icons)
├── src/
│   ├── components/   # UI Components (Hero, Dock, Grids)
│   ├── layouts/      # Base layouts (Head, Meta tags, Footer)
│   ├── pages/        # Astro pages (File-based routing)
│   ├── styles/       # Global CSS and Tailwind directives
│   └── lib/          # Utility functions (clsx, tw-merge)
└── astro.config.mjs  # Configuration settings