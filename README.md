# Manor House

A beautiful full-stack Next.js 15 application built with TypeScript, Tailwind CSS v4, and the App Router.

## Features

- ✨ **Next.js 15** with App Router
- 🎨 **Tailwind CSS v4** with custom color palette
- 🌙 **Dark Mode** with class-based switching (dark as default)
- 🔤 **Poppins Font** from Google Fonts
- 📱 **Responsive Design** with modern UI/UX
- 🎯 **TypeScript** for type safety
- 🎨 **Custom Color Scheme** with elegant manor house theme

## Color Palette

- **Background**: `#0b0b0f` (dark) / `#ffffff` (light)
- **Foreground**: `#ffffff` (dark) / `#0b0b0f` (light)
- **Accent**: `#c9a15b` (golden)
- **Card**: `#1c1c22` (dark) / `#f8f9fa` (light)
- **Highlight**: `#e4bb7d` (light golden)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind directives & CSS variables
│   ├── layout.tsx           # Root layout with Poppins font
│   └── page.tsx             # Home page with manor house theme
└── components/
    └── ThemeToggle.tsx      # Dark/light mode toggle
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Fonts**: Google Fonts (Poppins)
- **Icons**: Lucide React
- **Router**: App Router

## Customization

The theme can be easily customized by modifying the CSS variables in `src/app/globals.css` and the color definitions in `tailwind.config.ts`.

---

Built with ❤️ using Next.js and Tailwind CSS
