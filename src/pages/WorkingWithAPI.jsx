import { useState } from "react";
import { dbData } from "./dt";

export const WorkinigWithAPI = () => {

  const [gProfile, changeGProfile] = useState(dbData);
  return (
    <>
      <div className="flex h-screen w-full justify-center items-center">
        <div className="bg-amber-900">
          <img src={gProfile.avatar_url} alt="" />
          <p className="text-3xl">{gProfile.login}</p>
          <a className="btn bg-red-900" 
          href={gProfile.html_url} 
          rel="noreferrer" 
          target="_blank"> Visit my Profile</a>
        </div>
      </div>
    </>
  );
};
