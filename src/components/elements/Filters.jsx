import React from 'react'
import { XCircle } from 'feather-icons-react/build/IconComponents'
import { useState } from 'react'

export default function Filters({jobPostings}) {

    const [domains, setDomains] = React.useState([])

    // React.useEffect(() => {

    //     const domains = jobPostings.map((job) => {
    //         if(!domains.includes(job.domain))
    //             return job.domain
    //     })

    //     setDomains(domains)


    // }, [jobPostings])


  return (
    <div className='bg-white w-[100%] px-4 py-3 border-[1px] border-gray-300 rounded-md flex flex-col gap-3'>
       
        <div className='flex justify-between items-centers'>
            <h1 className='text-text-md font-semibold'>Filters</h1>
            <p className='items-center flex gap-2 text-gray-600 cursor-pointer'>
                Close all 
                <XCircle size="20" className='inline-block'/>
            </p>
        </div>

        <div>
            <h1 className='text-text-md mt-2 font-semibold'>Location</h1>
            <div className='flex flex-col gap-2'>
                {/* {domains && domains.map((location) => {
                    return (
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" name={location}/>  
                        </div>
                    )
                })} */}
            </div>

        </div>

    </div>
  )
}
