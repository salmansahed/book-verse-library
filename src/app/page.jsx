import Banner from "@/components/Home/Banner";
import CategoriesSection from "@/components/Home/CategoriesSection";
import FaqSection from "@/components/Home/FaqSection";
import FeaturedBooks from "@/components/Home/FeaturedBooks";
import HomeMarquee from "@/components/Home/HomeMarquee";
import HowItWorksSection from "@/components/Home/HowItWorksSection";
import Newsletter from "@/components/Home/Newsletter";
import StatsSection from "@/components/Home/StatsSection";
import Testimonials from "@/components/Home/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeMarquee />
      <CategoriesSection />
      <FeaturedBooks />
      <HowItWorksSection />
      <StatsSection />
      <Testimonials />
      <FaqSection />
      <Newsletter />
    </div>
  );
};

export default Home;
