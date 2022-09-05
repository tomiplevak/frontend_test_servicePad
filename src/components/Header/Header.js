import React from "react";

import Navbar from "./Navbar";
import CTAButton from "../../shared/CTAButton";
import Logo from "../../shared/Logo";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Logo className="logo header_logo" colorMode="dark" />
      <Navbar />
      <CTAButton className="button header_button" text={"Request Invite"} />
    </header>
  );
};

export default Header;
