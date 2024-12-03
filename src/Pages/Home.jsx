import React from 'react';
import Navbar from '../Components/NavBar'
import backgroundImage from '../Assets/background-image.png'; // Import your background image
import Demarrer from '../Components/Home/Demarrer';
import CardsSec from '../Components/Home/CardsSec';
import Stats from '../Components/Home/Stats';
import Footer from '../Components/Footer';
import Avis from '../Components/Home/Avis';

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