import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function Searchbar2({
  freelancers,
  projects,
  onFilterFreelancers,
  onFilterProjects,
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredFreelancers = freelancers.filter(
      (freelancer) =>
        freelancer.nom.toLowerCase().includes(query.toLowerCase()) ||
        freelancer.prenom.toLowerCase().includes(query.toLowerCase())
    );
    const filteredProjects = projects.filter((project) =>
      project.titre.toLowerCase().includes(query.toLowerCase())
    );

    onFilterFreelancers(filteredFreelancers);
    onFilterProjects(filteredProjects);
  };

  return (
    <>
      <div className='relative w-full z-10'>
        <input
          type='text'
          placeholder='Cherchez un projet ou un freelance ...'
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className='pl-10 pr-4 py-2 bg-white text-black rounded-full w-[80vw] h-12 border-2 border-transparent focus:border-transparent focus:ring-0 focus:outline-none shadow-md'
        />
        <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1AE3D9] z-20' />
      </div>
    </>
  );
}

export default Searchbar2;
