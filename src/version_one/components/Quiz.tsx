import Button from '@/components/material/Button'
import InputField from '@/components/material/InputField'
import { useScoreStore } from '@/utils/store'
import React, { useState } from 'react'
import { shallow } from "zustand/shallow"
type Props = {
    quizzes: any
}

const Quiz = ({ quizzes}: Props) => {
    // let score: any = useScoreStore(state => state.score)
    // let savedQuestions: any = useScoreStore(state => state.savedQuestions)

    let { score, savedQuestions, incrementScore } = useScoreStore((state) => ({score: state.score, savedQuestions: state.savedQuestions, incrementScore: state.incrementScore}), shallow)
    const [userAnswer, setUserAnswer] = useState<string>("")

    const answers = new Map()
    console.log('sq', savedQuestions, score)
    return (
        <div className='w-full flex flex-col items-center px-3 md:px-0'>
            {
                quizzes?.map((data:any) => {
                    return (
                        <div key={data?.id} className='bg-white px-3 md:px-0 py-3 w-full md:w-[800px] my-6 leading-8  h-full grid place-items-center '>
                            <div className='font-semibold text-lg md:text-xl flex items-center'>
                                <p>{data?.id}.</p>
                                <p> Type in the Word You hear</p>
                            </div>
                            <div className='w-full py-6 grid place-items-center  h-full'>
                                <audio  controlsList='nodownload' controls className='my-2'>
                                    <source src={data?.question} type="audio/mpeg"/>
                                </audio>

                                <InputField name={data?.correct_answer} onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                                    setUserAnswer(e.target.value)
                                    console.log(userAnswer)
                                }} type='text' className='w-full md:w-[400px]' placeholder='type answer..'/>
                            </div>
                            <button onClick={() => {
                                if (data?.correct_answer === userAnswer) {
                                    // score = score + 1;
                                    // savedQuestions.add(data?.correct_answer)
                                    incrementScore(data?.correct_answer)
                                }

                            }} className='bg-primary text-white font-semibold p-2 rounded-[5px]'>Save</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Quiz