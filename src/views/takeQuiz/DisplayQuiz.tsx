import useFetchQuiz from '@/hooks/useGetQuiz'
import Quiz from '@/version_one/components/Quiz'
import React from 'react'

type Props = {
    table: any
}

const DisplayQuiz = ({ table }: Props) => {
    const { quiz, error }: any = useFetchQuiz("super_teenagers")
    return (
        <div>

            <div>
                <Quiz quizzes={quiz}/>
            </div>
        </div>
    )
}

export default DisplayQuiz