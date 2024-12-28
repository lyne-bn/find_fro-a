import React, { useState, useEffect } from 'react';
import Navbar from '../Components/NavBar';
import backgroundImage from '../Assets/background-image.png';
import Demarrer from '../Components/Home/Demarrer';
import CardsSec from '../Components/Home/CardsSec';
import Stats from '../Components/Home/Stats';
import Footer from '../Components/Footer';
import Avis from '../Components/Home/Avis';
import OffreSpeciaux from '../Components/Home/OffreSpeciaux';

const Home = () => {
  const [userId, setUserId] = useState(null); // State to store the user ID

  useEffect(() => {
    // Check if the user is logged in by retrieving the user ID from localStorage or your sign-in logic
    const storedUserId = localStorage.getItem('userId'); // Adjust this if you're using a different storage method
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  return (
    <div>
      <Demarrer />
      <CardsSec />
      <Stats />
      {userId && <OffreSpeciaux />}{' '}
      {/* Render OffreSpeciaux only if userId exists */}
      <Avis />
      <Footer />
    </div>
  );
};

export default Home;
