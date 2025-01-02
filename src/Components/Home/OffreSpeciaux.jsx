import React from 'react';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import vector from '../../Assets/vector.svg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const OffreSpeciaux = () => {
  const [allProjects, setAllProjects] = useState([
    {
      titre: 'Redesign Website for TechCorp',
      description:
        "Complete redesign of the company's main website. gvfb chjzbdhu vcbrhuvbhib vyzrvb kzbvuibi",
      budget: '$5000',
      duree: '3 months',
      technologies: ['React', 'Node.js', 'MongoDB'],
      responsabilities: ['Frontend Development', 'Backend API Integration'],
      specifications: ['Mobile-friendly design', 'High performance'],
      contact: 'techcorp@example.com',
      id_user: '6749cd2d8c3e2fd0d1112038',
      categories: ['UI/UX'],
      _id: '6749cd2d8c3e2fd0d111203b',
    },
    {
      titre: 'E-commerce Platform',
      description: 'Development of a scalable e-commerce platform.',
      budget: '$15000',
      duree: '6 months',
      technologies: ['Angular', 'Express.js', 'MySQL'],
      responsabilities: ['Database Design', 'Payment Gateway Integration'],
      specifications: ['User-friendly interface', 'Secure transactions'],
      contact: 'shopmaster@example.com',
      id_user: '6749cd2d8c3e2fd0d1112039',
      categories: ['Frontend', 'Backend'],
      _id: '6749cd2d8c3e2fd0d111203c',
    },
    {
      titre: 'Redesign Website for TechCorp',
      description:
        "Complete redesign of the company's main website. gvfb chjzbdhu vcbrhuvbhib vyzrvb kzbvuibi",
      budget: '$5000',
      duree: '3 months',
      technologies: ['React', 'Node.js', 'MongoDB'],
      responsabilities: ['Frontend Development', 'Backend API Integration'],
      specifications: ['Mobile-friendly design', 'High performance'],
      contact: 'techcorp@example.com',
      id_user: '6749cd2d8c3e2fd0d1112038',
      categories: ['UI/UX'],
      _id: '6749cd2d8c3e2fd0d111203b',
    },
    {
      titre: 'E-commerce Platform',
      description: 'Development of a scalable e-commerce platform.',
      budget: '$15000',
      duree: '6 months',
      technologies: ['Angular', 'Express.js', 'MySQL'],
      responsabilities: ['Database Design', 'Payment Gateway Integration'],
      specifications: ['User-friendly interface', 'Secure transactions'],
      contact: 'shopmaster@example.com',
      id_user: '6749cd2d8c3e2fd0d1112039',
      categories: ['Frontend', 'Backend'],
      _id: '6749cd2d8c3e2fd0d111203c',
    },
    {
      titre: 'Redesign Website for TechCorp',
      description:
        "Complete redesign of the company's main website. gvfb chjzbdhu vcbrhuvbhib vyzrvb kzbvuibi",
      budget: '$5000',
      duree: '3 months',
      technologies: ['React', 'Node.js', 'MongoDB'],
      responsabilities: ['Frontend Development', 'Backend API Integration'],
      specifications: ['Mobile-friendly design', 'High performance'],
      contact: 'techcorp@example.com',
      id_user: '6749cd2d8c3e2fd0d1112038',
      categories: ['UI/UX'],
      _id: '6749cd2d8c3e2fd0d111203b',
    },
    {
      titre: 'E-commerce Platform',
      description: 'Development of a scalable e-commerce platform.',
      budget: '$15000',
      duree: '6 months',
      technologies: ['Angular', 'Express.js', 'MySQL'],
      responsabilities: ['Database Design', 'Payment Gateway Integration'],
      specifications: ['User-friendly interface', 'Secure transactions'],
      contact: 'shopmaster@example.com',
      id_user: '6749cd2d8c3e2fd0d1112039',
      categories: ['Frontend', 'Backend'],
      _id: '6749cd2d8c3e2fd0d111203c',
    },
    {
      titre: 'Redesign Website for TechCorp',
      description:
        "Complete redesign of the company's main website. gvfb chjzbdhu vcbrhuvbhib vyzrvb kzbvuibi",
      budget: '$5000',
      duree: '3 months',
      technologies: ['React', 'Node.js', 'MongoDB'],
      responsabilities: ['Frontend Development', 'Backend API Integration'],
      specifications: ['Mobile-friendly design', 'High performance'],
      contact: 'techcorp@example.com',
      id_user: '6749cd2d8c3e2fd0d1112038',
      categories: ['UI/UX'],
      _id: '6749cd2d8c3e2fd0d111203b',
    },
    {
      titre: 'E-commerce Platform',
      description: 'Development of a scalable e-commerce platform.',
      budget: '$15000',
      duree: '6 months',
      technologies: ['Angular', 'Express.js', 'MySQL'],
      responsabilities: ['Database Design', 'Payment Gateway Integration'],
      specifications: ['User-friendly interface', 'Secure transactions'],
      contact: 'shopmaster@example.com',
      id_user: '6749cd2d8c3e2fd0d1112039',
      categories: ['Frontend', 'Backend'],
      _id: '6749cd2d8c3e2fd0d111203c',
    },
  ]);

  const [Projects, setProjects] = useState(allProjects);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des projets');
        }
        const data = await response.json();
        setAllProjects(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProjects();
  }, []);

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <div className='bg-[#EAF6FF] p-5'>
      <div className='relative w-full'>
        <p className='text-2xl font-bold text-center mb-8 text-[#020B56]'>
          Offres Spéciaux
        </p>
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#1AE3D9] text-white p-3 rounded-full shadow-md z-10 hover:bg-[#1AE3D9] transition-colors duration-300'
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className='flex gap-4 sm:gap-6 lg:gap-8 py-4 overflow-x-hidden scroll-smooth'
        >
          {Projects.map((project) => (
            <div
              key={project._id}
              className='bg-[#020B56] pt-8 pb-8 pl-4 pr-4 shadow-md rounded-2xl overflow-hidden flex flex-col justify-between h-[60vh] w-[300px] flex-shrink-0'
            >
              <p className='font-bold text-[#1AE3D9] text-lg'>
                {project.titre}
              </p>
              <p className='text-sm text-white'>{project.description}</p>
              <div className='flex gap-2 flex-wrap'>
                {project.technologies.map((tech) => (
                  <p key={tech} className='font-bold text-white text-sm'>
                    {tech}
                  </p>
                ))}
              </div>
              <div className='flex gap-[1vw]'>
                <p className='font-bold text-sm text-white'>Durée</p>
                <p className='text-sm text-white'>{project.duree}</p>
              </div>
              <a
                href={`/project/${project._id}`}
                className='self-end cursor-pointer'
              >
                <div className='flex gap-[1vw]'>
                  <p className='font-bold text-[#1AE3D9] text-sm'>Voyez Plus</p>
                  <img className='vector' alt='vector' src={vector}></img>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#1AE3D9] text-white p-3 rounded-full shadow-md z-10 hover:bg-[#1AE3D9] transition-colors duration-300'
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default OffreSpeciaux;
