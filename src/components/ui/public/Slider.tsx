const images = [
  "https://images.pexels.com/photos/27202978/pexels-photo-27202978/free-photo-of-the-night-sky-over-a-lake-with-stars-and-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/27244532/pexels-photo-27244532/free-photo-of-alaskan-kenai-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/27330739/pexels-photo-27330739/free-photo-of-a-canal-in-a-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];
const Slider = () => {
  return (
    <div className="relative bg-gray-100 w-full h-screen p-8">
      {/* First Card */}
      <div
        className="bg-white p-8 rounded-lg shadow-lg relative z-10"
        style={{ width: "60%", marginLeft: "30%" }}
      >
        <h2 className="text-2xl font-bold mb-4">Card Title</h2>
        <p className="text-gray-700">
          This is some content inside the first card. It has a white background
          and some text content.
        </p>
      </div>

      {/* Second Card */}
      <div className="absolute top-0 left-0 w-full h-full flex items-start justify-start overflow-hidden">
        <div
          className="relative w-1/2 h-full"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 30%)" }}
        >
          {/* Image Carousel or Slider */}
          <div className="absolute inset-0">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slider Image ${index}`}
                className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out"
                style={{ opacity: index === 0 ? 1 : 0 }} // Example of changing images. You might want to use a slider library for automatic transitions
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
