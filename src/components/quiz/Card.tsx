import React from 'react'
import { handleQuizCardIsCheck, handleQuizCardSave, nextQuestion } from '../material/helper'

type Props = {
    data: any,
    onAnswerUpdate?: any
    activeQuestion?: any
    numberOfQuestions?: any
    onSetActiveQuestion?: any
    onSetStep?: any,
    time?: any
    index?: any
}

const Card = ({ data, onAnswerUpdate, activeQuestion, numberOfQuestions, onSetActiveQuestion, onSetStep, time, index }: Props) => {
    const [optionValue, setOptionValue] = React.useState<string>()
    const [correct, setCorrect] = React.useState(false)
    const [selected, setSelected] = React.useState('')
    const radioWrapper: any = React.useRef()

    const radioRefs = React.useRef<Array<HTMLInputElement | any>>([]);

    const [userAnswer, setUserAnswer] = React.useState<any>([])

    React.useEffect(() => {
        radioRefs.current = radioWrapper.current && Array.from(
            radioWrapper.current?.querySelectorAll('input[type="radio"]') || []
        );
    }, [index])

    React.useEffect(() => {
        setSelected('') // Reset selected value on new question
    }, [data])

    React.useEffect(() => {
        const findCheckedInput = radioWrapper?.current?.querySelector('input:checked')
        if (findCheckedInput) {
            findCheckedInput.checked = false
        }
    }, [])

    // next question

    let saveAnswer: any;
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleQuizCardSave(selected, setCorrect, data)
            nextQuestion(
                selected, setSelected, data, onAnswerUpdate,
                saveAnswer, onSetActiveQuestion, onSetStep, activeQuestion, numberOfQuestions
            )
        }} className='w-full drop-shadow shadow rounded-md p-3 my-3'>
            <div className='font-medium flex items-center'>
                <p className="mr-3">{data?.id}</p>
                <p>{data?.questions}</p>
            </div>
            
            {
                data?.options?.map((option: string, index:number) => {
                    return (
                        <div key={index} ref={(el) => {
                            if (radioRefs.current) {
                                radioRefs.current[index] = el
                            }
                        }}
                        className=''>
                            <label>
                            <input type='radio' checked={optionValue === option} value={option} name={data.answer} onChange={(e) => handleQuizCardIsCheck(e, setSelected, setOptionValue)} className='mr-3'/>
                            {option}</label>
                        </div>)
                })
            }

            <div className="flex justify-between m-3">
                <button type='button' onClick={() => {
                        onSetActiveQuestion(activeQuestion - 1);
                    }} 
                    disabled={activeQuestion === 0}
                    className='text-white my-3 font-medium px-3 py-1 rounded-md bg-blue-500'>Previous</button>
                <button type='submit' className='text-white my-3 font-medium px-3 py-1 rounded-md bg-blue-500'>Save and Next</button>
            </div>
            
        </form>
    )
}

export default Card