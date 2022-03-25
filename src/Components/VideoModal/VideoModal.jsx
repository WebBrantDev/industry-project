import "./VideoModal.scss";
import callImage from "../../assets/images/M.png";
import exitCall from "../../assets/icons/exitVideo.svg";
import caller from "../../assets/images/C.png";
import videocam from "../../assets/icons/Videocam.svg";

const VideoModal = ({ hideVideo }) => {
  return (
    <div className="video-modal">
      <div className="video-modal__container">
        <img
          className="video-modal__call-image"
          src={callImage}
          alt="call recipient"
        />
        <img className="video-modal__caller-image" src={caller} alt="caller" />
        <img
          onClick={hideVideo}
          className="video-modal__exit-icon"
          src={exitCall}
          alt="exit icon"
        />
        <div className="video-modal__icon-bg">
          <img
            className="video-modal__icon"
            src={videocam}
            alt="video camera icon"
          />
        </div>
        <div className="video-modal__heading-container">
          <h1 className="video-modal__heading">Jamie Kawate</h1>
          <p className="video-modal__text">Duration 05:25min</p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
