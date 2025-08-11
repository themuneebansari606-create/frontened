import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
    <div className='w-100% bg-blue-950  h-auto mt-10 cursor-pointer '>
    
     <div className='flex flex-wrap justify-center justify-row h-auto' >
      <div className='w-70 h-auto mx-4 my-5 p-3'>
       <h1 className='text-3xl font-bold'>Innovative Loopline</h1>
       <p className='text-gray-500 py-5 ' >"Engineering stitch-ready visuals with uncompromising finesse."</p>
      </div>
      <div className='w-70 h-auto mx-5 p-3'>
        <ul className='' style={{style:'none' ,color:'gray'}} >
        <li className='text-2xl text-black my-5 font-bold'>Company</li>
       <Link to='/'><li>Home</li></Link> 
       <Link to='/portfolio'><li>Portfolio</li></Link> 
       <Link to='/pricing'><li>Pricing</li></Link>         
        </ul>
      </div>
      <div className='w-70 h-auto  mx-5 p-5'>
           <ul className='' style={{style:'none' ,color:'gray' }} >
        <li className='text-2xl text-black my-5 font-bold '>Contact</li>
        <li>innovativeloopline@gmail.com</li> 
        
        </ul>
      </div>
      <div className='w-70 h-auto  mx-5 p-5'>
           <ul className='' style={{style:'none' ,color:'gray'}} >
        <li className='text-2xl text-black font-bold my-5'>Location</li>
        <li>houstan,texas,US</li>
        </ul>
      </div>
     </div>
      <div className='text-3xl p-5 '>
      <i className="fa-brands fa-facebook  mx-3"></i>
      <i className="fa-brands fa-instagram mx-3"></i>
      <a href="https://www.tiktok.com/@innovative_loopline235"><i className="fa-brands fa-tiktok mx-3"></i></a>
      </div>
    </div>
    </footer>
  )
}

export default Footer
