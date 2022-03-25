import "./SuccessModal.scss";

const SuccessModal = () => {
  return (
    <div className="success-modal">
      <div className="success-modal__content">
        <h2 className="success-modal__heading">
          How satisfied are you with the peer support you received today?
        </h2>
        <div className="success-modal__slider-container">
          <input type="range" min="1" max="5" value="3" id="myRange" />
        </div>
        <div className="success-modal__button-container">
          <button className="success-modal__button">Submit</button>
        </div>
        <p className="success-modal__text">Did you need more help?</p>
      </div>
    </div>
  );
};

export default SuccessModal;
