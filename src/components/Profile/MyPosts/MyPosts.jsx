import style from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={style.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
        <div>
          <button>Remove</button>
        </div>
      </div>
      <div className={style.posts}>
        <Post message='Hi, Naruto' like='4' />
        <Post message='Naruto-kun...' like='1' />
      </div>
    </div>
  );
};

export default MyPosts;
