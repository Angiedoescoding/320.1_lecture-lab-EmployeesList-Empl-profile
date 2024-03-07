import './App.css';
import Homepage from './components/Homepage';
import Employeepage from './components/Employeepage';
import { useState } from 'react';

function App() {

// Implementing useState for currentEmployee 
const [currentEmployee, setCurrentEmployee] = useState()

  return (
    <div className='container'>
      <Homepage onSelectEmployee={setCurrentEmployee} />
      <Employeepage currentEmployee={currentEmployee} />
    </div>
  )
}

export default App;
