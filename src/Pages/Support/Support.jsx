import "./Support.scss";
import convo from "../../assets/images/PEER.png";
import { FaChevronRight } from "react-icons/fa";
import business from "../../assets/icons/capital.svg";
import channels from "../../assets/icons/channels.svg";
import marketing from "../../assets/icons/managed-store.svg";
import support from "../../assets/icons/smiley-happy.svg";

function Support() {
  return (
    <>
      <section className="support">
        <div className="support__wrapper">
          <h1 className="support__heading">Peer Support</h1>
          <p className="support__text">
            Your place to connect with brands and makers, <br></br>partners and
            commerce shakers<br></br>
            for all types of individual support.
          </p>
          <img
            className="support__convo"
            src={convo}
            alt="convo speech bubble"
          ></img>
          {/* individual cards */}
          <div className="community__card">
            <div className="community__card--left">
              <img
                className="community__card--icon"
                src={business}
                alt="icon"
              ></img>
              <p className="community__card--text">Business</p>
            </div>
            <div className="community__card--right">
              <FaChevronRight className="support__card--arrow" />
            </div>
          </div>
          {/* next card */}
          <div className="community__card">
            <div className="community__card--left">
              <img
                className="community__card--icon"
                src={channels}
                alt="icon"
              ></img>
              <p className="community__card--text">Logistics</p>
            </div>
            <div className="community__card--right">
              <FaChevronRight className="support__card--arrow" />
            </div>
          </div>
          {/* next card */}
          <div className="community__card">
            <div className="community__card--left">
              <img
                className="community__card--icon"
                src={marketing}
                alt="icon"
              ></img>
              <p className="community__card--text">Marketing</p>
            </div>
            <div className="community__card--right">
              <FaChevronRight className="support__card--arrow" />
            </div>
          </div>
          {/* next card */}
          <div className="community__card">
            <div className="community__card--left">
              <img
                className="community__card--icon"
                src={support}
                alt="icon"
              ></img>
              <p className="community__card--text">Emotional Support</p>
            </div>
            <div className="community__card--right">
              <FaChevronRight className="support__card--arrow" />
            </div>
          </div>
          {/* next card */}
        </div>
      </section>
    </>
  );
}

export default Support;
