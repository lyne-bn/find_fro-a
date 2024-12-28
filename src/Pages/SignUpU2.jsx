import React, { useState } from 'react';
import signuppic from '../Assets/signup.png';
import logo from '../Assets/logo_without_text.png';

const SignUpU2 = () => {
  const [carte, setCarte] = useState('');
  const [nom, setNom] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!carte || !nom || !code || !day || !month || !year) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    // Mock sign-up process
    console.log('Signing up with:', { carte, nom, code, day, month, year });

    // Clear the error after successful submission
    setError('');
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
            {[1, 2].map((step) => (
              <React.Fragment key={step}>
                <span
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    step <= 4 ? 'bg-[#1AE3D9] text-white' : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {step}
                </span>
                {step !== 4 && <div className="h-0.5 flex-1 bg-[#1AE3D9]"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Form */}
        <div className="mt-8 mx-20">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="carte" className="block text-[#020B56] mb-2 font-semibold">
                  Numéro de la carte de crédit <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="carte"
                  value={carte}
                  onChange={(e) => setCarte(e.target.value)}
                  required
                  placeholder="Entrez votre numéro de la carte de crédit"
                  className="w-full px-4 py-2 border border-[#020B56] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-[#020B56] mb-2 font-semibold">
                  Date d'expiration <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4">
                  <select
                    id="day"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    required
                    className="flex-grow px-4 py-2 border border-[#020B56] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" >Jour</option>
                    {[...Array(31).keys()].map((i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <select
                    id="month"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    required
                    className="flex-grow px-4 py-2 border border-[#020B56] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Mois</option>
                    {[
                      'Janvier',
                      'Février',
                      'Mars',
                      'Avril',
                      'Mai',
                      'Juin',
                      'Juillet',
                      'Août',
                      'Septembre',
                      'Octobre',
                      'Novembre',
                      'Décembre',
                    ].map((monthName, i) => (
                      <option key={i} value={i + 1}>
                        {monthName}
                      </option>
                    ))}
                  </select>
                  <select
                    id="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                    className="flex-grow px-4 py-2 border border-[#020B56] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Année</option>
                    {[2024, 2025, 2026, 2027, 2028].map((yr) => (
                      <option key={yr} value={yr}>
                        {yr}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="nom" className="block text-[#020B56] mb-2 font-semibold">
                  Votre Nom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  required
                  placeholder="Entrez votre nom"
                  className="w-full px-4 py-2 border border-[#020B56] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="code" className="block text-[#020B56] mb-2 font-semibold">
                  Code CVC2/CVV2{' '}
                  <span className="text-gray-500">-situé au dos de la carte-</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                  placeholder="Entrez votre code CVC2/CVV2"
                  className="w-full px-4 py-2 border border-[#020B56] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-end">
            <a href="/"><button
                type="submit"
                className="p-3 m-10 bg-[#1AE3D9] text-[#FAFAFF] font-medium rounded-lg hover:border-2 hover:border-[#1AE3D9] hover:bg-[#FAFAFF] hover:text-[#1AE3D9]"
              >
                S'inscrire
            </button></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpU2;