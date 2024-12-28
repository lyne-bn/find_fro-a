import React from 'react';
import avisImage from '../../Assets/avisimage.png';

const AvisCard = ({ name, title, testimonial }) => {
  return (
    <div className='bg-[#FFFFFF] shadow-md rounded-3xl p-6 h-full flex flex-col justify-between'>
      <div className='flex mt-4'>
        <div>
          <h3 className='text-lg font-bold text-[#020B56]'>{name}</h3>
          <p className='text-[#1AE3D9]'>{title}</p>
        </div>
      </div>
      <p className='text-gray-500'>{testimonial}</p>
    </div>
  );
};

const Avis = () => {
  const avis = [
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
  ];

  return (
    <div className='p-20 bg-[#EAF6FF]'>
      <h2 className='text-2xl font-bold text-center mb-8 text-[#020B56]'>
        Avis des utilisateurs
      </h2>
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

//this code for the Link:

// import React, { useEffect, useState } from 'react';
// import avisImage from '../../Assets/avisimage.png';

// const AvisCard = ({ name, title, testimonial }) => {
//   return (
//     <div className="bg-[#FFFFFF] shadow-md rounded-3xl p-6 h-full flex flex-col justify-between">
//       <div className="flex mt-4">
//         <div>
//           <h3 className="text-lg font-bold text-[#020B56]">{name}</h3>
//           <p className="text-[#1AE3D9]">{title}</p>
//         </div>
//       </div>
//       <p className="text-gray-500">{testimonial}</p>
//     </div>
//   );
// };

// const Avis = () => {
//   const [avis, setAvis] = useState([]); // State to store reviews
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   useEffect(() => {
//     // Fetch avis from the backend
//     const fetchAvis = async () => {
//       try {
//         const response = await fetch('https://your-backend-url/api/avis'); // Replace with your backend URL
//         if (!response.ok) {
//           throw new Error('Failed to fetch avis');
//         }
//         const data = await response.json();
//         setAvis(data); // Assuming the API returns an array of avis
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchAvis();
//   }, []);

//   return (
//     <div className="p-20">
//       <h2 className="text-2xl font-bold text-center mb-8 text-[#020B56]">
//         Avis des utilisateurs
//       </h2>

//       {/* Show loading state */}
//       {loading && <p className="text-center text-[#020B56]">Chargement...</p>}

//       {/* Show error message if any */}
//       {error && <p className="text-center text-red-500">{error}</p>}

//       {/* Avis content */}
//       {!loading && !error && (
//         <div
//           className="grid grid-cols-3 gap-4 items-center"
//           style={{
//             gridTemplateRows: 'auto auto',
//             gridTemplateAreas: `
//               "avis1 image avis2"
//               "avis3 image avis4"
//             `,
//           }}
//         >
//           {/* First Row */}
//           {avis[0] && (
//             <div className="row-span-1" style={{ gridArea: 'avis1' }}>
//               <AvisCard {...avis[0]} />
//             </div>
//           )}
//           <div
//             className="row-span-2 flex justify-center items-center"
//             style={{ gridArea: 'image' }}
//           >
//             <img
//               src={avisImage}
//               alt="Avis Illustration"
//               className="w-full max-w-sm h-auto object-cover rounded-3xl"
//             />
//           </div>
//           {avis[1] && (
//             <div className="row-span-1" style={{ gridArea: 'avis2' }}>
//               <AvisCard {...avis[1]} />
//             </div>
//           )}

//           {/* Second Row */}
//           {avis[2] && (
//             <div className="row-span-1" style={{ gridArea: 'avis3' }}>
//               <AvisCard {...avis[2]} />
//             </div>
//           )}
//           {avis[3] && (
//             <div className="row-span-1" style={{ gridArea: 'avis4' }}>
//               <AvisCard {...avis[3]} />
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Avis;
