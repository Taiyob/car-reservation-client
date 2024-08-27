import Container from "../../shared/Container";
import bg from "../../../assets/images/banner1.svg";
import banner_img from "../../../assets/images/banner2.avif";
import { IoLocationSharp } from "react-icons/io5";
import { Datepicker } from "flowbite-react";
import "flowbite/dist/flowbite.css";
import { FormEventHandler, useState } from "react";

const Banner = () => {
  const [selectedDate, setSelectedDate] = useState();
  const handleDateChange: FormEventHandler = (date: any) => {
    setSelectedDate(date);
    if (date) {
      console.log(date);
    }
  };
  return (
    <Container>
      <div className="flex justify-between items-center space-x-8 h-[800px]">
        <div className="flex-1">
          <h1 className="text-7xl font-mono font-semibold">Rent a car</h1>
          <h1 className="text-7xl font-mono font-semibold">
            in just a few taps
          </h1>
          <h3 className="text-4xl my-8 font-mono font-normal">
            <span className="text-purple-500">Unlock cars 24/7 </span>with your
            phone, and go!
          </h3>
          <form>
            <div className="relative">
              <IoLocationSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 size-6" />
              <input
                className="rounded-full bg-gray-100 w-full px-10 py-8 text-2xl pl-10"
                type="text"
                placeholder="Specific address, station...."
              />
            </div>
            <div className="flex my-5 justify-between items-center space-x-2">
              <Datepicker
                value={selectedDate}
                style={{
                  padding: "40px",
                  backgroundColor: "#f3f4f6",
                  borderRadius: "100px",
                  paddingLeft: "3rem",
                }}
                onChange={handleDateChange}
                placeholder="Select a date"
                className="mt-4 w-full"
              />
              <Datepicker
                value={selectedDate}
                style={{
                  padding: "40px",
                  backgroundColor: "#f3f4f6",
                  borderRadius: "100px",
                  paddingLeft: "3rem",
                }}
                onChange={handleDateChange}
                placeholder="Select a date"
                className="mt-4 w-full"
              />
            </div>
            <button
              type="submit"
              className="w-full py-10 text-white bg-purple-600 rounded-2xl text-2xl font-bold mt-3"
            >
              Search
            </button>
          </form>
          <h5 className="text-gray-400 text-2xl font-mono font-semibold mt-8">
            Car rental by locals with trip liability insurance included
          </h5>
        </div>
        <div
          className="flex-1 flex justify-center items-center h-full"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
        >
          <img
            className="w-full h-full object-contain"
            src={banner_img}
            alt="banner_image"
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
