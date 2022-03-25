import { Link } from "react-router-dom";
import "./PeerCard.scss";

const PeerCard = (peer) => {
  const { id, name, pronouns, location, demo, img } = peer.peer;
  return (
    <Link to={`/peer/${id}`}>
      <div className="peer__card">
        <div className="peer__card-info-container">
          <h2 className="peer__card-heading">{name}</h2>
          <div className="peer__card-text-container">
            <p className="peer__card-text">{pronouns}</p>
            <p className="peer__card-text">{location}</p>
            <p className="peer__card-text">{demo}</p>
          </div>
        </div>
        <div className="peer__card-img-container">
          <img className="peer__card-img" src={img} alt={`${name} profile`} />
        </div>
      </div>
    </Link>
  );
};

export default PeerCard;
