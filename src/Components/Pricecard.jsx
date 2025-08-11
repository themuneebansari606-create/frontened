import React from 'react'

const Pricecard = ({Name,Type,Price,li1,li2,li3}) => {
    return (
        <div className='w-70 border-2 border-blue-950 p-5  my-2 h-110 mx-5 rounded-2xl shadow-blue-950 shadow-2xl  transition-all duration-500 ease-in-out  hover:w-75 hover:h-115 hover:p-10 '>
            <div className=' m-auto  my-4 w-50 h-auto ' >
                <p className='font-bold text-2xl text-blue-950' >{Name}</p>
                <p className='text-blue-950'>{Type}</p>
                <p className='text-5xl font-bold text-blue-950' >{Price}$</p>
                <button className='w-40 border h-13 my-5 rounded-full font-bold text-2xl text-blue-950  transition-all duration-1000 ease-in-out hover:bg-blue-950 hover:text-white' >Order now</button>
            </div>
            <hr />
            <ul className='mt-5 list-disc p-2 text-blue-950' >
                <li>{li1}</li>
                <li>{li2}</li>
                <li>{li3}</li>
                
            </ul>
        </div>
    )
}

export default Pricecard
