import React from 'react'

type Props = {
    placeholder: string
    type?: "text" | "radio"
    name?: string
    className?: string
    onChange?: any
}

const InputField = (props: Props) => {
    return (<div className={`${props.type=== "text" && props.className} w-1/2 flex items-center ${props.type === "radio" && 'my-3'}`}>
            <input type={props.type} name={props.name} checked={false} onChange={props.onChange}  className={`outline-none focus:p-3 w-full ${props.type === "text" ? 'h-[58px] w-[600px]' : 'h-full w-[30px]'} bg-[#D9D9D9]
        
        border text-primary border-b-[#464F41]`} placeholder={props.placeholder}/>
        
        {
            props.type === "radio" && (
                <input type={'Text'} name={props.name}  className={`outline-none w-[300px] p-3 h-[40px] bg-[#D9D9D9]
        
            border text-primary border-b-[#464F41]`} placeholder={'Option'}/>
            )
        }
    </div>
        
    )
}

export default InputField