"use client"
import React, { useState } from 'react'
import Button from './Button'
import { handleOptionAddRadioElement } from './helper'

type Props = {}

const RadioInput = (props: Props) => {
    const [incrementInputCount, setInputIncrementCount] = useState(2) // monitor the number of input element present.
    const [addRadioInput, setAddRadioInput] = useState(false)

    //  this component should render based on the number of otions. The numberof oiptions are gotten from thebackend. When you get it you map through it and render the number of options. 
    return (
        <fieldset className="space-y-4">
            <legend className="sr-only">Delivery</legend>

            {
                incrementInputCount > 0 && [...Array(incrementInputCount)].map((option: any, index: number) => {
                    return  (
                        <div key={index}>
                            <input
                            type="radio"
                            name="options"
                            id={index.toString()}
                            className="peer hidden [&:checked_+_label_svg]:block"
                            
                            onChange={(e: any) => {
                                console.log('checked',e.target.checked, 'hello', e.target.value);
                            }}
                            />

                            <label
                            htmlFor={index.toString()}
                            className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-primary"
                            >
                            <div className="flex items-center gap-2">
                                <svg
                                className="hidden h-5 w-5 text-primary`"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                />
                                </svg>

                                <p className="text-gray-700">Text</p>
                            </div>
                            </label>
                        </div>
                        )
                    })
                }
            

            <Button name='Add Option' onClick={(e: React.ChangeEvent<HTMLButtonElement>) => {
                handleOptionAddRadioElement(e, setInputIncrementCount, setAddRadioInput)
            }}/>
</fieldset>
    )
}

export default RadioInput