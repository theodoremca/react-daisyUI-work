import { Body } from "./components/Body"
import Footer from "./components/Footer"
import { NavBar} from "./components/NavBar"
import { ClassWorkFour } from "./pages/ClassWorkFour"
import { ClassWorkSix } from "./pages/ClassWorkSix"

export const App = ()=>{
    return (
      <>   
      <div className="bg-white">
     
   <Layout>
  <ClassWorkFour/>
  <ClassWorkSix/>
  <ClassWorkSix/>
   </Layout>
 
   

      </div> 
      </>
  
    )
  }


  const Layout = ({children})=><>
 <NavBar/>
        {children}
        <Footer/>
  </>