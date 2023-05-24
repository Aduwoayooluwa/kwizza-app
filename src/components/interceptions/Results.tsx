"use client"

import React, { useCallback, useState} from 'react'
import { useRouter } from "next/navigation"


type Props = {
    children: React.ReactElement
}

const Results = (props: Props) => {
    const router = useRouter()
    
    const onDismiss = useCallback(() => {
        router.back()
    }, [router])

    return (
        <div>

            <p>Dear Ayo, Your result is as follows</p>
            
            <section>
                { props.children }
            </section>
        </div>
    )
}

export default Results