import React from 'react'
import InputField from '../elements/InputField'
import Button from '../elements/Button'
import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';


export default function SignUp(){
    const navigate = useNavigate();

    const initialState = {
        name : '',
        email : '',
        password : ''
    }

    const [userInfo, setUserInfo] = useState(initialState);

    const setSetUserInfo = (name,value) => {

        setUserInfo(
            prevState => {
                return {
                    ...prevState, 
                    [name] : value
                }
            }
        )

    }

    const onChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setSetUserInfo(name,value);
    }

    
    const SignUpBtnClick = (e) => {
        e.preventDefault();
        // console.log(userInfo.password)


        if(!(userInfo.password && userInfo.email && userInfo.name)){
            console.log('incomplete data');
            alert('incomplete data');
        } else {
            //push data to global state and move to signupdetails page
            //render signupdetails page
            navigate('/signupdetails');
        }

    }


  return (
        <div className='flex w-screen h-screen'> 
            <div action="" className='bg-white w-[39%] flex items-center justify-center py-20'>
                <div className='flex flex-col justify-between items-center gap-14'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-display-md font-bold text-gray-800'>Create an account</h2>
                            <p className='text-md font-normal text-gray-500'>Let's get started!</p>
                        </div>
                        <form className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-4'>
                                <InputField placeholder='Enter email' label='Email' value={userInfo.email} onChange={onChange} name={'email'} type={'email'}/>
                                <InputField placeholder='Enter name' label='Name' value={userInfo.name} onChange={onChange} name={'name'} type={'text'}/>
                            <InputField placeholder='Enter password' label='Password' value={userInfo.password} onChange={onChange} name={'password'} type={'password'}/>
                            </div>
                            <div id="btns" className='flex flex-col gap-4'>
                                <Button variant={'primary'} size={'md'} onClick={SignUpBtnClick}>Create my account</Button>
                            </div>
                        </form>
                    </div>
                    <div className='text-gray-400'>Already have an account?
                        <Link to='/login'>
                            <span className='text-blue-gray-600 cursor-pointer'> Sign in</span>
                        </Link>
                    </div>
                </div>
            </div>







            <div className="bg-blue-gray-100 w-[61%] flex justify-center">
                <div className='w-[576px] flex flex-col gap-6 pt-[32.6%] '>
                    <div id="text" className='text-text-xl font-semibold text-gray-800'>
                        "
                            <span className='text-blue-gray-600'>ScholarsHub</span> is a platform that connects students with oppurtunities and scholarships.
                        "
                    </div>
                    <div id="icons" className='flex justify-between items-center '>
                        <div className='flex gap-4'>
                            <img src="https://images.unsplash.com/photo-1677103216895-59fb1b6a4fcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" alt="" className='rounded-full h-[46px] w-[46px] object-cover'/>
                            <div className='flex flex-col gap-1'>
                                <h5 className='text-text-md font-medium text-gray-800'>John Doe</h5>
                                <h5 className='text-text-xs font-normal text-gray-500'>CEO, ScholarsHub</h5>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>   
    )
}
