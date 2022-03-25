import "./PeerProfile.scss";
import Jamie from "../../assets/images/1.png";
import Adrienne from "../../assets/images/2.png";
import Cyrus from "../../assets/images/3.png";
import Paola from "../../assets/images/4.png";
import videocam from "../../assets/icons/Videocam.svg";
import chat from "../../assets/icons/ChatMajor.svg";
import store from "../../assets/icons/StoreMajor.svg";
import { Component } from "react";
import SuccessModal from "../../Components/SuccessModal/SuccessModal";

class PeerProfile extends Component {
  state = {
    showModal: false,
    isLoaded: false,
    id: 0,
    peers: [
      {
        id: 0,
        name: "Jamie Kawata",
        pronouns: "They / Them",
        location: "Osaka, Japan",
        demo: "Demograpic: 25-34",
        img: Jamie,
        store: "Wishful Candles",
        story:
          "I have been using Shopify for over 5 years and have been through all the ups and downs. When I first started with Shopify, I had no idea what I was doing and wanted to quit numerous times. I wish I had the support and community it does now, but at least I can help others who are feeling the same desire to succeed and support them along the way. Please feel free to reach out, I’d love to help!",
      },
      {
        id: 1,
        name: "Adrienne Wan",
        pronouns: "She / Her",
        location: "Toronto, Canada",
        demo: "Demographic: 36-44",
        img: Adrienne,
        store: "",
        story: "",
      },
      {
        id: 2,
        name: "Cyrus Price",
        pronouns: "He / Him",
        location: "San Francisco, USA",
        demo: "Demographic: 25-34",
        img: Cyrus,
        store: "",
        story: "",
      },
      {
        id: 3,
        name: "Paola Diaz",
        pronouns: "She / Her",
        location: "Montevideo, Uruguay",
        demo: "Demographic: 39-51",
        img: Paola,
        store: "",
        story: "",
      },
    ],
  };

  componentDidMount() {
    this.setState({
      id: this.props.match.params.id,
      isLoaded: true,
    });
  }

  showModal = () => {
    this.setState({
      showModal: true,
    });
  };

  hideModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section className="peer-profile">
          <div className="peer-profile__img-container">
            <img
              className="peer-profile__img"
              src={this.state.peers[this.state.id].img}
              alt={this.state.peers[this.state.id].name}
            />
          </div>
          <div className="peer-profile__heading-container">
            <h1 className="peer-profile__heading">
              {this.state.peers[this.state.id].name}
            </h1>
            <div className="peer-profile__icon-container">
              <div className="peer-profile__icon-bg">
                <img
                  className="peer-profile__icon"
                  src={chat}
                  alt="chat icon"
                />
              </div>
              <div className="peer-profile__icon-bg">
                <img
                  className="peer-profile__icon"
                  src={videocam}
                  alt="video camera icon"
                />
              </div>
            </div>
          </div>
          <div className="peer-profile__info-container">
            <p className="peer-profile__info">
              {this.state.peers[this.state.id].pronouns}
            </p>
            <p className="peer-profile__info">
              {this.state.peers[this.state.id].location}
            </p>
            <p className="peer-profile__info">
              {this.state.peers[this.state.id].demo}
            </p>
            <div className="peer-profile__store-container">
              <img
                className="peer-profile__store-icon"
                src={store}
                alt="store icon"
              />
              <p className="peer-profile__info">
                Shopify Store:{" "}
                <span className="peer-profile__highlight ">
                  {this.state.peers[this.state.id].store}
                </span>
              </p>
            </div>
            <p className="peer-profile__story">
              {this.state.peers[this.state.id].story}
            </p>
          </div>
          {!this.state.showModal || (
            <SuccessModal handleClose={this.hideModal} />
          )}
        </section>
      );
    }
  }
}

export default PeerProfile;
