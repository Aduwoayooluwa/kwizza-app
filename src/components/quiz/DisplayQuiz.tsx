"use client"
import React, { useState, useEffect, useRef } from 'react'
import Card from './Card'
import { resetQuizHandler, startQuizHandler } from './helper'
import Start from './Start'
import End from './End'
import useFetchQuiz from '@/hooks/useGetQuiz'

type Props = {}

const DisplayQuiz = (props: Props) => {

    const [activeQuestion, setActiveQuestion] = useState<number>(0)
    const [answers, setAnswers] = useState<any>([])
    const [time, setTime] = useState<number | null>(null) // time monitor for the quiz
    const [step, setStep] = useState<number>(1) // keeps track of the position of the quiz. 1 is the intro, 2: is the quiz and 3 is the end of the quiz
    const intervalRef = useRef<any>(null) // ref to know the position of the quiz

    let POSITION_STEP = 1; // this is the number of steps [position]

    // custom hook  to display the quiz questions
    const { quiz }: any = useFetchQuiz("")

    const quizStartHandler = () => {
        setStep(2);
        console.log(step)
        intervalRef.current = setInterval(() => {
            setTime((prevTime: number | null) => {
                if (prevTime === null) {
                    return 1;
                } else {
                    return prevTime + 1;
                }
            });
        }, 1000);
    }

    useEffect(() => {
        if (step === 3) {
            clearInterval(intervalRef.current)
        }
    }, [step])
    
    return (
        <main  className='w-full grid place-items-center h-[600px]'>
            <section className='w-full grid place-items-center'>

            <section className='w-full md:w-2/3'>

            {step === 1 && <Start onQuizStart={() => {
                console.log(1)
            }} />}
            {step === 2 && (
                <Card 
                    onSetStep={setStep}
                    onSetActiveQuestion={setActiveQuestion}
                    onAnswerUpdate={setAnswers}
                    activeQuestion={activeQuestion}
                    numberOfQuestions={quiz?.length}
                    data={quiz[activeQuestion]}
                    time={time}
                />
                    )}
                {step === quiz?.length + 1 && <End onEndQuiz={resetQuizHandler}/>}
            </section>
            </section>

        </main>
    )
}

export default DisplayQuiz