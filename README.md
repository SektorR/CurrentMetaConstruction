# Current Meta Construction Services Website

Modern React-based website for Current Meta Construction Services specializing in timber frame construction, estimating, scheduling and consulting.

## Features

- Modern, responsive design with mobile-first approach
- React Router for client-side navigation
- Minimalist design with construction industry theming
- Service showcase and contact pages

## Technology Stack

- React 18
- React Router DOM v6
- CSS3 with custom properties
- Create React App

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Available Scripts

```bash
# Start development server (http://localhost:3000)
npm start

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format
```

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Deployment Options

#### Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

#### Vercel

```bash
npm install -g vercel
vercel
```

#### Static Hosting (AWS S3, GitHub Pages, etc.)

1. Run `npm run build`
2. Upload contents of `build/` folder to hosting provider
3. Configure server to handle client-side routing (redirect all routes to index.html)

### Environment Configuration

If deploying to a subdirectory, add to `package.json`:

```json
"homepage": "https://yourdomain.com/subdirectory"
```

## Project Structure

```
/public/           # Static assets
  index.html       # HTML template
  favicon.svg      # Site favicon
/src/
  /components/     # Reusable components (Header, Footer)
  /pages/          # Page components (Home, Services, About, Contact)
  /styles/         # CSS files
  App.js           # Main app component with routing
  index.js         # Entry point
```

## Design System

- **Primary Colors**: Dark green gradient (#1a3d2e to #4a7c59)
- **Timber Colors**: Red/brown palette (#8b4513 to #deb887)
- **Responsive**: Mobile-first design approach
- **Typography**: Clean, professional sans-serif fonts

## License

Private - Current Meta Construction Services

## Contact

For inquiries about construction services, visit the website or use the contact form.
