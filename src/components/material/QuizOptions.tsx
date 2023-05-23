"use client"
import React, { useState } from 'react'
import InputField from './InputField'
import Button from './Button'
import { handleOptionAddRadioElement } from './helper'

type Props = {}

const QuizOptions = (props: Props) => {
    const [incrementQuizFieldCount, setIncrementQuizFieldCount] = useState(2) // monitor the number of input element present.
    const [addQuizField, setAddQuizField] = useState(false)
    return (
        <div className='mt-10'>{
            incrementQuizFieldCount > 0 && [...Array(incrementQuizFieldCount)].map((option: any, index:number) => {
                return (
                    <InputField className='w-full' name={'option'} type="radio" placeholder="Enter Option" key={index}/>
                )
            })
            }
            
            <div className='my-5 w-full md:w-1/3'>
                <Button name='Add Option' onClick={(e: React.ChangeEvent<HTMLButtonElement>) => {
                    handleOptionAddRadioElement(e, setIncrementQuizFieldCount, setAddQuizField)
                }}/>
            </div>
            
            </div>
    )
}

export default QuizOptions