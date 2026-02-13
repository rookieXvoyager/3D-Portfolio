import Hero from "./sections/Hero"
import ShowCaseSection from "./sections/ShowCaseSection"
import NavBar from "./components/NavBar"
import LogoSection from "./sections/LogoSection"
import FeatureCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"
import FooterSection from "./sections/FooterSection"
const App = () => {
  return (<>
  <NavBar/>
   <Hero/>
   <ShowCaseSection/>
   <LogoSection/>
   <FeatureCards/>
   <ExperienceSection/>
   <TechStack/>
   <Testimonials/>
   <Contact/>
   <FooterSection/>
   </>
  )
}

export default App
