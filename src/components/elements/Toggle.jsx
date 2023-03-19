import React from 'react';
import { useState } from 'react';
export default function Toggle({ label, toggled, onClick}) {

    const [Toggle, setToggle] = useState(toggled)

    const callback = () => {
        setToggle(!Toggle);
        onClick && onClick(!Toggle);
    }

  return (
    
    <>
        <label className="relative inline-block w-[36px] h-[20px]">
            <input type="checkbox" defaultChecked={Toggle} onClick={callback} className="w-0 h-0 opacity-0"/>
            <span className='absolute cursor-pointer rounded-[12px] bg-blue-gray-100'/>
            {/* <strong>{label}</strong> */}
        </label>
    </>
    )
}
