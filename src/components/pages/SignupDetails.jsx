import React from 'react'
import InputField from '../elements/InputField'
import TextArea from '../elements/TextArea';
import Button from '../elements/Button';
import EducationCard from '../elements/EducationCard';
import ExperienceCard from '../elements/ExperienceCard';
import { ArrowRightCircle } from 'feather-icons-react/build/IconComponents';

import { Link, useNavigate } from 'react-router-dom';


import { useState } from 'react';

function Introduction({userInfo, onChange}){
    return (
        <div>
            <div id="headings" className='flex flex-col gap-4'>
            <h2 className='text-display-md font-bold text-gray-800'>Introduction</h2>
            <p className='text-text-md font-normal text-gray-500'>Give us a brief about yourself!</p>
            </div>
            <form className='pt-6 flex gap-[7rem]'>

                <div className='flex flex-col gap-6 w-[50%]'>
                    <div className='flex gap-6'>
                    <InputField placeholder='Enter First Name' label='First Name' type={'text'} name='firstName' value={userInfo.firstName} onChange={onChange}/>
                    <InputField placeholder='Enter Last Name' label='Last Name' type={'text'} name='lastName' value={userInfo.lastName} onChange={onChange}/>
                    </div>
                    <div className='flex gap-6'>
                    <InputField placeholder='Enter Age' label='Age' type={'number'} name='age' value={userInfo.age} onChange={onChange}/>
                    <InputField placeholder='Enter Portfolio link' label='Portfolio link (optional)'/>
                    </div>
                </div>

                <div className='flex flex-col gap-6 flex-wrap w-[50%]'>
                    <div className='flex gap-6'>
                    <InputField placeholder='Enter City' label='City' name='city' value={userInfo.city} onChange={onChange}/>
                    <InputField placeholder='Enter Country' label='Country' name='country' value={userInfo.country} onChange={onChange}/>
                    </div>
                    <div className='w-[48%]'>
                    <InputField placeholder='Enter Phone Number' label='Phone Number' type={'phone'} name='phone' value={userInfo.phone} onChange={onChange}/>
                    </div>
                </div>

            </form>
        </div>

    )
}

function Education({userInfo, setUserInfo}){

    const initialEduState = {
        school : '',
        fieldOfStudy : '',
        degree : '',
        startingDate : new Date(),
        endingDate : new Date(),
        description : '',
        performance : 0
    }

    const [eduInfo, setEduInfo] = useState(initialEduState);
    
    const onChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setEduInfo(
            prevState => {
                return {
                    ...prevState, 
                    [name] : value
                }
            }
        )
    }

    const pushEduInfo = () => {


        let currentEducations = userInfo.education;

        console.log(userInfo.Education);

        currentEducations.push(eduInfo);

        setUserInfo(
            prevState => {
                return {
                    ...prevState, 
                    education : currentEducations,
                    eduCount : currentEducations.length
                }
            }
        )

        console.log(userInfo);
    }

    let EducationCardList;
    if(userInfo.education){
        EducationCardList = userInfo.education.map((edu) => {
            
            return (
                <EducationCard institute={edu.school} degree={edu.degree} startDate={edu.startingDate} endDate={edu.endingDate} field={edu.fieldOfStudy}/>
            )
        })
    }


    // console.log(EducationCardList);
  

 
    return (
        <div>
            <div id="headings" className='flex flex-col gap-4'>
                <h2 className='text-display-md font-bold text-gray-800'>Education</h2>
                <p className='text-text-md font-normal text-gray-500'>What have you studied?</p>
            </div>
            <div className='pt-6 flex gap-[7rem]'>

                <div className='flex flex-col gap-6 w-[50%]'>
                    {EducationCardList}
                </div>

                <div className='flex flex-col gap-6 flex-wrap w-[50%]'>

                    <InputField placeholder={'e.g. Oxford University'} label={'School'} value={eduInfo.school} onChange={onChange} name='school'/>

                    <div className='flex gap-6'>
                        <InputField placeholder='e.g. Computer Science' label='Field of Study' value={eduInfo.fieldOfStudy} onChange={onChange} name='fieldOfStudy'/>
                        <InputField placeholder='Select a degree' label='Degree' value={eduInfo.degree} name='degree' onChange={onChange}/>
                    </div>

                    <div className='flex gap-6'>
                        <InputField placeholder='' label='Starting Date' type={'date'} value={eduInfo.startingDate} onChange={onChange} name='startingDate'/>
                        <InputField placeholder='Ending Date' label='Ending Date' type={'date'} value={eduInfo.endingDate} onChange={onChange} name='endingDate'/>
                    </div>

                    <TextArea label="Description" placeholder={'Mention your achievements and contributions '} value={eduInfo.description} onChange={onChange} name='description'/>
                    
                    <div className='flex gap-6 w-[50%]'>
                        <InputField placeholder='3.49' label='Performance' type={'number'} value={eduInfo.performance} onChange={onChange} name='performance'/>
                    </div>

                    <div className='w-[50%]'>
                        <Button variant={'primary'} size={'md'} onClick={pushEduInfo}>Save Education</Button>
                    </div>

                </div>

            </div>
            
        </div>
    )
   
}

