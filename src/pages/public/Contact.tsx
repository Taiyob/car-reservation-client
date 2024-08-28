const Contact = () => {
  return (
    <div className="w-full p-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-bold">Help Center</h1>
        <p className="mt-2 text-xl">What can we do for you?</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mt-10">
        <button className="px-4 pb-2 font-bold text-blue-600 border-b-4 border-blue-600">
          GUESTS
        </button>
        <button className="px-4 pb-2 ml-8 font-semibold text-gray-500">
          HOSTS
        </button>
      </div>

      {/* Featured Articles */}
      <div className="p-8 mt-10 rounded-lg shadow-md bg-purple-50">
        <div className="flex items-center">
          <div className="text-5xl text-purple-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </div>
          <h2 className="ml-4 text-2xl font-bold">Featured Articles</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
          <div className="space-y-2">
            <a href="#" className="hover:underline">
              Getting started | Guests
            </a>
            <a href="#" className="hover:underline">
              Messaging your host
            </a>
            <a href="#" className="hover:underline">
              Canada airport information | Guests
            </a>
          </div>
          <div className="space-y-2">
            <a href="#" className="hover:underline">
              Cancel a trip with your host
            </a>
            <a href="#" className="hover:underline">
              Resolving problems booking a car
            </a>
            <a href="#" className="hover:underline">
              US airport information | Guests
            </a>
          </div>
          <div className="space-y-2">
            <a href="#" className="hover:underline">
              Refunds
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
