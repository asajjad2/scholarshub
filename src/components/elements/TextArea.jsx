import React from 'react'
import { useState } from 'react'

export default function TextArea({ placeholder, onChange, name, disabled, label, hint, cc }) {

    const [characterCount, setCharacterCount] = useState(0);
    // const [disabledState, setDisabledState] = useState(disabled);
    

    //function to handle the change in the input field
    const handleChange = (e) => {
        setCharacterCount(e.target.value.length);
        // if(e.target.value.length + 1 > cc) {
        //     setDisabledState(true);
        // }
    }

    const onChangeNew = (e) => {
        handleChange(e);
        onChange && onChange(e);
    }


  return (
    <div className={`w-auto min-h-[88px] flex flex-col gap-1.5`}>
        {label && <label className="text-text-sm font-medium text-gray-700">{label}</label>}
        <textarea 
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            className={`min-w-[304px] h-full px-3 py-2 rounded-[6px] text-text-md font-normal border-solid border-gray-300 border-[1px] ${disabled? 'input-disabled' : 'input-default'} outline-none`}
            disabled={disabled}
        />
        {!cc && hint && <p className="text-text-xs font-normal text-gray-500 whitespace-normal">{hint}</p>}
        {cc && <p className="text-text-xs font-normal text-gray-500 whitespace-normal text-right">
            {characterCount}/{cc}
        </p>}
    </div>
    )
}
