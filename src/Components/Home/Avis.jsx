// import React, { useState } from 'react';
// import avisImage from '../../Assets/avisimage.png';

// const AvisCard = ({ name, role, avis }) => {
//   return (
//     <div className='bg-[#FFFFFF] shadow-md rounded-3xl p-6 h-full flex flex-col justify-between'>
//       <div className='flex mt-4'>
//         <div>
//           <h3 className='text-lg font-bold text-[#020B56]'>{name}</h3>
//           <p className='text-[#1AE3D9]'>{role}</p>
//         </div>
//       </div>
//       <p className='text-gray-500'>{avis}</p>
//     </div>
//   );
// };

// const Avis = () => {
//   const [avis, setAvis] = useState([
//     {
//       name: 'Nom Prenom',
//       title: 'Freelancer',
//       testimonial:
//         'Une plateforme efficace pour collaborer avec des freelances qualifiés. Les outils sont intuitifs et la communauté très active. Un atout précieux pour gérer mes projets.',
//     },
//     {
//       name: 'Nom Prenom',
//       title: 'Freelancer',
//       testimonial:
//         'Une plateforme efficace pour collaborer avec des freelances qualifiés. Les outils sont intuitifs et la communauté très active. Un atout précieux pour gérer mes projets.',
//     },
//     {
//       name: 'Nom Prenom',
//       title: 'Freelancer',
//       testimonial:
//         'Une plateforme efficace pour collaborer avec des freelances qualifiés. Les outils sont intuitifs et la communauté très active. Un atout précieux pour gérer mes projets.',
//     },
//     {
//       name: 'Nom Prenom',
//       title: 'Freelancer',
//       testimonial:
//         'Une plateforme efficace pour collaborer avec des freelances qualifiés. Les outils sont intuitifs et la communauté très active. Un atout précieux pour gérer mes projets.',
//     },
//   ]);

//   const [showForm, setShowForm] = useState(false);
//   const [newReview, setNewReview] = useState({
//     name: '',
//     title: '',
//     testimonial: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewReview({ ...newReview, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setAvis([...avis, newReview]);
//     setNewReview({ name: '', title: '', testimonial: '' });
//     setShowForm(false);
//   };

//   return (
//     <div className='p-20 bg-[#EAF6FF]'>
//       <h2 className='text-2xl font-bold text-center mb-8 text-[#020B56]'>
//         Avis des utilisateurs
//       </h2>

//       <button
//         className='bg-[#1AE3D9] text-white py-2 px-4 rounded mb-6 hover:bg-[#17c2b6] transition-colors duration-300'
//         onClick={() => setShowForm(true)}
//       >
//         Ajouter un avis
//       </button>

//       {showForm && (
//         <div className='relative w-full flex justify-center items-center mb-6'>
//           <form
//             onSubmit={handleSubmit}
//             className='bg-white text-black p-6 rounded-lg shadow-md w-full max-w-md'
//           >
//             <h2 className='text-2xl font-bold mb-4'>Ajouter un avis</h2>

//             <label className='block mb-2 font-medium'>Nom</label>
//             <input
//               type='text'
//               name='name'
//               value={newReview.name}
//               onChange={handleInputChange}
//               className='w-full p-2 border rounded mb-4'
//               placeholder='Votre nom'
//               required
//             />

//             <label className='block mb-2 font-medium'>Titre</label>
//             <input
//               type='text'
//               name='title'
//               value={newReview.title}
//               onChange={handleInputChange}
//               className='w-full p-2 border rounded mb-4'
//               placeholder='Votre titre (ex: Freelancer)'
//               required
//             />

//             <label className='block mb-2 font-medium'>Avis</label>
//             <textarea
//               name='testimonial'
//               value={newReview.testimonial}
//               onChange={handleInputChange}
//               className='w-full p-2 border rounded mb-4'
//               placeholder='Votre avis ici...'
//               required
//             ></textarea>

