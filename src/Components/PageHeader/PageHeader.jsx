import "./PageHeader.scss";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { FaBatteryHalf } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";

function PageHeader() {
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
        </div>
        <h2 className="header__user-bold">
          amycarringtion
          <VscTriangleDown className=" header__user-bold--arrow" />
        </h2>
        <p className="header__user">Amy Carrington</p>
      </section>
    </>
  );
}

export default PageHeader;
