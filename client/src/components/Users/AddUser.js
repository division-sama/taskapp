import React, { useState, } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import { addUser} from "../../service/api";

const AddUser = (props) => {

  const [enteredTask, setenteredUsername] = useState("");
  const [enteredDate, setenteredAge] = useState(null);
  const [error, setError] = useState();


  const onsubmithandler = async (event) => {
    event.preventDefault();

    console.log(enteredDate);

    if (enteredTask.trim().length === 0 || enteredDate === null) {
      setError({
        title: "Invalid input",
        message: "Please Enter a Valid Task and Date (non-empty values).",
      });
      return;
    }

    // let today = new Date();
    
    // let cyear = +today.getFullYear();
    // let cmonth = +today.getMonth() +1;
    // let cdate = +today.getDate();

    // let eyear = +enteredDate.slice(0,4);
    // let emonth = +enteredDate.slice(5,7);
    // let edate = +enteredDate.slice(8,10);
  
    // if (eyear < cyear) {
    //   setError({
    //     title: "Invalid Year",
    //     message: "Please enter a valid input.",
    //   });
    //   return;
    // }
    
    // if (eyear === cyear && emonth < cmonth) {
    //   setError({
    //     title: "Invalid Month",
    //     message: "Please enter a valid input.",
    //   });
    //   return;
    // }
    
    // if(eyear === cyear && emonth === cmonth && edate < cdate ) {
    //   setError({
    //     title: "Invalid Date",
    //     message: "Please enter a valid input.",
    //   });
    //   return;
    // }

    const obj = {
      task:enteredTask,
      deadline:enteredDate.toString(),
    }

    await addUser(obj);

    setenteredAge(null);
    setenteredUsername("");
  };

  const usernamechangehandler = (event) => {
    setenteredUsername(event.target.value);
  };

  const agechangehandler = (event) => {
    setenteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={onsubmithandler}>
          <label htmlFor="username"> Task</label>
          <input
            id="Task"
            type="text"
            value={enteredTask}
            placeholder="Add Task"
            onChange={usernamechangehandler}
          ></input>
          <label htmlFor="age"> Deadline (Date) </label>
          <input
            id="date"
            type="date"
            onChange={agechangehandler}
          ></input>
          <Button type="submit">Add Task</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
