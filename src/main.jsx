import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignInPage from './assets/auth/SignInPage.jsx'
import Home from './home/index.jsx'
import Dashboard from './dashboard/index.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import ProtectedRoute from "./components/ProtectedRoute";
import { Edit } from 'lucide-react'
import EditResume from './dashboard/resume/resumeId/edit/index.jsx'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const router=createBrowserRouter([
  
  {
    path:'/',
    element:<App/>,
    children:[
      
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      
      
    ]
  },

  {
       path:'/dashboard/resume/:resumeId/edit',
        element:<EditResume/>
            
      },
      
  {
    path:'',
    element:<Home/>
  },
 
  {
    path:'/auth/sign-in',
    element:<SignInPage/>
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
)