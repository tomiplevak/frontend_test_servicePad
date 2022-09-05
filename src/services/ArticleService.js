import apiClient from "./axios";

export const getArticles = async () => {
  try {
    const response = await apiClient.get("/articles");
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const createNewArticle = async (newArticle) => {
  try {
    await apiClient.post("/articles", newArticle);
  } catch (e) {
    console.log(e);
  }
};

export const updateArticle = async (articleid,updatedArticle) => {
  try {
    await apiClient.put(`/articles/${articleid}`, updatedArticle);
  } catch (e) {
    console.log(e);
  }
};

export const deleteArticle = async (articleid) => {
  try {
    await apiClient.delete(`/articles/${articleid}`);
  } catch (e) {
    console.log(e);
  }
};

const ArticleService = {getArticles,createNewArticle, updateArticle, deleteArticle};

export default ArticleService;

