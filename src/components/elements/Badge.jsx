import React from 'react'
import { useState } from 'react'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

export default function badge({ size, variant, children, iconLeft, iconRight, onClick }) {

    const [isHidden, setIsHidden] = useState(false);

    const hideBadge = () => {
        setIsHidden(true);
    }

  return (
    <div className={`${size=='lg'?'h-[26px]':'h-[22px]'} px-2 py-0.5 flex gap-1 rounded-[99px] border-1 border-solid badge-${variant} flex items-center justify-center cursor-pointer ${isHidden?'hidden':null}`} > 
        {iconLeft && <FeatherIcon icon={iconLeft} size={'12px'} onClick={onClick=='hide'?hideBadge:onClick}/>}
        {children && <span className="text-text-xs font-medium">{children}</span>}
        {iconRight && <FeatherIcon icon={iconRight} size={'12px'} onClick={onClick=='hide'?hideBadge:onClick}/>}
    </div>
  )
}
