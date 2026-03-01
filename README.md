# Dashboard UI Pro

A production-grade, visually intentional, and aesthetically cohesive React Dashboard application. Built with a focus on modern UI/UX design, utilizing a custom design token system, fluid animations, and a responsive layout.

![Dashboard Preview](https://via.placeholder.com/1200x600/0A0C10/F1F5F9?text=Dashboard+UI+Pro)

## 🚀 Key Features

- **Modern Architecture:** Powered by Vite and React 19 for lightning-fast performance and an exceptional developer experience.
- **Custom Design System:** Built with a strict CSS variable token system (defined in `GEMINI.md`) ensuring consistent branding and aesthetics across all components.
- **Dark Mode Native:** Designed meticulously for dark mode with deep, rich backgrounds (`#0A0C10`, `#111318`) alongside vibrant electric blue and violet accents.
- **Dynamic Data Visualization:** Fully integrated with `recharts` for interactive line, area, bar, and donut charts.
- **Responsive Layout:** 12-column CSS grid system and a fluid, collapsible sidebar that adapts beautifully to both desktop and mobile views.
- **Component-Driven:** Highly modular React architecture making it simple to scale, modify, or drop in new features.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS custom properties.
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Charts:** [Recharts](https://recharts.org/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 💻 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm`, `yarn`, or `pnpm` installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/wayandarma/dashboard-ui-gemini.git
   cd dashboard-ui-pro
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173/` to view the dashboard in action.

---

## 🎨 Design System & Modification Guide

This project strictly adheres to a deeply integrated robust CSS design system, largely bypassing default Tailwind styles in favor of CSS custom properties (Tokens). If you wish to modify the styles, follow these guidelines:

### Modifying Colors & Tokens

All core design tokens are located in your stylesheet globals (often `src/styles/tokens.css` or the main CSS file). **Never hardcode HEX or RGB values into individual components.**

To change the primary accent color or background shades, simply modify the root variables:

```css
:root {
  /* Change these base tokens to adapt the entire application's theme */
  --color-accent-primary:   #3D8EF0;   /* Electric Blue */
  --color-accent-secondary: #7B5CF0;   /* Violet */
  --color-bg-base:          #0A0C10;   /* Main Background */
}
```

### Typography

Typography is tokenized. 
- Headers (`--font-display`) use modern sans-serif fonts.
- Body text (`--font-body`) is strictly separated to ensure optimal readability.
- Numerical data/KPIs use monospace (`--font-mono`) to keep digits aligned.

### Adding New Components

When building new components, ensure they utilize the established layout variables for paddings, standard border radii (`--radius-md`, `--radius-lg`), and gradient standards.

Example of standard card styling applied in this project:
```css
.card {
  background: var(--gradient-card);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  border: 1px solid var(--color-border-subtle);
  transition: all 200ms ease;
}
```

If you are expanding functionality, refer to the `src/components/` directory for primitive examples (`Card`, `Button`, `Badge`) before creating custom CSS.

---

## 📁 Project Structure

```text
/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and local SVGs
│   ├── components/         # Reusable UI primitives (Buttons, Cards, Charts)
│   ├── pages/              # Main dashboard views and layouts
│   ├── styles/             # Global CSS, tokens, and Tailwind inputs
│   ├── main.jsx            # Application entry point
│   └── App.jsx             # Root router & layout wrapper
├── index.html
├── package.json
├── tailwind.config.js      # Tailwind configuration and extensions
└── vite.config.js          # Vite configuration
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes adhering to the design rules.
4. Commit your changes: `git commit -m 'Add some feature'`.
5. Push to the branch: `git push origin feature/your-feature-name`.
6. Submit a pull request.

---

## 📄 License

This project is licensed under the ISC License.
