import { Component } from "react";
import "./SuccessModal.scss";

class SuccessModal extends Component {
  state = {
    value: 3,
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      value,
    });
  };

  render() {
    return (
      <div className="success-modal">
        <div className="success-modal__content">
          <h2 className="success-modal__heading">
            How satisfied are you with the peer support you received today?
          </h2>
          <div className="success-modal__slider-container">
            <input
              className="success-modal__slider"
              name="slider"
              type="range"
              min="1"
              max="5"
              step="1"
              value={this.state.value}
              onChange={this.handleChange}
              id="myRange"
            />
            <div className="success-modal__num-container">
              <p className="success-modal__num">1</p>
              <p className="success-modal__num">5</p>
            </div>
          </div>
          <div className="success-modal__button-container">
            <button
              className="success-modal__button"
              onClick={this.props.handleClose}
            >
              Submit
            </button>
          </div>
          <p className="success-modal__text">Did you need more help?</p>
        </div>
      </div>
    );
  }
}

export default SuccessModal;
