import React from 'react'
import { useState } from 'react';
import { Edit3, Trash } from 'feather-icons-react/build/IconComponents';


export default function EducationCard({institute, degree, startDate, endDate, field}) {


  // console.log(startDate);

  // if(institute.length > 43) {
  //   institute = institute.slice(0, 43) + '...'
  // }

  // if(!endDate)
  //   endDate = new Date();

  // startDate = Date.parse(startDate);
  // endDate = Date.parse(endDate);

  // startDate = startDate.toLocaleString('default', { month: 'short' }) + ', ';
  // endDate = endDate.toLocaleString('default', { month: 'short' }) + ', ';

  const [isHovered, setIsHovered] = useState(false);



  return (

        <div className='max-w-[29.5rem] h-[7rem] flex' onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}}>
          <div className='w-[91%] bg-gray-50 py-4 px-6 rounded-[6px] flex flex-col gap-2'>
          <h2 className='text-text-md font-semibold text-gray-700 overflow-hidden whitespace-nowrap'>{institute}</h2>

            <div className='flex gap-2 text-text-sm font-normal text-gray-500'>
              <h3 className='text-text-sm font-normal text-gray-600'>{degree} , {field}</h3>

            </div>
            <div className='flex gap-2 text-text-sm font-normal text-gray-500'>
              <p>{startDate} - {endDate}</p>
            </div>
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
