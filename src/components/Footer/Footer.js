import React, { useState } from "react";

import CTAButton from "../../shared/CTAButton";
import Logo from "../../shared/Logo";

import FacebookIcon from "../../assets/media-icons/facebook-icon.svg";
import FacebookIconActive from "../../assets/media-icons/facebook-icon-active.svg";
import YoutubeIcon from "../../assets/media-icons/youtube-icon.svg";
import YoutubeIconActive from "../../assets/media-icons/youtube-icon-active.svg";
import TwitterIcon from "../../assets/media-icons/twitter-icon.svg";
import TwitterIconActive from "../../assets/media-icons/twitter-icon-active.svg";
import PinterestIcon from "../../assets/media-icons/pinterest-icon.svg";
import PinterestIconActive from "../../assets/media-icons/pinterest-icon-active.svg";
import InstagramIcon from "../../assets/media-icons/instagram-icon.svg";
import InstagramIconActive from "../../assets/media-icons/instagram-icon-active.svg";

import "./Footer.css";

const Footer = () => {
  const [isFacebookActive, setIsFacebookActive] = useState(false);
  const [isYoutubeActive, setIsYoutubeActive] = useState(false);
  const [isTwitterActive, setIsTwitterActive] = useState(false);
  const [isPinterestActive, setIsPinterestActive] = useState(false);
  const [isInstagramActive, setIsInstagramActive] = useState(false);

  const handleFacebookClick = () => {
    setIsFacebookActive((current) => !current);
    setIsYoutubeActive(false);
    setIsTwitterActive(false);
    setIsPinterestActive(false);
    setIsInstagramActive(false);
  };
  const handleYoutubeClick = () => {
    setIsYoutubeActive((current) => !current);
    setIsFacebookActive(false);
    setIsTwitterActive(false);
    setIsPinterestActive(false);
    setIsInstagramActive(false);
  };
  const handleTwitterClick = () => {
    setIsTwitterActive((current) => !current);
    setIsYoutubeActive(false);
    setIsFacebookActive(false);
    setIsPinterestActive(false);
    setIsInstagramActive(false);
  };
  const handlePinterestClick = () => {
    setIsPinterestActive((current) => !current);
    setIsYoutubeActive(false);
    setIsTwitterActive(false);
    setIsFacebookActive(false);
    setIsInstagramActive(false);
  };
  const handleInstagramClick = () => {
    setIsInstagramActive((current) => !current);
    setIsYoutubeActive(false);
    setIsTwitterActive(false);
    setIsPinterestActive(false);
    setIsFacebookActive(false);
  };

  return (
    <div className="footer">
      <div className="footer_leftsection">
        <div className="footer_leftsection_logos">
          <Logo
            className="logo footer_leftsection_logos_easybanklogo"
            colorMode="light"
          />
          <ul className="footer_leftsection_logos_mediaicons">
            <img
              onClick={handleFacebookClick}
              src={isFacebookActive ? FacebookIconActive : FacebookIcon}
              alt="facebook-icon"
            />
            <img
              onClick={handleYoutubeClick}
              src={isYoutubeActive ? YoutubeIconActive : YoutubeIcon}
              alt="youtube-icon"
            />
            <img
              onClick={handleTwitterClick}
              src={isTwitterActive ? TwitterIconActive : TwitterIcon}
              alt="twitter-icon"
            />
            <img
              onClick={handlePinterestClick}
              src={isPinterestActive ? PinterestIconActive : PinterestIcon}
              alt="pinterest-icon"
            />
            <img
              onClick={handleInstagramClick}
              src={isInstagramActive ? InstagramIconActive : InstagramIcon}
              alt="instagram-icon"
            />
          </ul>
        </div>
        <ul className="footer_leftsection_linkslist1">
          <a href="/" className="footer_leftsection_links">
            About us
          </a>
          <a href="/" className="footer_leftsection_links">
            Contact
          </a>
          <a href="/" className="footer_leftsection_links">
            Blog
          </a>
        </ul>
        <ul className="footer_leftsection_linkslist2">
          <a href="/" className="footer_leftsection_links">
            Careers
          </a>
          <a href="/" className="footer_leftsection_links">
            Support
          </a>
          <a href="/" className="footer_leftsection_links">
            Privacy Policy
          </a>
        </ul>
      </div>
      <div className="footer_rightsection">
        <CTAButton
          text={"Request Invite"}
          className="button footer_rightsection_button"
        />
        <p className="footer_rightsection_p">© Easybank. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
