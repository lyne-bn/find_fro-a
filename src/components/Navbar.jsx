import React from 'react';
import { useState } from 'react';
import logo from '../assets/logo_without_text.png';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Acceuil');

  const navLinks = [
    { name: 'Acceuil', href: '#' },
    { name: 'A propos', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Freelencers', href: '#' },
  ];
  return (
    <nav className='flex items-center justify-between px-8 pt-4 bg-transparent'>
      <div className='text-white font-bold text-xl'>
        <img src={logo} alt='logo' className='w-16' />
      </div>

      {/* Nav Links */}
      <ul className='flex space-x-8 text-[#fff]'>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`${
                activeLink === link.name ? 'text-[#1AE3D9]' : 'text-white'
              } hover:text-[#1AE3D9] transition-colors duration-300`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/*Buttons*/}
      <div className='flex space-x-4'>
        <button className='px-6 py-2 bg-[#1AE3D9] text-[#fff] rounded-[20px] hover:bg-[#14b6ae] transition-colors duration-300'>
          connexion
        </button>
        <button className='px-6 py-2 border border-[#fff] text-[#fff] rounded-[20px] hover:bg-white hover:text-black transition-colors duration-300'>
          Inscription
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from 'react';
// import logo from '../assets/logo_without_text.png';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [activeLink, setActiveLink] = useState('Acceuil');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navLinks = [
//     { name: 'Acceuil', href: '#' },
//     { name: 'A propos', href: '#' },
//     { name: 'Projects', href: '#' },
//     { name: 'Freelencers', href: '#' },
//   ];

//   return (
//     <nav className='flex items-center justify-between px-8 py-4 bg-transparent'>
//       {/* Logo */}
//       <div className='text-white font-bold text-xl'>
//         <img src={logo} alt='logo' className='w-16' />
//       </div>

//       {/* Hamburger Menu (for small screens) */}
//       <div className='md:hidden'>
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className='text-white focus:outline-none'
//         >
//           {isMenuOpen ? (
//             <X className='w-8 h-8' />
//           ) : (
//             <Menu className='w-8 h-8' />
//           )}
//         </button>
//       </div>

//       {/* Nav Links */}
//       <ul
//         className={`flex-col md:flex md:flex-row md:space-x-8 items-center absolute md:static top-[70px] left-0 w-full md:w-auto bg-black md:bg-transparent ${
//           isMenuOpen ? 'flex' : 'hidden'
//         } md:items-center md:space-x-8 text-center`}
//       >
//         {navLinks.map((link) => (
//           <li key={link.name} className='py-2 md:py-0'>
//             <a
//               href={link.href}
//               onClick={() => {
//                 setActiveLink(link.name);
//                 setIsMenuOpen(false); // Close menu on click
//               }}
//               className={`block md:inline ${
//                 activeLink === link.name ? 'text-[#1AE3D9]' : 'text-white'
//               } hover:text-[#1AE3D9] transition-colors duration-300`}
//             >
//               {link.name}
//             </a>
//           </li>
//         ))}
//       </ul>

//       {/* Buttons */}
//       <div className='hidden md:flex space-x-4'>
//         <button className='px-6 py-2 bg-[#1AE3D9] text-white rounded-[20px] hover:bg-[#14b6ae] transition-colors duration-300'>
//           Connexion
//         </button>
//         <button className='px-6 py-2 border border-white text-white rounded-[20px] hover:bg-white hover:text-black transition-colors duration-300'>
//           Inscription
//         </button>
//       </div>

//       {/* Buttons for mobile */}
//       <div
//         className={`${
//           isMenuOpen ? 'flex' : 'hidden'
//         } flex-col space-y-2 items-center mt-4 md:hidden`}
//       >
//         <button className='px-6 py-2 bg-[#1AE3D9] text-white rounded-[20px] hover:bg-[#14b6ae] transition-colors duration-300'>
//           Connexion
//         </button>
//         <button className='px-6 py-2 border border-white text-white rounded-[20px] hover:bg-white hover:text-black transition-colors duration-300'>
//           Inscription
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
