const WhyChooseUs = () => {
  return (
    <div>
      <h1 className="my-5 font-mono font-bold text-center text-purple-600 text-7xl">
        Why Choose Us
      </h1>
      <div>
        <section className="dark:bg-gray-100 dark:text-gray-800">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <p className="mt-4 mb-8 dark:text-gray-600 text-xl font-bold">
              Frequently asked questions
            </p>
            <div className="space-y-4">
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                  What do I need to book a car on Goaround?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                  To book a car on Turo, you must create a Turo account, be 18
                  years old or older in the US, 21 years old or older in the UK,
                  23 years old or older in Canada, have a valid driver’s
                  license, and get approved to drive on Turo. In France you must
                  be 18 years old or older and have held a driver’s license for
                  at least 2 years, longer for certain makes and models of
                  vehicles. When you’re booking your first trip, you’ll go
                  through a quick approval process by entering your driver’s
                  license and some other information. In most cases, you’ll get
                  approved immediately, and you’ll be set for all future road
                  trips, day trips, and business trips!
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                  Can other people drive a car that I booked?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                  Yes, multiple guests can drive the car you book on Turo, as
                  long as they are all approved to drive. The primary driver
                  (whoever booked the car) can add additional drivers with no
                  fees or additional charges. Only the primary driver can
                  request to add drivers; Turo hosts cannot do it for you. We
                  encourage you to request to add additional drivers before your
                  trip starts, though guests in the US and Canada can request to
                  add a driver while a trip is in progress. <br /> To speed up
                  the process, have your additional driver create a Turo account
                  and get approved to drive before you request to add them. All
                  drivers must have a valid driver’s license and meet the age
                  requirements for the car you’ve booked. You can request to add
                  drivers via the “Trips” tab in the Turo app without additional
                  driver charges or extra costs.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                  What happens if I have an accident?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                  If there’s an emergency or an issue with the car, call our
                  emergency roadside assistance provider, available 24/7. We’ll
                  make sure you’re safe, then help you get back on your way.
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyChooseUs;
