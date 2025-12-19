## ⚠️ Usage & Copyright Notice

This project is part of my **personal developer portfolio**.

You are welcome to **view and evaluate** the source code for learning
and recruitment purposes.

❌ Commercial use is not permitted  
❌ Redistribution without permission is not permitted  

If you are a recruiter or interviewer and would like to discuss
this project in detail, feel free to contact me.

![React](https://img.shields.io/badge/React-18-blue)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animation-purple)
![Responsive](https://img.shields.io/badge/Responsive-Yes-green)

- Meta tags and semantic HTML for SEO

# Faizan's Portfolio Website

## Live Demo Link

🔗 Live Demo: [portfolio-five-pi-1kbxqgeljf.vercel.app](https://portfolio-five-pi-1kbxqgeljf.vercel.app/)

## Features

- ✨ Modern and clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Smooth animations with Framer Motion
- 📧 Contact form with validation
- 🎯 SEO optimized
- ⚡ Fast and performant

## Screenshots

- Hero Section
- About Section
- Projects Section
- Contact Section

## Purpose of This Project

This portfolio was built to:

- Showcase my frontend development skills
- Demonstrate clean component-based architecture
- Practice modern React animations using Framer Motion
- Present projects in a professional, recruiter-friendly format

## Tech Stack

- **Frontend**: React, JavaScript (JSX)
- **Styling**: SCSS/CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Form Handling**: EmailJS

## Project Structure

```plaintext
src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── SkillsSection.jsx
│   ├── ProjectsSection.jsx
│   ├── ExperienceSection.jsx
│   ├── ContactSection.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
└── pages/
    ├── Index.jsx
    └── NotFound.jsx
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd faizan-portfolio
```

2. Install dependencies (already done):

```bash
npm install
```

### Running the Development Server

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/HeroSection.jsx`):

   - Update name, title, description
   - Update social media links

2. **About Section** (`src/components/AboutSection.jsx`):

   - Update bio and stats

3. **Skills Section** (`src/components/SkillsSection.jsx `):

   - Add/remove skills and technologies

4. **Projects Section** (`src/components/ProjectsSection.jsx`):

   - Add your projects with images, descriptions, and links

5. **Experience Section** (`src/components/ExperienceSection.jsx`):

   - Update education and certifications

6. **Contact Section** (`src/components/ContactSection.jsx`):
   - Update email and location
   - Configure EmailJS for form functionality

### Styling

All styles are in the `src/styles/` directory. You can customize:

- Colors
- Fonts
- Spacing
- Animations

### EmailJS Setup (Optional)

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your Service ID, Template ID, and User ID
5. Update `src/components/ContactSection.jsx` with your credentials

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy

### Netlify

1. Push your code to GitHub
2. Import project on [Netlify](https://www.netlify.com)
3. Deploy

### GitHub Pages

```bash
npm install gh-pages --save-dev
```

Add to `package.json`:

```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Deploy:

```bash
npm run deploy
```

## Performance Optimization

- Images are lazy-loaded
- Code splitting implemented
- Optimized animations
- Minified CSS and JS in production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

- GitHub: [faizangit123](https://github.com/faizangit123)
- LinkedIn: https://www.linkedin.com/in/md-faizan-97705b348/
- Email: faizanrock705@gmail.com
- 📄 Resume: https://drive.google.com/your-resume-link

---

Made with ❤️ by Faizan
