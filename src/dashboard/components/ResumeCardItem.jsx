
import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'


function ResumeCardItem({resume}) {
  return (
<div>
    <Link to={'/dashboard/resume/'+resume.id+'/edit'} >

        <div className='p-14 bg-secondary flex 
        items-center justify-center h-[200px] w-[200px]
        border border-primary rounded-lg  hover:scale-105
         hover:text-secondary transition-all shadow-md shadow-primary '>
        

            <Notebook/>

          </div>
          </Link>
        <p className='text-center my-1'>{resume.title}</p>

        
        </div>
  ) ;    
}

export default ResumeCardItem