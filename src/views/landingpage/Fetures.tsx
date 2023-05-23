"use client"
import React from 'react'


type Props = {
    features: any[]
}


const Fetures = ({ features }: Props) => {
        return (
            <main id="features" className='bg-[#eafff0] text-black w-full pb-5'>
                <p className='font-medium text-xl pt-6 md:text-2xl text-center'>What do we Offer?</p>
                <div className='max-w-7xl   mx-auto px-4 pt-20 pb-5 md:pb-0 md:mt-0 sm:px-6 lg:px-3 grid md:grid-cols-3 grid-cols-1 gap-4'>
                {
                features.map((item: any, index: number) => {
                    return (
                        <div key={index}  className='shadow-md hover:bg-secondary p-3 leading-8'>
                            <h1 className='font-semibold text-lg md:text-xl'>{item?.name}</h1>
                            <summary className='list-none'>{item?.summary}</summary>
                        </div>)
                })
                }</div>
            </main>
            
        )
}

export default Fetures