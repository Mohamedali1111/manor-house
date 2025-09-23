# Manor House Interior Design - Project Structure

## 📁 Project Organization

This document outlines the organized structure of the Manor House Interior Design website for better maintainability and clarity.

## 🏗️ Directory Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   │   └── page.tsx
│   ├── booking/                  # Project booking page
│   │   └── page.tsx
│   ├── consultation/             # Consultation booking page
│   │   └── page.tsx
│   ├── contact/                  # Contact page
│   │   └── page.tsx
│   ├── portfolio/                # Portfolio page
│   │   └── page.tsx
│   ├── services/                 # Services page
│   │   └── page.tsx
│   ├── testimonials/             # Testimonials page
│   │   └── page.tsx
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                   # Reusable components
│   ├── layout/                   # Layout components
│   │   ├── Navbar.tsx           # Navigation bar
│   │   └── Footer.tsx           # Footer component
│   ├── sections/                 # Page sections
│   │   └── Hero.tsx             # Hero section
│   ├── forms/                    # Form components (future)
│   ├── common/                   # Common utilities
│   │   └── PerformanceMonitor.tsx
│   ├── ui/                       # UI components
│   │   ├── PremiumButton.tsx    # Custom button component
│   │   ├── ServiceCard.tsx      # Service card component
│   │   └── ProjectCard.tsx      # Project card component
│   └── index.ts                  # Component exports
├── data/                         # Static data
│   ├── services.ts              # Services data
│   └── projects.ts              # Projects data
```

## 🎯 Component Categories

### Layout Components (`/layout/`)
- **Navbar.tsx**: Main navigation with mobile menu
- **Footer.tsx**: Site footer with links and information

### Section Components (`/sections/`)
- **Hero.tsx**: Homepage hero section with call-to-action

### UI Components (`/ui/`)
- **PremiumButton.tsx**: Customizable button with premium styling
- **ServiceCard.tsx**: Card component for displaying services
- **ProjectCard.tsx**: Card component for displaying projects

### Common Components (`/common/`)
- **PerformanceMonitor.tsx**: Performance tracking component

## 📄 Page Structure

### Home Page (`/`)
- Hero section
- Services showcase
- Featured projects
- Call-to-action sections

### About Page (`/about`)
- Company story
- Values and mission
- Team information
- Statistics

### Services Page (`/services`)
- Service cards grid
- Design process
- Service details

### Portfolio Page (`/portfolio`)
- Project showcase
- Project categories
- Client testimonials

### Contact Page (`/contact`)
- Contact form
- Contact information
- FAQ section

### Consultation Page (`/consultation`)
- Consultation types
- Booking form
- Process explanation

### Testimonials Page (`/testimonials`)
- Client testimonials
- Success statistics
- Video testimonials

### Booking Page (`/booking`)
- Comprehensive project form
- Project details collection
- Process explanation

## 🎨 Styling Organization

### Global Styles (`globals.css`)
- CSS variables for theming
- Base styles and resets
- Component utilities
- Animation definitions

### Tailwind Configuration (`tailwind.config.ts`)
- Custom color palette
- Font configuration
- Responsive breakpoints

## 📊 Data Management

### Services Data (`data/services.ts`)
- Service information
- Features and descriptions
- Icons and images

### Projects Data (`data/projects.ts`)
- Project portfolio
- Project details
- Image references

## 🔧 Component Guidelines

### Naming Conventions
- Components: PascalCase (e.g., `ServiceCard`)
- Files: PascalCase for components, camelCase for utilities
- Folders: lowercase with hyphens

### Import/Export
- Use named exports for components
- Import from `@/components` for cleaner imports
- Use the index.ts file for centralized exports

### Props Interface
- Define TypeScript interfaces for all component props
- Use descriptive prop names
- Include JSDoc comments for complex props

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📱 Responsive Design

All components are built with mobile-first responsive design:
- Mobile: Base styles
- Tablet: `sm:` and `md:` breakpoints
- Desktop: `lg:` and `xl:` breakpoints

## 🎯 Best Practices

1. **Component Reusability**: Create components that can be reused across pages
2. **Props Validation**: Use TypeScript for type safety
3. **Performance**: Use React.memo for expensive components
4. **Accessibility**: Include proper ARIA attributes
5. **SEO**: Use semantic HTML and proper meta tags

## 🔄 Future Enhancements

- Add form validation
- Implement contact form backend
- Add image optimization
- Create admin dashboard
- Add blog functionality
- Implement search functionality

## 📞 Support

For questions about the project structure or components, refer to this documentation or contact the development team.
