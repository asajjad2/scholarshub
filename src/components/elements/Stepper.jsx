import React from 'react'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import { Check, CheckCircle, UserCheck } from 'feather-icons-react/build/IconComponents'

export default function Stepper({text, number, variant}) {
  return (
        <div className={`h-9 w-32 py-1.5 px-3 stepper-${variant} flex items-center justify-center gap-2 rounded-[35px] text-text-sm font-medium`}>
            <span className='h-6 w-6 p-2 flex justify-center items-center rounded-full'>
                {
                    variant=='completed'?
                    <FeatherIcon icon={Check} size={14}/>
                    :number
                }
            </span>
            {text}
        </div>
    )
}
