import { Link } from "react-router-dom";
import "./PeerCard.scss";

const PeerCard = (peer) => {
  console.log(peer);
  const { id, name, pronouns, location, demo, img } = peer.peer;
  return (
    <Link to={`/peer/${id}`}>
      <div className="peer__card">
        <div className="peer__card-info-container">
          <h2>{name}</h2>
          <p>{pronouns}</p>
          <p>{location}</p>
          <p>{demo}</p>
        </div>
        <div className="peer__card-img-container">
          <img src={img} alt={`${name} profile`} />
        </div>
      </div>
    </Link>
  );
};

export default PeerCard;
