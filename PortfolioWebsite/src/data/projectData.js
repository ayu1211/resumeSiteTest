// src/data/projectData.js

// --- DEFINE YOUR ACTUAL PROJECT DATA ---
// Put your real project info here.
// Use 16:9 images (like 500x281 pixels) for 'imageUrl'.
import one from "../data/onee.jpg"
import twoo from "../data/twoo.jpg"
import thre from "../data/thre.jpg"

export const ProjectsData = [
  { 
    id: 1, 
    title: 'E-commerce App', 
    imageUrl: one,
    description: 'A full-stack e-commerce platform built from scratch. Users can browse products, add to cart, and check out using Stripe. Includes a full admin dashboard for managing products and orders.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/your-username/project-1',
    liveUrl: 'https://project-1.your-domain.com'
  },
  { 
    id: 2, 
    title: 'Portfolio Website', 
    imageUrl: twoo,
    description: 'The Netflix-style portfolio you are currently browsing! Built with Vite for a lightning-fast developer experience, and Tailwind CSS for rapid, modern styling.',
    techStack: ['React', 'Vite', 'Tailwind'],
    githubUrl: 'https://github.com/your-username/portfolio',
    liveUrl: '#'
  },
  { 
    id: 3, 
    title: 'Chat Application', 
    imageUrl: thre,
    description: 'Real-time chat with Socket.io i dont know what is this this project is just for testing purposes and yes the up 2 projects are real and made by me thankyou dev.',
    techStack: ['React', 'Node.js', 'Socket.io'],
    githubUrl: 'https://github.com/your-username/chat-app',
    liveUrl: 'https://chat-app.your-domain.com'
  },
  // ...add as many projects as you want
];

// You can export your skills data from the same file
export const mySkillsData = [
  { id: 1, title: 'React', imageUrl: 'https://via.placeholder.com/500x281.png?text=React', techStack: ['Hooks', 'Router', 'Context'], githubUrl: '#', liveUrl: '#' },
  { id: 2, title: 'Node.js', imageUrl: 'https://via.placeholder.com/500x281.png?text=Node.js', techStack: ['Express', 'JWT', 'REST API'], githubUrl: '#', liveUrl: '#' },
  { id: 3, title: 'MongoDB', imageUrl: 'https://via.placeholder.com/500x281.png?text=MongoDB', techStack: ['Aggregation', 'Mongoose'], githubUrl: '#', liveUrl: '#' },
  // ...etc.
];