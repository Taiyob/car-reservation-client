import { TiWorld } from "react-icons/ti";
import logo from "../../../assets/images/f-logo.svg";
import { IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const FooterCard = () => {
  return (
    <div className="py-10 px-60">
      <div className="p-10 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-10">
          <img src={logo} alt="" />
          <button
            type="submit"
            className="flex items-center justify-center px-2 bg-gray-100 rounded"
          >
            <TiWorld />
            BD
          </button>
        </div>
        <div className="flex items-start justify-between space-x-5">
          <div className="flex-1">
            <h3 className="font-mono font-semibold text-black">About Us</h3>
            <div className="border border-b-gray-100"></div>
            <p className="text-gray-500">
              Goaround makes sharing cars and trucks simple through its
              proprietary cloud and in-car Connect® technology. Getaround’s
              on-demand technology enables a contactless experience — no waiting
              in line at a car rental facility, manually completing paperwork,
              or meeting anyone to collect or drop off car keys.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-3 gap-2">
            <div className="">
              <h3 className="font-mono font-semibold text-black">Learn More</h3>
              <div className="border border-b-gray-100"></div>
              <ul className="my-3 space-y-2 text-sm text-gray-500">
                <li>How Does it work?</li>
                <li>A trusted service</li>
                <li>Goarouund App</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="">
              <h3 className="font-mono font-semibold text-black">Resources</h3>
              <div className="border border-b-gray-100"></div>
              <ul className="my-3 space-y-2 text-sm text-gray-500">
                <li>Owner resources</li>
                <li>Pros</li>
                <li>Help Center</li>
              </ul>
            </div>
            <div className="">
              <h3 className="font-mono font-semibold text-black">Partner</h3>
              <div className="border border-b-gray-100"></div>
              <ul className="my-3 space-y-2 text-sm text-gray-500">
                <li>Partner with Us</li>
                <li>Drive with uber</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center my-5 space-x-3">
          <IoLogoTwitter className="size-5" />
          <FaFacebook className="size-5" />
          <IoLogoYoutube className="size-5" />
          <FaSquareInstagram className="size-5" />
          <FaLinkedin className="size-5" />
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
