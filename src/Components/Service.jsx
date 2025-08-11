import React from 'react'

const Service = ({name,pic,size1,size2,line}) => {
  return (
    <div className=' w-4/5 my-5  h-65 border-blue-950 border-5 m-auto rounded-2xl p-3 bg-blue-950     sm:{w-full h-auto }   ' >
      <h1 className='text-3xl font-bold my-1 text-white ' >{name}</h1>
      <div className='w-full h-48 bg-gray-500 rounded-2xl  p-1  sm:{ h-auto block} ' >
        <div className=' w-55 h-46   mx-2 ' >< img src={pic} className='rounded-3xl' alt="" width={size1} height={size2}/></div>
        <div className=' h-auto w-full my-4 rounded-2xl   ' ><p className=' text-white m-2'>{line}</p></div>
      </div>
    </div>
  )
}

export default Service
