import React from 'react'
import FeatherIcon from 'feather-icons-react';

export default function button({ size, variant, onClick, iconLeft, iconRight, isDual, children }) {
  return (
    <button
        className={`flex justify-center items-center w-full ${isDual? null : 'rounded-[6px]'} btn-${size} btn-${variant} ${isDual ? 'dual' : ''}`}
        onClick={onClick}
    >
    
        {iconLeft && <span className={`mr-2 text-${variant=="primary"?"text-white":"text-gray-700"}`}>
            <FeatherIcon icon={iconLeft} size={size=="lg"||size=="md"?'24':'20'}/>
        </span>}
        {children}
        {iconRight && <span className="ml-2">
            <FeatherIcon icon={iconRight} size={size=="lg"||size=="md"?'24':'20'}/>
        </span>}

    </button>
  )
}
