import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SignInForm from './pages/SignIn'; 
import signUpF1 from './pages/signUpF1'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
       

        {/* Routes */}
        <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route path="/signup" element={<signUpF1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



