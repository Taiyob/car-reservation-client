// car updated code:
/**
 * 
 * 
 * import { useParams } from "react-router-dom";
import {
  useGetSingleCarQuery,
  useUpdateCarMutation,
} from "../../redux/api/car/carApi";
import { TCarData } from "./AllCarsTable";
import { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

const CarUpdate = () => {
  const { id } = useParams<string>();
  const { data, isLoading } = useGetSingleCarQuery(id);
  const [updateCar] = useUpdateCarMutation();

  const [images, setImages] = useState<string[]>([]);
  const [carFeatures, setCarFeatures] = useState<string[]>([]);
  const [carInfo, setCarInfo] = useState<TCarData | null>(null);

  useEffect(() => {
    if (data?.data) {
      setCarInfo(data.data);
    }
  }, [data]);

  const {
    name,
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

  return (
    <div className="w-full px-20">
      <form className="w-2/3">
        <h1 className="mt-2 mb-8 font-mono text-5xl font-bold text-center text-purple-500 bg-gray-100">
          Update This Car
        </h1>

        
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="name"
            value={name}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
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
            value={color}
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
          <ul className="list-disc pl-5">
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
            id="newFeature"
            placeholder="Add new feature"
            className="mt-2 block w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            onKeyDown={handleAddFeature}
          />
        </div>

       
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <select
              id="status"
              name="status"
              aria-label="Select status"
              value={status}
              className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            >
              <option value="" disabled>
                Select status
              </option>
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
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
              value={pricePerHour}
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
            value={description}
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
              checked={isElectric}
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
              checked={isDeleted}
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
            className="mt-2 block w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg cursor-pointer dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
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

 * 
*/

/*
import { useParams } from "react-router-dom";
import {
  useGetSingleCarQuery,
  useUpdateCarMutation,
} from "../../redux/api/car/carApi";
import { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import {
  TCarInfo,
  updateCarInfo,
  updateError,
  updateLoading,
} from "../../redux/features/car/updateCarSlice";

const CarUpdate = () => {
  const { id } = useParams<string>();
  const dispatch = useAppDispatch();
  const { carInfo, loading, error } = useAppSelector(
    (state: RootState) => state.updateCar
  );
  const { data, isLoading: isFetchingCar } = useGetSingleCarQuery(id);
  const [updateCar] = useUpdateCarMutation();

  const [images, setImages] = useState<string[]>([]);
  const [carFeatures, setCarFeatures] = useState<string[]>([]);

  useEffect(() => {
    if (data?.data) {
      // Ensure that `carInfo` is populated with defaults if necessary
      const updatedCarInfo: TCarInfo = {
        ...data.data,
        name: data.data.name || "",
        color: data.data.color || "",
        description: data.data.description || "",
        features: data.data.features || [],
        status: data.data.status || "available", // Default value if necessary
        isElectric: data.data.isElectric || false,
        isDeleted: data.data.isDeleted || false,
      };

      dispatch(updateCarInfo(updatedCarInfo));
      setImages(data.data.image ?? []);
      setCarFeatures(data.data.features ?? []);
    }
  }, [data, dispatch]);

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
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
    setCarFeatures(carFeatures.filter((_, i) => i !== index));
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (carInfo) {
      const updatedCarInfo: TCarInfo = {
        ...carInfo,
        image: images,
        features: carFeatures,
      };
      dispatch(updateLoading(true));
      updateCar({ id, carInfo: updatedCarInfo })
        .unwrap()
        .then(() => {
          alert("Car updated successfully!");
        })
        .catch((err) => {
          dispatch(updateError(err.message));
          alert(`Failed to update car: ${err.message}`);
        })
        .finally(() => {
          dispatch(updateLoading(false));
        });
    }
  };

  if (isFetchingCar || loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full px-20">
      <form className="w-2/3" onSubmit={handleSubmit}>
        
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="name"
            value={carInfo?.name || ""}
            onChange={(e) =>
              dispatch(updateCarInfo({ ...carInfo, name: e.target.value }))
            }
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
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
            value={carInfo?.color || ""}
            onChange={(e) =>
              dispatch(updateCarInfo({ ...carInfo, color: e.target.value }))
            }
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
          <ul className="list-disc pl-5">
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
                  <RxCrossCircled />
                </button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            id="newFeature"
            placeholder="Add new feature"
            className="mt-2 block w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            onKeyDown={handleAddFeature}
          />
        </div>

        
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <select
              id="status"
              name="status"
              aria-label="Select status"
              value={carInfo?.status || ""}
              onChange={(e) =>
                dispatch(updateCarInfo({ ...carInfo, status: e.target.value }))
              }
              className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            >
              <option value="" disabled>
                Select status
              </option>
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
            <label
              htmlFor="status"
              className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Status
            </label>
          </div>
        </div>

        
        <div className="relative z-0 w-full mb-5 group">
          <textarea
            id="description"
            value={carInfo?.description || ""}
            onChange={(e) =>
              dispatch(updateCarInfo({ ...carInfo, description: e.target.value }))
            }
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            rows={4}
            required
          />
          <label
            htmlFor="description"
            className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>

     
        <button
          type="submit"
          className="w-full py-2.5 px-5 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update Car
        </button>
      </form>
    </div>
  );
};

export default CarUpdate;


*/
