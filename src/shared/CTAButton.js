import { useState } from "react";

import Button from "@mui/material/Button";

import "./CTAButton.css";

const CTAButton = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current);
    props.onClick();
  };

  return (
    <Button onClick={handleClick} variant="contained" className={props.className} style={{background: !isActive ? 'linear-gradient(90deg, #31CF70 4.85%, #2CB9CB 100%)' : 'linear-gradient(90deg, #84E1A7 4.85%, #81D6DB 100%)'}}>
      {props.text}
    </Button>
  );
};

export default CTAButton;
