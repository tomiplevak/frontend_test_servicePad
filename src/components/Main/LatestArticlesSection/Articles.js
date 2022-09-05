import { useState, useEffect } from "react";
import { getArticles } from "../../../services/ArticleService";
import ArticleItem from "./ArticleItem";

import "./Articles.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((response) => {
      setArticles(response);
    });
  }, []);

  const latestArticles = articles?.data?.slice(-4);

  return (
    <div className="articles">
      {latestArticles?.map((article) => (
        <ArticleItem key={article.id} data={article} />
      ))}
    </div>
  );
};

export default Articles;
