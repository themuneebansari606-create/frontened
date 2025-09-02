import React from 'react'
import Accounts from './Accounts.jsx'; // Import the Accounts component
import account1 from '../assets/account1.jpeg'
import account2 from '../assets/account2.jpeg'
import account3 from '../assets/account3.jpeg'
const Card = () => {
  return (
    <div className=' bg-gray-500 '>
      <h1 className='p-3 font-bold text-blue-950' style={{textAlign:'center'}} >Doesn't beleive any account except these </h1>
      <div className='w-ful h-auto  flex justify-center bg-gray-500  mx-5  flex-wrap' >

        <Accounts pics={account1} />
        <Accounts pics={account2} />
        <Accounts pics={account3} />

      </div>
    </div>



  )
}

export default Card
