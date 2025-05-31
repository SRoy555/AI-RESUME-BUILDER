import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import Header from '../components/Header'; // adjust the path as needed


function Home() {
  return (
    <div>
        <Header/>
        <UserButton/>
    
    </div>
  )
}

export default Home