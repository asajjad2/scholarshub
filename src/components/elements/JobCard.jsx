import React from 'react'
import { MapPin, Pocket } from 'feather-icons-react/build/IconComponents';

export default function JobCard({title, lastCreatedTime,img, amount, remote, estimatedTime, description, domain, location, onPocketClick}) {

    //edit the description so it only displays in 2 lines
    if(description.length > 200){
        description = description.substring(0, 200) + '...';
    }

  return (
    <div className='w-[100%] h-[12.5rem] rounded-md bg-gray-100 px-7 py-6 relative flex flex-col gap-2 '>

        <div className='flex gap-4'>
            <img className='h-14 w-14 object-cover rounded' src={img} alt="" />
            <div className='flex flex-col justify-center'>
                <div className='flex justify-center items-center gap-2'>
                    <h3 className='text-text-lg font-medium text-gray-900 cursor-pointer hover:text-gray-500'> {title} </h3>
                    <p>.</p>
                    <div className='text-gray-700 rounded-md text-xs capitalize'> {lastCreatedTime} Hours Ago </div>
                </div>
                <div className='flex items-center gap-2 text-gray-700 text-md'> 
                    <h3>Hourly: ${amount} - </h3> 
                    <h3>{remote?'Remote Friendly':'On Site'} - </h3>
                    <h3>Est. Time: {estimatedTime} months</h3>
                </div>
            </div>
        </div>

        <div className='font-normal'>
            {description}
        </div>

        <div className='flex justify-between items-center'>
            <div className='flex justify-between w-[100%] mt-1'>
                <div className='flex gap-1.5'>
                    {
                        domain.map((item, index) => {
                            return (
                                <div key={index} className='text-gray-700 bg-gray-200 px-2 py-1 rounded-md text-xs capitalize'> {item} </div>
                            )
                        })
                    }
                </div>
               
                <div className='text-gray-700 text-xs capitalize flex gap-1 items-center'>
                    <MapPin size={16} />
                    <p> {location} </p>
                </div>
            </div>
        </div>

        <div className='absolute top-6 right-7 text-gray-700 cursor-pointer hover:text-gray-500' onClick = {onPocketClick}>
            <Pocket size={24} />
        </div>

    </div>
  )
}
