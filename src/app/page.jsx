import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import HomeMarquee from "@/components/HomeMarquee";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeMarquee />
      <FeaturedBooks />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
