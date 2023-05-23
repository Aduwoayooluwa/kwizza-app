import React from 'react'

type Props = {
    onEndQuiz: any
}

const End = (props: Props) => {
    return (
        <div>

        <button onClick={() => props.onEndQuiz()} className='text-white my-3 font-medium px-3 py-1 rounded-md bg-blue-500'>End the Quiz</button>
        </div>
    )
}

export default End