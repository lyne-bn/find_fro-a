import React from 'react';
import Navbar from '../NavBar';
import backgroundImage from '../../Assets/background-image.png';

const Demarrer = () => {
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
          <button className='px-8 py-3 border-2 border-[#1AE3D9] text-[#1AE3D9] rounded-full hover:bg-[#1AE3D9] hover:text-[#fff] transition-colors duration-300'>
            Démarrer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demarrer;

//the code for the link:
// import React, { useContext, useState, useEffect } from 'react';
// import { AuthContext } from '../../AuthContext'; // Assuming you have an Auth context for managing auth state
// import backgroundImage from '../../Assets/background-image.png';
// import Navbar from '../NavBar'; // Import Navbar here
// import Searchbar from '../Searchbar'; // Import Searchbar here

// const Demarrer = () => {
//   const { isAuthenticated } = useContext(AuthContext); // Accessing authentication state
//   const [allFreelancers, setAllFreelancers] = useState([]);
//   const [filteredFreelancers, setFilteredFreelancers] = useState([]);
//   const [allProjects, setAllProjects] = useState([]);
//   const [filteredProjects, setFilteredProjects] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchFreelancers = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/Freelancers");
//         if (!response.ok) {
//           throw new Error("Erreur lors de la récupération des freelances");
//         }
//         const data = await response.json();
//         setAllFreelancers(data);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchFreelancers();
//   }, []);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/projects");
//         if (!response.ok) {
//           throw new Error("Erreur lors de la récupération des projets");
//         }
//         const data = await response.json();
//         setAllProjects(data);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchProjects();
//   }, []);

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
//         <Navbar home={true} isAuthenticated={isAuthenticated} /> {/* Pass isAuthenticated here */}

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

//           {/* Searchbar for both freelancers and projects */}
//           {isAuthenticated && (
//             <Searchbar
//               freelancers={allFreelancers}
//               projects={allProjects}
//               onFilterFreelancers={setFilteredFreelancers}
//               onFilterProjects={setFilteredProjects}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Demarrer;
