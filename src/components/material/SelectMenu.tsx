import React from 'react'

type Props = {}

const SelectMenu = (props: any) => {
    return (
        <select className='bg-tertiary w-1/3 p-3 outline-none focus:outline-primary'>
            {...props.children}
        </select>
    )
}

export default SelectMenu