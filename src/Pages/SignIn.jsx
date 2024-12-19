import { useState } from 'react';
import signinpic from '../Assets/signin.png';
import React, { useEffect } from 'react';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    // Disable scrolling on the body element
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto'; // Restore default scrolling
    };
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('veuillez remplire tous le champs');
      return;
    }

    // Mock sign-in process
    console.log('Signing in with:', { email, password });

    // Clear the error after successful submission
    setError('');

    // Proceed with further actions (e.g., authentication)
  };

  return (
    <div className="flex justify-center w-full h-full">
      {/* Left Container - Image */}
      <div className="h-full w-1/2 ">
        <img
          src={signinpic}
          alt="signinpic"
          className="w-full h-200 object-cover "
        />
      </div>

      {/* Right Container - Form */}
      <div className="h-FULL w-1/2 p-8 flex justify-center ">
        <div className="w-full max-w-md ">
          <h2 className="text-2xl font-semibold text-center mb-6 text-[#020B56]">Connectez-vous à votre compte</h2>
          <h4 className="text-xl font-regular text-[#020B56] text-center mb-20">Veuillez entrer vos informations de connexion ci-dessous.</h4>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex-column">
              <div className='flex-1'><label htmlFor="email" className="block text-[#020B56] mb-2 font-semibold">Email<span className="text-[#E31A1A]"> *</span></label></div>
              <div ><input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Entrez votre Email"
                required
                className=" w-full px-4 py-2 border border-[#020B56] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              /></div>
            </div>

            <div className="mb-20 flex-column">
              <div className='flex-1'><label htmlFor="password" className="block text-gray-700 mb-2 text-[#020B56] font-semibold">Mot De Passe <span className="text-[#E31A1A]"> *</span></label></div>
              <div ><input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez votre Mot De Passe"
                required
                className=" w-full px-4 py-2 border border-[#020B56] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-8"
              /></div>
            </div>
            <h6 className="text-1xl font-regular text-gray text-center ">Vous n'avez pas encore de compte ?</h6>
            <h6 className="text-1xl font-regular text-[#020B56] text-center mb-6 hover:underline">Créer un compte ici</h6>
            
            <div className='text-center'><button
              type="submit"
              className="p-3 m-10 bg-[#1AE3D9] text-[#FAFAFF] font-medium rounded-lg hover:border-2 hover:border-[#1AE3D9] hover:bg-[#FAFAFF] hover:text-[#1AE3D9]"
            >
              connecter
            </button></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;