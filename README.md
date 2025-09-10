# Sister Blooms 🌸

A beautiful static website for a dahlia flower business, built with React and powered by Decap CMS for easy content management. Deployed automatically to GitHub Pages.

## ✨ Features

- **React Frontend**: Modern, responsive interface showcasing dahlia catalog
- **Interactive Flower Cards**: Click to view detailed information, pricing, and specifications
- **Search Functionality**: Find flowers by name, description, or color
- **Decap CMS Integration**: Easy content management through `/admin` interface
- **GitHub Pages Deployment**: Automatic deployment via GitHub Actions
- **Mobile Responsive**: Optimized for all device sizes
- **Type Safety**: Built with TypeScript for reliability

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit:

- **Main site**: http://localhost:5173
- **Admin panel**: http://localhost:5173/admin

### Building for Production

```bash
npm run build
```

## 📁 Project Structure

```
sister-blooms/
├── src/
│   ├── components/         # React components
│   │   ├── FlowerCard.tsx  # Individual flower display
│   │   ├── FlowerGrid.tsx  # Grid layout for flowers
│   │   └── FlowerModal.tsx # Detailed flower popup
│   ├── App.tsx            # Main application
│   ├── main.tsx           # Entry point
│   ├── types.ts           # TypeScript definitions
│   ├── utils.ts           # Helper functions
│   └── styles.css         # Global styles
├── public/
│   ├── content/
│   │   └── flowers.json   # Flower data (managed by CMS)
│   ├── media/             # Uploaded flower images
│   └── admin/             # Decap CMS interface
│       ├── index.html
│       └── config.yml
└── .github/workflows/
    └── deploy.yml         # GitHub Pages deployment
```

## 🌺 Content Management

### Using Decap CMS

1. **Local Development**: Visit `/admin` - no authentication required
2. **Production**: Requires GitHub OAuth setup (see below)

### Adding Flowers

Each flower entry includes:

- **Basic Info**: Name, ID, slug, description
- **Pricing**: Price in USD
- **Specifications**: Colors, bloom size, plant height
- **Categorization**: Dahlia type (Dinner Plate, Decorative, etc.)
- **Images**: Upload via the media library

### Content Schema

```json
{
  "id": "unique-identifier",
  "name": "Display Name",
  "slug": "url-friendly-name",
  "image": "/media/image.jpg",
  "description": "Detailed description...",
  "price": 12.5,
  "colors": ["color1", "color2"],
  "bloom_size": "6-8 inches",
  "height": "3-4 feet",
  "availability": "Spring - Fall",
  "category": "Decorative"
}
```

## 🚀 Deployment

### GitHub Pages Setup

1. **Enable Pages**: Go to repository Settings → Pages → Source: GitHub Actions
2. **Push to main**: Deployment happens automatically
3. **Visit your site**: https://larsolm.github.io/sister-blooms

### Decap CMS Authentication (Production)

For production CMS access, you need GitHub OAuth:

1. **Create GitHub OAuth App**:

   - Go to GitHub Settings → Developer settings → OAuth Apps
   - Authorization callback URL: `https://api.netlify.com/auth/done`

2. **Deploy OAuth Handler**:

   - Use [netlify-cms-github-oauth-provider](https://github.com/vencax/netlify-cms-github-oauth-provider)
   - Deploy to Heroku, Vercel, or similar

3. **Update CMS Config**:
   ```yaml
   backend:
     name: github
     repo: larsolm/sister-blooms
     branch: main
     base_url: https://your-oauth-handler.herokuapp.com
   ```

## 🛠 Development

### Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **CMS**: Decap CMS (formerly Netlify CMS)
- **Styling**: Vanilla CSS with CSS Grid/Flexbox
- **Deployment**: GitHub Actions + GitHub Pages

### Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
```

### Adding Features

The codebase is designed for easy extension:

- **New flower fields**: Update `types.ts` and CMS config
- **Additional pages**: Create new components and routes
- **Styling changes**: Modify `src/styles.css`
- **CMS customization**: Edit `public/admin/config.yml`

## 📱 Browser Support

- Chrome/Edge 88+
- Firefox 78+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Sister Blooms** - Growing beautiful dahlias with love 🌸
