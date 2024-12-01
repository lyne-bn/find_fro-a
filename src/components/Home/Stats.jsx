import React from 'react';
import StatImage from '../../assets/statistics.png';

const Stats = () => {
  return (
    <div
      className='py-40 text-center bg-cover bg-center'
      style={{
        backgroundImage: `url(${StatImage})`,
      }}
    ></div>
  );
};

export default Stats;
