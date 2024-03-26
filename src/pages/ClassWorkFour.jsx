import { useState } from "react";

export const ClassWorkFour = () => {
  const [bgColor, changeBgColor] = useState("bg-blue-500");
  const randomColorClasses = [
    { id: 'color-0', color: 'bg-teal-600' },
    { id: 'color-1', color: 'bg-gray-100' },
    { id: 'color-2', color: 'bg-teal-800' },
    { id: 'color-3', color: 'bg-yellow-600' },
    { id: 'color-4', color: 'bg-pink-500' },
    { id: 'color-5', color: 'bg-purple-900' },
    { id: 'color-6', color: 'bg-yellow-400' },
    { id: 'color-7', color: 'bg-blue-900' },
    { id: 'color-8', color: 'bg-blue-100' },
    { id: 'color-9', color: 'bg-pink-400' },
    { id: 'color-10', color: 'bg-indigo-800' },
    { id: 'color-11', color: 'bg-red-900' },
    { id: 'color-12', color: 'bg-green-600' },
    { id: 'color-13', color: 'bg-green-500' },
    { id: 'color-14', color: 'bg-purple-600' }
  ]
     const changeColor = ()=>{
        changeBgColor(randomColorClasses[Math.floor(Math.random()*randomColorClasses.length)].color) 
      }
  
  return (
    <>
        <div className={`flex justify-center items-center h-screen ${bgColor}`}>
        <div className="flex flex-col items-center space-y-2">
          <div className="flex space-x-2">
            {
              randomColorClasses.map((anyName)=> <div key={anyName.id} 
              className={`h-6 w-6 ${anyName.color} ${anyName.color==bgColor ? 'border-2 border-red-500':'rounded-full'}`}
              // className={`h-6 w-6 ${anyName.color} ${anyName.color==bgColor && 'border-2 border-red-500'}`}
              ></div>)
              // randomColorClasses.map((item,idx)=> <div key={idx} className={`h-6 w-6 ${item}`}></div>)
            }
          </div>
          <button className="btn btn-neutral" onClick={changeColor}>Change Color </button>
        </div>
      </div>
    
    </>
  );
};
