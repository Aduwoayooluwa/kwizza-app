import InputField from '@/components/material/InputField'
import React from 'react'

type Props = {
    quizzes: any
}

const Quiz = ({ quizzes}: Props) => {
    console.log(quizzes)
    return (
        <div className='w-full px-3 md:px-0'>
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

                                <InputField type='text' className='w-full md:w-[400px]' placeholder='type answer..'/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Quiz