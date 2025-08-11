import React from 'react'

const Choose = ({icon1 ,icon2,line1,line2,heading1,heading2}) => {
    return (
        <div className='w-100%   m-auto font-streth-100% p-1 auto my-5 flex justify-center flex-wrap'>
            <div className='w-80 h-60 border my-5 rounded-2xl bg-gray-500 mx-5  flex-wrap  shadow-blue-950 shadow-2xl  transition-all duration-500 ease-in-out  hover:w-90 hover:h-70 hover:p-5' >
    
                <div className='m-5  w-70  h-auto' ><h1 className='font-bold my-5 text-blue-950 text-2xl'>{heading1}</h1><p className='text-white'>{line1}</p></div>
            </div>
            <div className='w-80 h-60 border my-5 bg-gray-500 rounded-2xl  mx-5  flex-wrap  shadow-blue-950 shadow-2xl  transition-all duration-500 ease-in-out  hover:w-90 hover:h-70 hover:p-5' >

                <div className='m-5  w-70  h-auto' ><h1 className='font-bold my-5  text-blue-950 text-2xl' >{heading2}</h1><p className='text-white'>{line2}</p></div>
            </div>
        </div>
    )
}

export default Choose
