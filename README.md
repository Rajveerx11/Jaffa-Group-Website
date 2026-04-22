# Jaffa Group - Premium Luxury Home Builder

Welcome to the **Jaffa Group** project! This is a modern, premium web application built for a custom luxury home builder based in Park City, Utah. It showcases their bespoke portfolio, philosophical approach, and provides an avenue for potential home buyers to connect.

This project is fully completely responsive and designed to look stunning across desktop, tablet, and mobile devices. Fast, fluid animations and parallax scrolling make the experience immersive!

---

## 🌟 Features Overview

- **Beautiful Cinematic Hero:** A full-screen video/image effect that scales and translates to give a highly premium feel when you first open the site.
- **Scroll-Triggered Animations:** Content gracefully fades up or slides in as you scroll down the page, thanks to `framer-motion` (Motion for React).
- **Masonry Portfolio:** Beautiful presentation of high-end home projects structured like an architectural magazine layout. Filter properties to see them neatly re-animate into place!
- **Sleek Custom Cursor:** A minimalist circle replaces your standard mouse arrow and expands when hovering over interactive elements.
- **Auto-Scrolling Testimonials:** Check out what previous clients say in an elegant carousel that continuously scrolls (and pauses on hover).
- **Responsive Layouts:** Perfectly scales between your phone, iPad, or a wide Desktop monitor.

## 💻 Tech Stack Used

Even if you're a beginner, here's a quick look at the technologies used to make this magic happen:

- **React (`react`, `react-dom`)**: A popular JavaScript library for building user interfaces using customized, reusable components.
- **TypeScript (`.tsx` / `.ts`):** JavaScript but with types. It helps catch errors before the code runs and provides excellent autocomplete during development.
- **Vite:** Our fast build tool. It spins up the server quickly so you can see your code changes almost instantly.
- **Tailwind CSS (`tailwindcss`):** A utility-first CSS framework. It lets us style pages by adding simple class names directly into our HTML/React code (e.g., `<div className="text-center font-bold">`).
- **Framer Motion (`motion/react`):** Extremely easy to use and powerful animation library. We use it for scroll effects, staggering entrances, and more!
- **Lucide-React (`lucide-react`):** A clean set of open-source SVG icons (like the Instagram and LinkedIn logos in the footer).

---

## 🚀 How to Run the Website Locally

Ready to work on this app right on your computer? Just follow these steps!

### 1. Prerequisites 

Make sure you have Node.js installed on your computer. You can download and install it from [nodejs.org](https://nodejs.org/). Having Node installed will automatically install `npm` (Node Package Manager).

### 2. Install Dependencies

Open up a terminal (or command prompt), navigate to the folder containing this project, and run the following command to download all necessary libraries:

```bash
npm install
```

### 3. Start the Development Server

To launch the site in your browser and see changes live, run:

```bash
npm run dev
```

The terminal will tell you what local web address you can visit! (Usually something like `http://localhost:3000`). Make sure to open it up in your web browser.

---

## 📂 Project Structure Guide

If you're opening the code for the first time, it might feel overwhelming. Here's a map of the important sections!

- `/src`: **The main action! All your code lives here.**
  - `main.tsx`: The starting point that mounts the whole React app to the browser screen.
  - `App.tsx`: The main page layout containing the `<Navbar />`, `<Hero />`, `<Footer />` and all sections in between!
  - `index.css`: Where global styles, colors, and fonts are set up (using Tailwind CSS configurations).
  - `/components`: The building blocks. Every single visible part of the site is broken up into its own piece:
    - `Navbar.tsx` & `Footer.tsx`
    - `Hero.tsx` & `About.tsx` & `Stats.tsx`
    - `Portfolio.tsx`, `Testimonials.tsx`
    - `Loader.tsx` & `Cursor.tsx` (Handles the intro animation and the custom mouse)

- `package.json`: Contains the "recipe list" of which third-party code packages the project relies on, as well as the commands you map (like `npm run dev`).
- `vite.config.ts`: Handles settings for Vite (our web server and bundler).
- `.env.example`: A template showing what kind of environment variables (like secret keys or URLs) the app might need in a production environment. 

---

## 🛠️ Making Changes 

Let's say you want to change the main headline of the site! 
1. Open `/src/components/Hero.tsx`.
2. Find the `<motion.h1>` tag.
3. Change the text from `"Homes Built for How You Live"` to whatever you'd like.
4. Save the file, and your browser should automatically update!

### Adding a New Project to Portfolio 
Want to list a new Jaffa Group home build? 
1. Open `/src/components/Portfolio.tsx`.
2. Look around the top of the file for the `const projects = [...]` array.
3. Simply copy an object `{ id: 1, name: '...', location: '...', category: '...' }`, paste it, update the details and watch it appear!

---

## 🐛 Bug Fixes and Updates 
This build has been explicitly pre-configured to be "delivery ready".
- Ensured `<select>` dropdowns explicitly control default values securely using React `defaultValue` constraints, avoiding any console warnings!
- The project implements secure custom animated cursors and `scroll-behavior` with proper cleanup to prevent memory leaks in the browser.
- Hardcoded CSS themes conform perfectly to the Jaffa Group brand without any unrequested aesthetic overwrites. 

Happy building! Let's craft some luxury. 
