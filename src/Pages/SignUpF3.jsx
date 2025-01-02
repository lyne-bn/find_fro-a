import React, { useState } from 'react';
import signuppic from '../Assets/signup.png';
import logo from '../Assets/logo_without_text.png';
import { Link, useNavigate } from 'react-router-dom';

const SignUpF3 = () => {
  const [categorie] = useState('');
  const [GitHub, setGitHub] = useState('');
  const [LinkedIn, setLinkedIn] = useState('');
  const [Behance, setBehance] = useState('');
  const [skills, setskills] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelection = (e) => {
    setSelectedOption(e.target.value);
  };
  
  // Handle form submission
     const handleSubmit = async(e) => {
     e.preventDefault();

    
    
 
    // Mock sign-up process
    console.log('Signing up with:', { categorie,GitHub,Behance,LinkedIn, skills});

    // Clear the error after successful submission
    setError('');

    const payload = {
      categorie,
      GitHub,
      LinkedIn,
      Behance,
      skills,
    };

    try {
      // Send POST request to the backend
      const response = await fetch('http://127.0.0.1:8000//freelancers/signup/step3/{freelancer_id}', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        alert('Détails enregistrés avec succès!');
        navigate('/inscriptionF4'); // Redirect to the next page after successful submission
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Une erreur est survenue');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Erreur de connexion au serveur');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${signuppic})`,
      }}
    >
      <div className="absolute top-4 left-4">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>
      <div className="bg-white shadow-lg rounded-lg w-[90%] max-w-3xl p-6 md:p-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[#020B56] mb-2">
            Créer votre freelancer profile
          </h1>
          <div className="flex justify-center items-center gap-2 mt-4">
            <span className="w-8 h-8 flex items-center justify-center bg-[#1AE3D9] text-white rounded-full">
              1
            </span>
            <div className="h-0.5 flex-1 bg-[#1AE3D9]"></div>
            <span className="w-8 h-8 flex items-center justify-center bg-[#1AE3D9] text-white rounded-full">
              2
            </span>
            <div className="h-0.5 flex-1 bg-[#1AE3D9]"></div>
            <span className="w-8 h-8 flex items-center justify-center bg-[#1AE3D9] text-white rounded-full">
              3
            </span>
            <div className="h-0.5 flex-1 bg-[#1AE3D9]"></div>
            <span className="w-8 h-8 flex items-center justify-center bg-gray-300 text-gray-600 rounded-full">
              4
            </span>
          </div>
        </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Form */}
        <div className="mt-8 mx-20">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
            <div>
                <label htmlFor="categorie" className="block text-[#020B56] mb-2 font-semibold">
                  Catégories <span className="text-red-500">*</span>
                </label>
                <select
                  id="categorie"
                  value={selectedOption}
                  onChange= {handleSelection}
                  className="w-full px-4 py-2 border border-[#020B56] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="" disabled>
                    Catégories 
                    </option>
                    <option value="option1">Ui/Ux design</option>
                    <option value="option2">Backend Dev</option>
                    <option value="option3">Frontend Dev</option>
                    <option value="option4">Graphic Design</option>
                </select>
              </div>
                
              <fieldset>
               <legend className="block text-[#020B56] mb-2 font-semibold">Portfolio links <span className="text-red-500">*</span></legend>
      
               <label htmlFor="GitHub" className="block text-[#020B56] mb-2 font-regular">GitHub</label>
               <input
               type="text"
               id="GitHub"
               value={GitHub}
               onChange={(e) => setGitHub(e.target.value)}
               placeholder="Lien..."
               className="w-full px-4 py-2 border border-[#020B56] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
      
               <label htmlFor="LinkedIn"  className="block text-[#020B56] mb-2 font-regular">LinkedIn</label>
               <input
                type="text"
                id="LinkedIn"
                value={LinkedIn}
                onChange={(e) => setLinkedIn(e.target.value)}
                placeholder="Lien..."
                className="w-full px-4 py-2 border border-[#020B56] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
      
              <label htmlFor="Behance" className="block text-[#020B56] mb-2 font-regular">Behance</label>
              <input
               type="text"
               id="Behance"
               value={Behance}
               onChange={(e) => setBehance(e.target.value)}
               placeholder="Lien..."
               className="w-full px-4 py-2 border border-[#020B56] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </fieldset>

              <div>
                <label htmlFor="skills" className="block text-[#020B56] mb-2 font-semibold">
                  Skills et Espertise
                </label>
                <textarea
                 
                  id="skills"
                  value={skills}
                  onChange={(e) => setskills(e.target.value)}
                  placeholder="Entrez Entrez vos domaines d’expertise"
                  className="w-full px-4 py-2 border border-[#020B56] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              

              
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-end">
              
                <button
                  type="submit"
                  className="p-3 m-10 bg-[#1AE3D9] text-[#FAFAFF] font-medium rounded-lg hover:border-2 hover:border-[#1AE3D9] hover:bg-[#FAFAFF] hover:text-[#1AE3D9]"
                >
                  Suivant
                </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpF3;