import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import {
  createNewArticle,
  updateArticle,
} from "../../../services/ArticleService";
import { TextField, Button } from "@mui/material";
import * as yup from "yup";

import "./NewArticleForm.css";

const NewArticleForm = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [articleInEdition, setArticleInEdition] = useState(props.editedArticle);

  useEffect(() => {
    setArticleInEdition(props.editedArticle);
  }, [props]);

  const validationSchema = yup.object({
    author: yup
      .string()
      .required("Author is required")
      .min(3, "Author should be of minimum 3 characters length")
      .max(50, "Author should be of maximum 50 characters length"),
    blogTitle: yup
      .string()
      .min(3, "Title should be of minimum 3 characters length")
      .max(50, "Title should be of maximum 50 characters length")
      .required("Title is required"),
    blogContent: yup
      .string()
      .min(3, "Content should be of minimum 3 characters length")
      .max(50, "Content should be of maximum 50 characters length")
      .required("Content is required"),
  });

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <div className="form-container">
      <div className="form">
        <Formik
          initialValues={{
            author: articleInEdition?.author || "",
            blogTitle: articleInEdition?.title || "",
            blogContent: articleInEdition?.content || "",
          }}
          onSubmit={async (values, actions) => {
            if (articleInEdition) {
              await updateArticle(articleInEdition.id, {
                author: values.author,
                content: values.blogContent,
                title: values.blogTitle,
              });
            } else {
              await createNewArticle({
                author: values.author,
                content: values.blogContent,
                title: values.blogTitle,
              });
            }
            props.refetchArticles();
            setArticleInEdition(undefined);
            actions.resetForm();
          }}
          enableReinitialize={true}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <Form>
              <label htmlFor="author">Author</label>
              <TextField
                fullWidth
                margin="dense"
                id="author"
                name="author"
                value={formik.values.author}
                onChange={formik.handleChange}
                error={formik.touched.author && Boolean(formik.errors.author)}
              />
              {formik.errors.author && formik.touched.author && (
                <div className="form_error">{formik.errors.author}</div>
              )}
              <div className="form_label">
                <label htmlFor="blogTitle">Blog Title</label>
              </div>
              <TextField
                fullWidth
                margin="dense"
                id="blogTitle"
                name="blogTitle"
                value={formik.values.blogTitle}
                onChange={formik.handleChange}
                error={
                  formik.touched.blogTitle && Boolean(formik.errors.blogTitle)
                }
              />
              {formik.errors.blogTitle && formik.touched.blogTitle && (
                <div className="form_error">{formik.errors.blogTitle}</div>
              )}
              <div className="form_label">
                <label htmlFor="blogContent">Blog Content</label>
              </div>
              <TextField
                multiline
                rows={13}
                fullWidth
                margin="dense"
                id="blogContent"
                name="blogContent"
                value={formik.values.blogContent}
                onChange={formik.handleChange}
                error={
                  formik.touched.blogContent &&
                  Boolean(formik.errors.blogContent)
                }
              />
              {formik.errors.blogContent && formik.touched.blogContent && (
                <div className="form_error">{formik.errors.blogContent}</div>
              )}
              <Button
                onClick={handleClick}
                fullWidth
                variant="contained"
                type="submit"
                sx={{
                  borderRadius: "47px",
                  background: isActive
                    ? "linear-gradient(90deg, #84E1A7 4.85%, #81D6DB 100%)"
                    : "linear-gradient(90deg, #31CF75 0%, #2DBBC6 100%)",
                  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                  mt: "33px",
                }}
              >
                <p className="form_savebutton">Save</p>
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewArticleForm;
