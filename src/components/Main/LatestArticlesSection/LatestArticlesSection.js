import { useNavigate, useLocation } from "react-router-dom";

import CTAButton from "../../../shared/CTAButton";
import Articles from "./Articles";

import "./LatestArticlesSection.css";

const LatestArticlesSection = () => {
  const navigate = useNavigate();
  const navigateToNewArticles = () => {
    navigate("/newArticle");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const location = useLocation();

  return (
    <section className="latestarticles">
      <div className="latestarticles_header">
        <h2 className="latestarticles_h2">Latest Articles</h2>
        {location.pathname === "/" && (
          <CTAButton
            text={"+ Add New Article"}
            className="button latestarticles_button"
            onClick={navigateToNewArticles}
          />
        )}
      </div>
      <Articles />
    </section>
  );
};

export default LatestArticlesSection;
