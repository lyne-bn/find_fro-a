import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import SignInForm from './pages/SignIn';
import signUpF1 from './pages/SignUpF1';
import  signup from './pages/signup';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='App'>
        <Home/>
      </div>
    </>
  );
}

export default App;



