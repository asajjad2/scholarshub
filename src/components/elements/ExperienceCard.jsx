import React from 'react'
import { useState } from 'react';
import { Edit3, Trash } from 'feather-icons-react/build/IconComponents';

export default function ExperienceCard({title, companyName, startDate, endDate, status}) {

  if(!endDate) 
    endDate = new Date();
    
  // let lessThanAYear = false;
  // let dateDiff = endDate.getFullYear() - startDate.getFullYear();
  // if(dateDiff <= 0){
  //   dateDiff = endDate.getMonth() - startDate.getMonth();
  //   lessThanAYear = true;
  // }

  // startDate = startDate.toLocaleString('default', { month: 'short' }) + ', ' + startDate.getFullYear();
  // endDate = endDate.toLocaleString('default', { month: 'short' }) + ', ' + endDate.getFullYear();

  //get number of year difference


  const [isHovered, setIsHovered] = useState(false);

  return (


    <div className=' max-w-lg  h-[5.25rem] flex' onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}}>
      <div className='w-[91%] bg-gray-50 py-4 px-6 rounded-[6px] flex flex-col gap-2'>

        <div className='flex justify-between'>
          <h2 className='text-text-md font-semibold text-gray-700 overflow-hidden whitespace-nowrap'>{title}</h2>
          <div className='flex gap-2 text-text-sm font-normal text-gray-500'>
            <p>{startDate} - {endDate}</p>
          </div>
        </div>

        <p className='text-text-sm font-normal text-gray-600'>{companyName} . {status}</p>

      </div>
      <div id="xp-card-btns" className={!isHovered?'hidden':'flex flex-col gap-2 justify-center mx-auto'}>
        <div className='w-8 h-8 bg-gray-50 rounded-full flex justify-center items-center cursor-pointer'>
          <Edit3 className='text-gray-600' size={16}/> 
        </div>
        <div className='w-8 h-8 bg-error-50 rounded-full flex justify-center items-center cursor-pointer border-error-500 border-solid border-[1.5px]'>
          <Trash  className='text-error-500' size={16}/> 
        </div>
      </div>
    </div>


  )
}
