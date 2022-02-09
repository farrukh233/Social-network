import React from "react";
import style from "./ProfileInfo.module.scss";
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src='https://assets.change.org/photos/3/iz/ca/rcizcAGRdaYQqvC-800x450-noPad.jpg?1576795217'
          alt='Пикча'></img>
      </div>
      <div className={style.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
