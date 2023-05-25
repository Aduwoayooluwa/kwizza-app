"use client"

import Button from '@/components/material/Button'
import { useScoreStore } from '@/utils/store'
import Link from 'next/link'
import React from 'react'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
type Props = {}

const Score = ({ params: { score }}: any) => {
    const userScore = useScoreStore((state) => state?.score)
    console.log(score)
    const {width, height} = useWindowSize()
    const username = sessionStorage.getItem("username")!
    return (
        <div className='h-screen w-full grid px-3 md:px-0 place-items-center'>
            <Confetti
            width={width}
            height={height}
            />
            <div className='leading-10 bg-secondary md:w-[400px] w-full h-fit py-6 flex flex-col items-center'>
                <p className='font-medium text-lg'>Hello { username }, your score is <span className='text-2xl font-semibold'>{ userScore }</span></p>
                <p>Your Score Percentage is {(userScore / 20) * 100 }</p>
                
                <Link className='mt-8' href="/start">
                    <Button onClick={() => {
                        localStorage.setItem('', '')
                    }} name='End Quiz'/>
                </Link>
            </div>
        </div>
    )
}

export default Score