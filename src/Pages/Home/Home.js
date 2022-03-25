import "./Home.scss";
import { MdSearch } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import discussion from "../../assets/icons/discussion.svg";
import groups from "../../assets/icons/Frame44.svg";
import events from "../../assets/icons/calendar.svg";
import blogs from "../../assets/icons/text-block.svg";
import peer from "../../assets/icons/customer-plus.svg";

function Home() {
  return (
    <>
      <section className="community">
        <h1 className="community__heading">
          Join the conversation.<br></br>Find a community.
        </h1>
        <div className="community__search--container">
          <MdSearch className="community__search--icon" />
          <input
            className="community__search"
            type="search"
            name="search"
            placeholder="Search the Community..."
          ></input>
        </div>
        <h2 className="community__sub-heading">OR</h2>
        <div className="community__button--container">
          <button className="community__button">Ask a Question</button>
        </div>
        <div className="community__stats-container">
          <div className="community__stats-container--left">
            <p className="community__stat">959312</p>
            <p className="community__text">Members</p>
          </div>
          <div className="community__stats-container--right">
            <p className="community__stat">38031</p>
            <p className="community__text">Users Online</p>
          </div>
        </div>
        {/* individual cards */}
        <div className="community__card-container">
          <div className="community__card">
            <div className="community__card--left">
              <img
                className="community__card--icon"
                src={discussion}
                alt="discussion icon"
              ></img>
              <p className="community__card--text">Discussion</p>
            </div>
            <div className="community__card--right">
              <p className="community__card--learn">Learn More</p>
              <FaChevronRight className="community__card--arrow" />
            </div>
          </div>
          <div className="community__card">
            <div className="community__card--left">
              <img
                className="community__card--icon"
                src={groups}
                alt="groups icon"
              ></img>
              <p className="community__card--text">Groups</p>
            </div>
            <div className="community__card--right">
              <p className="community__card--learn">Learn More</p>
              <FaChevronRight className="community__card--arrow" />
            </div>
          </div>
          <div className="community__card">
            <div className="community__card--left">
              <img
                className="community__card--icon"
                src={events}
                alt="event icon"
              ></img>
              <p className="community__card--text">Events</p>
            </div>
            <div className="community__card--right">
              <p className="community__card--learn">Learn More</p>
              <FaChevronRight className="community__card--arrow" />
            </div>
          </div>
          <div className="community__card">
            <div className="community__card--left">
              <img
                className="community__card--icon"
                src={blogs}
                alt="blog icon"
              ></img>
              <p className="community__card--text">Blogs</p>
            </div>
            <div className="community__card--right">
              <p className="community__card--learn">Learn More</p>
              <FaChevronRight className="community__card--arrow" />
            </div>
          </div>
          <div className="community__card">
            <div className="community__card--left">
              <img
                className="community__card--icon"
                src={peer}
                alt="peers icon"
              ></img>
              <p className="community__card--text">Peer Support</p>
            </div>
            <div className="community__card--right">
              <p className="community__card--learn">Learn More</p>
              <FaChevronRight className="community__card--arrow" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
