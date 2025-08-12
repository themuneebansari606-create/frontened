import React from 'react'
import { useState,useEffect } from 'react'
const Uploadpic = () => {
    const [login, setLogin] = useState(false);
     useEffect(() => {
    
        const storedData = localStorage.getItem("data");
        
        if (storedData) {
          const data = JSON.parse(storedData);
          if (
            data?.data?.username === "adminmuneeb" &&
            data?.data?.email === "themuneebansari606@gmail.com"
          ) {
            setLogin(true);
          }
        }})
  return (
    <div>
    {login?
      <form action="https://backened-alpha.vercel.app/api/upload" method="POST" encType='multipart/form-data' >
      <input type="file" name="pic"/>
<button type="submit" className='bg-gray-500 rounded-md p-1 text-white'>upload</button>
      </form>
     :<span></span>}
    </div>
  )
}

export default Uploadpic
