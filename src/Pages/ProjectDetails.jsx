import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Mail } from 'lucide-react';

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/projects/projects/${id}/`
        );
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération du projet');
        }
        const data = await response.json();
        setProject(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProject();
  }, [id]);

  if (error) {
    return <div className='text-center mt-10'>Erreur : {error}</div>;
  }

  if (!project) {
    return <div className='text-center mt-10'>Chargement...</div>;
  }

  return (
    <div className='bg-[#EAF6FF] min-h-screen'>
      <NavBar />
      <div className='px-[8vw] pt-[7vh] pb-[15vh]'>
        <div>
          <div>
            {/* Title and Status */}
            <div className='flex justify-between items-start mb-4'>
              <div className='flex items-center space-x-4'>
                <h1 className='font-bold text-2xl text-[#020B56]'>
                  {project.titre}
                </h1>
              </div>
            </div>

            {/* Durée and Prix */}
            <div className='flex justify-end items-center space-x-8 mb-2'>
              <p className='font-semibold text-sm text-[#020B56]'>
                <span className='text-base font-bold'>Durée:</span>{' '}
                {project.duree}
              </p>
              <p className='font-semibold text-sm text-[#020B56]'>
                <span className='text-base font-bold'>Prix:</span>{' '}
                {project.budget}
              </p>
            </div>

            {/* Horizontal Rule */}
            <hr className='mb-6 border-t border-gray-300' />
          </div>

          <div className=''>
            {/* Project Details */}
            <div className='col-span-2 bg-white shadow-lg rounded-lg p-8'>
              <h2 className='font-bold text-lg text-[#020B56] mb-4'>
                Détails du projet:
              </h2>
              <span className='font-bold text-base mb-2 underline text-[#020B56]'>
                Description :
              </span>
              <p className='text-sm text-[#000000] mb-4'>
                {project.description}
              </p>
              <span className='font-bold text-base mb-2 underline text-[#020B56]'>
                Specifications :
              </span>
              <span className='text-sm text-[#000000]'>
                <ul className='list-disc pl-5'>
                  {project.specifications.map((specification, index) => (
                    <li key={index}>{specification}</li>
                  ))}
                </ul>
              </span>
              <span className='font-bold text-base mb-2 underline text-[#020B56]'>
                Responsibilités :
              </span>
              <span className='text-sm text-[#000000]'>
                <ul className='list-disc pl-5'>
                  {project.responsabilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </span>

              <h3 className='font-bold text-lg text-[#020B56] mb-4 mt-4'>
                Compétences requises :
              </h3>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='bg-[#EAF6FF] border border-[#1AE3D9] text-[#1AE3D9] text-xs px-3 py-1 rounded-full'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex items-center mt-4'>
                <Mail className='mr-2 text-[#020B56]' />
                <a
                  href={`mailto:${project.contact_email}`}
                  className='text-[#000000]'
                >
                  {project.contact}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectDetails;
