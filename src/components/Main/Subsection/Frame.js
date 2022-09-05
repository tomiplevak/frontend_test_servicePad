import FrameLogo from "./FrameLogo";
import "./Frame.css";

const Frame = (props) => {
  return (
    <div className="frame">
      <FrameLogo logosrc={props.logosrc} />
      <h3 className="frame_title">{props.title}</h3>
      <p className="frame_p">{props.paragraph}</p>
    </div>
  );
};

export default Frame;
