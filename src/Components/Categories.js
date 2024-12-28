import React, { useState } from "react";

function Categories({ data, onFilter }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const categories = [
    "UI/UX",
    "Frontend",
    "Backend",
    "Design Logo",
    "Design Graphique",
    "Presentation",
  ];

  const toggleFilter = (category) => {
    let updatedFilters;
    if (selectedFilters.includes(category)) {
      // Remove the filter if it's already selected
      updatedFilters = selectedFilters.filter((filter) => filter !== category);
    } else {
      // Add the filter
      updatedFilters = [...selectedFilters, category];
    }

    setSelectedFilters(updatedFilters);

    console.log("the filter")
    console.log(updatedFilters)
    // Filter the data
    
    const filteredData = data.filter((item) =>
      updatedFilters.every((filter) => item.categories.includes(filter))
    );
    onFilter(filteredData); // Pass the filtered data to the parent
  };

  return (
    <div className="flex flex-col py-[8vh] gap-[4vh] self-start">
      <p className="text-[#020B56] font-black text-[1.2rem]">
        Services catégorisés
      </p>
      <div className="flex gap-2 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => toggleFilter(category)}
            className={`px-4 py-2 border rounded-full text-[#020B56] text-xs lg:text-base border-[#1AE3D9] transition-colors duration-200 ${
              selectedFilters.includes(category)
                ? "bg-[#1AE3D9] text-white"
                : "bg-transparent hover:bg-[#1AE3D9] hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
