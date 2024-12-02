import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;