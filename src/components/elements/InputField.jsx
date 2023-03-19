import React from 'react'
import Input from './Input'
import { useState } from 'react'

export default function InputField({ placeholder, onChange, name, disabled, onHelpClick, label, hint, cc, value, type }) {

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
    <div className={`w-full flex flex-col items-start gap-1.5`}>
        {label && <label className="text-text-sm font-medium text-gray-700">{label}</label>}
        <Input placeholder={placeholder} onChange={onChangeNew} name={name} disabled={disabled} onHelpClick={onHelpClick} value={value} type={type}/>
        {!cc && hint && <p className="text-text-xs font-normal text-gray-500 whitespace-normal">{hint}</p>}
        {cc && <p className="text-text-xs font-normal text-gray-500 whitespace-normal text-right">
            {characterCount}/{cc}
        </p>}
    </div>
  )
}
