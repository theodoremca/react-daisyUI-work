import { Body } from "./components/Body"
import Footer from "./components/Footer"
import { NavBar} from "./components/NavBar"

export const App = ()=>{
    return (
      <>   
      <div className="bg-white">
      <NavBar/>
     <Body />
      <Footer/>
      </div> 
      </>
  
    )
  }