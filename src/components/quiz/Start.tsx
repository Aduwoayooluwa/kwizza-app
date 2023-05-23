"use client"

import React from 'react'
import Button from '../material/Button'
import Image from 'next/image'

type Props = {
    onQuizStart: any
}

const Start = ({onQuizStart }: Props) => {
    return (
        <div className="w-full grid h-screen place-items-center">
            
            <div className="md:w-3/5 bg-tertiary grid place-items-center p-5 h-[200px] w-full">
                <div className='flex items-center'>
                    <p className='mr-3 font-semibold'>Hello there</p>
                    <Image src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" alt="hand" width={30} height={30}/>
                </div>
            <p className='font-semibold text-sm md:text-lg'>Welcome to the Quiz. Click on the Start Button to Start the quiz</p>
                <Button name='Start Quiz' onClick={() => onQuizStart()} />
            
            </div>
            
        </div>
    )
}

export default Start