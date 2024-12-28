import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaDribbble, FaBehance } from 'react-icons/fa';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

const FreelancerProfile = () => {
  const [freelancer, setFreelancer] = useState({
    _id: '6749cd2d8c3e2fd0d1112035',
    nom: 'Taylor',
    prenom: 'Chris',
    profession: 'UI/UX Designer',
    level: 'Expert',
    description:
      'Créative et innovante, excelle en design graphique, ui/ux et logo design.',
    Github: 'https://github.com/ChrisTaylor',
    Linkedin: 'https://linkedin.com/in/ChrisTaylor',
    Dribble: 'https://dribbble.com/ChrisTaylor',
    Behance: 'https://www.behance.net/ChrisTaylor',
    city: 'Yakouren',
    wilaya: 'Algeria',
    memberSince: 'Dec 15, 2023',
    email: 'client@example.com',
    phone: '+213 555 123 456',
    projects: [
      {
        title: 'E-commerce App Design',
        tools: 'Figma, Photoshop',
        image: 'https://via.placeholder.com/150',
      },
      {
        title: 'Portfolio Website',
        tools: 'Figma, Illustrator',
        image: 'https://via.placeholder.com/150',
      },
    ],
    profileImage: 'https://via.placeholder.com/150', // Default profile image
  });

  const [isProjectSelectionModalOpen, setIsProjectSelectionModalOpen] =
    useState(false);
  const [existingProjects, setExistingProjects] = useState([
    {
      title: 'E-commerce App Design',
      tools: 'Figma, Photoshop',
      image: 'https://via.placeholder.com/50',
    },
    {
      title: 'Portfolio Website',
      tools: 'Figma, Illustrator',
      image: 'https://via.placeholder.com/50',
    },
    // Add more existing projects here
  ]);

  const handleEditField = (field, value) => {
    setFreelancer((prev) => ({ ...prev, [field]: value }));
    console.log(`Updated ${field}:`, value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Preview image
      setFreelancer((prev) => ({ ...prev, profileImage: imageUrl }));
      console.log('Uploaded Image:', file);
    }
  };

  const toggleProjectSelectionModal = () => {
    setIsProjectSelectionModalOpen(!isProjectSelectionModalOpen);
  };

  const addProjectToList = (project) => {
    setFreelancer((prev) => ({
      ...prev,
      projects: [...prev.projects, project],
    }));
    toggleProjectSelectionModal();
  };

  return (
    <div className='bg-[#EAF6FF]'>
      <NavBar />
      <div className='bg-[#EAF6FF] min-h-screen flex justify-center items-center'>
        <div className='flex flex-col items-center space-y-4'>
          {/* Profile Section */}
          <div className='bg-white shadow-lg rounded-lg overflow-hidden w-[18rem] h-[24rem] border border-[#020B56] mt-4 relative'>
            <label className='absolute top-2 right-2 cursor-pointer'>
              <input
                type='file'
                onChange={handleImageUpload}
                className='hidden'
              />
              <div className='w-8 h-8 bg-[#1AE3D9] text-white rounded-full flex items-center justify-center'>
                <FaEdit />
              </div>
            </label>
            <img
              src={freelancer.profileImage}
              alt={`${freelancer.nom} ${freelancer.prenom}`}
              className='w-24 h-24 mx-auto rounded-full mt-4'
            />
            <h2 className='text-2xl font-bold text-[#020B56] mt-4 text-center'>
              {freelancer.nom} {freelancer.prenom}
            </h2>
            <p className='text-[#020B56] text-sm px-4 mt-2 h-[6rem] overflow-y-scroll hide-scrollbar relative'>
              {freelancer.description}
              <button
                className='absolute top-0 right-0 p-1 text-[#1AE3D9]'
                onClick={() => {
                  const newDescription = prompt(
                    'Edit Description:',
                    freelancer.description
                  );
                  if (newDescription)
                    handleEditField('description', newDescription);
                }}
              >
                <FaEdit />
              </button>
            </p>
          </div>

          {/* About Section */}
          <div className='bg-white shadow-lg rounded-lg overflow-hidden w-[18rem] h-auto border border-[#020B56] p-4 mt-4'>
            <h3 className='font-bold text-[#020B56] text-lg mb-2 border-b border-[#020B56]'>
              A propos de moi :
            </h3>
            <p className='text-black text-sm mb-2'>
              Profession(s) :
              <span className='bg-white border border-[#020B56] text-[#020B56] text-xs px-3 py-1 rounded-full ml-2'>
                {freelancer.profession}
              </span>
              <button
                className='ml-2 text-[#1AE3D9]'
                onClick={() => {
                  const newProfession = prompt(
                    'Edit Profession:',
                    freelancer.profession
                  );
                  if (newProfession)
                    handleEditField('profession', newProfession);
                }}
              >
                <FaEdit />
              </button>
            </p>
            <p className='text-black text-sm mb-2'>
              Level D’expérience :
              <span className='bg-white border border-[#020B56] text-[#020B56] text-xs px-3 py-1 rounded-full ml-2'>
                {freelancer.level}
              </span>
              <button
                className='ml-2 text-[#1AE3D9]'
                onClick={() => {
                  const newLevel = prompt('Edit Level:', freelancer.level);
                  if (newLevel) handleEditField('level', newLevel);
                }}
              >
                <FaEdit />
              </button>
            </p>
            {/* Contact Info */}
            <ul className='text-sm text-[#000000] space-y-2'>
              <li>
                <Phone className='mr-2 text-[#000000] h-5 w-5 inline' />
                {freelancer.phone}
                <button
                  className='ml-2 text-[#1AE3D9]'
                  onClick={() => {
                    const newPhone = prompt('Edit Phone:', freelancer.phone);
                    if (newPhone) handleEditField('phone', newPhone);
                  }}
                >
                  <FaEdit />
                </button>
              </li>
              <li>
                <Mail className='mr-2 text-[#000000] h-5 w-5 inline' />
                {freelancer.email}
                <button
                  className='ml-2 text-[#1AE3D9]'
                  onClick={() => {
                    const newEmail = prompt('Edit Email:', freelancer.email);
                    if (newEmail) handleEditField('email', newEmail);
                  }}
                >
                  <FaEdit />
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Projects Section */}
        <div className='bg-white shadow-lg rounded-lg overflow-hidden w-[40rem] max-w-full h-auto border border-[#020B56] p-4 mt-4 ml-4'>
          <div className='flex justify-between items-center'>
            <h3 className='font-bold text-[#020B56] text-lg mb-4 border-b border-[#020B56]'>
              Projets réalisés :
            </h3>
            <button
              onClick={toggleProjectSelectionModal}
              className='bg-[#1AE3D9] text-white px-4 py-2 rounded-full'
            >
              Ajouter
            </button>
          </div>
          <div className='grid grid-cols-1 gap-4'>
            {freelancer.projects.map((project, index) => (
              <div key={index} className='flex items-start gap-4'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-20 h-20 object-cover rounded-lg'
                />
                <div>
                  <p className='text-sm font-bold text-[#020B56]'>
                    {project.title}
                  </p>
                  <p className='text-sm text-gray-600'>
                    Tools: {project.tools}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Selection Modal */}
        {isProjectSelectionModalOpen && (
          <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
            <div className='bg-white shadow-lg rounded-lg p-6 w-[30rem]'>
              <h3 className='font-bold text-[#020B56] text-lg mb-4'>
                Sélectionnez un projet
              </h3>
              <ul className='space-y-4'>
                {existingProjects.map((project, index) => (
                  <li key={index} className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <img
                        src={project.image}
                        alt={project.title}
                        className='w-10 h-10 object-cover rounded-full'
                      />
                      <div>
                        <p className='text-sm font-bold text-[#020B56]'>
                          {project.title}
                        </p>
                        <p className='text-sm text-gray-600'>
                          Tools: {project.tools}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => addProjectToList(project)}
                      className='bg-[#1AE3D9] text-white px-4 py-1 rounded-full'
                    >
                      Ajouter
                    </button>
                  </li>
                ))}
              </ul>
              <div className='flex justify-end mt-4'>
                <button
                  onClick={toggleProjectSelectionModal}
                  className='bg-gray-300 text-gray-700 px-4 py-2 rounded-lg'
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default FreelancerProfile;
