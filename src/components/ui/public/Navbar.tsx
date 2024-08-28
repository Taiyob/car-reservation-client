import { useState } from "react";
import "../../../styles/navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import SignIn from "../../../pages/public/SignIn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center justify-between p-10">
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
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <Link
              to=""
              onClick={() =>
                (
                  document.getElementById("my_modal_5") as HTMLDialogElement
                ).showModal()
              }
            >
              Login
            </Link>
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
        <SignIn my_modal_5="my_modal_5" />
      </div>
    </div>
  );
};

export default Navbar;
