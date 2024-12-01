import React from 'react';
import Navbar from '../Navbar';
import backgroundImage from '../../assets/background-image.png';
import Footer from '../Footer';
import Stats from './Stats';

const Demarrer = () => {
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
        <Navbar />
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
