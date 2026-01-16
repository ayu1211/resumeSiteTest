import React , {useRef} from 'react';
import {ChevronLeftIcon,ChevronRightIcon} from '@heroicons/react/24/solid';
import ProjectCard from './ProjectCard';

const ProjectRow = ({title,projects,onProjectClick}) => 

{
  const scrollRef = useRef(null);
  const handleScroll = (direction) => {
    if(scrollRef.current) {
      const {scrollLeft,clientWidth} = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({
        left:scrollTo,
        behavior:'smooth',
      })

    }
  }

  return(
    <div className = 'relative my-4'>
        <h2 className='text-xl md:text-2xl font-bold mb-2 px-10 md:px-20 lg:px-24'>  {title}  </h2>      
    <div className = 'relative group'>

      <button onClick = {()=> handleScroll('left')} className='absolute left-0 top-0 bottom-0 z-20 w-16 bg-gradient-to-r from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
        <ChevronLeftIcon className='w-8 h-8 text-white' />
        </button>
        <div ref = {scrollRef} 
        className='flex space-x-2 md:space-x-4 py-4 px-10 md:px-20 lg:px-24 overflow-x-scroll overflow-y-hidden scroll-smooth scrollbar-hide'>
         {projects?.map((p)=> ( 
         <ProjectCard key = {p.id} project = {p} onProjectClick ={onProjectClick}/>
         ))}
        </div>
        <button onClick = {()=> handleScroll('right')}
          className="absolute right-0 top-0 bottom-0 z-20 w-16 bg-gradient-to-l from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
           <ChevronRightIcon className='w-8 h-8 text-white'/> 
        </button>
    </div>
    </div>
    

)}  
export default ProjectRow; 