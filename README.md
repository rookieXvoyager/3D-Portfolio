# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## 3D Portfolio Website

>A visually stunning, interactive 3D portfolio built with React, Vite, and Three.js. Showcases projects, skills, testimonials, and contact form with immersive 3D models and modern UI/UX.

## ✨ Features

- **3D Hero Section:** Interactive 3D room model using @react-three/fiber and @react-three/drei
- **Animated Counters:** Showcases experience, clients, projects, and retention
- **Project Showcase:** Visually rich project cards with animations
- **Tech Stack & Skills:** 3D and image-based tech icons
- **Experience Timeline:** Animated work experience cards
- **Testimonials:** Client feedback with glowing card effects
- **Contact Form:** EmailJS-powered contact form with validation
- **Responsive Design:** Fully responsive for desktop, tablet, and mobile
- **Modern Animations:** GSAP-powered scroll and reveal animations
- **Customizable Assets:** Easily swap 3D models, images, and content

## 🚀 Demo

> _Add your live demo link here if deployed_

## 🏗️ Project Structure

```
├── public/
│   ├── images/         # Logos, icons, textures
│   └── models/         # 3D model .glb files
├── src/
│   ├── components/     # Reusable UI and 3D components
│   ├── constants/      # Data for sections, skills, testimonials, etc.
│   ├── sections/       # Page sections (Hero, Projects, TechStack, etc.)
│   ├── App.jsx         # Main app layout
│   ├── main.jsx        # Entry point
│   └── index.css       # Tailwind and custom styles
├── index.html          # App root
├── package.json        # Scripts and dependencies
├── vite.config.js      # Vite config
├── postcss.config.js   # PostCSS config
└── eslint.config.js    # ESLint config
```

## 🛠️ Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Three.js](https://threejs.org/) via [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [@react-three/drei](https://docs.pmnd.rs/drei/introduction)
- [GSAP](https://gsap.com/) for animations
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/) for contact form

## 📦 Installation & Setup

1. **Clone the repository:**
	```bash
	git clone <your-repo-url>
	cd 3d-portfolio
	```
2. **Install dependencies:**
	```bash
	npm install
	# or
	yarn install
	```
3. **Configure environment variables:**
	- Copy `.env` and set your EmailJS credentials:
	  - `VITE_APP_EMAILJS_SERVICE_ID`
	  - `VITE_APP_EMAILJS_TEMPLATE_ID`
	  - `VITE_APP_EMAILJS_PUBLIC_KEY`

4. **Run the development server:**
	```bash
	npm run dev
	# or
	yarn dev
	```
	The app will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

5. **Build for production:**
	```bash
	npm run build
	# or
	yarn build
	```

6. **Preview production build:**
	```bash
	npm run preview
	# or
	yarn preview
	```

## 🖼️ Customization

- **3D Models:** Place your `.glb` files in `public/models/` and update model paths in `src/constants/index.js`.
- **Images & Logos:** Add to `public/images/` and reference in constants or components.
- **Content:** Edit `src/constants/index.js` for skills, testimonials, experience, etc.
- **Sections:** Modify or add new sections in `src/sections/`.

## 📁 Notable Files & Folders

- `src/App.jsx` – Main layout, imports all sections
- `src/sections/` – Hero, Projects, TechStack, Experience, Testimonials, Contact, Footer
- `src/components/` – NavBar, Button, GlowCard, AnimatedCounter, TitleHeader, 3D Models
- `src/constants/index.js` – All static data and configuration
- `public/models/` – 3D .glb files (converted with [gltfjsx](https://github.com/pmndrs/gltfjsx))

## 🧩 Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Run ESLint

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Credits

- 3D models generated/converted using [gltfjsx](https://github.com/pmndrs/gltfjsx)
- Some models and icons from [Sketchfab](https://sketchfab.com/) and [public domain sources]
- Inspired by modern developer portfolios and 3D web design trends

## 📬 Contact

For questions, feedback, or collaboration, please use the contact form on the website or reach out via [LinkedIn](https://www.linkedin.com/).

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
