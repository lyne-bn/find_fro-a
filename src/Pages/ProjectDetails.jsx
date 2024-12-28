import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { MapPin, Clock, Phone, Mail, Facebook, Linkedin } from 'lucide-react';

function ProjectDetails() {
  const { project_id } = useParams(); // Capture dynamic project_id
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/projects/${project_id}/`
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
  }, [project_id]);

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

          <div className='grid grid-cols-3 gap-6'>
            {/* Project Details */}
            <div className='col-span-2 bg-white shadow-lg rounded-lg p-8'>
              <h2 className='font-bold text-lg text-[#020B56] mb-4'>
                Détails du projet:
              </h2>
              <p className='text-sm text-[#000000] mb-4'>
                {project.description}
              </p>
              <h3 className='font-bold text-lg text-[#020B56] mb-4'>
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
            </div>

            {/* Client Info */}
            <div className='bg-white shadow-lg rounded-lg p-8'>
              <h2 className='font-bold text-lg text-[#020B56] mb-4'>
                À propos du client
              </h2>
              <div>
                <p className='text-base text-[#000000] mb-2 flex items-center'>
                  <MapPin className='mr-2 text-[#000000]' />
                  {project.client.city}
                </p>
                <p className='text-base text-[#000000] mb-2 flex items-center'>
                  {/* <img
                    src={DZpic}
                    alt='Algeria Flag'
                    className='w-5 h-5 mr-2'
                  /> */}
                  {project.client.wilaya}
                </p>
                <p className='text-base text-[#000000] mb-2 flex items-center'>
                  <Clock className='mr-2 text-[#000000]' />
                  Membre depuis : {project.client.memberSince}
                </p>
                <h2 className='font-bold text-lg text-[#020B56] mt-4 mb-2'>
                  Contact
                </h2>
                <ul className='text-base text-[#000000] space-y-2'>
                  <li className='flex items-center'>
                    <Phone className='mr-2 text-[#000000]' />
                    {project.client.phone}
                  </li>
                  <li className='flex items-center'>
                    <Mail className='mr-2 text-[#000000]' />
                    {project.client.email}
                  </li>
                  <li className='flex items-center'>
                    <Linkedin className='mr-2 text-[#000000]' />
                    {project.client.linkedin}
                  </li>
                  <li className='flex items-center'>
                    <Facebook className='mr-2 text-[#000000]' />
                    {project.client.facebook}
                  </li>
                </ul>
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

// import { useState, useEffect } from 'react';
// import NavBar from '../Components/NavBar';
// import Footer from '../Components/Footer';
// import { MapPin, Clock, Phone, Mail, Facebook, Linkedin } from 'lucide-react';
// // import DZpic from '../Assets/DZ.';

// const mockProject = {
//   titre: 'Figma Designer for Website Layout Creation',
//   status: 'Ouvert',
//   duree: '3 mois',
//   budget: '25000 DZD',
//   description:
//     "J'ai besoin d'un designer Figma pour convertir mes fichiers de conception PDF en designs Figma, ainsi que pour m'aider à concevoir une maquette professionnelle pour un site web de gestion d'entreprise.",
//   technologies: ['Figma', 'UI/UX Design', 'Prototype', 'Adobe XD'],
//   client: {
//     city: 'Yakouren',
//     wilaya: 'Algeria',
//     memberSince: 'Dec 15, 2023',
//     email: 'client@example.com',
//     phone: '+213 555 123 456',
//     website: 'www.clientwebsite.com',
//   },
// };

// function ProjectDetails() {
//   const [project, setProject] = useState(null);

//   useEffect(() => {
//     // Simulate fetching data
//     setTimeout(() => {
//       setProject(mockProject);
//     }, 1000); // Simulates a 1-second delay
//   }, []);

//   if (!project) {
//     return <div className='text-center mt-10'>Chargement...</div>;
//   }

//   return (
//     <div className='bg-[#EAF6FF] min-h-screen'>
//       <NavBar />
//       <div className='px-[8vw] pt-[7vh] pb-[15vh]'>
//         <div>
//           <div>
//             {/* Title and Status */}
//             <div className='flex justify-between items-start mb-4'>
//               <div className='flex items-center space-x-4'>
//                 <h1 className='font-bold text-2xl text-[#020B56]'>
//                   {project.titre}
//                 </h1>
//                 <span className='bg-[#1AE3D9] text-white text-xs font-bold px-2 py-1 rounded-full'>
//                   {project.status}
//                 </span>
//               </div>
//             </div>

//             {/* Durée and Prix */}
//             <div className='flex justify-end items-center space-x-8 mb-2'>
//               <p className='font-semibold text-sm text-[#020B56]'>
//                 <span className='text-base font-bold'>Durée:</span>{' '}
//                 {project.duree}
//               </p>
//               <p className='font-semibold text-sm text-[#020B56]'>
//                 <span className='text-base font-bold'>Prix:</span>{' '}
//                 {project.budget}
//               </p>
//             </div>

//             {/* Horizontal Rule */}
//             <hr className='mb-6 border-t border-gray-300' />
//           </div>

//           <div className='grid grid-cols-3 gap-6'>
//             {/* Project Details */}
//             <div className='col-span-2 bg-white shadow-lg rounded-lg p-8'>
//               <h2 className='font-bold text-lg text-[#020B56] mb-4'>
//                 Détails du projet:
//               </h2>
//               <p className='text-sm text-[#000000] mb-4'>
//                 {project.description}
//               </p>
//               <h3 className='font-bold text-lg text-[#020B56] mb-4'>
//                 Compétences requises :
//               </h3>
//               <div className='flex flex-wrap gap-2'>
//                 {project.technologies.map((tech, index) => (
//                   <span
//                     key={index}
//                     className='bg-[#EAF6FF] border border-[#1AE3D9] text-[#1AE3D9] text-xs px-3 py-1 rounded-full'
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Client Info */}
//             <div className='bg-white shadow-lg rounded-lg p-8'>
//               <h2 className='font-bold text-lg text-[#020B56] mb-4'>
//                 À propos du client
//               </h2>
//               <div>
//                 <p className='text-base text-[#000000] mb-2 flex items-center'>
//                   <MapPin className='mr-2 text-[#000000]' />
//                   {project.client.city}
//                 </p>
//                 <p className='text-base text-[#000000] mb-2 flex items-center'>
//                   {/* <img
//                     src={DZpic}
//                     alt='Algeria Flag'
//                     className='w-5 h-5 mr-2'
//                   /> */}
//                   {project.client.wilaya}
//                 </p>
//                 <p className='text-base text-[#000000] mb-2 flex items-center'>
//                   <Clock className='mr-2 text-[#000000]' />
//                   Membre depuis : {project.client.memberSince}
//                 </p>
//                 <h2 className='font-bold text-lg text-[#020B56] mt-4 mb-2'>
//                   Contact
//                 </h2>
//                 <ul className='text-base text-[#000000] space-y-2'>
//                   <li className='flex items-center'>
//                     <Phone className='mr-2 text-[#000000]' />
//                     {project.client.phone}
//                   </li>
//                   <li className='flex items-center'>
//                     <Mail className='mr-2 text-[#000000]' />
//                     {project.client.email}
//                   </li>
//                   <li className='flex items-center'>
//                     <Linkedin className='mr-2 text-[#000000]' />
//                     {project.client.linkedin}
//                   </li>
//                   <li className='flex items-center'>
//                     <Facebook className='mr-2 text-[#000000]' />
//                     {project.client.facebook}
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default ProjectDetails;
