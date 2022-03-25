import "./Community.scss";
import { MdSearch } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

function Community() {
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
        <h2>OR</h2>
        <button className="community__button">Ask a Question</button>
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
        <div className="community__card">
          <div className="community__card--left">
            <div className="community__card--icon"></div>
            <p className="community__card--text">Discussion</p>
          </div>
          <div className="community__card--right">
            <FaChevronRight className="community__card--arrow" />
            <p className="community__card--learn">Learn More</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Community;
