

import React ,{useState,useEffect} from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { FaGithub, FaPlay } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  const [show,setShow] =useState(false);
  useEffect(()=> {
            if(project) {
                setShow(true)
            }
  },[project])
  const handleClose = ()=> {
    setShow(false); 
    setTimeout(()=>{
        onClose();
    },300)
  }
  if (!project) return null;

  return (
   
    <div 
      onClick={handleClose}
      className= { `fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 
        transition-opacity duration-300 ease-in-out 
        ${show ? 'opacity-100': 'opacity-0'}`}
    >
      
      <div 
        onClick={(e) => e.stopPropagation()}
        className= { `relative w-full max-w-3xl overflow-hidden rounded-lg bg-[#181818] shadow-xl 
            transition-all duration-300 ease-in-out
            ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}` }
      >
       
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 z-10 h-8 w-8 rounded-full bg-black/70 p-1 text-white hover:bg-red-700"
        >
          <XMarkIcon />
        </button>

        
        <div className="relative h-64 w-full">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="h-full w-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent"></div>
        </div>

      
        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold md:text-3xl">{project.title}</h2>
          
          
          <div className="mt-4 flex space-x-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded bg-white px-5 py-2 font-bold text-black transition hover:bg-opacity-80"
            >
              <FaPlay className="mr-2" /> Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded bg-gray-700/70 px-5 py-2 font-bold text-white transition hover:bg-gray-700/90"
            >
              <FaGithub className="mr-2" /> View Code
            </a>
          </div>

          
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            
            <div className="md:col-span-2">
              <p className="text-gray-300">{project.description}</p>
            </div>
            
            
            <div>
              <h4 className="font-bold text-gray-500">Tech Stack:</h4>
              <ul className="list-inside list-none">
                {project.techStack.map((tech) => (
                  <li key={tech} className="text-gray-300">{tech}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;