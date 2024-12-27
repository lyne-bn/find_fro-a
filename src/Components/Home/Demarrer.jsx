import React, { useState } from 'react';
import Navbar from '../NavBar';
import backgroundImage from '../../Assets/background-image.png';
import Footer from '../Footer';

const Demarrer = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    projectDescription: '',
    skill: '',
    location: '',
    contactNumber: '',
    contactEmail: '',
    linkedinProfile: '',
    facebookProfile: ''
  });

  const skills = ['UI/UX Design', 'Graphic Design', 'Front-End', 'Back-End'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Handle form submission logic here
    setShowForm(false); // Optionally hide the form after submission
  };

  return (
    <div>
      <div
        className='w-full h-screen flex flex-col bg-cover bg-center'
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '150vh',
        }}
      >
        <Navbar home={true} />

        {/* Main content centered */}
        <div className='flex flex-col justify-center items-center text-center text-[#fff] px-6 md:px-12 mt-20'>
          {/* Main Headline */}
          <h1 className='text-2xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto pb-6 mt-20'>
            Connectez. Collaborez. Créez : Votre Réseau de Freelance à Portée de
            Main !
          </h1>

          {/* Subheading */}
          <p className='text-lg md:text-xl mb-8 max-w-2xl mx-auto'>
            Trouvez des freelances ou proposez vos services pour concrétiser vos
            projets. Rejoignez une communauté où idées et talents se rencontrent
            !
          </p>

          {/* Button */}
          <button
            className='px-8 py-3 border-2 border-[#1AE3D9] text-[#1AE3D9] rounded-full hover:bg-[#1AE3D9] hover:text-[#fff] transition-colors duration-300'
            onClick={() => setShowForm(!showForm)}
          >
            Ajouter Un Projet
          </button>
        </div>

        {showForm && (
          <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center z-50'>
            <form
              onSubmit={handleSubmit}
              className='bg-white text-black p-6 rounded-lg shadow-md w-full max-w-md'
            >
              <h2 className='text-2xl font-bold mb-4'>Ajouter un projet</h2>

              <label className='block mb-2 font-medium'>Description du projet</label>
              <textarea
                name='projectDescription'
                value={formData.projectDescription}
                onChange={handleChange}
                className='w-full p-2 border rounded mb-4'
                placeholder='Décrivez votre projet ici...'
                required
              ></textarea>

              <label className='block mb-2 font-medium'>Compétences requises</label>
              <select
                name='skill'
                value={formData.skill}
                onChange={handleChange}
                className='w-full p-2 border rounded mb-4'
                required
              >
                <option value=''>Sélectionnez une compétence</option>
                {skills.map((skill, index) => (
                  <option key={index} value={skill}>
                    {skill}
                  </option>
                ))}
              </select>

              <label className='block mb-2 font-medium'>Lieu</label>
              <input
                type='text'
                name='location'
                value={formData.location}
                onChange={handleChange}
                className='w-full p-2 border rounded mb-4'
                placeholder='Localisation du client'
                required
              />

              <label className='block mb-2 font-medium'>Numéro de contact</label>
              <input
                type='tel'
                name='contactNumber'
                value={formData.contactNumber}
                onChange={handleChange}
                className='w-full p-2 border rounded mb-4'
                placeholder='Numéro de téléphone'
                required
              />

              <label className='block mb-2 font-medium'>Email de contact</label>
              <input
                type='email'
                name='contactEmail'
                value={formData.contactEmail}
                onChange={handleChange}
                className='w-full p-2 border rounded mb-4'
                placeholder='Adresse email'
                required
              />

              <label className='block mb-2 font-medium'>Profil LinkedIn</label>
              <input
                type='url'
                name='linkedinProfile'
                value={formData.linkedinProfile}
                onChange={handleChange}
                className='w-full p-2 border rounded mb-4'
                placeholder='Lien vers le profil LinkedIn'
              />

              <label className='block mb-2 font-medium'>Profil Facebook</label>
              <input
                type='url'
                name='facebookProfile'
                value={formData.facebookProfile}
                onChange={handleChange}
                className='w-full p-2 border rounded mb-4'
                placeholder='Lien vers le profil Facebook'
              />

              <div className='flex justify-between'>
                <button
                  type='submit'
                  className='bg-[#1AE3D9] text-white py-2 px-4 rounded hover:bg-[#17c2b6] transition-colors duration-300'
                >
                  Soumettre
                </button>
                <button
                  type='button'
                  onClick={() => setShowForm(false)}
                  className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-400 transition-colors duration-300'
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Demarrer;



