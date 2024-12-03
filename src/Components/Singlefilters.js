import React, { useState } from "react";


function FilterChips({ data, onFilter }) {
  const [selectedFilters, setSelectedFilters] = useState({
    level: null, // Selected level
    profession: null, // Selected profession
  });

  const levels = ["Beginner", "Intermediate", "Expert"];
  const professions = [
    "UI/UX Designer",
    "Backend Developer",
    "Frontend Developer",
    "Graphic Designer",
  ];

  const handleFilterChange = (type, value) => {
    const updatedFilters = {
      ...selectedFilters,
      [type]: selectedFilters[type] === value ? null : value, // Toggle selection
    };

    setSelectedFilters(updatedFilters);

    // Apply filters
    const filteredData = data.filter((item) => {
      const levelMatch =
        !updatedFilters.level || item.level === updatedFilters.level;
      const professionMatch =
        !updatedFilters.profession || item.profession === updatedFilters.profession;

      return levelMatch && professionMatch;
    });

    onFilter(filteredData); // Pass filtered data to parent
  };

  return (
    <div className="space-y-4 h-full w-[50vw] lg:w-[20vw]">
        <p className="text-[#020B56] font-black text-[1.2rem]">Filtres</p>
      {/* Level Filters */}
      <div>
        <h3 className="text-sm font-bold text-[#020B56]">Niveau d'expertise</h3>
        <div className="flex flex-row lg:flex-col gap-2 mt-2">
          {levels.map((level) => (
            <label
              key={level}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="level"
                value={level}
                checked={selectedFilters.level === level}
                onChange={() => handleFilterChange("level", level)}
                className="form-radio text-[#1AE3D9] focus:ring-0 focus:ring-offset-0"
              />
              <span className="text-[#020B56] text-xs lg:text-base">{level}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Profession Filters */}
      <div>
        <h3 className="text-sm font-bold text-[#020B56]">Profession</h3>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-5 gap-y-2 mt-2">
          {professions.map((profession) => (
            <label
              key={profession}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="profession"
                value={profession}
                checked={selectedFilters.profession === profession}
                onChange={() => handleFilterChange("profession", profession)}
                className="form-radio text-[#1AE3D9] focus:ring-0 focus:ring-offset-0"
              />
              <span className="text-[#020B56] text-xs lg:text-base">{profession}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterChips;
