import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser} from '@clerk/clerk-react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard'; 


import EditResume from './dashboard/resume/resumeId/edit/index.jsx'; // or from '@/dashboard/resume/edit'

<Routes>
  <Route path="/my-resume/:resumeId/edit" element={<EditResume />} />
</Routes>




function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>

    <Header />
     <div>
      <Outlet />
    </div>

    
 </>
  );
}

export default App;
