import { useNavigate } from "react-router";

import DarkLogo from "../assets/easybankdark.svg";
import LightLogo from "../assets/easybanklight.svg";

import "./Logo.css";

const Logo = (props) => {

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <img
      src={props.colorMode === "dark" ? DarkLogo : LightLogo}
      alt="logo"
      className={props.className}
      onClick={navigateToHome}
    />
  );
};

export default Logo;
