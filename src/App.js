import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './Pages/Projects';
import Freelancers from './Pages/Freelancers';
import Home from './Pages/Home';
import SignInForm from './Pages/SignIn';
import ProjectDetails from './Pages/ProjectDetails';
import FreelancerDetails from './Pages/FreelancerDetails';
import SignUpF1 from './Pages/SignUpF1';
import SignUpU1 from './Pages/SignUpU1';
import SignUpU2 from './Pages/SignUpU2';
import SignUpF2 from './Pages/SignUpF2';
import SignUpF3 from './Pages/SignUpF3';
import SignUpF4 from './Pages/SignUpF4';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Router>
        <Routes>
          <Route path='/projets' element={<Projects />} />
          <Route path='/projets/:id' element={<ProjectDetails />} />
          <Route path='/Freelancers' element={<Freelancers />} />
          <Route path='/Freelancers/:id' element={<FreelancerDetails />} />
          <Route path='/inscription' element={<SignUpU1 />} />
          <Route path='/inscription2' element={<SignUpU2 />} />
          <Route path='/inscriptionF1' element={<SignUpF1 />} />
          <Route path='/inscriptionF2' element={<SignUpF2 />} />
          <Route path='/inscriptionF3' element={<SignUpF3 />} />
          <Route path='/inscriptionF4' element={<SignUpF4 />} />

          <Route path='/' element={<Home />} />
          <Route path='/connexion' element={<SignInForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
