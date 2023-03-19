import Introduction from '@/pages/signup/introduction'
import React from 'react'
import Stepper from './Stepper'

export default function SignupFooter() {
  return (
    <>
        <Stepper variant={'default'} number={1} text={'Introduction'}/>
        <Stepper variant={'current'} number={1} text={'Introduction'}/>
        <Stepper variant={'completed'} number={1} text={'Introduction'}/>
    </>
  )
}
