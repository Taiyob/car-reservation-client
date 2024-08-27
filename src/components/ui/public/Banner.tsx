import Container from "../../shared/Container";
import bg from "../../../assets/images/banner1.svg";
import banner_img from "../../../assets/images/banner2.avif";
import { IoLocationSharp } from "react-icons/io5";
//import { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "../../../styles/banner.css";

const Banner = () => {
  //const [value, onChange] = useState("");
  return (
    <Container>
      <div className="flex justify-between items-center space-x-8 h-[800px]">
        <div className="flex-1">
          <h1 className="font-mono font-semibold text-7xl">Rent a car</h1>
          <h1 className="font-mono font-semibold text-7xl">
            in just a few taps
          </h1>
          <h3 className="my-8 font-mono text-4xl font-normal">
            <span className="text-purple-500">Unlock cars 24/7 </span>with your
            phone, and go!
          </h3>
          <form>
            <div className="relative">
              <IoLocationSharp className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2 size-6" />
              <input
                className="w-full px-10 py-5 pl-10 text-2xl bg-gray-100 rounded-full"
                type="text"
                placeholder="Specific address, station...."
              />
            </div>
            <div className="flex my-5 space-x-2">
              <DatePicker
                className="w-full h-16 bg-gray-100 border border-gray-600"
                //onChange={onChange}
                //value={value}
                calendarAriaLabel="Pickup"
              />
              <DatePicker
                className="w-full h-16 bg-gray-100 border border-gray-600"
                //onChange={onChange}
                //value={value}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-3 text-2xl font-bold text-white bg-purple-600 rounded-2xl"
            >
              Search
            </button>
          </form>
          <h5 className="mt-8 font-mono text-2xl font-semibold text-gray-400">
            Car rental by locals with trip liability insurance included
          </h5>
        </div>
        <div
          className="flex items-center justify-center flex-1 h-full"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
        >
          <img
            className="object-contain w-full h-full"
            src={banner_img}
            alt="banner_image"
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
