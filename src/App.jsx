import { useState } from 'react';
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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='App'>
        <Home />
      </div>
    </>
  );
}

export default App;
