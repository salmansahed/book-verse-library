import Banner from "@/components/Home/Banner";
import FeaturedBooks from "@/components/Home/FeaturedBooks";
import HomeMarquee from "@/components/Home/HomeMarquee";
import Newsletter from "@/components/Home/Newsletter";
import Testimonials from "@/components/Home/Testimonials";

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
