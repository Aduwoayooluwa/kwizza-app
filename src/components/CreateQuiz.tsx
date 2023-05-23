"use client"

import React, { useState } from 'react'
import InputField from './material/InputField'
import QuizOptions from './material/QuizOptions'
import Image from 'next/image'
import SelectMenu from './material/SelectMenu'
import { handleOptionAddRadioElement, handleOptionSubtractRadioElement } from './material/helper'

type Props = {

}

const CreateQuiz = (props: Props) => {
    const [incrementCreateQuizComp, setIncrementCreateQuizComp] = useState(1)
    const [addQuizComponent, setAddQuizComponent] = useState(false)

    return (
        <>
            {
                incrementCreateQuizComp >= 1 && [...Array(incrementCreateQuizComp)].map((option: any, index: number) => {
                    return (
                        <div key={index} className='bg-white my-6 relative w-[70%] h-[450px] p-6 leading-8'>
                        <div className='flex items-start justify-between'>
                            <InputField type="text" placeholder='Enter Question'/>
            
                            <SelectMenu>
                                <option>Text</option>
                                <option>Audio</option>
                            </SelectMenu>
                        </div>
                        
                            <span className='my-4'></span>
                            <div className='flex items-center justify-between'>
                                <QuizOptions />
                                <SelectMenu>
                                    <option>Multiple Choice</option>
                                    <option>Short Answer</option>
                                </SelectMenu>
                            </div>
                            
            
                            <div className="absolute bottom-10 flex items-centerright-10">
                                <Image onClick={(e:any) => {
                                    handleOptionSubtractRadioElement(e, setIncrementCreateQuizComp, setAddQuizComponent)
                                }} className='cursor-pointer mx-3' src={'/delete-icon.svg'} width={20} height={50} alt={'detele-icon'}/>
                                <Image onClick={(e:any) => {
                                    handleOptionAddRadioElement(e, setIncrementCreateQuizComp, setAddQuizComponent)
                                }} className='cursor-pointer' src={'/add_icon.svg'} width={20} height={50} alt={'add-icon'}/>
                            </div>
                        </div>
                    )
                })
            
            }
        </>
        
    )
}

export default CreateQuiz