

import  react ,  {useState} from 'react';
import background from '../data/backgroundHome.png'; 
import {mySkillsData, ProjectsData} from '../data/projectData.js';
import ProjectRow from './ProjectRow';
import ProjectModal from './ProjectModal.jsx';

const HomePage = ({ selectedProfile }) => {

  const [selectedProject,setSelectedProject] = useState(null);
  const openModal = (project) => {
    setSelectedProject(project)
  }
  console.log("HomePage re-rendered. selectedProject is:", selectedProject);
  const CloseModal = ()=> {
    setSelectedProject(null)
  }
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      
      
      <header className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center px-10 py-5">
        <h1 className="text-red-600 text-3xl font-bold">NETFLIX</h1>
        <div className="flex items-center space-x-4">
          <p className="text-lg">{selectedProfile}</p>
          <button className="text-sm bg-red-600 px-3 py-1 rounded">
            Logout
          </button>
        </div>
      </header>

      {/* HERO SECTION: This is also inside HomePage */}
      <section
        className="relative h-[90vh] w-full"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* 1. THE GRADIENT OVERLAY */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>

        {/* 2. THE CONTENT */}
        <div className="relative z-20 h-full w-full flex flex-col justify-center px-10 md:px-20 lg:px-24">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-lg">
            Ayush Rana
          </h1>
          
          <p className="mt-4 text-lg md:text-xl max-w-lg">
            Junior Full Stack Developer.
            Specializing in React, Node.js, and building high-quality web applications.
          </p>

          <div className="mt-6 flex space-x-4">
            <button className="flex items-center rounded bg-white px-5 py-2 md:px-7 md:py-3 font-bold text-black transition hover:bg-opacity-80">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              </svg>
              View Projects
            </button>
            <button className="flex items-center rounded bg-gray-700/70 px-5 py-2 md:px-7 md:py-3 font-bold text-white transition hover:bg-gray-700/90">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c.069-.028.138-.052.21-.073a.75.75 0 01.832.073l.03.027.008.006c.092.068.17.15.23.242.06.09.1.19.12.298l.006.008.003.005c.023.098.034.2.034.305v.212c0 .077-.007.153-.021.227l-.006.008c-.01.06-.026.117-.048.17l-.013.03-.01.023c-.028.068-.065.13-.109.186l-.006.007-.008.008c-.06.06-.129.11-.206.15c-.076.04-.158.074-.246.098l-.01.003c-.092.023-.187.034-.283.034h-.212c-.096 0-.19-.011-.283-.034l-.01-.003c-.088-.024-.17-.059-.246-.098l-.008-.008-.006-.007c-.044-.056-.08-.118-.109-.186l-.01-.023-.013-.03c-.022-.053-.038-.11-.048-.17l-.006-.008C10.93 12.36 10.924 12.284 10.924 12.207v-.212c0-.105.011-.207.034-.305l.003-.005.006-.008c.02-.108.06-.208.12-.298.06-.092.138-.174.23-.242l.008-.006.03-.027a.75.75 0 01.832-.073zM10.875 16.5a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75v-3.75a.75.75 0 00-.75-.75h-.75a.75.75 0 00-.75.75v3.75z" clipRule="evenodd" />
              </svg>
              More Info
            </button>
          </div>

        </div>
      </section>

      {/* You can add your "movie rows" component here */}
       <div className='relative z-20 -mt-20'>
        <ProjectRow title= "My Projects " projects={ProjectsData} onProjectClick={openModal} />
       
       </div>
       <ProjectModal project= {selectedProject} onClose = {CloseModal}/>
    </div>
  );
};

export default HomePage;