import { useState } from "react";

export const ClassWorkTwo = () => {
    
    const [value, setValue] = useState(0);
    const [name, changer] = useState('Theodore');
    const [bgColor, changeBgColor] = useState("bg-blue-500");

    const claraIncrement = () => {
    let fValue = value;
      if (fValue<= 10) {
        fValue = fValue +1;
        setValue(fValue);
      }// 10 + 100 // 110 + 100`
      if(fValue === 4) {
        changeColor()
      }
    };
    const changeName = ()=>{
        changer(' Selem') 
      }

      const changeColor = ()=>{
        changeBgColor('bg-red-500') 
      }
  
  return (
    <>
    <div className={bgColor}>
        <div className="flex justify-center items-center h-screen "
      >
        <div className="flex flex-col items-center space-y-2">
          <h1 className=" text-5xl font-bold">Classwork</h1>
          {value >= 10 ? (
            <p className=" text-3xl font-bold">Completed</p>
          ) : (
            <p className=" text-3xl font-bold">{value}</p>
          )}
          <button className="btn btn-neutral" onClick={claraIncrement}>
            Counter {value}
          </button>
          <button className="btn btn-neutral" onClick={changeName}>Change Name: {name} </button>
        </div>
      </div>
    </div>
    
    </>
  );
};
