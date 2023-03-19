import React from 'react'
import FeatherIcon from 'feather-icons-react';

export default function input({ placeholder, onChange, name, disabled, onClick, icon, value, type}) {
    return (
        <div
            className={`w-full h-10 flex justify-between items-center px-3 py-2 rounded-[6px] text-text-md font-normal border-solid border-gray-300 border-[1px] ${disabled ? 'bg-gray-100' : 'bg-white'}`}
        >
            <input
                placeholder={placeholder}
                onChange={onChange}
                name={name}
                className={`w-full h-full ${disabled? 'input-disabled' : 'input-default'} outline-none `}
                disabled={disabled}
                value={value}
                type={type}
            />

            {icon && <span className="cursor-pointer text-gray-400" onClick={onClick}>
                <FeatherIcon icon={icon} size="20"/>
            </span>}
        </div>
        
    )
}