//             <div className='flex justify-between'>
//               <button
//                 type='submit'
//                 className='bg-[#1AE3D9] text-white py-2 px-4 rounded hover:bg-[#17c2b6] transition-colors duration-300'
//               >
//                 Soumettre
//               </button>
//               <button
//                 type='button'
//                 onClick={() => setShowForm(false)}
//                 className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-400 transition-colors duration-300'
//               >
//                 Annuler
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       <div
//         className='grid grid-cols-3 gap-4 items-center'
//         style={{
//           gridTemplateRows: 'auto auto',
//           gridTemplateAreas: `
//             "avis1 image avis2"
//             "avis3 image avis4"
//           `,
//         }}
//       >
//         {/* First Row */}
//         <div className='row-span-1' style={{ gridArea: 'avis1' }}>
//           <AvisCard {...avis[0]} />
//         </div>
//         <div
//           className='row-span-2 flex justify-center items-center'
//           style={{ gridArea: 'image' }}
//         >
//           <img
//             src={avisImage}
//             alt='Avis Illustration'
//             className='w-full max-w-sm h-auto object-cover rounded-3xl'
//           />
//         </div>
//         <div className='row-span-1' style={{ gridArea: 'avis2' }}>
//           <AvisCard {...avis[1]} />
//         </div>

//         {/* Second Row */}
//         <div className='row-span-1' style={{ gridArea: 'avis3' }}>
//           <AvisCard {...avis[2]} />
//         </div>
//         <div className='row-span-1' style={{ gridArea: 'avis4' }}>
//           <AvisCard {...avis[3]} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Avis;

import React, { useState, useEffect } from 'react';
import avisImage from '../../Assets/avisimage.png';

const AvisCard = ({ name, role, avis }) => {
  return (
    <div className='bg-[#FFFFFF] shadow-md rounded-3xl p-6 h-full flex flex-col justify-between'>
      <div className='flex mt-4'>
        <div>
          <h3 className='text-lg font-bold text-[#020B56]'>{name}</h3>
          <p className='text-[#1AE3D9]'>{role}</p>
        </div>
      </div>
      <p className='text-gray-500'>{avis}</p>
    </div>
  );
};

const Avis = () => {
  const [avis, setAvis] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    avis: '',
    role_auteur: '',
    id_auteur: '',
  });

  useEffect(() => {
    const storedUserId = localStorage.getItem('id_user');
    if (storedUserId) {
      setNewReview((prevData) => ({
        ...prevData,
        id_auteur: storedUserId,
      }));
    } else {
      console.error('User ID not found in localStorage');
    }
  }, []);

  useEffect(() => {
    const fetchAvis = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/avis');
        if (!response.ok)
          throw new Error('Erreur lors de la récupération des avis');
        const data = await response.json();
        setAvis(data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchAvis();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/avis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview),
        credentials: 'include', // Include cookies or tokens for the authenticated user
      });
      if (!response.ok) throw new Error("Erreur lors de l'ajout de l'avis");
      const addedReview = await response.json();
      setAvis([...avis, addedReview]);
      setNewReview({
        avis: '',
        role_auteur: '',
        id_auteur: newReview.id_auteur,
      });
      setShowForm(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className='p-20 bg-[#EAF6FF]'>
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

            <label className='block mb-2 font-medium'>Avis</label>
            <textarea
              name='avis'
              value={newReview.avis}
              onChange={handleInputChange}
              className='w-full p-2 border rounded mb-4'
              placeholder='Votre avis ici...'
              required
            ></textarea>

            <label className='block mb-2 font-medium'>Rôle</label>
            <input
              type='text'
              name='role_auteur'
              value={newReview.role_auteur}
              onChange={handleInputChange}
              className='w-full p-2 border rounded mb-4'
              placeholder='Votre rôle (ex: Utilisateur)'
              required
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

      <div className='grid grid-cols-3 gap-4 items-center'>
        {/* Avis défilants à gauche */}
        <div
          className='h-[400px] overflow-y-auto col-span-1'
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div className='space-y-4'>
            {avis.map((review, index) => (
              <AvisCard
                key={`left-${index}`}
                name={review.id_auteur} // Remplacer si nécessaire par le nom
                role={review.role_auteur}
                avis={review.avis}
              />
            ))}
          </div>
        </div>

        {/* Image */}
        <div className='row-span-2 flex justify-center items-center'>
          <img
            src={avisImage}
            alt='Avis Illustration'
            className='w-full max-w-sm h-auto object-cover rounded-3xl'
          />
        </div>

        {/* Avis défilants à droite */}
        <div
          className='h-[400px] overflow-y-auto col-span-1'
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div className='space-y-4'>
            {avis.map((review, index) => (
              <AvisCard
                key={`right-${index}`}
                name={review.id_auteur}
                role={review.role_auteur}
                avis={review.avis}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avis;
