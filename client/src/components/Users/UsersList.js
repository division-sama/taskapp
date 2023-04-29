import React from "react";
import Card from "../UI/Card";
import Users from "./Users";
import styles from "./Userlist.module.css";

const UsersList = (props) => {

  const updatedata = (data) => {
    props.editdata({...data});
  }

  let jsd = (
    <ul>
      {props.tasks.map((user) => (
        <Users updatedata={updatedata} key={user._id} id={user._id} onDLT={props.onDelete} user_task = {user.task} user_deadline={user.deadline}>
          {" "}
          {user.task} ({user.deadline})
        </Users>
      ))}
    </ul>
  );

  if (props.tasks.length === 0) jsd = <div />;

  return <Card className={styles.users}>{jsd}</Card>;
};

export default UsersList;
