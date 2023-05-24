"use client"

import Button from '@/components/material/Button'
import { useScoreStore } from '@/utils/store'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Score = ({ params: { score }}: any) => {
    const userScore = useScoreStore((state) => state?.score)
    console.log(score)
    return (
        <div className='h-screen w-full grid px-3 md:px-0 place-items-center'>
            <div className='leading-10 bg-secondary md:w-[400px] w-full h-fit py-6 flex flex-col items-center'>
                <p className='font-medium text-lg'>Hello there, your score is <span className='text-2xl font-semibold'>{ userScore }</span></p>
                
                <Link className='mt-8' href="/quiz">
                    <Button name='Go back to the Quiz Board'/>
                </Link>
            </div>
        </div>
    )
}

export default Score