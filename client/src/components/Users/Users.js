import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import styles from "./Users.module.css";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import ErrorModal from "../UI/ErrorModal";

import { editTask, deleteTask } from "../../service/api";

const Users = (props) => {
  const [modal, setModal] = useState(false);
  const [error, setError] = useState();

  const [enteredTask, setenteredUsername] = useState(props.user_task);
  const [enteredDate, setenteredAge] = useState(props.user_deadline);

  const usernamechangehandler = (event) => {
    setenteredUsername(event.target.value);
  };

  const agechangehandler = (event) => {
    setenteredAge(event.target.value);
  };

  const toggle = () => {
    setModal(!modal);
    console.log(props.id);
  };

  const deletehandler = async () => {
    await deleteTask(props.id);
  };

  const errorHandler = () => {
    setError(null);
  };

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

    let obj = {
      _id: props.id,
      task: enteredTask,
      deadline: enteredDate.toString(),
    };

    let res = await editTask(obj, props.id);

    

    setenteredAge(null);
    setenteredUsername("");
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
      <div>
        <li>{props.children}</li>
        <div className={styles.operations}>
          <div onClick={deletehandler} className={styles.con}>
            <FontAwesomeIcon style={{ color: "#474646" }} icon={faTrash} />
          </div>
          <div onClick={toggle}>
            <FontAwesomeIcon style={{ color: "#474646" }} icon={faEdit} />
          </div>
        </div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Edit Your Task</ModalHeader>
          <ModalBody>
            <form className={styles.input} onSubmit={onsubmithandler}>
              <label htmlFor="username"> Task</label>
              <input
                id="Task"
                type="text"
                placeholder="Add Task"
                value={enteredTask}
                onChange={usernamechangehandler}
              ></input>
              <label htmlFor="age"> Deadline (Date) </label>
              <input
                id="date"
                type="date"
                value={enteredDate}
                onChange={agechangehandler}
              ></input>
              <Button onClick={toggle} type="submit">Edit Task</Button>
            </form>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default Users;
