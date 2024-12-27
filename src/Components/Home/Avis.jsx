import React, { useState } from 'react';
import avisImage from '../../Assets/avisimage.png';

const AvisCard = ({ name, title, testimonial }) => {
  return (
    <div className='bg-[#FFFFFF] shadow-md rounded-3xl p-6 h-full flex flex-col justify-between'>
      <div className='flex mt-4'>
        <div>
          <h3 className='text-lg font-bold text-[#020B56]'>{name}</h3>
          <p className='text-gray-500 text-[#1AE3D9]'>{title}</p>
        </div>
      </div>
      <p className='text-gray-500'>{testimonial}</p>
    </div>
  );
};

const Avis = () => {
  const [avis, setAvis] = useState([
    {
      name: 'Nom Prenom',
      title: 'Freelancer',
      testimonial:
        'Une plateforme efficace pour collaborer avec des freelances qualifiés. Les outils sont intuitifs et la communauté très active. Un atout précieux pour gérer mes projets.',
    },
    {
      name: 'Nom Prenom',
      title: 'Freelancer',
      testimonial:
        'Une plateforme efficace pour collaborer avec des freelances qualifiés. Les outils sont intuitifs et la communauté très active. Un atout précieux pour gérer mes projets.',
    },
    {
      name: 'Nom Prenom',
      title: 'Freelancer',
      testimonial:
        'Une plateforme efficace pour collaborer avec des freelances qualifiés. Les outils sont intuitifs et la communauté très active. Un atout précieux pour gérer mes projets.',
    },
    {
      name: 'Nom Prenom',
      title: 'Freelancer',
      testimonial:
        'Une plateforme efficace pour collaborer avec des freelances qualifiés. Les outils sont intuitifs et la communauté très active. Un atout précieux pour gérer mes projets.',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    title: '',
    testimonial: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAvis([...avis, newReview]);
    setNewReview({ name: '', title: '', testimonial: '' });
    setShowForm(false);
  };

  return (
    <div className='p-20'>
      <h2 className='text-2xl font-bold text-center mb-8 text-[#020B56]'>
        Avis des utilisateurs
      </h2>

      <button
        className='bg-[#1AE3D9] text-white py-2 px-4 rounded mb-6 hover:bg-[#17c2b6] transition-colors duration-300'
        onClick={() => setShowForm(true)}
      >
        Ajouter un avis
      </button>

      {showForm && (
        <div className='relative w-full flex justify-center items-center mb-6'>
          <form
            onSubmit={handleSubmit}
            className='bg-white text-black p-6 rounded-lg shadow-md w-full max-w-md'
          >
            <h2 className='text-2xl font-bold mb-4'>Ajouter un avis</h2>

            <label className='block mb-2 font-medium'>Nom</label>
            <input
              type='text'
              name='name'
              value={newReview.name}
              onChange={handleInputChange}
              className='w-full p-2 border rounded mb-4'
              placeholder='Votre nom'
              required
            />

            <label className='block mb-2 font-medium'>Titre</label>
            <input
              type='text'
              name='title'
              value={newReview.title}
              onChange={handleInputChange}
              className='w-full p-2 border rounded mb-4'
              placeholder='Votre titre (ex: Freelancer)'
              required
            />

            <label className='block mb-2 font-medium'>Témoignage</label>
            <textarea
              name='testimonial'
              value={newReview.testimonial}
              onChange={handleInputChange}
              className='w-full p-2 border rounded mb-4'
              placeholder='Votre avis ici...'
              required
            ></textarea>

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

      <div
        className='grid grid-cols-3 gap-4 items-center'
        style={{
          gridTemplateRows: 'auto auto',
          gridTemplateAreas: `
            "avis1 image avis2"
            "avis3 image avis4"
          `,
        }}
      >
        {/* First Row */}
        <div className='row-span-1' style={{ gridArea: 'avis1' }}>
          <AvisCard {...avis[0]} />
        </div>
        <div
          className='row-span-2 flex justify-center items-center'
          style={{ gridArea: 'image' }}
        >
          <img
            src={avisImage}
            alt='Avis Illustration'
            className='w-full max-w-sm h-auto object-cover rounded-3xl'
          />
        </div>
        <div className='row-span-1' style={{ gridArea: 'avis2' }}>
          <AvisCard {...avis[1]} />
        </div>

        {/* Second Row */}
        <div className='row-span-1' style={{ gridArea: 'avis3' }}>
          <AvisCard {...avis[2]} />
        </div>
        <div className='row-span-1' style={{ gridArea: 'avis4' }}>
          <AvisCard {...avis[3]} />
        </div>
      </div>
    </div>
  );
};

export default Avis;

