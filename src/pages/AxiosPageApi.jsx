import { useEffect, useState } from "react";
import axios from "axios";

export const AxiosPageApi = () => {
  const [gitHubUsers, setGitHubUsers] = useState([]);
  const [gitError, setGitError] = useState("");
  const [eDeyLoad, setEDeyLoad] = useState(false);

  useEffect(() =>{
    getGitHubUsers()
  },[])



  const getGitHubUsers = () => {
 
    setEDeyLoad(true);
    setGitError("");
   
    axios
      .get("https://api.github.com/users")
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        setGitHubUsers(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log({error});
        console.log(error.response.status);
        console.log(error.response.data);
        setGitError(error.response.data.message);
      })
      .finally(function () {
        setEDeyLoad(false);
      });
  };


  return (
    <>
      <div>Axios Page: Working with apis (GET Request)</div>
      <button onClick={getGitHubUsers} className="btn bg-red-800">
        Get Users
      </button>

      <div>
 
        { gitError &&   <div className="text-red-800 font-bold text-5xl">{gitError}</div>}
        {gitHubUsers.map((user) => (
            <div
              className="flex items-center  space-x-4 bg-orange-600 m-4 p-2 text-white capitalize font-bold"
              key={user.id}
            >
              <img className="w-10 h-10 rounded-full" src={user.avatar_url} />
              <div>{user.login}</div>
            </div> ))}
                { eDeyLoad && <div className="text-red-800 font-bold text-5xl">Loading...</div>}
        {/* { gitHubUsers ? (
          <div className="text-red-800 font-bold text-5xl">Loading...</div>
        ) : gitError.length > 0 ? (
          <div className="text-red-800 font-bold text-5xl">{gitError}</div>
        ) : (
          gitHubUsers.map((user) => (
            <div
              className="flex items-center  space-x-4 bg-orange-600 m-4 p-2 text-white capitalize font-bold"
              key={user.id}
            >
              <img className="w-10 h-10 rounded-full" src={user.avatar_url} />
              <div>{user.login}</div>
            </div>
          ))
        )} */}
      </div>
    </>
  );
};
