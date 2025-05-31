import React from 'react'
import { useContext } from 'react';
import { ResumeInfoContext } from '../../../context/ResumeInfoContext';
import PersonalDetailPreview from '../../components/preview/PersonalDetailPreview';
import SummeryPreview from '../../components/preview/SummeryPreview';
import ExperiencePreview from '../../components/preview/ExperiencePreview';
import EducationalPreview from '../../components/preview/EducationalPreview';
import SkillsPreview from '../../components/preview/SkillsPreview'; 

function ResumePreview() {
    const { resumeInfo , setResumeInfo} = useContext(ResumeInfoContext);
  return (

    <div className=' p-6  shadow-lg h-full border-t-[20px] w-[900px]'
            style={{
                 borderColor: resumeInfo?.themeColor }}> 

        {/* Personal Detail  */}
            <PersonalDetailPreview resumeInfo={resumeInfo} />

        {/* Summery  */}
             <SummeryPreview resumeInfo={resumeInfo} /> 

        {/* Professional Experience  */}
             <ExperiencePreview resumeInfo={resumeInfo} />

        {/* Educational  */}
              <EducationalPreview resumeInfo={resumeInfo} />

        {/* Skilss  */}
              <SkillsPreview resumeInfo={resumeInfo}/>

        </div>
  )
}

export default ResumePreview