import React, { useState } from 'react';
import signuppic from '../Assets/signup.png';
import logo from '../Assets/logo_without_text.png';

const SignUpF1 = () => {
  const [name, setname] = useState('');
  const [prenom, setprenom] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // State for confirm password visibility

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password || !name || !prenom || !confirmPassword) {
      setError('veuillez remplire tous le champs');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    // Mock sign-up process
    console.log('Signing up with:', { name, prenom, email, password, confirmPassword });

    // Clear the error after successful submission
    setError('');

    // Proceed with further actions (e.g., authentication)
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
            <span className="w-8 h-8 flex items-center justify-center bg-gray-300 text-gray-600 rounded-full">
              2
            </span>
            <div className="h-0.5 flex-1 bg-gray-300"></div>
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
                <label htmlFor="name" className="block text-[#020B56] mb-2 font-semibold">
                  Nom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  required
                  placeholder="Entrez votre nom"
                  className="w-full px-4 py-2 border border-[#020B56] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="prenom" className="block text-[#020B56] mb-2 font-semibold">
                  Prénom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="prenom"
                  value={prenom}
                  onChange={(e) => setprenom(e.target.value)}
                  required
                  placeholder="Entrez votre prénom"
                  className="w-full px-4 py-2 border border-[#020B56] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#020B56] mb-2 font-semibold">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Entrez votre email"
                  className="w-full px-4 py-2 border border-[#020B56] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-[#020B56] mb-2 font-semibold">
                  Mot de Passe <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={passwordVisible ? 'text' : 'password'} // Toggle between text and password
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Entrez votre Mot de Passe"
                    className="w-full px-4 py-2 border border-[#020B56] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    👁️
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-[#020B56] mb-2 font-semibold">
                  Confirmation de Mot de Passe <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={confirmPasswordVisible ? 'text' : 'password'} // Toggle between text and password
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setconfirmPassword(e.target.value)}
                    required
                    placeholder="Confirmez votre Mot de Passe"
                    className="w-full px-4 py-2 border border-[#020B56] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                  >
                    👁️
                  </span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-end">
              <a href="/inscription2">
                <button
                  type="submit"
                  className="p-3 m-10 bg-[#1AE3D9] text-[#FAFAFF] font-medium rounded-lg hover:border-2 hover:border-[#1AE3D9] hover:bg-[#FAFAFF] hover:text-[#1AE3D9]"
                >
                  Suivant
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpF1;

