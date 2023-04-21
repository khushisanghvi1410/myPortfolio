import { BrowserRouter } from "react-router-dom";

import {About,Contact,Experience,Hero,Navbar,Tech,Works,StarsCanvas} from './components'

function App() {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar></Navbar>
      <Hero></Hero>

    </div>
    <About></About>
    <Tech></Tech>
    <Works></Works>
    <Experience></Experience>
    
    <div className="relative z-0">

      <Contact></Contact>
      <StarsCanvas></StarsCanvas>
    {/* for displaying 3d stars */}
    </div>
    </div>
    </BrowserRouter>
  )
}

export default App
