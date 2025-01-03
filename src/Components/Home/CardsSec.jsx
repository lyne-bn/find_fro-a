// import React, { useRef } from 'react';
// import image1 from '../../Assets/pexels-tranmautritam-326503.png';
// import image2 from '../../Assets/pexels-karolina-grabowska-7681091.png';
// import image3 from '../../Assets/pexels-fotios-photos-16129728.png';
// import image4 from '../../Assets/marketing-strategy-planning-strategy-concept.png';
// import BlueShape from './BlueShape';

// const cards = [
//   {
//     title: 'UI-UX',
//     description: 'Trouvez des compétences en UI-UX',
//     imageUrl: image1,
//   },
//   {
//     title: 'Front-End',
//     description: 'Trouvez des compétences en front-end',
//     imageUrl: image2,
//   },
//   {
//     title: 'Graphic Design',
//     description: 'Trouvez des compétences en graphic design',
//     imageUrl: image3,
//   },
//   {
//     title: 'Logo Design',
//     description: 'Trouvez des compétences en logo design',
//     imageUrl: image4,
//   },
//   {
//     title: 'Back-End',
//     description: 'Trouvez des compétences en back-end',
//     imageUrl: image4,
//   },
//   {
//     title: 'Full Stack',
//     description: 'Trouvez des compétences en full stack',
//     imageUrl: image4,
//   },
// ];

// const CardsSec = () => {
//   const scrollContainerRef = useRef(null);

//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className='mb-20 pb-20 bg-[#EAF6FF] relative'>
//       <h2 className='text-2xl font-bold text-center py-8 text-[#020B58]'>
//         Services Catégorisés
//       </h2>
//       <div className='relative bg-[#EAF6FF]'>
//         <button
//           onClick={scrollLeft}
//           className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#1AE3D9] text-white p-3 rounded-full shadow-md z-10 hover:bg-[#1AE3D9] transition-colors duration-300 hide-scrollbar'
//         >
//           &#8249;
//         </button>

//         <div
//           ref={scrollContainerRef}
//           className='flex gap-4 px-4 overflow-x-auto hide-scrollbar scroll-smooth'
//           style={{ scrollSnapType: 'x mandatory' }}
//         >
//           {cards.map((service, index) => (
//             <div
//               key={index}
//               className='relative bg-white shadow-md overflow-hidden w-60 flex-shrink-0'
//               style={{ width: '240px' }}
//             >
//               <img
//                 src={service.imageUrl}
//                 alt={service.title}
//                 className='w-full h-80 object-cover'
//               />
//               <div className='absolute top-0 left-0 w-full h-full'>
//                 <BlueShape />
//                 <div className='absolute bottom-8 right-6 w-full h-full flex flex-col justify-center items-center text-white px-4 z-20'>
//                   <h3 className='text-xl font-bold text-[#fff] text-center'>
//                     {service.title}
//                   </h3>
//                   <p className='text-sm text-center text-[#fff]'>
//                     {service.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={scrollRight}
//           className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#1AE3D9] text-white p-3 rounded-full shadow-md z-10 hover:bg-[#1AE3D9] transition-colors duration-300'
//         >
//           &#8250;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CardsSec;

import React, { useRef, useState, useEffect } from 'react';
import image1 from '../../Assets/pexels-tranmautritam-326503.png';
import image2 from '../../Assets/pexels-karolina-grabowska-7681091.png';
import image3 from '../../Assets/pexels-fotios-photos-16129728.png';
import image4 from '../../Assets/marketing-strategy-planning-strategy-concept.png';
import BlueShape from './BlueShape';

const CardsSec = () => {
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
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -40 * 2, // Scroll 2 cards at a time
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 40 * 2, // Scroll 2 cards at a time
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='pb-40 bg-[#EAF6FF] relative'>
      <h2 className='text-2xl font-bold text-center py-8 text-[#020B58]'>
        Services Catégorisés
      </h2>
      <div className='relative bg-[#EAF6FF]'>
        {/* Left Arrow */}

        <button
          onClick={scrollLeft}
          className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#1AE3D9] text-white rounded-full w-10 h-10 flex items-center justify-center z-10 shadow-md hover:scale-110 transition-transform'
        >
          &#8249;
        </button>

        {/* Cards Container */}
        <div
          ref={scrollRef}
          className='ml-7 flex gap-4 px-4 overflow-x-auto scrollbar-none scroll-smooth'
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {cards.map((service, index) => (
            <div
              key={index}
              className='relative bg-white shadow-md overflow-hidden w-60 flex-shrink-0'
              style={{ width: '240px' }}
            >
              <img
                src={service.imageUrl} // Ensure backend returns proper image URL
                alt={service.title}
                className='w-full h-80 object-cover'
              />
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

        {/* Right Arrow */}

        <button
          onClick={scrollRight}
          className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1AE3D9] text-white rounded-full w-10 h-10 flex items-center justify-center z-10 shadow-md hover:scale-110 transition-transform'
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default CardsSec;
