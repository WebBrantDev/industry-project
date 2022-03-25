import "./Peer.scss";
import Jamie from "../../assets/images/1.png";
import Adrienne from "../../assets/images/2.png";
import Cyrus from "../../assets/images/3.png";
import Paola from "../../assets/images/4.png";
import filter from "../../assets/icons/FilterMajor.svg";
import PeerCard from "../../Components/PeerCard/PeerCard";

const Peer = () => {
  const peers = [
    {
      id: 0,
      name: "Jamie Kawata",
      pronouns: "They / Them",
      location: "Osaka, Japan",
      demo: "Demograpic: 25-34",
      img: Jamie,
    },
    {
      id: 1,
      name: "Adrienne Wan",
      pronouns: "She / Her",
      location: "Toronto, Canada",
      demo: "Demographic: 36-44",
      img: Adrienne,
    },
    {
      id: 2,
      name: "Cyrus Price",
      pronouns: "He / Him",
      location: "San Francisco, USA",
      demo: "Demographic: 25-34",
      img: Cyrus,
    },
    {
      id: 3,
      name: "Paola Diaz",
      pronouns: "She / Her",
      location: "Lima, Peru",
      demo: "Demographic: 45-54",
      img: Paola,
    },
  ];

  return (
    <div className="peer">
      <section className="peer__header">
        <div className="peer__subheading-container">
          <h3 className="peer__subheading">Peers</h3>
          <img className="peer__icon" src={filter} alt="Filter icon" />
        </div>
      </section>
      <section className="peer__card-container">
        {peers.map((peer) => {
          return <PeerCard key={peer.id} peer={peer} />;
        })}
      </section>
    </div>
  );
};

export default Peer;
