import { ChevronDownIcon } from '@heroicons/react/24/solid';
import React from 'react';
import {FaGithub,FaPlay} from 'react-icons/fa';

const ProjectCard = ({project , onProjectClick}) => {
    const {title,imageUrl,techStack,githubUrl,liveUrl} = project;

    return (
        <div onClick = {()=> {onProjectClick(project)}}className='group relative min-w-[220px] md:min-w-[280px] h-[125px] md:h-[160px]
        rounded-md overflow-hidden transform transition-all duration-300 ease-out 
        hover:scale-110 hover:z-10'>
        <img src= {imageUrl} alt={title} className="rounded-md object-cover w-full h-full" 
            
                
           
       />
        <div className='absolute inset-0 w-full h-full p-3 md:p-4 bg-black/80 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out
        flex flex-col justify-between'>
        <div>
        <h3 className='text-white font-bold text-lg md:text-xl mb-2 hover:text-green-200'> {title}</h3>
        <div className='flex flex-wrap gap-1 mb-2'>
            {techStack.map((t)=> (
                <span key ={t} className='bg-gray-700 text-xs px-2 py-0.5 rounded hover:text-blue-400'> {t}</span>
            ))}
        </div>
        </div>
        <div className='flex space-x-3'>
            <a href={githubUrl}
               target ='_blank'
               rel='noopener noreferrer'
               className='text-white hover:text-red-600 transition-colors'
            > <FaGithub size={24} />
            </a>
            <a href= {liveUrl}
               target = "_blank" 
               rel = "noopener noreferrer"
               className='text-white hover:text-red-600 transition-colors'
            >
                <FaPlay size= {24} />
            </a>
            <button className="
              ml-auto h-9 w-9 flex items-center justify-center 
              rounded-full border-2 border-gray-400 text-white 
              transition hover:border-red hover:bg-white/20 hover:text-red-400
            " onClick = {()=> { 

                
            onProjectClick(project)}}>

                <ChevronDownIcon className="h-6 w-6" />
                </button>

        </div>
        </div>

        </div>
    )
}
export default ProjectCard;