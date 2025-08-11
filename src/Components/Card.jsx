import React from 'react'

const Card = ({line}) => {
  return (
<marquee behavior="" direction="">
      <div className='w-70 h-50 border  mx-5 flex flex-wrap' >
                <div className='bg-gray-500 w-17 h-17 rounded-full  m-5' ></div>
                <div className='m-5  w-60 flex h-auto' >{line}ss</div>
            </div>
</marquee>
   
   
  )
}

export default Card
