import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import HomeMarquee from "@/components/HomeMarquee";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeMarquee />
      <FeaturedBooks />
      <Testimonials />
    </div>
  );
};

export default Home;
