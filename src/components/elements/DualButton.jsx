import React from 'react'
import Button from './Button'
import FeatherIcon from 'feather-icons-react';

export default function dualButton({ size, variant, onClickLeft, onClickRight, iconLeft, iconRight, isDual, children }) {
  return (
    <div className={`flex gap-0 btn-${variant} rounded-[6px]`}>
        <Button size={size} onClick={onClickLeft} isDual={true}>
            {iconLeft && <span className={`text-${variant=="primary"?"text-white":"text-gray-700"}`}>
                <FeatherIcon icon={iconLeft} size={size=="lg"||size=="md"?'24':'20'}/>
            </span>}
            {iconLeft ? null : children}
        </Button>
        <div className="w-0.5 bg-gray-300"></div>
        <Button size={size} onClick={onClickRight} isDual={true}>
            {iconLeft ? children : null}
            {iconRight && <span className={`text-${variant=="primary"?"text-white":"text-gray-700"}`}>
                <FeatherIcon icon={iconRight} size={size=="lg"||size=="md"?'24':'20'}/>
            </span>}
        </Button>
    </div>
 
  )
}
