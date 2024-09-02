import { useGetCarsImageQuery } from "../../../redux/api/car/carApi";
import FeaturedCarCard from "./FeaturedCarCard";

const FeaturedCar = () => {
  const { data } = useGetCarsImageQuery(undefined);

  return (
    <>
      <div className="mb-10 bg-white">
        <h1 className="my-5 font-mono font-bold text-center text-purple-600 text-7xl">
          Featured Car
        </h1>
        <p className="font-mono text-2xl text-center text-purple-600">
          Rent just about any car, just about anywhere
        </p>
      </div>
      <div className="bg-gray-100">
        <div className="flex items-center justify-center w-4/5">
          <div className="flex flex-wrap">
            {data?.data?.map((item: any) => {
              // Assuming `item.image` is an array and you want to use the first image
              const imgUrl = item.image[0];
              return <FeaturedCarCard key={item._id} imgUrl={imgUrl} />;
            })}
          </div>
          <div className="w-1/2 space-y-4">
            <h3 className="font-mono text-3xl font-semibold text-black ">
              Rent cars for any occasion
            </h3>
            <p className="text-sm text-black ">
              Browse an incredible selection of cars, from the everyday to the
              extraordinary.
            </p>
            <button
              className="px-10 py-5 font-bold text-white bg-purple-600 rounded-lg"
              type="submit"
            >
              Featured Cars
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCar;
