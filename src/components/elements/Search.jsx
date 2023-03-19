import React from 'react'
import Button from '../elements/Button'
import Input from './Input'

export default function Search({search, onChange}) {
  return (
    <div className='w-[100%] bg-white px-4 py-3 border-[1px] border-gray-300 rounded-md flex gap-6'>
        <div className='w-[90%]'>
            <Input placeholder='Search by Domain, Oppurtunity type, Location...' icon='search' value={search} onChange={onChange} name={'search'}/>
        </div>
        <div className='w-[15%]'>
            <Button variant={'primary'} size={'md'}>Find</Button>            
        </div>
    </div>
  )
}
