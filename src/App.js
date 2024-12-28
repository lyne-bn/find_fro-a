import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './Pages/Projects';
import Freelancers from './Pages/Freelancers';
import Home from './Pages/Home';
import SignInForm from './Pages/SignIn';
import ProjectDetails from './Pages/ProjectDetails';
import FreelancerDetails from './Pages/FreelancerDetails';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Router>
        <Routes>
          <Route path='/projets' element={<Projects />} />
          <Route path='/projets/:id' element={<ProjectDetails />} />
          <Route path='/project/:project_id' element={<ProjectDetails />} />
          <Route path='/Freelancers' element={<Freelancers />} />
          <Route path='/Freelancers/:id' element={<FreelancerDetails />} />

          <Route path='/' element={<Home />} />
          <Route path='/connexion' element={<SignInForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
