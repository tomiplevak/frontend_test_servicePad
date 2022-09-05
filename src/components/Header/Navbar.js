import React from "react";

import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Rectangle from "./Rectangle";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <ul className="ul">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/blog">Blog</CustomLink>
        <CustomLink to="/careers">Careers</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className="customlink">
      <Link
        to={to}
        className={isActive ? "links links__active" : "links"}
        {...props}
      >
        {children}
      </Link>
      <Rectangle to={to} {...props} />
    </li>
  );
}

export default Navbar;
