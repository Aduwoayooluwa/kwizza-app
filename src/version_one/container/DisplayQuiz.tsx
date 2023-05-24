"use client"
import React, { useEffect, useState } from 'react'
import useFetchQuiz from '@/hooks/useGetQuiz'
import Quiz from '../components/Quiz'
import supabase from '@/utils/supabase'
import Navbar from '@/Layout/Navbar'
import Button from '@/components/material/Button'
import Link from 'next/link'


type Props = {
    table: any
}

const DisplayQuiz =  ({ table }: Props) => {
    const [errorMessage, setErrorMessage] = useState<string>()
    const [quiz, setQuiz]: any = useState()
    const me = "you"
    const [isLoading, setIsLoading] = useState(true);


    const fetchQuiz = async () => {
        try {
            const { data, error }: any = await supabase.from(table)
                                            .select('*')
            if (error) {
                console.error(error)
            } 
            else {
                setQuiz(data)
                console.log(quiz)
            }
            setIsLoading(false)           
        }
        catch(error) {
            setErrorMessage("Error While Getting Quiz")
            setIsLoading(false)
        }
        finally {
            setIsLoading(false)
        }
        
    }
    useEffect(() => {
        fetchQuiz()        
    }, []);
    console.log(quiz)
    const data: any = []

    if (isLoading) {
        return (
            <div className=''>
                <section className='py-20 w-full grid place-items-center'>
                    Loading.....
                </section>
            </div>
        )
    }
    return (
        <>
        <Navbar />
        <div className='pt-20 bg-secondary min-h-screen w-full grid place-items-center'>
            <p className='text-white font-bold text-[23px] md:[30px]'>Answer All Questions</p>
            <Quiz quizzes={quiz} />


            <Link className='w-full' href={"/score/your-score"}>
                <Button name='Submit' />
            </Link>
            
        </div>
        </>
        
    )
}

export default DisplayQuiz