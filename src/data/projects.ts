import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
    link: "https://github.com/tarunerror/E-commerce.git",
    technologies: ["React", "Node.js", "MongoDB", "Redux"]
  },
  {
    id: 2,
    title: "Hotel Booking",
    description: "An AI-powered image generation tool using DALL-E API",
    image: "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/tarunerror/pgroombooking.git",
    technologies: ["React", "TypeScript", "TailwindCSS"]
  },
  {
    id: 3,
    title: "Real Time Analytics Dashboard",
    description: "Real-time social media analytics dashboard",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    link: "https://github.com/tarunerror/Real-Time-Analytics-Dashboard.git",
    technologies: ["React", "D3.js", "Firebase"]
  }
];