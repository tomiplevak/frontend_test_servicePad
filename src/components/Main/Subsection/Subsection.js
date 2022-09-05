import Frame from "./Frame";

import frame1logo from '../../../assets/frame-logos/frame1logo.svg'
import frame2logo from '../../../assets/frame-logos/frame2logo.svg'
import frame3logo from '../../../assets/frame-logos/frame3logo.svg'
import frame4logo from '../../../assets/frame-logos/frame4logo.svg'
import "./Subsection.css";

const Subsection = () => {
  return (
    <section className="subsection">
      <h2 className="subsection_h2">Why choose Easybank?</h2>
      <p className="subsection_p">
        We leverage Open Banking to turn your bank acount into your financial
        hub. Control your finances like never before.
      </p>
      <div className="frames">
        <Frame
          logosrc={frame1logo}
          title={"Online Banking"}
          paragraph={
            "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world. "
          }
        />
        <Frame
          logosrc={frame2logo}
          title={"Simple Budgeting"}
          paragraph={
            "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
          }
        />
        <Frame
          logosrc={frame3logo}
          title={"Fast Onboarding"}
          paragraph={
            "We don’t do branches. Open your account in minutes online and start taking control of your finances right away. "
          }
        />
        <Frame
          logosrc={frame4logo}
          title={"Open API"}
          paragraph={
            "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier. "
          }
        />
      </div>
    </section>
  );
};

export default Subsection;
