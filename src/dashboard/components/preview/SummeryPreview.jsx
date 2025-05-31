import React from 'react';
import resumeInfo from '../../../data/dummy.jsx'; // Assuming resumeInfo is imported from a dummy data file

function SummeryPreview(resume) {
  return (
    <div className='text-xs'>
        {resumeInfo?.summery}
    </div>
  )
}

export default SummeryPreview