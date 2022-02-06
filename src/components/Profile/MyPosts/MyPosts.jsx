import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi, Naruto' like='4' />
        <Post message='Naruto-kun...' like='1' />
      </div>
    </div>
  );
};

export default MyPosts;
