import { useState } from "react";

export const ClassWorkThree = () => {
  const [bgColor, changeBgColor] = useState("bg-blue-500");
  // const [randomValue,setRandomValue] = useState(0)
  // const [randomNumber,setRandomNumber] = useState(0)
  // const [randomIndex,setRandomIndex] = useState(0)
  const randomColorClasses = [
  'bg-teal-600',
  'bg-gray-100',
  'bg-teal-800',
  'bg-yellow-600',
  'bg-pink-500',
  'bg-purple-900',
  'bg-yellow-400',
  'bg-blue-900',
  'bg-blue-100',
  'bg-pink-400',
  'bg-indigo-800',
  'bg-red-900',
  'bg-green-600',
  'bg-green-500',
  'bg-purple-600'
];

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function getRandomInt(max) {
//   return Math.floor(Math.random()*max);
// }
      const changeColor = ()=>{
        // const mathRandom = Math.random();
        // const random = mathRandom*randomColorClasses.length;
        // const floorRandom = Math.floor(random);

        // setRandomValue(mathRandom)
        // setRandomNumber(random)
        // setRandomIndex(floorRandom)


        // changeBgColor(randomColorClasses[floorRandom]) 
        changeBgColor(randomColorClasses[Math.floor(Math.random()*randomColorClasses.length)]) 
      }
  
  return (
    <>
        <div className={`flex justify-center items-center h-screen ${bgColor}`}>
        <div className="flex flex-col items-center space-y-2">
          {/* <h1 className=" text-5xl font-bold">Classwork {}</h1>
          <p>randomValue (Math.random()): {randomValue}</p>
          <p className="text-[12px]">randomNumber(mathRandom*randomColorClasses.length): {randomNumber}</p>
          <p>randomIndex (Math.floor(random)): {randomIndex}</p> */}
          <button className="btn btn-neutral" onClick={changeColor}>Change Color </button>
        </div>
      </div>
    
    </>
  );
};
