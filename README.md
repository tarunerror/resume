# 3D Interactive Portfolio

![Portfolio Preview](https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=1200)

A modern, animated portfolio website built with React, Three.js, and Framer Motion. Features a stunning 3D background, smooth animations, and a dark matte theme.

## ✨ Features

- **Interactive 3D Background** - Engaging three-dimensional scene using Three.js
- **Smooth Animations** - Beautiful page transitions and scroll animations with Framer Motion
- **Responsive Design** - Fully responsive layout that works on all devices
- **Dark Matte Theme** - Modern and elegant dark theme with glass morphism effects
- **Project Showcase** - Dynamic project cards with hover effects
- **Skills Section** - Organized display of technical skills with icons
- **Interactive Timeline** - Unique achievement timeline with animations
- **Performance Optimized** - Lazy loading and optimized 3D rendering

## 🚀 Tech Stack

- React
- TypeScript
- Three.js (@react-three/fiber & @react-three/drei)
- Framer Motion
- Tailwind CSS
- Vite
- Lucide Icons

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/tarunerror/resume.git
```

2. Navigate to the project directory:
```bash
cd resume
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── Scene.tsx      # 3D background
│   ├── Hero.tsx       # Hero section
│   ├── Projects.tsx   # Projects section
│   ├── Skills.tsx     # Skills section
│   ├── Timeline.tsx   # Timeline section
│   └── Footer.tsx     # Footer component
├── data/              # Static data
│   └── projects.ts    # Project information
├── types/             # TypeScript types
│   └── Project.ts     # Project interface
└── App.tsx            # Main application component
```

## 🎨 Customization

### Modifying Projects
Edit `src/data/projects.ts` to add or modify project information:

```typescript
{
  id: 1,
  title: "Your Project",
  description: "Project description",
  image: "project-image-url",
  link: "project-link",
  technologies: ["Tech1", "Tech2"]
}
```

### Updating Skills
Modify the skills array in `src/components/Skills.tsx` to update your technical skills.

### Changing Timeline
Edit the achievements array in `src/components/Timeline.tsx` to update your milestones.

## 🔧 Configuration

### Tailwind Configuration
Customize the theme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    // Add custom colors, fonts, etc.
  }
}
```

### Three.js Scene
Modify the 3D scene in `src/components/Scene.tsx` to customize the background animation.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Performance

- Optimized 3D rendering with proper disposal of Three.js resources
- Lazy loading of images and components
- Efficient animation handling with Framer Motion
- Minimal bundle size through proper code splitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/tarunerror/resume](https://github.com/tarunerror/resume)

---

Made with ❤️ by Tarun Gautam

<a href="https://instagram.com/tan.error">
    <img src="https://img.shields.io/badge/Follow-%40tan.error-ff69b4?style=social&logo=instagram" alt="Instagram Follow">
</a>
