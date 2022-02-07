import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src='https://assets.change.org/photos/3/iz/ca/rcizcAGRdaYQqvC-800x450-noPad.jpg?1576795217'
          alt='Пикча'></img>
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
