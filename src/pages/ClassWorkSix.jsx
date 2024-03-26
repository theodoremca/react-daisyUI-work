import { useState } from "react";
import { ColorC } from "../components/ColorC";
import { ColorCWithChildren } from "../components/ColorWithChildren";


export const ClassWorkSix = () => {
  const [bgColor, changeBgColor] = useState("bg-blue-500");
  const randomColorClasses = [
      { id: "color-0", color: "bg-teal-600", name: "Teal" },
      { id: "color-1", color: "bg-gray-100", name: "Gray" },
      { id: "color-2", color: "bg-teal-800", name: "Dark Teal" },
      { id: "color-3", color: "bg-yellow-600", name: "Yellow" },
      { id: "color-4", color: "bg-pink-500", name: "Pink" },
      { id: "color-5", color: "bg-purple-900", name: "Dark Purple" },
      { id: "color-6", color: "bg-yellow-400", name: "Light Yellow" },
      { id: "color-7", color: "bg-blue-900", name: "Dark Blue" },
      { id: "color-8", color: "bg-blue-100", name: "Light Blue" },
      { id: "color-9", color: "bg-pink-400", name: "Light Pink" },
      { id: "color-10", color: "bg-indigo-800", name: "Indigo" },
      { id: "color-11", color: "bg-red-900", name: "Dark Red" },
      { id: "color-12", color: "bg-green-600", name: "Green" },
      { id: "color-13", color: "bg-green-500", name: "Light Green" },
      { id: "color-14", color: "bg-purple-600", name: "Purple" },
  ]
.map(
 (item)=>({textColor: item.color.replace('bg','text'),...item}));

//   let A = [
//     {name:"clara", os:'Ubunto'},
//     {name:"Shelby", os:'Windows'},
//     {name:"Salem", os:'Mac'},
// ].map((x)=>({...x,sen:`${x.name} ${x.os} PC`, osStringLength: x.os.length}))

// console.log(A)
  // (item)=>({textColor: item.color.replace('bg','text'),other:item}));

    console.log(randomColorClasses);
  const changeColor = () => {
    changeBgColor(
      randomColorClasses[Math.floor(Math.random() * randomColorClasses.length)]
        .color
    );
  };

  return (
    <>
      <div className={`flex justify-center items-center h-screen ${bgColor}`}>
        <div className="flex flex-col items-center space-y-2">
          {
            randomColorClasses.map((x)=>
             <ColorCWithChildren key={x.id} bgColor={x.color}>
                      <div className={`bg-gray-800 px-2 rounded ${x.textColor}`}>
                        {x.name}
                      </div>
            </ColorCWithChildren >)
          }

          <button className="btn btn-neutral" onClick={changeColor}>
            Change Color{" "}
          </button>
        </div>
      </div>
    </>
  );
};

