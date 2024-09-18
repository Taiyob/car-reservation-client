import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetSingleBookingQuery } from "../../redux/api/booking/bookingApi";
import { extractInitialWords } from "../../utils/requiredWords";
import formatDate from "../../utils/date";
import { calculateDuration } from "../../utils/time";
import "../../styles/glitteringText.css";
import { IoChevronBackOutline } from "react-icons/io5";

const Checkout = () => {
  const { id } = useParams();
  const { data: bookingInfo, isLoading } = useGetSingleBookingQuery(id);
  const navigate = useNavigate();
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (bookingInfo?.data?.car?.image) {
      setImages(bookingInfo.data.car.image);
    }
  }, [bookingInfo]);

  if (isLoading) {
    return (
      <div>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const bookingDetails = bookingInfo?.data;
  const carDescription = bookingDetails?.car?.description || "";

  return (
    <>
      <IoChevronBackOutline
        onClick={() => navigate(-1)}
        className="text-white absolute left-64 top-5 rounded-full bg-purple-500 text-3xl cursor-pointer"
      />
      <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 text-gray-800">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          {images.map((imgUrl, index) => (
            <img
              key={index}
              src={imgUrl}
              alt="car-image"
              className="w-full h-60 sm:h-96 bg-gray-500"
            />
          ))}
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                {extractInitialWords(carDescription, 9)}
              </a>
              <p className="text-xs text-gray-600">
                Order By:
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline"
                >
                  {bookingDetails?.user?.name}
                </a>
              </p>
            </div>
            <div className="text-gray-800">
              <p>{bookingDetails?.car?.name}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-2xl px-6 py-10 mx-auto space-y-12">
        <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-2xl text-purple-900">
              Experience Unmatched Excellence in{" "}
              <span className="text-purple-500 glow">Goaround</span>
            </h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
              <div className="flex items-center md:space-x-2">
                <img
                  src="https://source.unsplash.com/75x75/?portrait"
                  alt=""
                  className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                />
                <p className="text-xl">
                  Car reserve date •{" "}
                  <span className="glow text-white font-semibold">
                    {formatDate(bookingDetails?.date)}
                  </span>
                </p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                Price per hour • {bookingDetails?.car?.pricePerHour} /tk
              </p>
            </div>
          </div>
          <div className="dark:text-gray-800">
            <p>
              We are dedicated to making your journey exceptional, whether for
              business or leisure. Trust us to deliver a car rental experience
              that exceeds your expectations and ensures your complete
              satisfaction.
            </p>
          </div>
          <p className="text-red-500">
            *(Please verify your selected date, time, and cost carefully before
            proceeding. Once payment is completed, changes to the booking will
            not be allowed. Ensure all details are accurate to avoid any
            issues.)*
          </p>
        </article>
        <div>
          <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 glow rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
            >
              start time: {bookingDetails?.startTime}
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 glow rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
            >
              end time: {bookingDetails?.endTime}
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 glow rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
            >
              Duration:{" "}
              {calculateDuration(
                bookingDetails?.startTime,
                bookingDetails?.endTime
              )}{" "}
              hours
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 glow rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
            >
              Total cost: {bookingDetails?.totalCost}
            </a>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Car Features</h4>
            <ul className="ml-4 space-y-1 list-disc">
              {bookingDetails?.car?.features.map(
                (feature: string[], index: number) => (
                  <li key={index}>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:underline"
                    >
                      {feature}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <button className="btn btn-outline w-full hover:bg-purple-500 hover:text-white">
          Checkout
        </button>
      </div>
    </>
  );
};

export default Checkout;
