import UserLoginInfo from '@/version_one/container/UserLoginInfo'
import React from 'react'

type Props = {}

const entry = (props: Props) => {
    return (
        <div className='w-full h-screen grid place-items-center'>
            <UserLoginInfo />
        </div>
    )
}

export default entry