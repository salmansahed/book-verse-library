import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import HomeMarquee from "@/components/HomeMarquee";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeMarquee />
      <FeaturedBooks/>
    </div>
  );
};

export default Home;
