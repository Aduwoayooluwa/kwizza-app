"use client"

//import { useStore } from '@/store/useStore'
import React, { useEffect, useState } from 'react'

type Props = {}

const Page = (props: Props) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // const bear = useStore((state: any) => state.bear)
    // const setIncrement = useStore((state: any) => state.setIncrement)
    return (
        <>
        {/* {
            mounted && <div>
            {bear}

                <button onClick={setIncrement}>CLick to increment</button>
            </div>
        } */}
        </>
    )
}

export default Page