import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleCarQuery,
  useUpdateCarMutation,
} from "../../redux/api/car/carApi";
import { TCarData } from "./AllCarsTable";
import { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { useAppDispatch } from "../../redux/hooks";
import {
  updatedColor,
  updatedDescription,
  updatedIsElectric,
  updatedPricePerHour,
  updatedStatus,
  updateName,
} from "../../redux/features/car/updateCarSlice";
import { toast } from "sonner";

const CarUpdate = () => {
  const { id } = useParams<string>();
  const { data, isLoading } = useGetSingleCarQuery(id);
  const [updateCar] = useUpdateCarMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [images, setImages] = useState<string[]>([]);
  const [carFeatures, setCarFeatures] = useState<string[]>([]);
  const [carInfo, setCarInfo] = useState<TCarData | null>(null);

  useEffect(() => {
    if (data?.data) {
      setCarInfo(data.data);
    }
  }, [data]);

  const {
    name: carName,
    color,
    description,
    features: carInfoFeatures,
    isElectric,
    pricePerHour,
    status,
    image: carInfoImages,
    isDeleted,
  } = carInfo ?? {};

  useEffect(() => {
    if (carInfo) {
      setImages(carInfoImages ?? []);
      setCarFeatures(carInfoFeatures ?? []);
    }
  }, [carInfo, carInfoFeatures, carInfoImages]);

  if (isLoading) return <div>Loading...</div>;

  if (!carInfo) return <div>No car information available.</div>;

  const handleRemoveImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages([...images, ...newImages]);
    }
  };

  const handleRemoveFeature = (index: number) => {
    const updatedFeatures = carFeatures.filter((_, i) => i !== index);
    setCarFeatures(updatedFeatures);
  };

  const handleAddFeature = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newFeature = (e.target as HTMLInputElement).value.trim();
      if (newFeature) {
        setCarFeatures([...carFeatures, newFeature]);
        (e.target as HTMLInputElement).value = "";
      }
    }
  };

  const handleSubmitForUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const color = (form.elements.namedItem("color") as HTMLInputElement).value;
    const description = (
      form.elements.namedItem("description") as HTMLTextAreaElement
    ).value;
    const isElectric = (
      form.elements.namedItem("isElectric") as HTMLInputElement
    ).checked;
    const pricePerHour = Number(
      (form.elements.namedItem("pricePerHour") as HTMLInputElement).value
    );
    const status = (form.elements.namedItem("status") as HTMLSelectElement)
      .value;

    if (!id) {
      toast.error("Car ID is missing");
      return;
    }
    const updatedCarDetails = {
      id: id,
      data: {
        name: name,
        color: color,
        description: description,
        isElectric: isElectric,
        features: carFeatures,
        pricePerHour: pricePerHour,
        status: status,
      },
    };
    console.log(updatedCarDetails);
    try {
      const car = await updateCar(updatedCarDetails).unwrap();
      console.log(car);
      toast.success("Updated successfully");
      navigate("/admin-dashboard/all-car-list");
    } catch (e) {
      console.log(e);
      toast.error("something went wrong");
    }
  };

  return (
    <div className="w-full px-20">
      <form onSubmit={handleSubmitForUpdate} className="w-2/3">
        <h1 className="mt-2 mb-8 font-mono text-5xl font-bold text-center text-purple-500 bg-gray-100">
          Update This Car
        </h1>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="name"
            defaultValue={carName}
            name="name"
            onChange={(e) => dispatch(updateName(e.target.value))}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Car Name
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="color"
            defaultValue={color}
            name="color"
            onChange={(e) => dispatch(updatedColor(e.target.value))}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="color"
            className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Color
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="features"
            className="block text-sm font-medium text-gray-700 dark:text-gray-400"
          >
            Features
          </label>
          <ul className="pl-5 list-disc">
            {carFeatures.map((feature, index) => (
              <li
                key={index}
                className="text-sm text-gray-700 dark:text-gray-400"
              >
                {feature}
                <button
                  type="button"
                  onClick={() => handleRemoveFeature(index)}
                  className="ml-2 text-red-500"
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            id="features"
            placeholder="Add new feature"
            className="block w-full mt-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            onKeyDown={handleAddFeature}
          />
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <select
              id="status"
              name="status"
              aria-label="Select status"
              defaultValue={status}
              onChange={(e) => dispatch(updatedStatus(e.target.value))}
              className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            >
              <option value="" disabled>
                Select status
              </option>
              <option value="available">available</option>
              <option value="unavailable">unavailable</option>
            </select>
            <label
              htmlFor="status"
              className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Status
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="pricePerHour"
              defaultValue={pricePerHour}
              name="pricePerHour"
              onChange={(e) =>
                dispatch(updatedPricePerHour(Number(e.target.value)))
              }
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="pricePerHour"
              className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price Per Hour
            </label>
          </div>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <textarea
            id="description"
            rows={4}
            defaultValue={description}
            name="description"
            onChange={(e) => dispatch(updatedDescription(e.target.value))}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          ></textarea>
          <label
            htmlFor="description"
            className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>

        <div className="grid my-5 md:grid-cols-2 md:gap-6">
          <div className="flex items-center mb-4">
            <input
              id="isElectric"
              type="checkbox"
              defaultChecked={isElectric}
              name="isElectric"
              onChange={(e) => dispatch(updatedIsElectric(e.target.checked))}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="isElectric"
              className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Is Electric?
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="isDeleted"
              type="checkbox"
              defaultChecked={isDeleted}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="isDeleted"
              className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Is Deleted?
            </label>
          </div>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
            Uploaded Images
          </label>
          <div className="flex flex-wrap">
            {images.map((imgUrl, index) => (
              <div key={index} className="relative inline-block mb-2 mr-2">
                <img
                  src={imgUrl}
                  alt={`Car Image ${index + 1}`}
                  className="object-cover w-32 h-32"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-0 right-0 p-1 text-white bg-red-600 rounded-full"
                >
                  <RxCrossCircled />
                </button>
              </div>
            ))}
          </div>
          <input
            type="file"
            id="imageUpload"
            onChange={handleImageChange}
            className="block w-full mt-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            multiple
          />
        </div>

        <button
          type="submit"
          className="text-white bg-purple-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default CarUpdate;
