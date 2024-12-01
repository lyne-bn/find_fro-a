import React from 'react';
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/background-image.png'; // Import your background image
import Demarrer from '../components/Home/Demarrer';
import CardsSec from '../components/Home/CardsSec';
import Stats from '../components/Home/Stats';
import Footer from '../components/Footer';
import Avis from '../components/Home/Avis';

const Home = () => {
  return (
    <div>
      <Demarrer />
      <CardsSec />
      <Stats />
      <Avis />
      <Footer />
    </div>
  );
};

export default Home;
