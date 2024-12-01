import React from 'react';
import { Mail, Facebook, Instagram } from 'lucide-react';
import logowt from '../assets/logo_with_text.png';

const Footer = () => {
  return (
    <footer className='bg-[#020B56] w-full py-12'>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-8 px-4 md:px-8'>
        {/* Part 1: Logo & Description */}
        <div className='flex flex-col items-center text-center'>
          <img src={logowt} alt='Logo' className='w-20 mb-4 mt-6' />
          <div className='text-left'>
            <p className='mb-4 ml-2 text-[#fff]'>
              Donnez vie à vos projets grâce aux meilleurs talents freelances.
              Des esprits créatifs aux experts techniques, trouvez des
              professionnels prêts à réaliser votre vision.
            </p>
            <p className='text-[#595959] ml-5'>© All rights reserved</p>
          </div>
        </div>

        {/* Part 2: Contact Us */}
        <div>
          <h3 className='text-[#1AE3D9] font-bold mb-4 mt-6'>Contactez-nous</h3>
          <p className='flex items-center text-[#fff]'>
            <Mail className='w-5 h-5 mr-2 text-[#fff]' />
            FindForça@gmail.com
          </p>
        </div>

        {/* Part 3: Pages */}
        <div>
          <h3 className='text-[#1AE3D9] font-bold mb-4 mt-6'>Pages</h3>
          <ul className='space-y-2 text-[#fff]'>
            {['Accueil', 'A propos', 'Services', 'Freelancer'].map((page) => (
              <li key={page} className='hover:text-[#1AE3D9] cursor-pointer'>
                {page}
              </li>
            ))}
          </ul>
        </div>

        {/* Part 4: Message Form */}
        <div>
          <h3 className='text-[#1AE3D9] font-bold mb-4 mt-6'>
            Envoyez un message
          </h3>
          <div className='space-y-4'>
            <div className='flex items-center border border-[#fff] rounded-[20px] px-4 py-2'>
              <Mail className='w-5 h-5 mr-2 text-[#fff]' />
              <input
                type='email'
                placeholder='Email'
                className='bg-[#020B56] text-[#fff] outline-none w-full border-none'
              />
            </div>
            <div className='flex items-center border border-[#fff] rounded-[20px] px-4 py-2'>
              <textarea
                placeholder='Ecrire votre message'
                className='bg-[#020B56] text-[#fff] outline-none text-[#fff] w-full resize-none border-none'
              ></textarea>
            </div>
            <button className='w-50 px-4 py-1 border border-white text-[#fff] rounded-[10px] hover:bg-[#14b6ae] transition-colors duration-300'>
              Envoyer
            </button>
          </div>
        </div>

        {/* Part 5: Social Media & Extra Message */}
        <div className='flex flex-col items-start mt-6'>
          <h3 className='text-[#1AE3D9] font-bold mb-4'>Suivez-nous</h3>
          <div className='flex space-x-4 mb-4'>
            <Instagram className='w-10 h-10 cursor-pointer bg-[#1AE3D9] rounded-[20px] p-2 text-[#fff]' />
            <Facebook className='w-10 h-10 cursor-pointer bg-[#1AE3D9] rounded-[20px] p-2 text-[#fff]' />
          </div>
          <p className='text-[#fff]'>
            "Créez sans limites, partagez sans frontières."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
