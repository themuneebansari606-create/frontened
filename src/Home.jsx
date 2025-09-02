import { useEffect, useState } from 'react'
import './App.css';
import './index.css'
import Navbar from './Components/Navbar';
import ResponsiveAppBar from './Components/Newnavbar.jsx';
import Backgroundcom from './Components/Backgroundcom.jsx';
import RollingGallery from './RollingGallery/RollingGallery.jsx';
import User from './Components/User.jsx';
import Achivement from './Components/Achivement.jsx';
import Service from './Components/Service.jsx';
import Choose from './Components/Choose.jsx';
import Card from './Components/Card.jsx';
import tiger from './assets/tigers.jpeg';
import cartoon from './assets/cartoon.jpeg';
import dogs from './assets/dogs.jpeg';
function Home() {
  const [users, setUsers] = useState([])
  return (
    <>
      <Backgroundcom/>
       <Achivement  name="Our employees" />
        <Card />
       <Achivement  name="Our achivements" />
        <User />

      <Achivement name="Our Services"  />
      <Service name= " Embroidey Digitizing" pic={tiger} size1="170" line="“From Sketch to Stitch — Your Vision, Our Thread.”" size2=""  />
      <Service name="Custom Digitzing" pic={cartoon} size1='150' line="“Digitizing Redefined. Art meets Accuracy.”" />
      <Service name="Vector Art" pic={dogs} size1="190" line="Blurry logos don't build brands. We create your low-res images into sharp vector art that stands out everywhere--from merch to marketing."  size2=""/>
      <Achivement name="Why Choose Us"  />
      <Choose
       heading1="Innovating loopline" 
      line1="We ensure quality till sew out each design and you are convinced that it is right. A correctly digitized designs will run smoother on the machine."
      heading2="Dedicating Support"
      line2="Our dedicated technical support staff are available 24/7 and will entertain all your questions/queries with 100% satisfaction guaranteed."
      />
      <Choose 
      heading1="Expereinced Team"
      line1="We have a large team of highly skilled professional with innovative & creative skills which distinct us from other companies in the market."
      heading2="Affordable Price"
      line2="Innovating Loopline brings you the most competitive fair-price quotation that will match your budget and your needs."
        />
      <Choose
      heading1="Custom CRM"
      line1="We have developed very useful client area for our customers to get smooth business with us where they can make/edit orders or quotes and pay directly."
      heading2="40 + Countreis "
      line2="we have successfully collbrated with cleints from more than 40 countreis worldwide "
      />
      <Achivement name="Our Cleints reveiws"  />
     <RollingGallery/>
    </>


  )
}

export default Home
