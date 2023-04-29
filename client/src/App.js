import React, { useState, useCallback, useEffect } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import Login from "./components/login/Login";
import { getUsers } from "./service/api";

function App() {
  const [alltask, setAlltask] = useState([]);

  const [localTask, setLocalTask] = useState([]);

  const dataUpdate = (data) => {
    setAlltask(() => {
      return [...alltask, data];
    });
  };

  // const editdata = (data) => {
  //   let filtered = alltask.filter(item => item._id !== data._id);
  //   console.log("this is all task before",filtered);
  //   setAlltask(()=>{return [...filtered,data]});
  //   console.log("this is final",alltask);
  // }

  const getAlltask = useCallback(async () => {
    let alltaskserver = await getUsers();
    setAlltask(alltaskserver.data);
    console.log(alltask);
    console.log("no of times the button clicked", "jawd");
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      getAlltask();
    }, 2000);
    console.log("render");
    return () => clearInterval(intervalId);
  }, [getAlltask]);

  return (
    <div>
      {/* <Login></Login> */}
      <AddUser updatedata={dataUpdate}></AddUser>
      <UsersList tasks={alltask}></UsersList>
    </div>
  );
}

export default App;
