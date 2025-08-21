# Khudu Media House - React Portfolio Website

A modern, responsive React application built with Vite, featuring professional media services portfolio with PWA capabilities.

## Features

- ⚡ Built with Vite for fast development and optimized builds
- 🎨 Modern React 19 with Hooks and functional components
- 📱 Responsive design with Tailwind CSS
- 🚀 PWA (Progressive Web App) support
- 🔍 SEO optimized with React Helmet Async
- 🎬 Framer Motion animations
- 📧 Contact form functionality
- 🖼️ Portfolio gallery with masonry layout

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **SEO**: React Helmet Async
- **Icons**: React Icons
- **Build Tool**: Vite with optimized configuration

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd khudu-media-house
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Netlify Deployment

This project is configured for easy deployment on Netlify.

### Deployment Options:

#### Option 1: Git-based Deployment (Recommended)

1. Connect your GitHub/GitLab repository to Netlify
2. Netlify will automatically detect the build settings from `netlify.toml`
3. Deployments will trigger automatically on git push

#### Option 2: Manual Deployment

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify
3. Configure redirects in Netlify dashboard if needed

#### Option 3: Netlify CLI

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Login: `netlify login`
3. Deploy: `netlify deploy --prod --dir=dist`

### Netlify Configuration

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18
- **SPA Routing**: Configured via `netlify.toml`

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── assets/        # Images and media files
├── styles/        # Global styles
└── main.jsx       # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env` file for environment-specific variables:

```env
VITE_APP_TITLE=Khudu Media House
VITE_APP_DESCRIPTION=Professional media services portfolio
```

## Performance Features

- Code splitting with manual chunks
- Gzip and Brotli compression
- Image optimization
- Cache optimization headers
- PWA offline capabilities

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project is proprietary property of Khudu Media House.
