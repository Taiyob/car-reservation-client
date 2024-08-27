import Banner from "../../components/ui/public/Banner";
import FeaturedCar from "../../components/ui/public/FeaturedCar";
import Slider from "../../components/ui/public/Slider";
import Testimonial from "../../components/ui/public/Testimonial";
import WhyChooseUs from "../../components/ui/public/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Banner />
      <Slider />
      <FeaturedCar />
      <WhyChooseUs />
      <Testimonial />
    </>
  );
};

export default Home;
