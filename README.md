# React Landing Page

A modern, responsive landing page built with **React**, **TailwindCSS**, and **Vite**, featuring **interactive 3D models**, smooth **AOS scroll animations**, and a mobile-friendly navigation menu.

---

## 🌐 Live Demo

Check out the live project here: [React Landing Page Live](https://fauz-del.github.io/React-landing-Page-/)

---

## 🎨 Features

- **3D Model Integration**  
  Interactive 3D model embedded with `@splinetool/react-spline`. Users can rotate and explore the 3D scene in real-time.  

- **Scroll Animations (AOS)**  
  Smooth scroll-triggered animations for text and components using [AOS](https://michalsnik.github.io/aos/).  

- **Responsive Design**  
  Fully responsive for mobile, tablet, and desktop devices using TailwindCSS.  

- **Mobile Menu**  
  Toggleable mobile menu for easy navigation on smaller screens.  

- **Modern UI**  
  Clean typography, hover effects, and subtle animations enhance user experience.

---

## 🛠 Tech Stack

- **Frontend:** React, TailwindCSS, React Icons  
- **3D Rendering:** @splinetool/react-spline  
- **Animations:** AOS (Animate On Scroll)  
- **Build Tool:** Vite  
- **Deployment:** GitHub Pages (`gh-pages`)  

---

## 📁 Project Structure
website-landing-page/ ├─ src/ │  ├─ components/      # React components (Header, Hero, etc.) │  ├─ assets/          # Images, 3D models │  └─ App.tsx          # Main app component ├─ dist/               # Production build ├─ vite.config.mjs     # Vite configuration ├─ package.json └─ README.md

---

## ⚡ Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/fauz-del/React-landing-Page-.git
   cd React-landing-Page-

2. Install dependencies:
   ```bash
   pnpm install

3. Run the development server:
   ```bash
   pnpm run dev

4. Open your browser at:
   ```bash
   http://localhost:5173


📦 Build & Deploy
To create a production build:
```bash
pnpm run build


To deploy the site to GitHub Pages:
```bash
pnpm run deploy

After running pnpm run deploy, your live site will be updated here:
```bash
https://fauz-del.github.io/React-landing-Page-/


🎮 3D Model & Animations
3D Model: Embedded using @splinetool/react-spline — interactive and responsive.
AOS Animations: Adds smooth fade-in, zoom, and slide effects on scroll.


License
This project is open-source. Feel free to use and modify it.

---

✅ After adding this:  

1. Save it as `README.md` in your project root.  
2. Commit and push to GitHub:
```bash
git add README.md
git commit -m "Add README with project details"
git push origin main


If you want the live site updated after changes, run:
```bash
pnpm run deploy
