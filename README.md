# Joy Alozie Portfolio

A modern, responsive portfolio website showcasing Joy Alozie's professional background in healthcare diagnostics and data analytics.

## Features

- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Professional Layout** - Clean, modern design with purple theme
- **Project Showcase** - Display of selected work with filtering capability
- **Skills Section** - Organized skills across three categories
- **Elevator Pitch** - Compelling career narrative
- **Contact Integration** - Email and LinkedIn links

## Tech Stack

- **Vite** - Fast build tool and dev server
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with responsive design
- **JavaScript** - Interactive features (project filtering)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/joy-portfolio.git
cd joy-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
joy-portfolio/
├── index.html          # Main HTML file
├── src/
│   ├── main.js        # JavaScript entry point
│   └── style.css      # Global styles
├── package.json       # Project dependencies
├── vite.config.js     # Vite configuration
└── README.md          # This file
```

## Sections

- **Header** - Name, tagline, and contact buttons
- **Professional Bio** - Background and experience overview
- **Skills & Expertise** - Three skill categories with icons
- **Elevator Pitch** - Career transition narrative
- **Selected Work** - Project showcase with search filter
- **Footer** - Copyright information

## Features

### Project Filter
Search and filter projects by name in real-time using the search box in the "Selected Work" section.

### Responsive Design
The portfolio adapts to different screen sizes:
- Mobile: Single column layout
- Tablet: Optimized spacing
- Desktop: Multi-column grid layout

## Customization

### Colors
Edit `src/style.css` to change the color scheme. Current theme uses:
- Primary: Purple (#7c3aed)
- Background: Light Purple (#f5f3ff)
- Text: Slate (#1e293b)

### Content
Update `index.html` to modify:
- Personal information
- Skills and expertise
- Projects and work samples
- Contact information

## Deployment

### GitHub Pages
1. Push to GitHub
2. Go to repository Settings → Pages
3. Select `main` branch as source
4. Your site will be live at `https://yourusername.github.io/joy-portfolio`

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel
1. Import project from GitHub
2. Vercel auto-detects Vite configuration
3. Deploy with one click

## License

This project is open source and available under the MIT License.

## Contact

- Email: joybenalozie@gmail.com
- LinkedIn: [Your LinkedIn Profile]

---

Built with ❤️ using Vite
