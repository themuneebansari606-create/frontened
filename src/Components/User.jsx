import React from 'react'
import CountUp from '../external/CountUp/CountUp.jsx'; // Import the CountUp component
import needle from '../assets/thread.png'; // Import the needle image
import cap from '../assets/cap.png'; // Import the cap image
const User = () => {
  return (
    <>
    <div  className='w-100% bg-blue-950 text-white font-stretch-100% p-3 h-auto my-3 flex flex-wrap justify-around' > 
        <div className='w-40  text-center text-3xl' ><i style={{color:"black",fontSize:60}} class="fa-solid fa-users"></i><p className='text-2xl' >Happy <br/> cleints</p><CountUp/><sup>+</sup></div>
        <div className='w-40  text-center text-3xl' ><img src={needle} alt="" style={{margin:"auto"}} width={60}/><p className='text-2xl p-0.5' >customize logo</p><CountUp/><sup>+</sup></div>
        <div className='w-40  text-center text-3xl'><i style={{color:"black",fontSize:60}} class="fa-solid fa-palette"></i><p className='text-2xl' >vector <br/> art</p><CountUp/><sup>+</sup></div>
        <div className='w-40  text-center text-3xl'><img src={cap} style={{margin:"auto"}} width={70}alt="" /><p className='text-2xl' >caps & jacketback</p><CountUp/><sup>+</sup></div>
    
    </div>
    </>
  )
}

export default User
