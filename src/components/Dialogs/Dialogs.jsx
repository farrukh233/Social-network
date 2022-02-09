import React from "react";
import style from "./Dialogs.module.scss";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={style.dialog + " " + style.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={style.message}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div>
      <div className={style.dialogs}>
        <div className={style.dialogsItems}>
          <DialogItem name='Farrukh' id='1' />
          <DialogItem name='Farukh1' id='2' />
          <DialogItem name='Farrukh2' id='3' />
          <DialogItem name='Farrukh3' id='4' />
          <DialogItem name='Farrukh4' id='5' />
        </div>
        <div className={style.messages}>
          <Message message='Hello' />
          <Message message='Whasup?' />
          <Message message='GG!' />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
