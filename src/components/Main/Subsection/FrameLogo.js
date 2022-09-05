import "./FrameLogo.css";

const FrameLogo = (props) => {
  return (
    <div className="framelogo">
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="framelogo_ball"
      >
        <path
          d="M36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72Z"
          fill="url(#paint0_linear_1_2965)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_2965"
            x1="0"
            y1="0"
            x2="71.6976"
            y2="71.6976"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#33D35E" />
            <stop offset="1" stopColor="#2AB6D9" />
          </linearGradient>
        </defs>
      </svg>
      <img src={props.logosrc} alt="logo" className="framelogo_logo" />
    </div>
  );
};

export default FrameLogo;
