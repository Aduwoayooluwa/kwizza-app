import CreateQuiz from '@/components/CreateQuiz'
import React, { useState } from 'react'

type Props = {}

const Page = (props: Props) => {

    return (
        <div className="grid place-items-center w-full bg-secondary h-full">
            <CreateQuiz />
        </div>
    )
}

export default Page