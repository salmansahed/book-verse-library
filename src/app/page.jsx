import Banner from "@/components/Home/Banner";
import CategoriesSection from "@/components/Home/CategoriesSection";
import FeaturedBooks from "@/components/Home/FeaturedBooks";
import HomeMarquee from "@/components/Home/HomeMarquee";
import Newsletter from "@/components/Home/Newsletter";
import Testimonials from "@/components/Home/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeMarquee />
      <CategoriesSection />
      <FeaturedBooks />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
