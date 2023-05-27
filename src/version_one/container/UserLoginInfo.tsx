"use client"
import Button from '@/components/material/Button'
import InputField from '@/components/material/InputField'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {}

const UserLoginInfo = (props: Props) => {
    const [inputField, setInputField] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    
    const handleEnter = (e:React.ChangeEvent<HTMLButtonElement>) => {
        if (inputField === ""){
            setMessage("Kindly, Enter your name to Start")
        }
            sessionStorage.setItem("username", inputField)
            console.log('flel', inputField);
        
    }
    return (
        <div className='grid place-items-center px-6 md:px-0 w-full h-full'>
            
            <div className='h-[200px] grid place-items-center py-6 leading-10 w-full md:w-1/3'>
            <p className={`${message === "" && "hidden"} text-red-600 mb-3 text-lg font-semibold text-center`}>{message}</p>
                <InputField type="text" className='w-full' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                    setInputField(e.target.value)
                }} placeholder='Enter your name'/>
                <Link href="/quiz">
                    <Button onClick={(e: React.ChangeEvent<HTMLButtonElement>) => handleEnter(e)} name='Enter to Start your Quiz'/>
                </Link>
                
            </div>
            
        </div>
    )
}

export default UserLoginInfo