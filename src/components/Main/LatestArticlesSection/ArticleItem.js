import { useState } from "react";

import "./ArticleItem.css";

const ArticleItem = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <div onClick={handleClick} className="article">
      <img
        src={props.data.image_url}
        alt="article_img"
        className="article_img"
      />
      <p className="article_author">By {props.data.author}</p>
      <h3
        className="article_title"
        style={{ color: isActive ? "#77BDA3" : "#2d314e" }}
      >
        {props.data.title}
      </h3>
      <p className="article_content">{props.data.content}</p>
    </div>
  );
};

export default ArticleItem;
