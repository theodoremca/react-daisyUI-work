import { useState } from "react";
import axios from "axios";

export const ClassWorkTwo = () => {
  const [name, changer] = useState("Theodore");
  const [des, changeDes] = useState("Theodore");
  const [com, changeCom] = useState(false);

  const changeName = (e) => {
    changer(e.target.value);
  };

  const changeDescription = (e) => {
    changeDes(e.target.value);
  };
  const changeCompleted = (e) => {
    changeCom(e.target.value);
  };

  const addTodo = () => {
    axios
      .post("http://49.13.2.10:4000/todos/", {
        name: name,
        description: des,
        completed: com,
      })
      .then((res) => {
        console.log(res);
        alert("success");
      })
      .then((err) => {
        console.log(err);
        alert("error");
      });
  };

  return (
    <>
      <div>
        <input type="text" onChange={changeName} />
        <input type="text" onChange={changeDescription} />
        <input type="checkbox" onChange={changeCompleted} />
        <button onClick={addTodo} type="button">
          sumbit
        </button>
      </div>
    </>
  );
};
