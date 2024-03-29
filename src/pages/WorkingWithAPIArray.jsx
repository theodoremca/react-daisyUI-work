import { useState } from "react";
import { dbDatas } from "./dt";
import { GitUser } from "../components/workingWithApiArray/GitUser";

// const runners = ['chidi', "Engr Precilia", "Ikem"]
// const [leader] =['chidi', "Engr Precilia"]
// console.log({leader})
export const WorkinigWithAPIArray = () => {
  const [gProfileAll, changeGProfileAll] = useState(dbDatas);
  const [query, changeQuery] = useState("");
  const [isListView, changeisListView] = useState(false);

  return (
    <>
      <div className="flex flex-col  mb-10  space-y-4  sticky top-0  w-full z-10 bg-slate-950 py-10">
        <div className="flex gap-3 justify-center items-center px-10 ">
          <input
            onChange={(e) => changeQuery(e.target.value)}
            type="text"
            placeholder="Search for User"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn">
            Liked Users
            <div className="badge">
              {gProfileAll.filter((user) => user.liked).length}
            </div>
          </button>
          <button onClick={()=>changeisListView(!isListView)} className="btn">
            Toggle View

          </button>
        </div>
        <div>
          <div className="px-10 flex flex-wrap gap-6">
            {gProfileAll
              .filter((user) => user.liked)
              .map((item) => (
                <button key={item.id} onClick={() => {
                  changeGProfileAll(
                    gProfileAll.map((user) =>
                      user.id == item.id ? { ...user, liked: !user.liked } : user
                    )
                  );
                }} className="btn">
                  {item.login}
                  <div className="badge w-6 h-6">
                    
                    x
                  </div>
                </button>
              ))}
          </div>
        </div>
      </div>
      <div className="flex  justify-center flex-wrap">
        {gProfileAll
          .filter((user) =>
            query.length == 0
              ? true
              : user.login.toLowerCase().startsWith(query.toLowerCase())
          )
          .map((thief) => {
            return (
              <GitUser
                key={thief.id}
                thief={thief}
                isListView={isListView}
                toggle={(id) => {
                  changeGProfileAll(
                    gProfileAll.map((user) =>
                      user.id == id ? { ...user, liked: !user.liked } : user
                    )
                  );
                }}
              />
            );
          })}
      </div>
    </>
  );
};
