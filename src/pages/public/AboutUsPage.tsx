import aboutimg from "../../assets/images/about_img1.webp";
import img1 from "../../assets/images/about_img_2.webp";
import img2 from "../../assets/images/about_img_3.webp";
import img3 from "../../assets/images/aout_img_4.webp";
import img4 from "../../assets/images/about_img_5.webp";
import img5 from "../../assets/images/about_img_6.webp";

const AboutUsPage = () => {
  return (
    <>
      <div className="px-4 my-5 mb-20 sm:px-8 md:px-16 lg:px-60">
        <div className="flex flex-col items-center justify-between space-y-10 lg:flex-row lg:space-y-0 lg:space-x-10">
          <div className="relative w-full lg:w-1/2">
            <img className="w-full" src={aboutimg} alt="About Us" />
            <div className="bg-gray-100 h-[430px] w-[850px] top-20 left-[180px] absolute -z-10 hidden lg:block"></div>
          </div>
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <h1 className="font-mono text-3xl font-bold text-purple-500 lg:text-5xl">
              About
            </h1>
            <h1 className="font-mono text-3xl font-bold text-purple-500 lg:text-5xl">
              Goaround
            </h1>
            <p className="w-1/2 mt-5 text-lg font-normal lg:text-xl">
              Take a look under the hood of the world’s largest car sharing
              marketplace
            </p>
          </div>
        </div>
        <div className="px-40 mt-32">
          <h1 className="font-mono text-5xl font-bold text-purple-500">
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
              <h2 className="mb-3 font-mono text-xl font-semibold text-gray-100">
                Company mission
              </h2>
              <p className="font-mono text-4xl font-bold text-white">
                To put the world’s 1.5 billion cars to better use
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="bg-white dark:bg-gray-900">
          <div className="items-center max-w-screen-xl gap-8 px-4 py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Meet the team
              </h2>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                From the executive leadership team to the board of directors,
                get to know the leadership team pioneering the way to put the
                world’s 1.5 billion cars to better use.
              </p>
              <button
                type="submit"
                className="inline-flex items-center text-white bg-purple-500 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Meet the team
              </button>
            </div>

            <img className="w-full dark:hidden" src={img2} alt="image" />
            <img className="hidden w-full dark:block" src={img2} alt="image" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900">
          <div className="items-center max-w-screen-xl gap-8 px-4 py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img className="w-full dark:hidden" src={img3} alt="image" />
            <img className="hidden w-full dark:block" src={img3} alt="image" />

            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Join the team
              </h2>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                Recognized as A Great Place to Work®, Goround prides itself on
                creating a supportive, down-to-earth, pioneering, and efficient
                work environment. <br /> Review open positions and come join us!
              </p>
              <button
                type="submit"
                className="inline-flex items-center text-white bg-purple-500 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Join the team
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900">
          <div className="items-center max-w-screen-xl gap-8 px-4 py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Get in touch
              </h2>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                From the executive leadership team to the board of directors,
                get to know the leadership team pioneering the way to put the
                world’s 1.5 billion cars to better use.
              </p>
              <button
                type="submit"
                className="inline-flex items-center text-white bg-purple-500 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Visit the newsdesk
              </button>
            </div>

            <img className="w-full dark:hidden" src={img4} alt="image" />
            <img className="hidden w-full dark:block" src={img4} alt="image" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900">
          <div className="items-center max-w-screen-xl gap-8 px-4 py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img className="w-full dark:hidden" src={img5} alt="image" />
            <img className="hidden w-full dark:block" src={img5} alt="image" />

            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Follow along on the journey
              </h2>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                Cruise the Turo blog for drool-worthy cars, chronicles of
                adventures from the road, and the latest from the Goround
                newsdesk.
              </p>
              <button
                type="submit"
                className="inline-flex items-center text-white bg-purple-500 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Go to blog
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
