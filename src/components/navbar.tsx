import React from "react";
import "../css/navbar.scss";
import Icon from"../images/react-icon.png"
type Props = {};

const navbar = (props: Props) => {
  return (
    <>
      <nav className="nav__brand">
        
        <div className="me-auto left-links">
          <ul className="nav__menu">
            <img id="react-icon" src={Icon} style={{height:"40px", width:"40px" }} alt=""/>
            <li className="nav__item" id="nav-menu-icon">
              <a id="nav-a" href="/" className="nav__link">
                Our Products
              </a>
            </li>
            <li className="nav__item">
              <a id="nav-a" href="/#" className="nav__link">
                FAQs
              </a>
            </li>
            <li className="nav__item">
              <a id="nav-a" href="/#" className="nav__link">
                Help
              </a>
            </li>
          </ul>
        </div>
        <div className="right-links">
          <li className="nav__item">
            <a id="nav-a" href="#" className="nav__link">
              Logout
            </a>
          </li>
        </div>
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <a href="#">
                <li>Our Products</li>
              </a>
              <a href="#">
                <li>FAQs</li>
              </a>
              <a href="#">
                <li>Help</li>
              </a>
              <hr></hr>
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Orders</li>
              </a>
              <a href="#">
                <li>Services</li>
              </a>
              <a href="#">
                <li>Returns</li>
              </a>
              <a className="active" href="#">
                <li>Contacts</li>
              </a>
              <a href="#">
                <li>Messages</li>
              </a>
              <a href="#">
                <li>Profile</li>
              </a>
              <a href="#">
                <li>Email</li>
              </a>
              <a href="#">
                <li>Logout</li>
              </a>
            </ul>
            
            
          </div>
        </nav>
      </nav>
      <nav className="nav__brand2">
        <div className="me-auto left-links">

          <ul className="nav__menu2">
            <li className="nav__item">
              <a id="" href="/" className="nav__link nav-a2">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a id="nav-a2" href="/#" className="nav__link nav-a2">
                Devices
              </a>
            </li>
            <li className="nav__item">
              <a id="nav-a2" href="/#" className="nav__link nav-a2">
                Orders
              </a>
            </li>
            <li className="nav__item">
              <a id="nav-a2" href="/#" className="nav__link nav-a2">
                Services
              </a>
            </li>
            <li className="nav__item">
              <a id="nav-a2" href="/#" className="nav__link nav-a2">
                Returns
              </a>
            </li>
            <li className="nav__item " id="active2">
              <a id="active" href="/#" className=" nav__link nav-a2 ">
                Contact
              </a>
            </li>
            <li className="nav__item">
              <a id="nav-a2" href="/#" className="nav__link nav-a2">
                Messages
              </a>
            </li>
            <li className="nav__item">
              <a id="nav-a2" href="/#" className="nav__link nav-a2">
                Profile
              </a>
            </li>
            <li className="nav__item">
              <a id="nav-a2" href="/#" className="nav__link nav-a2">
                Email
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default navbar;
