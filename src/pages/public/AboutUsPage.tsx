import aboutimg from "../../assets/images/about_img1.webp";
import img1 from "../../assets/images/about_img_2.webp";

const AboutUsPage = () => {
  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-60 my-5 mb-20">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0 lg:space-x-10">
          <div className="w-full lg:w-1/2 relative">
            <img className="w-full" src={aboutimg} alt="About Us" />
            <div className="bg-gray-100 h-[430px] w-[850px] top-20 left-[180px] absolute -z-10 hidden lg:block"></div>
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl text-purple-500 font-mono font-bold">
              About
            </h1>
            <h1 className="text-3xl lg:text-5xl text-purple-500 font-mono font-bold">
              Goaround
            </h1>
            <p className="mt-5 text-lg lg:text-xl font-normal w-1/2">
              Take a look under the hood of the world’s largest car sharing
              marketplace
            </p>
          </div>
        </div>
        <div className="px-40 mt-32">
          <h1 className="text-5xl text-purple-500 font-bold font-mono">
            Find your drive
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Turo is the world’s largest car sharing marketplace, where you can
            book the perfect car for wherever you’re going from a vibrant
            community of trusted hosts across the US, UK, Canada, Australia, and
            France. Flying in from afar or looking for a car down the street,
            searching for a rugged truck or something smooth and swanky, you can
            skip the rental car counter and choose from an extraordinary,
            totally unique selection of nearby vehicles shared by local hosts.
            Entrepreneurs can take the wheel of their futures by becoming hosts
            and building car sharing businesses on Turo, leveraging our
            established platform to scale their businesses to meet their goals.
          </p>
          <p className="mt-2 text-xl text-gray-600">
            With an unwavering mission of putting the world’s 1.5 billion cars
            to better use, Turo unlocks the hidden value in idle and
            underutilized assets, empowering anyone to get in the driver’s seat.
          </p>
        </div>
      </div>
      <div className="mb-20 bg-gray-100 py-20 px-[550px]">
        <div className="w-[550px] relative">
          <img
            className="object-contain w-full h-full"
            src={img1}
            alt="image"
          />
          <div className="absolute bg-black h-[250px] w-[500px] left-96 top-20">
            <div className="p-10">
              <h2 className="text-gray-100 text-xl font-mono font-semibold mb-3">
                Company mission
              </h2>
              <p className="text-white font-bold font-mono text-4xl">
                To put the world’s 1.5 billion cars to better use
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
