import React from 'react'
import { useSelector } from 'react-redux'


const Alert = () => {

    const { alert } = useSelector(store => store)

    return (
        alert.show && <div className='absolute flex justify-center w-full h-full items-center bg-slate-500 bg-opacity-60 z-50 '>
            <div className=' p-7 px-11  bg-white w-1/2 h-24 flex justify-between items-center border-4 border-purple-200'>
                <h4 className='font-bold text-xl capitalize'>{alert.message} </h4>

            </div>
        </div>
    )
}

export default Alert
