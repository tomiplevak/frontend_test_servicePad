import { useState, useEffect, useCallback } from "react";
import { getArticles } from "../services/ArticleService";

import LatestArticlesSection from "../components/Main/LatestArticlesSection/LatestArticlesSection";
import NewArticleForm from "../components/Main/NewArticleSection/NewArticleForm";
import ArticlesTable from "../components/Main/NewArticleSection/ArticlesTable";

import "./NewArticle.css";

const NewArticle = () => {
  const [editedArticle, setEditedArticle] = useState(undefined);

  const [articles, setArticles] = useState([]);

  const setArticleInEdition = (article) => {
    setEditedArticle(article);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const loadArticles = useCallback(() => {
    getArticles().then((response) => {
      const articles = response.data;
      articles.forEach((article) => {
        article.date = new Date(article.date).toLocaleDateString();
      });
      setArticles(response.data);
    });
  },[])

  useEffect(() => {
    loadArticles()
  }, [loadArticles]);

  return (
    <>
      <section className="newarticle">
        <h2 className="newarticle_h2">Add New Blog Article</h2>
        <p className="newarticle_p">
          Publish a new blog article to feature in the Easybank homepage.
        </p>
        <NewArticleForm editedArticle={editedArticle} refetchArticles={loadArticles}/>
        <h2 className="newarticle_h2">Previous Articles</h2>
        <p className="newarticle_p">
          Review and edit previous blog posts published on to the homepage.
        </p>
        <div className="newarticle_tablecontainer">
          <ArticlesTable onEditArticle={setArticleInEdition} articles={articles} />
        </div>
      </section>
      <LatestArticlesSection />
    </>
  );
};

export default NewArticle;
