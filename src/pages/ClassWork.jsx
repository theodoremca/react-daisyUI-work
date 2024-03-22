import { useState } from "react";

export const ClassWork = () => {
    
    const [value, setValue] = useState(0);
    const [name, changer] = useState('Theodore');

    const claraIncrement = () => {
      if (value <= 10) setValue(value + 1); // 10 + 100 // 110 + 100`
      if(value+1 ===4) {
        document.body.style.background='red';
      }
    };
    const changeName = ()=>{
        changer(' Selem') 
      }
  
  return (
    <>
      <div className="flex justify-center items-center h-screen">
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
    </>
  );
};
