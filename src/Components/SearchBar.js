import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';


function Searchbar({ data, onFilter, freelancer }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (freelancer) {
      const filteredProjects = data.filter((project) =>
        project.nom.toLowerCase().includes(query.toLowerCase()) ||
        project.prenom.toLowerCase().includes(query.toLowerCase())
      );
      onFilter(filteredProjects);
    }else {
      const filteredProjects = data.filter((project) =>
        project.titre.toLowerCase().includes(query.toLowerCase())
      );
      onFilter(filteredProjects);
    }
    
  };

  return (
    <>
      <div className="relative w-full z-10">
        <input
          type="text"
          placeholder="Cherchez un projet ..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 pr-4 py-2 bg-white text-black rounded-full w-[80vw] h-12 border-2 border-transparent focus:border-transparent focus:ring-0 focus:outline-none shadow-md"
        />
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1AE3D9] z-20" />
      </div>

    </>
  );
}

export default Searchbar;
