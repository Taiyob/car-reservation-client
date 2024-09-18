import { useEffect, useState } from "react";
import { extractInitialWords } from "../../../utils/requiredWords";
import { Link } from "react-router-dom";
import { TCarData } from "../../../pages/admin/AllCarsTable";

const CarCard = ({ car }: { car: TCarData }) => {
  const { _id, name, description, image, features, color, pricePerHour } = car;
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    setImages(image);
  }, [image]);

  return (
    <div className="flex flex-col rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 h-full">
      {/* Image section */}
      <div className="flex-shrink-0">
        {images.length > 0 && (
          <img
            src={images[0]} // Assuming you want to show the first image
            alt="car image"
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
        )}
      </div>

      {/* Content section */}
      <div className="flex flex-col flex-grow p-6 space-y-4">
        <div className="space-y-2 flex-grow">
          <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
          <p className="dark:text-gray-800">
            {extractInitialWords(description, 20)}
          </p>
        </div>
        {/* Empty div to push button to the bottom */}
        <div className="flex-grow"></div>
      </div>

      {/* Button */}
      <Link
        to={`/car/${_id}`} // Adjust the link as needed
        className="w-full p-3 font-semibold tracking-wide rounded-b-md dark:bg-violet-600 dark:text-gray-50 bg-violet-600 text-white text-center"
      >
        Details
      </Link>
    </div>
  );
};

export default CarCard;
