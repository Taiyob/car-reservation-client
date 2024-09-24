import Lottie from "lottie-react";
import contact from "../../assets/animation/contact.json";

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
        <h2 className="text-center font-bold">
          Send your message with feedback, we back you 24/7
        </h2>
      </div>

      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col justify-between">
          <Lottie animationData={contact} loop={true}></Lottie>
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows={3}
              className="w-full p-3 rounded bg-gray-100"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-600 text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
