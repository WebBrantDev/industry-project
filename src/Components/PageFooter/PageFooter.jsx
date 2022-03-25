import { Link } from "react-router-dom";
import "./PageFooter.scss";
import home from "../../assets/icons/HomeMajor.svg";
import orders from "../../assets/icons/OrdersMajor.svg";
import products from "../../assets/icons/ProductsMajor.svg";
import store from "../../assets/icons/StoreMajor.svg";

const PageFooter = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav-container">
        <Link className="footer__link" to="/">
          <div className="footer__icon-container">
            <img className="footer__icon" src={home} alt="Home icon" />
            <p>Home</p>
          </div>
        </Link>
        <Link className="footer__link" to="/">
          <div className="footer__icon-container">
            <img className="footer__icon" src={orders} alt="Orders icon" />
            <p>Orders</p>
          </div>
        </Link>
        <Link className="footer__link" to="/">
          <div className="footer__icon-container">
            <img className="footer__icon" src={products} alt="Products icon" />
            <p>Products</p>
          </div>
        </Link>
        <Link className="footer__link" to="/">
          <div className="footer__icon-container">
            <img className="footer__icon" src={store} alt="Store icon" />
            <p>Store</p>
          </div>
        </Link>
      </nav>
    </footer>
  );
};

export default PageFooter;
