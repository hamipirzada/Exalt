
import Hero from "./Hero"
import Card from "./Card"
import { Navbar } from "./Navbar"
import Humans from "./Humans"
import { Address } from "./Address"
import Quick from "./Quick"
import WorkWithUs from "./WorkWithUs"
import ProfileCard from "./ProfileCard"
import Team from "./Team"
import ProjectText from "./ProjectText";
import Projects from "./Projects"
import GradientCard from "./GradientCard"
import Journey from "./Journey"
import Questions from "./Questions"
import WhatsApp from "./WhatsApp"
  





const Home = () => {
  return (
    <>
  <div className="overflow-x-hidden">

 
    
    <Navbar/>
    <WhatsApp/>
   <Quick/> 
    <Hero/>
    <GradientCard/>
    <WorkWithUs/>
    <ProjectText/>
    <Projects/>
    <Journey/>
    <Card/>
    <Humans/>
    <Team/>
    <ProfileCard/>
    <Questions/>
    <Address/> 
    </div>
    

    </>
  )
}

export default Home