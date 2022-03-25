import "./PageHeader.scss";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { FaBatteryHalf } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class PageHeader extends Component {
  state = {
    goBack: false,
  };

  handleBack = (e) => {
    this.setState = {
      goBack: true,
    };
  };

  render() {
    if (this.state.goBack) {
      return <Redirect to="/" />;
    } else {
      return (
        <>
          <section className="header">
            <div className="header__container">
              <p className="header__time">5:42</p>
              <div className="header__container--right">
                <MdOutlineSignalCellularAlt className="phone-icon" />
                <FaWifi className="phone-icon" />
                <FaBatteryHalf className="phone-icon" />
              </div>
              <Link className="header__link">
                <FaChevronLeft
                  className="header__back"
                  onClick={this.handleBack}
                />
              </Link>
            </div>
            <h2 className="header__user-bold">Peer Support</h2>
          </section>
        </>
      );
    }
  }
}

export default PageHeader;
