// import React, { useState } from 'react';
// import Navbar from '../NavBar';
// import backgroundImage from '../../Assets/background-image.png';

// const Demarrer = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     projectDescription: '',
//     skill: '',
//     location: '',
//     contactNumber: '',
//     contactEmail: '',
//     linkedinProfile: '',
//     facebookProfile: '',
//   });

//   const skills = ['UI/UX Design', 'Graphic Design', 'Front-End', 'Back-End'];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Submitted:', formData);
//     // Handle form submission logic here
//     setShowForm(false); // Optionally hide the form after submission
//   };

//   return (
//     <div className='bg-[#EAF6FF]'>
//       <div
//         className='w-full h-screen flex flex-col bg-cover bg-center'
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           minHeight: '150vh',
//         }}
//       >
//         <Navbar home={true} />

//         {/* Main content centered */}
//         <div className='flex flex-col justify-center items-center text-center text-[#fff] px-6 md:px-12 mt-20'>
//           {/* Main Headline */}
//           <h1 className='text-2xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto pb-6 mt-20'>
//             Connectez. Collaborez. Créez : Votre Réseau de Freelance à Portée de
//             Main !
//           </h1>

//           {/* Subheading */}
//           <p className='text-lg md:text-xl mb-8 max-w-2xl mx-auto'>
//             Trouvez des freelances ou proposez vos services pour concrétiser vos
//             projets. Rejoignez une communauté où idées et talents se rencontrent
//             !
//           </p>

//           {/* Button */}
//           <button
//             className='px-8 py-3 border-2 border-[#1AE3D9] text-[#1AE3D9] rounded-full hover:bg-[#1AE3D9] hover:text-[#fff] transition-colors duration-300'
//             onClick={() => setShowForm(!showForm)}
//           >
//             Ajouter Un Projet
//           </button>
//         </div>

//         {showForm && (
//           <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center z-50'>
//             <form
//               onSubmit={handleSubmit}
//               className='bg-white text-black p-6 rounded-lg shadow-md w-full max-w-md'
//             >
//               <h2 className='text-2xl font-bold mb-4'>Ajouter un projet</h2>

//               <label className='block mb-2 font-medium'>
//                 Description du projet
//               </label>
//               <textarea
//                 name='projectDescription'
//                 value={formData.projectDescription}
//                 onChange={handleChange}
//                 className='w-full p-2 border rounded mb-4'
//                 placeholder='Décrivez votre projet ici...'
//                 required
//               ></textarea>

//               <label className='block mb-2 font-medium'>
//                 Compétences requises
//               </label>
//               <select
//                 name='skill'
//                 value={formData.skill}
//                 onChange={handleChange}
//                 className='w-full p-2 border rounded mb-4'
//                 required
//               >
//                 <option value=''>Sélectionnez une compétence</option>
//                 {skills.map((skill, index) => (
//                   <option key={index} value={skill}>
//                     {skill}
//                   </option>
//                 ))}
//               </select>

//               <label className='block mb-2 font-medium'>Lieu</label>
//               <input
//                 type='text'
//                 name='location'
//                 value={formData.location}
//                 onChange={handleChange}
//                 className='w-full p-2 border rounded mb-4'
//                 placeholder='Localisation du client'
//                 required
//               />

//               <label className='block mb-2 font-medium'>
//                 Numéro de contact
//               </label>
//               <input
//                 type='tel'
//                 name='contactNumber'
//                 value={formData.contactNumber}
//                 onChange={handleChange}
//                 className='w-full p-2 border rounded mb-4'
//                 placeholder='Numéro de téléphone'
//                 required
//               />

//               <label className='block mb-2 font-medium'>Email de contact</label>
//               <input
//                 type='email'
//                 name='contactEmail'
//                 value={formData.contactEmail}
//                 onChange={handleChange}
//                 className='w-full p-2 border rounded mb-4'
//                 placeholder='Adresse email'
//                 required
//               />

//               <label className='block mb-2 font-medium'>Profil LinkedIn</label>
//               <input
//                 type='url'
//                 name='linkedinProfile'
//                 value={formData.linkedinProfile}
//                 onChange={handleChange}
//                 className='w-full p-2 border rounded mb-4'
//                 placeholder='Lien vers le profil LinkedIn'
//               />

//               <label className='block mb-2 font-medium'>Profil Facebook</label>
//               <input
//                 type='url'
//                 name='facebookProfile'
//                 value={formData.facebookProfile}
//                 onChange={handleChange}
//                 className='w-full p-2 border rounded mb-4'
//                 placeholder='Lien vers le profil Facebook'
//               />

