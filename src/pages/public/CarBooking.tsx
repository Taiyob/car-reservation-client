import { useState } from "react";
import carBookingImage1 from "../../assets/images/carBooking.jpg";
import "../../index.css";
import { RiCarLine, RiErrorWarningLine } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "react-time-picker/dist/TimePicker.css";
import { useForm } from "react-hook-form";
import { useCreateBookingMutation } from "../../redux/api/booking/bookingApi";
import { toast } from "sonner";
import { useAppSelector } from "../../redux/hooks";
import {
  selectCurrentUser,
  TUser,
} from "../../redux/features/auth/userCredentialSlice";
import { useGetAvailableCarsQuery } from "../../redux/api/car/carApi";
import { TCarData } from "../admin/AllCarsTable";
//import bg from "../../assets/images/bg_booking.avif";

type TBookingInfo = {
  car: string;
  endTime: string;
  startTime: string;
  totalCost: number;
};

const CarBooking = () => {
  const { data } = useGetAvailableCarsQuery(undefined);
  const [createBooking] = useCreateBookingMutation();
  const user = useAppSelector(selectCurrentUser) as TUser;
  const userInfo = user?.user;
  const _id = userInfo?._id;

  const { handleSubmit, reset, register, watch } = useForm<TBookingInfo>();

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges: RangeKeyDict) => {
    const selection = ranges.selection;
    if (selection && selection.startDate && selection.endDate) {
      setRange([
        {
          startDate: selection.startDate,
          endDate: selection.endDate,
          key: "selection",
        },
      ]);
    }
  };

  const generateTimes = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        times.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return times;
  };

  const onSubmit = async (data: TBookingInfo) => {
    console.log(data);
    const carId = watch("car");
    if (!_id) {
      toast.error("Please login your account");
      return;
    }
    const bookingData = {
      ...data,
      date: range[0].startDate.toISOString(),
      endDate: range[0].endDate.toISOString(),
      user: _id,
      car: carId,
      totalCost: parseFloat(data.totalCost.toString()),
    };

    try {
      await createBooking(bookingData).unwrap();
      reset();
      toast.success("your booked a car, wait for response...");
    } catch (error) {
      toast.error("Booking failed. Please try again.");
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="w-2/5 pl-10">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="mb-6 text-2xl font-bold">
              Earn money by sharing your car with locals
            </h1>
            <div className="my-20">
              <div className="w-full mb-4">
                <label className="mr-5 font-semibold" htmlFor="startTime">
                  Select your car:{" "}
                </label>
                <select
                  id="car"
                  {...register("car", { required: true })}
                  className="px-20 py-2 border rounded-md shadow-md"
                >
                  <option value="">select car</option>
                  {data?.data.map((car: TCarData) => (
                    <option key={car?._id} value={car?._id}>
                      {car?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="w-1/2 mb-4">
                  <DateRangePicker
                    ranges={range}
                    onChange={handleSelect}
                    showDateDisplay={true}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="w-1/2 mb-4">
                  <label htmlFor="startTime">Pick start time: </label>
                  <select
                    id="startTime"
                    {...register("startTime", { required: true })}
                    className="p-2 border rounded-md shadow-md"
                  >
                    {generateTimes().map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-1/2 mb-4">
                  <label htmlFor="endTime">Pick end time: </label>
                  <select
                    id="endTime"
                    {...register("endTime", { required: true })}
                    className="p-2 border rounded-md shadow-md"
                  >
                    {generateTimes().map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-1/2 mb-4">
                <input
                  type="number"
                  id="totalCost"
                  placeholder="Enter total cost"
                  className="w-full p-2 mb-2 border rounded"
                  {...register("totalCost", { required: true })}
                />
              </div>
              <div className="w-full mb-4">
                <button
                  type="submit"
                  className="w-full p-2 text-xl text-white bg-purple-500 border-none rounded cursor-pointer hover:bg-purple-800"
                >
                  book a car
                </button>
              </div>
            </div>
          </form>
        </div>
        <div
          className="w-3/5 h-auto bg-center bg-cover"
          style={{
            backgroundImage: `url(${carBookingImage1})`,
            clipPath: "polygon(4% 0, 100% 0, 100% 100%, 16% 100%)",
          }}
        />
      </div>
      <div className="p-10 bg-white rounded-lg shadow-custom">
        <div className="grid grid-cols-4 gap-6">
          <h1 className="text-2xl font-semibold text-center">1.6 million</h1>
          <h1 className="text-2xl font-semibold text-center">1.6 million</h1>
          <h1 className="text-2xl font-semibold text-center">1.6 million</h1>
          <h1 className="text-2xl font-semibold text-center">1.6 million</h1>
        </div>
      </div>
      <div className="my-10 space-y-5">
        <h3 className="text-3xl font-bold text-center">Two ways to share</h3>
        <p className="text-xl text-center text-gray-400">
          Rent when you want, at the price you want
        </p>
        <div
          className="flex justify-between w-full gap-5 px-80"
          // style={{
          //   backgroundImage: `url(${bg})`,
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          //   backgroundPosition: "bottom center",
          // }}
        >
          {/* center */}
          <div className="w-1/2 p-6 bg-white border border-gray-400 rounded-lg">
            <h2 className="text-3xl font-semibold text-center">
              Without key exchange
            </h2>
            <p className="mb-10 text-xl text-center text-gray-400">
              Rent often and earn more
            </p>
            <div className="px-10 py-3 my-5 bg-purple-100 rounded-lg">
              <div className="flex items-center justify-center gap-2 space-x-3">
                <div className="p-2 text-white bg-purple-600 rounded-full">
                  <RiCarLine />
                </div>
                <div className="">
                  <h3 className="text-2xl font-bold">Goaround Connect</h3>
                  <p className="text-xl text-gray-400">
                    Drivers open your car from the app
                  </p>
                </div>
                <div className="text-2xl">
                  <RiErrorWarningLine />
                </div>
              </div>
            </div>
            <div className="my-10">
              <h3 className="text-2xl">
                No need to meet drivers. They{" "}
                <span className="text-2xl font-semibold">
                  book, locate and unlock
                </span>{" "}
                your car from the app.
              </h3>
            </div>
            <div>
              <h3 className="text-2xl">
                <span className="font-semibold">
                  We verify each driver's identity{" "}
                </span>{" "}
                so your car always stays in good hands
              </h3>
            </div>
          </div>
          <div className="w-1/2 p-6 bg-white border border-gray-400 rounded-lg">
            <h2 className="text-3xl font-semibold text-center">Key exchange</h2>
            <p className="mb-10 text-xl text-center text-gray-400">
              Rent very occasionally
            </p>
            <div className="px-10 py-3 my-5 bg-purple-100 rounded-lg">
              <div className="flex items-center justify-center gap-2 space-x-3">
                <div className="p-2 text-white bg-purple-600 rounded-full">
                  <FaRegHandshake />
                </div>
                <div className="">
                  <h3 className="text-2xl font-bold">Meet drivers</h3>
                  <p className="text-xl text-gray-400">
                    Hand over the keys every time
                  </p>
                </div>
              </div>
            </div>
            <div className="my-10">
              <h3 className="text-2xl">
                <span className="text-2xl font-semibold">Meet driver's </span>
                at each check-in and check-out to signal the rental agreement.
              </h3>
            </div>
            <div>
              <h3 className="text-2xl">
                <span className="font-semibold">Suitable for car sharing </span>{" "}
                outside of{" "}
                <span className="font-bold underline">
                  Goaround connect elegible zones.
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 bg-purple-500">
        <h1 className="text-5xl font-semibold text-white">
          All tips are covered by
        </h1>
        <div className="grid grid-cols-3 gap-5">
          <div className="my-10 space-y-5">
            <h2 className="text-2xl text-white">
              Comprehensive ensurence for all trips
            </h2>
            <p className="text-xl text-gray-300">
              You are automatically covered by comprehensive insurance from
              Goaround Protection, which replaces you own car insurance as soon
              as a Goaround trip starts.
            </p>
          </div>
          <div className="my-10 space-y-5">
            <h2 className="text-2xl text-white">
              Assistant in the event of a breakdown or accident
            </h2>
            <p className="text-xl text-gray-300">
              24/7 roadside assistance with the AA in case your vehical breaks
              down and needs to be towed.
            </p>
          </div>
          <div className="my-10 space-y-5">
            <h2 className="text-2xl text-white">
              A dedicated customer service team
            </h2>
            <p className="text-xl text-gray-300">
              Alongside the 24/7 assistance line, you can also contact our
              customer service team 24/7
            </p>
          </div>
        </div>
      </div>
      <div className="px-10">
        <h2 className="my-5 text-3xl font-semibold text-center text-purple-500">
          You are already a professional or want to become one with Goaround?
        </h2>
        <div className="flex gap-5">
          <div className="flex-1 p-10 border border-gray-300 rounded-lg">
            <img
              src="https://getaround-assets.gumlet.io/images/pages/owner_homepage/pros/pros_private.png?compress=true&w=508&dpr=2"
              alt="image"
            />
            <h2 className="my-3 text-2xl font-semibold">
              You're an individual...
            </h2>
            <p className="text-gray-600">
              and want to learn a living managing your own fleet of cars on
              Goaround?
            </p>
          </div>
          <div className="flex-1 p-10 border border-gray-300 rounded-lg">
            <img
              src="https://getaround-assets.gumlet.io/images/pages/owner_homepage/pros/pros_entrepreneur.png?compress=true&w=508&dpr=2"
              alt="image"
            />
            <h2 className="my-3 text-2xl font-semibold">
              You already run a rental agency, a body shop or a car selling
              business...
            </h2>
            <p className="text-gray-600">
              and want to optimize your fleet occupancy rates?
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center py-10 min-h-scree">
          <button
            type="submit"
            className="px-5 py-3 font-bold text-center text-purple-500 transition-transform duration-300 border border-gray-300 hover:transform hover:-translate-y-1 hover:scale-105"
          >
            Discover our offers for props
          </button>
        </div>
      </div>
    </>
  );
};

export default CarBooking;
