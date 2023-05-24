import React from 'react'

type Props = {
    name:string
    onClick?: any
}

const Button = (props: Props) => {
    return (
        <button className={'w-full h-[58px] text-center font-semibold p-2 text-white grid place-items-center bg-primary'}
        onClick={props.onClick}
        >{props.name}</button>
    )
}

export default Button