//               <div className='flex justify-between'>
//                 <button
//                   type='submit'
//                   className='bg-[#1AE3D9] text-white py-2 px-4 rounded hover:bg-[#17c2b6] transition-colors duration-300'
//                 >
//                   Soumettre
//                 </button>
//                 <button
//                   type='button'
//                   onClick={() => setShowForm(false)}
//                   className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-400 transition-colors duration-300'
//                 >
//                   Annuler
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Demarrer;

// import React, { useState } from 'react';
// import Navbar from '../NavBar';
// import backgroundImage from '../../Assets/background-image.png';

// const Demarrer = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     titre: '',
//     description: '',
//     budget: '',
//     duree: '',
//     technologies: [''],
//     responsabilities: [''],
//     specifications: [''],
//     contact: '',
//     id_user: '', // This should ideally come from a logged-in user's context or similar.
//     Categories: [''],
//   });

//   const skills = ['UI/UX Design', 'Graphic Design', 'Front-End', 'Back-End'];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleArrayChange = (e, index, arrayName) => {
//     const updatedArray = formData[arrayName].map((item, i) =>
//       i === index ? e.target.value : item
//     );
//     setFormData((prevData) => ({
//       ...prevData,
//       [arrayName]: updatedArray,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Form Submitted:', formData);
//     // Handle form submission logic here
//     // e.g., POST request to a backend endpoint
//     try {
//       const response = await fetch('http://127.0.0.1:8000/projects/projects/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
//       const result = await response.json();
//       console.log('Success:', result);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//     setShowForm(false); // Optionally hide the form after submission
//   };

//   return (
//     <div className='bg-[#EAF6FF]'>
//       <div
//         className='w-full h-screen flex flex-col bg-cover bg-center'
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           minHeight: '150vh',
//         }}
//       >
//         <Navbar home={true} />

//         {/* Main content centered */}
//         <div className='flex flex-col justify-center items-center text-center text-[#fff] px-6 md:px-12 mt-20'>
//           {/* Main Headline */}
//           <h1 className='text-2xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto pb-6 mt-20'>
//             Connectez. Collaborez. Créez : Votre Réseau de Freelance à Portée de
//             Main !
//           </h1>

//           {/* Subheading */}
//           <p className='text-lg md:text-xl mb-8 max-w-2xl mx-auto'>
//             Trouvez des freelances ou proposez vos services pour concrétiser vos
//             projets. Rejoignez une communauté où idées et talents se rencontrent
//             !
//           </p>

//           {/* Button */}
//           <button
//             className='px-8 py-3 border-2 border-[#1AE3D9] text-[#1AE3D9] rounded-full hover:bg-[#1AE3D9] hover:text-[#fff] transition-colors duration-300'
//             onClick={() => setShowForm(!showForm)}
//           >
//             Ajouter Un Projet
//           </button>
//         </div>

//         {showForm && (
//           <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 mt-40'>
//             <form
//               onSubmit={handleSubmit}
//               className='bg-white text-black p-6 rounded-lg shadow-md w-full max-w-md'
//             >
//               <h2 className='text-2xl font-bold mb-4'>Ajouter un projet</h2>

//               <label className='block mb-2 font-medium'>Titre</label>
//               <input
//                 type='text'
//                 name='titre'
//                 value={formData.titre}
//                 onChange={handleChange}
//                 className='w-full p-2 border rounded mb-4'
//                 placeholder='Titre du projet'
//                 required
//               />

//               <label className='block mb-2 font-medium'>Description</label>
//               <textarea
//                 name='description'
//                 value={formData.description}
//                 onChange={handleChange}
//                 className='w-full p-2 border rounded mb-4'
//                 placeholder='Description du projet'
//                 required
//               ></textarea>

//               <label className='block mb-2 font-medium'>Budget</label>
//               <input
//                 type='text'
//                 name='budget'
//                 value={formData.budget}
//                 onChange={handleChange}
//                 className='w-full p-2 border rounded mb-4'
//                 placeholder='Budget du projet'
//                 required
//               />

//               <label className='block mb-2 font-medium'>Durée</label>
//               <input
//                 type='text'
//                 name='duree'
//                 value={formData.duree}
//                 onChange={handleChange}
//                 className='w-full p-2 border rounded mb-4'
//                 placeholder='Durée estimée du projet'
//                 required
//               />

