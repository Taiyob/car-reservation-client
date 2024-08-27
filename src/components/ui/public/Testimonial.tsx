import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <>
      <h1 className="my-5 font-mono font-bold text-center text-purple-600 text-7xl">
        Our Testimonial
      </h1>
      <div className="grid grid-cols-3">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </>
  );
};

export default Testimonial;
