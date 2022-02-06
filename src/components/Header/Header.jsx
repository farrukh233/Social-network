import s from "./Header.module.css";
import logo from "../Header/naruto_logo.png";

const Header = () => {
  return (
    <header className={s.header}>
      <img src={logo} alt='Лого'></img>
    </header>
  );
};

export default Header;
