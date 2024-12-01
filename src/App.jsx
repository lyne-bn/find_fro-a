import { useState } from 'react';
<<<<<<< HEAD
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SignInForm from './pages/SignIn'; 
import signUpF1 from './pages/signUpF1'; 
=======
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import SignInForm from './pages/SignIn';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Demarrer from './components/Home/Demarrer';
import Home from './pages/Home';
import CardsSec from './components/Home/CardsSec';
import Stats from './components/Home/Stats';
import BlueShape from './components/Home/BlueShape';
import Avis from './components/Home/Avis';
>>>>>>> 848a0e46476f0b5fac46baf9959a2c311909618b

function App() {
  const [count, setCount] = useState(0);

  return (
<<<<<<< HEAD
    <Router>
      <div>
       

        {/* Routes */}
        <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route path="/signup" element={<signUpF1 />} />
        </Routes>
      </div>
    </Router>
=======
    <>
      <div className='App'>
        <Home />
      </div>
    </>
>>>>>>> 848a0e46476f0b5fac46baf9959a2c311909618b
  );
}

export default App;
<<<<<<< HEAD



=======
>>>>>>> 848a0e46476f0b5fac46baf9959a2c311909618b
