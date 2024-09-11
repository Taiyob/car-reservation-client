import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { useCreateCarMutation } from "../../redux/api/car/carApi";
import {
  setCarColor,
  setCarDescription,
  setCarFeatures,
  setCarIsElectric,
  setCarName,
  setCarPricePerHour,
} from "../../redux/features/car/carSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
//import { RxCrossCircled } from "react-icons/rx";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY; // VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CarCreate = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useAppDispatch();
  const {
    name,
    color,
    description,
    features,
    isElectric,
    pricePerHour,
    status,
    image,
  } = useAppSelector((state: RootState) => state.car);
  const [createCar] = useCreateCarMutation();

  const [newImages, setNewImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleImageUpload = async (files: File[]) => {
    const imageUploadUrls: string[] = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch(image_hosting_api, {
          method: "POST",
          body: formData,
          mode: "cors",
        });
        console.log(response);
        if (!response.ok) {
          const errorData = await response.json();
          console.error("Upload error:", errorData);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API reference", data);
        if (data?.status === 200) {
          console.log(data);
          imageUploadUrls.push(data?.data?.display_url);
        } else {
          console.error("Image upload failed", data?.error?.message);
        }
      } catch (e) {
        console.log("Failed to image upload:", e);
      }
    }
    return imageUploadUrls;
  };

  const onSubmit = async () => {
    const uploadImageUrls = await handleImageUpload(newImages);
    console.log(uploadImageUrls);

    try {
      if (uploadImageUrls.length > 0) {
        const carInfo = {
          name: name,
          color: color,
          description: description,
          isElectric: isElectric,
          features: features,
          pricePerHour: pricePerHour,
          status: status,
          image: [...(image || []), ...uploadImageUrls],
        };
        const car = await createCar(carInfo).unwrap();
        console.log(car);
        reset();
        toast.success("Car added successfully");
        navigate("/admin-dashboard/all-car-list");
      }
    } catch (e) {
      console.log(e);
      toast.error("Adding Failed!!! something wrong...");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setNewImages(files);
      setImagePreviews(files.map((file) => URL.createObjectURL(file)));
    }
  };

  // const handleRemoveImage = (indexToRemove: number) => {
  //   setImagePreviews((prevPreviews) =>
  //     prevPreviews.filter((_, index) => index !== indexToRemove)
  //   );
  // };

  return (
    <div className="w-full px-20">
      <form onSubmit={handleSubmit(onSubmit)} className="w-2/3">
        <h1 className="mt-2 mb-8 font-mono text-5xl font-bold text-center text-purple-500 bg-gray-100">
          create a car
        </h1>
        <div className="relative z-0 w-full mb-5 group">
          <input
            {...register("name", { required: true })}
            type="text"
            onChange={(e) => dispatch(setCarName(e.target.value))}
            id="name"
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
            {...register("color", { required: true })}
            type="text"
            onChange={(e) => dispatch(setCarColor(e.target.value))}
            id="color"
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
          <input
            {...register("features", { required: true })}
            type="string"
            onChange={(e) => {
              const featuresArray = e.target.value
                .split(",")
                .map((feature) => feature.trim())
                .filter((feature) => feature.length > 0);
              dispatch(setCarFeatures(featuresArray));
            }}
            id="features"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="features"
            className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Features
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <select
              {...register("status")}
              id="status"
              name="status"
              aria-label="Select status"
              defaultValue=""
              className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            >
              <option value="" disabled>
                select status
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
              {...register("pricePerHour", { required: true })}
              type="text"
              onChange={(e) =>
                dispatch(setCarPricePerHour(Number(e.target.value)))
              }
              id="pricePerHour"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="pricePerHour"
              className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <textarea
            {...register("description", { required: true })}
            onChange={(e) => dispatch(setCarDescription(e.target.value))}
            id="description"
            rows={4}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
          ></textarea>
          <label
            htmlFor="description"
            className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>
        {/* <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              {...register("image")}
              onChange={handleImageChange}
              id="dropzone-file"
              type="file"
              className="hidden image"
            />
          </label>
          <div className="mt-3 ml-5">
            {imagePreviews.map((preview, index) => (
              <img
                key={index}
                src={preview}
                alt={`Preview ${index}`}
                className="inline-block object-cover w-32 h-32 mb-2 mr-2"
              />
            ))}
          </div>
        </div> */}
        {imagePreviews.length > 0 ? (
          <div className="mt-3 ml-5">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="relative inline-block mb-2 mr-2">
                <img
                  src={preview}
                  alt={`Preview ${index}`}
                  className="object-cover w-32 h-32"
                />
                {/* <button
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-0 right-0 p-1 text-white bg-red-600 rounded-full"
                >
                  &times;
                  <RxCrossCircled />
                </button> */}
              </div>
            ))}
          </div>
        ) : (
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              {...register("image")}
              onChange={handleImageChange}
              id="dropzone-file"
              type="file"
              className="hidden image"
            />
          </label>
        )}
        <div className="grid my-5 md:grid-cols-2 md:gap-6">
          <div className="flex items-center mb-4">
            <input
              {...register("isElectric", { required: true })}
              id="isElectric"
              onChange={(e) => dispatch(setCarIsElectric(e.target.checked))}
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="isElectric"
              className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              isElectric?
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              {...register("isDeleted")}
              id="isDeleted"
              onChange={(e) => dispatch(setCarIsElectric(e.target.checked))}
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="isDeleted"
              className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              isDeleted?
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-purple-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CarCreate;

// //headers: { "Content-Type": "multipart/form-data" },
////imageUploadUrls.push(data?.data?.url);
//imageUploadUrls.push(data?.data?.url_viewer);
