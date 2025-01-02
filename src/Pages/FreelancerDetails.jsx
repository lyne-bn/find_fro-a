import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { FaGithub, FaLinkedin, FaDribbble, FaBehance } from 'react-icons/fa';

function FreelancerDetails() {
  const { id } = useParams();
  const [freelancer, setFreelancer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFreelancerDetails = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/freelancers/freelancers/${id}`
        );
        if (!response.ok) {
          throw new Error(
            `Error fetching freelancer details: ${response.statusText}`
          );
        }

        const data = await response.json();
        setFreelancer(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchFreelancerDetails();
  }, [id]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!freelancer) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <NavBar />
      <div className='bg-[#EAF6FF] min-h-screen flex justify-center items-center'>
        <div className='flex flex-col items-center space-y-4'>
          {/* About Section */}
          <div className='bg-white shadow-lg rounded-lg overflow-hidden w-[18rem] h-auto border border-[#020B56] p-4 mb-4'>
            <h3 className='font-bold text-[#020B56] text-lg mb-2 border-b border-[#020B56]'>
              A propos de moi :
            </h3>
            <p className='text-black text-sm mb-2'>
              Profession(s) :
              <span className='bg-white border border-[#020B56] text-[#020B56] text-xs px-3 py-1 rounded-full ml-2'>
                {freelancer.profession}
              </span>
            </p>
            <p className='text-black text-sm mb-2'>
              Level D’expérience :
              <span className='bg-white border border-[#020B56] text-[#020B56] text-xs px-3 py-1 rounded-full ml-2'>
                {freelancer.level}
              </span>
            </p>

            <p className='mt-4'>Portfolio Links :</p>
            <div className='mt-2 flex gap-4 justify-center'>
              {freelancer.Github && (
                <a
                  href={freelancer.Github}
                  target='_blank'
                  rel='noreferrer'
                  className='text-[#020B56] hover:text-[#1AE3D9] text-2xl'
                >
                  <FaGithub />
                </a>
              )}
              {freelancer.Linkedin && (
                <a
                  href={freelancer.Linkedin}
                  target='_blank'
                  rel='noreferrer'
                  className='text-[#020B56] hover:text-[#1AE3D9] text-2xl'
                >
                  <FaLinkedin />
                </a>
              )}
              {freelancer.Dribble && (
                <a
                  href={freelancer.Dribble}
                  target='_blank'
                  rel='noreferrer'
                  className='text-[#020B56] hover:text-[#1AE3D9] text-2xl'
                >
                  <FaDribbble />
                </a>
              )}
              {freelancer.Behance && (
                <a
                  href={freelancer.Behance}
                  target='_blank'
                  rel='noreferrer'
                  className='text-[#020B56] hover:text-[#1AE3D9] text-2xl'
                >
                  <FaBehance />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FreelancerDetails;

//this code is to test out the page:

// import profileimg from '../Assets/img.png';
// import { MapPin, Clock, Phone, Mail, Facebook, Linkedin } from 'lucide-react';
// import { FaGithub, FaLinkedin, FaDribbble, FaBehance } from 'react-icons/fa';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// function FreelancerDetails() {
//   const freelancer = {
//     _id: '6749cd2d8c3e2fd0d1112035',
//     nom: 'Taylor',
//     prenom: 'Chris',
//     profession: 'UI/UX Designer',
//     level: 'Expert',
//     description:
//       'Créative et innovante, excelle en design graphique, ui/ux et logo design en transformant les idées en designs percutants. Experte en outils modernes, j’offre des solutions sur-mesure adaptées aux besoins des clients design en transformant les idées en designs percutants. Experte en outils modernes, j’offre des solutions sur-mesure adaptées aux besoins des clients',
//     Github: 'https://github.com/ChrisTaylor',
//     Linkedin: 'https://linkedin.com/in/ChrisTaylor',
//     Dribble: 'https://dribbble.com/ChrisTaylor',
//     Behance: 'https://www.behance.net/ChrisTaylor',
//     city: 'Yakouren',
//     wilaya: 'Algeria',
//     memberSince: 'Dec 15, 2023',
//     email: 'client@example.com',
//     phone: '+213 555 123 456',
//     projects: [
//       {
//         title: 'E-commerce App Design',
//         tools: 'Figma, Photoshop',
//         image: 'https://via.placeholder.com/150',
//         link: '/projects/ecommerce-app',
//       },
//       {
//         title: 'Portfolio Website',
//         tools: 'Figma, Illustrator',
//         image: 'https://via.placeholder.com/150',
//         link: '/projects/portfolio-website',
//       },
//       {
//         title: 'Portfolio Website',
//         tools: 'Figma, Illustrator',
//         image: 'https://via.placeholder.com/150',
//         link: '/projects/portfolio-website',
//       },
//       {
//         title: 'Portfolio Website',
//         tools: 'Figma, Illustrator',
//         image: 'https://via.placeholder.com/150',
//         link: '/projects/portfolio-website',
//       },
//       {
//         title: 'Portfolio Website',
//         tools: 'Figma, Illustrator',
//         image: 'https://via.placeholder.com/150',
//         link: '/projects/portfolio-website',
//       },
//       {
//         title: 'Portfolio Website',
//         tools: 'Figma, Illustrator',
//         image: 'https://via.placeholder.com/150',
//         link: '/projects/portfolio-website',
//       },
//       {
//         title: 'Portfolio Website',
//         tools: 'Figma, Illustrator',
//         image: 'https://via.placeholder.com/150',
//         link: '/projects/portfolio-website',
//       },
//     ],
//   };

//   return (
//     <div>
//       <NavBar />
//       <div className='bg-[#EAF6FF] min-h-screen flex justify-center items-center'>
//         <div className='flex flex-col items-center space-y-4'>
//           {/* Profile Section */}
//           <div className='bg-white shadow-lg rounded-lg overflow-hidden w-[18rem] h-[20rem] border border-[#020B56] mt-2'>
//             <img
//               src={profileimg}
//               alt={`${freelancer.nom} ${freelancer.prenom}`}
//               className='w-24 h-24 mx-auto rounded-full mt-4'
//             />
//             <h2 className='text-2xl font-bold text-[#020B56] mt-4 text-center'>
//               {freelancer.nom} {freelancer.prenom}
//             </h2>
//             <div className='text-[#020B56] text-sm px-4 mt-2 h-[9rem] overflow-y-scroll hide-scrollbar'>
//               {freelancer.description}
//             </div>
//           </div>

//           {/* About Section */}
//           <div className='bg-white shadow-lg rounded-lg overflow-hidden w-[18rem] h-auto border border-[#020B56] p-4 mb-4'>
//             <h3 className='font-bold text-[#020B56] text-lg mb-2 border-b border-[#020B56]'>
//               A propos de moi :
//             </h3>
//             <p className='text-black text-sm mb-2'>
//               Profession(s) :
//               <span className='bg-white border border-[#020B56] text-[#020B56] text-xs px-3 py-1 rounded-full ml-2'>
//                 {freelancer.level}
//               </span>
//             </p>
//             <p className='text-black text-sm mb-2'>
//               Level D’expérience :
//               <span className='bg-white border border-[#020B56] text-[#020B56] text-xs px-3 py-1 rounded-full ml-2'>
//                 {freelancer.level}
//               </span>
//             </p>
//             <div>
//               <p className='text-sm text-[#000000] mb-2 flex items-center'>
//                 <MapPin className='mr-2 text-[#000000] h-5 w-5' />
//                 {freelancer.city}
//               </p>
//               <p className='text-sm text-[#000000] mb-2 flex items-center'>
//                 {freelancer.wilaya}
//               </p>
//               <p className='text-sm text-[#000000] mb-2 flex items-center'>
//                 <Clock className='mr-2 text-[#000000] h-5 w-5' />
//                 Membre depuis : {freelancer.memberSince}
//               </p>
//               <ul className='text-sm text-[#000000] space-y-2'>
//                 <li className='flex items-center'>
//                   <Phone className='mr-2 text-[#000000] h-5 w-5' />
//                   {freelancer.phone}
//                 </li>
//                 <li className='flex items-center'>
//                   <Mail className='mr-2 text-[#000000] h-5 w-5' />
//                   {freelancer.email}
//                 </li>
//               </ul>
//             </div>
//             <p className='mt-4'>Portfolio Links :</p>
//             <div className='mt-2 flex gap-4 justify-center'>
//               {freelancer.Github && (
//                 <a
//                   href={freelancer.Github}
//                   target='_blank'
//                   rel='noreferrer'
//                   className='text-[#020B56] hover:text-[#1AE3D9] text-2xl'
//                 >
//                   <FaGithub />
//                 </a>
//               )}
//               {freelancer.Linkedin && (
//                 <a
//                   href={freelancer.Linkedin}
//                   target='_blank'
//                   rel='noreferrer'
//                   className='text-[#020B56] hover:text-[#1AE3D9] text-2xl'
//                 >
//                   <FaLinkedin />
//                 </a>
//               )}
//               {freelancer.Dribble && (
//                 <a
//                   href={freelancer.Dribble}
//                   target='_blank'
//                   rel='noreferrer'
//                   className='text-[#020B56] hover:text-[#1AE3D9] text-2xl'
//                 >
//                   <FaDribbble />
//                 </a>
//               )}
//               {freelancer.Behance && (
//                 <a
//                   href={freelancer.Behance}
//                   target='_blank'
//                   rel='noreferrer'
//                   className='text-[#020B56] hover:text-[#1AE3D9] text-2xl'
//                 >
//                   <FaBehance />
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Projects Section */}
//         <div className='bg-white shadow-lg rounded-lg overflow-hidden w-[40rem] max-w-full h-auto border border-[#020B56] p-4 ml-4 '>
//           <h3 className='font-bold text-[#020B56] text-lg mb-4 border-b border-[#020B56]'>
//             Projets réalisés :
//           </h3>
//           <style>
//             {`
//               .projects-container {
//                 max-height: calc(20rem + 16rem); /* Assuming fixed heights for Profile and About sections */
//                 overflow-y: auto;
//               }
//             `}
//           </style>
//           <div className='projects-container grid grid-cols-1 gap-4 hide-scrollbar'>
//             {freelancer.projects.map((project, index) => (
//               <div key={index} className='flex items-start gap-4'>
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className='w-20 h-20 object-cover rounded-lg'
//                 />
//                 <div>
//                   <p className='text-sm font-bold text-[#020B56]'>
//                     {project.title}
//                   </p>
//                   <p className='text-sm text-gray-600'>
//                     Tools: {project.tools}
//                   </p>
//                   <p
//                     to={`/project/${project._id}`}
//                     className='text-[#1AE3D9] text-sm font-bold'
//                   >
//                     Voir Projet
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default FreelancerDetails;
