import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Todoapp from './pages/TodoApp.jsx';  // Make sure this matches exactly

import Stopwatch from './pages/stopWatch.jsx';
import SimpleCalculator from './pages/Calculator.jsx';

const ProjectCard = ({ title, description, link }) => {
  const handleClick = (e) => {
    if (link.startsWith('/')) {
      e.preventDefault();
      window.location.pathname = link;
    }
  };

  return (
    <div className="group bg-white rounded-lg shadow-md h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="p-6 h-full flex justify-between items-center gap-4 relative overflow-hidden">
        <div className="flex-1 z-10 relative">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
          
        </div>
        <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <a 
          href={link}
          onClick={handleClick}
          target={link.startsWith('/') ? '_self' : '_blank'}
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 flex items-center z-10 transform transition-all duration-300 group-hover:scale-110"
        >
          <ExternalLink className="w-7 h-7 stroke-2" />
        </a>
      </div>
    </div>
  );
};

function App() {
  const projects = [
    {
      title: "Calender - Todo App",
      description: "Simple Todo App with Calender",
      link: "https://calender-todo-list.netlify.app/"
    },
    {
      title: "Stop Watch",
      description: "Real-time Stop Watch with start, stop, and reset",
      link: "https://stop-watch-palash.netlify.app/"
  
    },
    {
      title: "Calculator",
      description: "Simple calculator with basic operations",
      link: "https://calculator-app-palash.netlify.app/"
    },

    {
      title: "Gradient Color Creator / Generator",
      description: "Create and copy CSS gradients",
      link: "https://gradient-gen-css.netlify.app/"
    },
    {
      title: "Bill Creator",
      description: "Create and calculate bills, invoice, and total amount with tax Calculation",
      link: "https://bill-creator-palashverma.netlify.app/"
    },
    {
      title: "FPS Eye Trainer",
      description: "Eye Trainer for FPS Gamers Made in ThreeJS",
      link: "https://eyetrainer.vercel.app/"
    },
    {
      title: "Comming Soon",
      description: "Coding Project on the Way",
      link: "#"
    },
    {
      title: "Comming Soon",
      description: "Coding Project on the Way",
      link: "#"
    },
    
  ];

  // Check current path
  const currentPath = window.location.pathname;

  // If path is /todo, render TodoApp
  if (currentPath === '/TodoApp') {
    return < Todoapp />;
  }

  if (currentPath === '/stopWatch') {
    return < Stopwatch />;

  }
  if (currentPath === '/Calculator') {
    return < SimpleCalculator />;
  

  }

  // Otherwise render the project showcase
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Javascript Projects - Palash Verma</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            A collection of web development projects showcasing various technologies and concepts in Mini Projects.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>

        <footer className="mt-20 text-center">
          <a 
            href="https://github.com/P4L4SH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
          >
            <span className="text-lg font-medium group-hover:text-gray-900">View on GitHub</span>
            <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;