function WorkExperience({userInfo, setUserInfo}){

    const initialWorkState = {
        employer : '',
        startingDate : new Date(),
        endingDate : new Date(),
        onSite : true, //type??
        status : 'on-site',
        title : '',
        details : ''
    }

    const [workInfo, setWorkInfo] = useState(initialWorkState);
    
    const onChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setWorkInfo(
            prevState => {
                return {
                    ...prevState, 
                    [name] : value
                }
            }
        )
    }

    const pushWorkInfo = () => {


        let currentExperience = userInfo.experience;

        console.log(userInfo.experience);

        currentExperience.push(workInfo);

        setUserInfo(
            prevState => {
                return {
                    ...prevState, 
                    experience : currentExperience,
                    expCount : currentExperience.length
                }
            }
        )

        console.log(userInfo);
    }


    let ExperienceCardList;
    if(userInfo.education){
        ExperienceCardList = userInfo.experience.map((edu) => {
            
            return (
                <ExperienceCard title={edu.title} companyName={edu.employer} startDate={edu.startingDate} endDate={edu.endingDate} status={edu.status}/>
            )
        })
    }

    return (
        <div>
            <div id="headings" className='flex flex-col gap-4'>
                <h2 className='text-display-md font-bold text-gray-800'>Work Experience</h2>
                <p className='text-text-md font-normal text-gray-500'>What are some exciting places you've worked at?</p>
            </div>
            <div className='pt-6 flex gap-[7rem]'>

                <div className='flex flex-col gap-6 w-[50%]'>
                    {
                        ExperienceCardList
                    }
                </div>

                <div className='flex flex-col gap-6 flex-wrap w-[50%]'>


                    <div className='flex gap-6'>
                        <InputField placeholder={'e.g. Research Associate'} label={'Title'} value={workInfo.title} onChange={onChange} name='title'/>
                        <InputField placeholder='e.g. FAST NUCES' label='Institute' value={workInfo.employer}  onChange={onChange} name='employer'/>
                    </div>

                    <div className='flex gap-6'>
                        <InputField placeholder='' label='Starting Date' type={'date'} value={workInfo.startingDate} onChange={onChange} name='startingDate'/>
                        <InputField placeholder='Ending Date' label='Ending Date' type={'date'} value={workInfo.endingDate} onChange={onChange} name='endingDate'/>
                    </div>

                    <TextArea label="Description" placeholder={'Mention your achievements and contributions '} value={workInfo.description} onChange={onChange} name='description'/>
                    
                    {/* add dropdown for status */}

                    <div className='w-[50%]'>
                        <Button variant={'primary'} size={'md'} onClick={pushWorkInfo}>Save Experience</Button>
                    </div>

                </div>

            </div>
            
        </div>
    )
}


export default function SignupDetails() {

    const navigate = useNavigate();

    const initialState = {
        firstName : '',
        lastName : '',
        age : 18, 
        city : '',
        country : '',
        phone : '',
        eduCount : 0,
        education : [],
        expCount : 0,
        experience : []
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

    const checkCompleteInput = () => {

        let flag = true;

        for(let key in userInfo){
            if(userInfo[key] === ''){
                flag = false;
                break;
            }
        }

        return flag;
    }

    const dashboardBtnClick = (e) => {
        e.preventDefault();

        //if all fields are filled, then move to dashboard
        //else show error message
        if(checkCompleteInput()){
            navigate('/dash');  
        }else{
            alert('Please fill all the fields');
        }


    }



  return (
    <div className='width-screen px-20 pt-10 flex flex-col gap-10 mb-4'>
        
        <Introduction userInfo={userInfo} onChange={onChange} /> 
        <Education userInfo={userInfo} setUserInfo={setUserInfo}/>
        <WorkExperience userInfo={userInfo} setUserInfo={setUserInfo}/>

            <div className='absolute top-6 right-20'>
            <Button size={'sm'} variant={'tertiary'} onClick={dashboardBtnClick}>
                Move to Dashboard 
                <ArrowRightCircle className='ml-2' size={16}/> 
            </Button>
            </div>
       
    </div>
  )
}
