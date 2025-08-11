import React from 'react'
import Achivement from './Components/Achivement'
import Pricecard from './Components/Pricecard'
const Pricing = () => {
  return (
    <div>
   <Achivement name="Innovative Loopline Pricing" />
   <div className='h-auto w-full  flex flex-wrap justify-center' >
   <Pricecard Name='Vector' Type="Vector Art" Price="15" li1=" Vector Art" li2="price is completely depends on design complexity" li3="24hrs Support" />
   <Pricecard Name="Jacket Back & Front Chest" Type=" Digitizing" Price="15" li1="jacket back and front Chest" li2="price is completely depends on design complexity" li3="24hrs Support"/>
   <Pricecard Name ="left Chest & Hat" Type=" Digitizing" Price="10" li1="Left Chest &Hat" li2="price is completely depends on design complexity" li3="24hrs Support" />
   </div>
    </div>
  )
}

export default Pricing
