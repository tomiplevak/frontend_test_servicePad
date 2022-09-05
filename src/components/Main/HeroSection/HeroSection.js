import CTAButton from "../../../shared/CTAButton";

import "./HeroSection.css";
import BgIntro from "./BgIntro";
import ImagesMockups from "./ImagesMockups";

const HeroSection = () => {
  return (
    <section className="herosection">
      <div className="herosection_intro">
        <h1 className="herosection_intro_h1">
          Next generation digital banking
        </h1>
        <p className="herosection_intro_p">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving. budgeting, investing, and much
          more.
        </p>
        <CTAButton
          text={"Request Invite"}
          className="button herosection_button"
        />
      </div>
      <div className="herosection_images">
        <BgIntro />
        <ImagesMockups />
      </div>
    </section>
  );
};

export default HeroSection;
