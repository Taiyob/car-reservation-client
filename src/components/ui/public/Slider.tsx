import SliderBox from "./SliderBox";

const Slider = () => {
  return (
    <div className="flex items-center justify-start min-h-screen py-8 pl-56 bg-gray-100">
      {/* Left side with the image */}
      <div className="relative w-1/4 left-28">
        <SliderBox img="https://getaround-assets.gumlet.io/images/shared/getaround_usp/getaround-usp-hero5.jpg?compress=true&h=600&mode=crop&w=400" />
      </div>

      {/* Right side with the text */}
      <div className="flex flex-col w-1/2 p-32 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900">
          Discover the new way <br />
          <span className="text-purple-600">to rent a car</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Choose from thousands of cars available from private and professional
          owners near you.
        </p>
        <ul className="mt-6 space-y-4">
          <li className="flex items-start">
            <span className="mr-3 text-purple-600">😊</span>
            <span>
              <strong>Prices by the hour or day</strong> <br />
              Trip liability insurance is included. You can even add another
              driver at no extra cost.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-purple-600">✅</span>
            <span>
              <strong>No waiting around</strong> <br />
              Book a car near you instantly, even at the last minute. No lines.
              No paperwork.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-purple-600">🚗</span>
            <span>
              <strong>Unlock the car with the app</strong> <br />
              Our secure Getaround Connect technology allows you to do the
              walkaround inspection of the car with the app. The car opens. The
              keys are inside. Off you go!
            </span>
          </li>
        </ul>
        <button className="px-6 py-3 mt-6 font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700">
          See how it works →
        </button>
      </div>
    </div>
  );
};

export default Slider;
