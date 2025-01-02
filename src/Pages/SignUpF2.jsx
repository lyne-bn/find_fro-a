import React, { useState } from 'react';
import signuppic from '../Assets/signup.png';
import logo from '../Assets/logo_without_text.png';
import { Link, useNavigate } from 'react-router-dom';
const SignUpF2 = () => {
  const [niveau] = useState('');
  const [profession] = useState('');
  const [description, setdescription] = useState('');
   const navigate = useNavigate();
  const [error, setError] = useState('');

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelection = (e) => {
    setSelectedOption(e.target.value);
  };
  

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!description) {
      setError('veuillez remplire tous le champs');
      return;
    }

    
    // Mock sign-up process
    console.log('Signing up with:', { profession , niveau ,description  });

    // Clear the error after successful submission
    setError('');

    try {
      // Construct the payload
      const payload = {
        profession: selectedOption, // Selected profession
        niveau: selectedOption,    // Selected experience level
        description,
      };
  
      // Send data to the backend
      const response = await fetch('step2:http://127.0.0.1:8000/freelancers/signup/step2/{freelancer_id}', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      // Handle the response
      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        navigate('/inscriptionF3');
  
        // Clear error and proceed to next step
        setError('');
        alert('Détails enregistrés avec succès!');
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
            Parlez-nous de vous
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
            <span className="w-8 h-8 flex items-center justify-center bg-gray-300 text-gray-600 rounded-full">
              3
            </span>
            <div className="h-0.5 flex-1 bg-gray-300"></div>
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
                <label htmlFor="profession" className="block text-[#020B56] mb-2 font-semibold">
                  Profession <span className="text-red-500">*</span>
                </label>
                <select
                  id="profession"
                  value={selectedOption}
                  onChange= {handleSelection}
                  className="w-full px-4 py-2 border border-[#020B56] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="" disabled>
                    Entrez votre profession 
                    </option>
                    <option value="option1">Ui/Ux designer</option>
                    <option value="option2">Backend Developper</option>
                    <option value="option3">Frontend Developper</option>
                    <option value="option4">Graphic Designer</option>
                </select>
              </div>

              <div>
                <label htmlFor="niveau" className="block text-[#020B56] mb-2 font-semibold">
                  Niveau d'expérience <span className="text-red-500">*</span>
                </label>
                <select
                  id="niveau"
                  value={selectedOption}
                  onChange= {handleSelection}
                  className="w-full px-4 py-2 border border-[#020B56] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="" disabled>
                    Entrez votre niveau d'expérience 
                    </option>
                    <option value="option1">Beginner</option>
                    <option value="option2">Intermediate</option>
                    <option value="option3">Expert</option>
                    
                </select>
              </div>
              <div>
                <label htmlFor="description" className="block text-[#020B56] mb-2 font-semibold">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                  rows="6"
                  placeholder="Entrez une description brève de vous même"
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

export default SignUpF2;

