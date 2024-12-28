import React from 'react';
import StatImage from '../../Assets/statistics.png';

const Stats = () => {
  return (
    <div
      className='py-40 text-center bg-cover bg-center bg-[#EAF6FF]'
      style={{
        backgroundImage: `url(${StatImage})`,
      }}
    ></div>
  );
};

export default Stats;
