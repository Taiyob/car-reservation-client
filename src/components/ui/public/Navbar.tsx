import { useState } from "react";
import "../../../styles/navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center relative p-10">
      <div className="">
        <img src={logo} alt="logo" />
      </div>
      <div className="">
        <ul className="flex space-x-5 text-2xl font-semibold">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/car-details">Booking</NavLink>
          </li>
          <li>
            <NavLink to="">Contact</NavLink>
          </li>
          <li className="relative">
            <details className="group">
              <summary
                className="cursor-pointer"
                onClick={handleDropdownToggle}
              >
                User
              </summary>
              <ul
                className={`dropdown-menu ${
                  isOpen ? "block" : "hidden"
                } p-5 space-y-5`}
              >
                <li>
                  <Link to="">Profile</Link>
                </li>
                <li>
                  <Link to="">Change Password</Link>
                </li>
                <li>
                  <Link to="">Order</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
