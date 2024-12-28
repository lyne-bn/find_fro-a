import React from 'react';
import image1 from '../../Assets/pexels-tranmautritam-326503.png';
import image2 from '../../Assets/pexels-karolina-grabowska-7681091.png';
import image3 from '../../Assets/pexels-fotios-photos-16129728.png';
import image4 from '../../Assets/marketing-strategy-planning-strategy-concept.png';
import BlueShape from './BlueShape';

const cards = [
  {
    title: 'UI-UX',
    description: 'Trouvez des compétences en UI-UX',
    imageUrl: image1,
  },
  {
    title: 'Front-End',
    description: 'Trouvez des compétences en front-end',
    imageUrl: image2,
  },
  {
    title: 'Graphic Design',
    description: 'Trouvez des compétences en graphic design',
    imageUrl: image3,
  },
  {
    title: 'Logo Design',
    description: 'Trouvez des compétences en logo design',
    imageUrl: image4,
  },
  {
    title: 'Back-End',
    description: 'Trouvez des compétences en back-end',
    imageUrl: image4,
  },
];

const CardsSec = () => {
  return (
    <div className='mb-20 pb-20'>
      <h2 className='text-2xl font-bold text-center py-8 text-[#020B58]'>
        Services Catégorisés
      </h2>
      <div className='relative bg-gray-100'>
        <div className='flex  gap-4 px-4'>
          {cards.map((service, index) => (
            <div
              key={index}
              className='relative bg-white shadow-md overflow-hidden w-70 flex-shrink-0'
            >
              {/* Card Image */}
              <img
                src={service.imageUrl}
                alt={service.title}
                className='w-full h-80 object-cover'
              />

              {/* BlueShape Overlay */}
              <div className='absolute top-0 left-0 w-full h-full'>
                <BlueShape />
                <div className='absolute bottom-8 right-6 w-full h-full flex flex-col justify-center items-center text-white px-4 z-20'>
                  <h3 className='text-xl font-bold text-[#fff] text-center'>
                    {service.title}
                  </h3>
                  <p className='text-sm text-center text-[#fff]'>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsSec;
