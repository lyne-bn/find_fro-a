import React, { useState } from 'react';
import signinpic from '../assets/signinpic.png';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    // Mock sign-in process
    console.log('Signing in with:', { email, password });

    // Clear the error after successful submission
    setError('');

    // Proceed with further actions (e.g., authentication)
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Container - Image */}
      <div className="w-1/2 h-FULL flex-1">
        <img
          src={signinpic}
          alt="signinpic"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Container - Form */}
      <div className="flex-1 w-1/2 p-8 flex  items-center bg-white">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Connectez-vous à votre compte</h2>
          <h4 className="text-2xl font-regular text-center mb-6">Veuillez entrer vos informations de connexion ci-dessous.</h4>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex-column">
              <div className='flex-1'><label htmlFor="email" className="flex-1 block text-gray-700 mb-2">Email *</label></div>
              <div className='flex-1'><input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Entrez votre Email"
                required
                className=" w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              /></div>
            </div>

            <div className="mb-4 flex-column">
              <div className='flex-1'><label htmlFor="password" className="block text-gray-700 mb-2 text-blue">Mot De Passe *</label></div>
              <div className='flex-1'><input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez votre Mot De Passe"
                required
                className=" w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              /></div>
            </div>

            <button
              type="submit"
              className="px-8 py-6 m-10 bg-blue text-white font-medium"
            >
              connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;

