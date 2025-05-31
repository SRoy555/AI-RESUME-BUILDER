import { PlusSquare } from 'lucide-react'
import { Loader2 } from "lucide-react";

import React, { useState }  from 'react'
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from './../../../service/GlobalApi';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



function AddResume() {

    const[openDialog, setOpenDialog] = useState(false)
    const [resumeTitle, setResumeTitle] = useState();
    const [loading,setLoading]=useState(false);
    const{user}=useUser();
    const navigation=useNavigate();

    const onCreate = async() => {
         setLoading(true)
        const uuid=uuidv4();
        
        
         
 const data = {
  
    title: resumeTitle,
     UserMail: user?.primaryEmailAddress?.emailAddress,
  
};


         GlobalApi.CreateNewResume(data).then(resp=>{
            console.log(resp.data.data.documentId);

            if(resp)
            {
                setLoading(false);

                setResumeTitle('');
                setOpenDialog(false);

                navigation('/dashboard/resume/'+uuid+"/edit");
                
            }
        },(error)=>{
            setLoading(false);
         })

   };

  return (
    <div>
        <div className='p-14 py-24 border
         items-center flex justify-center
          bg-secondary rounded-lg w-[200px] h-[200px]
          hover:scale-105 transition-all hover:shadow-md
          cursor-pointer border-dashed'
          onClick={() => setOpenDialog(true)}>
            <PlusSquare/> 
        </div>

        <Dialog open={openDialog} >
  
  <DialogContent  className={'text-center w-[700px] h-[200px]'}>
    
    <DialogHeader>
      <DialogTitle>Create new resume</DialogTitle>
      <DialogDescription>
        add title for your new resume
        <Input className=" w-[600px] " 
        placeholder="Ex. fullstack resume"
        onChange={(e)=>setResumeTitle(e.target.value)}/>
      </DialogDescription>

      <div className='flex justify-end gap-5'>
        <button onClick={()=>setOpenDialog(false)} variant="ghost">cancel</button>
        <button
        disabled={!resumeTitle||loading}
        onClick={()=>onCreate()}>
          {loading?
                    <Loader2 className='animate-spin' /> :'Create'   
                }
        </button>

      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>



    </div>
  )
}

export default AddResume