//               <label className='block mb-2 font-medium'>Technologies</label>
//               <div>
//                 {formData.technologies.map((tech, index) => (
//                   <input
//                     key={index}
//                     type='text'
//                     value={tech}
//                     onChange={(e) =>
//                       handleArrayChange(e, index, 'technologies')
//                     }
//                     className='w-full p-2 border rounded mb-4'
//                     placeholder='Technologie utilisée'
//                   />
//                 ))}
//               </div>

//               <label className='block mb-2 font-medium'>Responsabilités</label>
//               <div>
//                 {formData.responsabilities.map((responsability, index) => (
//                   <input
//                     key={index}
//                     type='text'
//                     value={responsability}
//                     onChange={(e) =>
//                       handleArrayChange(e, index, 'responsabilities')
//                     }
//                     className='w-full p-2 border rounded mb-4'
//                     placeholder='Responsabilité assignée'
//                   />
//                 ))}
//               </div>

//               <label className='block mb-2 font-medium'>Spécifications</label>
//               <div>
//                 {formData.specifications.map((specification, index) => (
//                   <input
//                     key={index}
//                     type='text'
//                     value={specification}
//                     onChange={(e) =>
//                       handleArrayChange(e, index, 'specifications')
//                     }
//                     className='w-full p-2 border rounded mb-4'
//                     placeholder='Spécification'
//                   />
//                 ))}
//               </div>

//               <label className='block mb-2 font-medium'>Contact</label>
//               <input
//                 type='text'
//                 name='contact'
//                 value={formData.contact}
//                 onChange={handleChange}
//                 className='w-full p-2 border rounded mb-4'
//                 placeholder='Information de contact'
//                 required
//               />

//               {/* Hidden input for user ID */}
//               <input type='hidden' name='id_user' value={formData.id_user} />

//               <label className='block mb-2 font-medium'>Catégories</label>
//               <input
//                 type='text'
//                 name='Categories'
//                 value={formData.Categories}
//                 onChange={handleChange}
//                 className='w-full p-2 border rounded mb-4'
//                 placeholder='Catégories associées au projet'
//               />

//               <div className='flex justify-between'>
//                 <button
//                   type='submit'
//                   className='bg-[#1AE3D9] text-white py-2 px-4 rounded hover:bg-[#17c2b6] transition-colors duration-300'
//                 >
//                   Soumettre
//                 </button>
//                 <button
//                   type='button'
//                   onClick={() => setShowForm(false)}
//                   className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-400 transition-colors duration-300'
//                 >
//                   Annuler
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Demarrer;

import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar';
import backgroundImage from '../../Assets/background-image.png';

