"use client"
import Navbar from '@/Layout/Navbar'
import Button from '@/components/material/Button'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    //const username =  sessionStorage.getItem('username')!
    return (
        <div className='flex flex-col items-center bg-secondary h-screen w-full'>
            <Navbar />

            <main className='py-20 w-full h-full grid place-items-center'>
                <div className='w-full md:w-[600px]  grid place-items-center'>
                    <p className='font-bold text-[23px] md:-[32px] text-center'>Welcome, { "there" }. It is time for you to begin your test. Kindly click your class</p>

                    <section className='w-full mt-20 px-6'>
                    <div className='my-6'>
                            <p className='text-center text-lg md:text-xl font-semibold mb-2'>(6 - 8) Click the button below</p>
                            <Link href={"/quiz/six_to_eight"}>
                                <Button  name='6-8' />
                            </Link>

                        </div>

                        <div className='my-6'>
                            <p className='text-center text-lg md:text-xl font-semibold mb-2'>(9-12) Click the button below</p>
                            <Link href={"/quiz/nine_to_twelve"}>
                                <Button  name='9-12' />
                            </Link>

                        </div>

                        <div className='my-6'>
                            <p className='text-center text-lg md:text-xl font-semibold mb-2'>(13-15) Click the button below</p>
                            <Link href={"/quiz/junior_teenagers"}>
                                <Button name='13 - 15' />
                            </Link>

                        </div>

                        <div className='my-6'>
                            <p className='text-center text-lg md:text-xl font-semibold mb-2'>(16 - 19) Click the button below</p>
                            <Link href={"/quiz/super_teenagers"}>
                                <Button name='16 - 19' />
                            </Link>

                        </div>
                    </section>
                </div>
                
            </main>
        </div>
    )
}

export default page