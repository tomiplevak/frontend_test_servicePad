import React from "react";
import { useMatch, useResolvedPath } from "react-router-dom";

import "./Rectangle.css";

const Rectangle = ({ to }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <hr className={isActive ? "rectangle rectangle__active" : "rectangle"} />
  );
};

export default Rectangle;