const Demarrer = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    titre: '',
    description: '',
    budget: '',
    duree: '',
    technologies: [],
    responsabilities: [],
    specifications: [],
    contact: '',
    id_user: '', // Initially empty, populated dynamically
    Categories: [],
  });

  // Fetch the `id_user` from localStorage
  useEffect(() => {
    const storedUserId = localStorage.getItem('id_user');
    if (storedUserId) {
      setFormData((prevData) => ({
        ...prevData,
        id_user: storedUserId,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleArrayChange = (e, index, arrayName) => {
    const updatedArray = [...formData[arrayName]];
    updatedArray[index] = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [arrayName]: updatedArray,
    }));
  };

  const addArrayField = (arrayName) => {
    setFormData((prevData) => ({
      ...prevData,
      [arrayName]: [...prevData[arrayName], ''],
    }));
  };

  const removeArrayField = (index, arrayName) => {
    const updatedArray = formData[arrayName].filter((_, i) => i !== index);
    setFormData((prevData) => ({
      ...prevData,
      [arrayName]: updatedArray,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.titre ||
      !formData.description ||
      !formData.budget ||
      !formData.duree ||
      !formData.id_user ||
      formData.technologies.length === 0 ||
      formData.responsabilities.length === 0 ||
      formData.Categories.length === 0
    ) {
      alert('Please fill out all required fields.');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/projects/projects/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Error:', error);
        alert('Failed to submit the project.');
        return;
      }

      const result = await response.json();
      console.log('Project created:', result);
      alert('Project successfully created!');
      setShowForm(false);
    } catch (err) {
      console.error('Network error:', err);
    }
  };

  return (
    <div className='bg-[#EAF6FF]'>
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

        <div className='flex flex-col justify-center items-center text-center text-[#fff] px-6 md:px-12 mt-20'>
          <h1 className='text-2xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto pb-6 mt-20'>
            Connectez. Collaborez. Créez : Votre Réseau de Freelance à Portée de
            Main !
          </h1>
          <p className='text-lg md:text-xl mb-8 max-w-2xl mx-auto'>
            Trouvez des freelances ou proposez vos services pour concrétiser vos
            projets. Rejoignez une communauté où idées et talents se rencontrent
            !
          </p>
          <button
            className='px-8 py-3 border-2 border-[#1AE3D9] text-[#1AE3D9] rounded-full hover:bg-[#1AE3D9] hover:text-[#fff] transition-colors duration-300'
            onClick={() => setShowForm(!showForm)}
          >
            Ajouter Un Projet
          </button>
        </div>

        {showForm && (
          <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 mt-40'>
            <form
              onSubmit={handleSubmit}
              className='bg-white text-black p-6 rounded-lg shadow-md w-full max-w-md'
            >
              <h2 className='text-2xl font-bold mb-4'>Ajouter un projet</h2>

              <label className='block mb-2 font-medium'>Titre</label>
              <input
                type='text'
                name='titre'
                value={formData.titre}
                onChange={handleChange}
                className='w-full p-2 border rounded mb-4'
                placeholder='Titre du projet'
                required
              />

              <label className='block mb-2 font-medium'>Description</label>
              <textarea
                name='description'
                value={formData.description}
                onChange={handleChange}
                className='w-full p-2 border rounded mb-4'
                placeholder='Description du projet'
                required
              ></textarea>

              <label className='block mb-2 font-medium'>Budget</label>
              <input
                type='text'
                name='budget'
                value={formData.budget}
                onChange={handleChange}
                className='w-full p-2 border rounded mb-4'
                placeholder='Budget du projet'
                required
              />

              <label className='block mb-2 font-medium'>Durée</label>
              <input
                type='text'
                name='duree'
                value={formData.duree}
                onChange={handleChange}
                className='w-full p-2 border rounded mb-4'
                placeholder='Durée estimée du projet'
                required
              />

              <label className='block mb-2 font-medium'>Technologies</label>
              {formData.technologies.map((tech, index) => (
                <div key={index} className='flex items-center'>
                  <input
                    type='text'
                    value={tech}
                    onChange={(e) =>
                      handleArrayChange(e, index, 'technologies')
                    }
                    className='w-full p-2 border rounded mb-2'
                    placeholder='Technologie utilisée'
                  />
                  <button
                    type='button'
                    onClick={() => removeArrayField(index, 'technologies')}
                    className='ml-2 text-red-500'
                  >
                    X
                  </button>
                </div>
              ))}
              <button
                type='button'
                onClick={() => addArrayField('technologies')}
                className='text-blue-500 mb-4'
              >
                Ajouter une technologie
              </button>

              <label className='block mb-2 font-medium'>Responsabilités</label>
              {formData.responsabilities.map((res, index) => (
                <div key={index} className='flex items-center'>
                  <input
                    type='text'
                    value={res}
                    onChange={(e) =>
                      handleArrayChange(e, index, 'responsabilities')
                    }
                    className='w-full p-2 border rounded mb-2'
                    placeholder='Responsabilité assignée'
                  />
                  <button
                    type='button'
                    onClick={() => removeArrayField(index, 'responsabilities')}
                    className='ml-2 text-red-500'
                  >
                    X
                  </button>
                </div>
              ))}
              <button
                type='button'
                onClick={() => addArrayField('responsabilities')}
                className='text-blue-500 mb-4'
              >
                Ajouter une responsabilité
              </button>

              <label className='block mb-2 font-medium'>Catégories</label>
              {formData.Categories.map((cat, index) => (
                <div key={index} className='flex items-center'>
                  <input
                    type='text'
                    value={cat}
                    onChange={(e) => handleArrayChange(e, index, 'Categories')}
                    className='w-full p-2 border rounded mb-2'
                    placeholder='Catégorie associée'
                  />
                  <button
                    type='button'
                    onClick={() => removeArrayField(index, 'Categories')}
                    className='ml-2 text-red-500'
                  >
                    X
                  </button>
                </div>
              ))}
              <button
                type='button'
                onClick={() => addArrayField('Categories')}
                className='text-blue-500 mb-4'
              >
                Ajouter une catégorie
              </button>

              <label className='block mb-2 font-medium'>Contact</label>
              <input
                type='text'
                name='contact'
                value={formData.contact}
                onChange={handleChange}
                className='w-full p-2 border rounded mb-4'
                placeholder='Information de contact'
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
