import { useState } from "react";
import { dbDatas } from "./dt";
import { GitUser } from "./GitUser";

// const runners = ['chidi', "Engr Precilia", "Ikem"]
// const [leader] =['chidi', "Engr Precilia"]
// console.log({leader})
export const WorkinigWithAPIArray = () => {
  const [gProfileAll, changeGProfileAll] = useState(dbDatas);

  return (
    <>
      <div className="flex  justify-center flex-wrap">
        {gProfileAll.map((thief) => {
          return (
            <GitUser key={thief.id} thief={thief}/>
          );
        })}
      </div>
    </>
  );
};
