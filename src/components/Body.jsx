import { CardOne } from "./showCard/CardOne"
import { CardTwo } from "./showCard/CardTwo"

export const Body = ()=>{



    return (
        <>  <div className="hero min-h-screen text-white" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-white">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">African Plan</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn  hover:bg-black bg-red-500 outline-0 border-0 text-white">Get Started</button>
    </div>
  </div>
</div>
<div className="md:flex md:space-y-0 space-y-2 space-x-2 md:justify-between lg:justify-center gap px-[20px]">
    
<CardOne/>
<CardTwo/>
<CardOne/>



</div>
        </>
      
    )
}