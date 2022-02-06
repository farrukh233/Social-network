import s from "./Post.module.css";

const Post = props => {
  return (
    <div className={s.item}>
      <img
        src='http://static4.wikia.nocookie.net/__cb20131019150545/naruto/es/images/thumb/a/a0/Gaara_Capitan.png/300px-Gaara_Capitan.png'
        alt='gaara'
      />
      {props.message}
      <div>
        <span>Like {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
