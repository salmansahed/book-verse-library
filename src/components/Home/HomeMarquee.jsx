import Marquee from "react-fast-marquee";
import { HiOutlineSparkles } from "react-icons/hi2";
import { IoFlameSharp } from "react-icons/io5";

const HomeMarquee = () => {
  return (
    <section className="container mx-auto px-4 my-8">
      <div className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-linear-to-r from-indigo-50/50 via-purple-50/30 to-indigo-50/50 shadow-xs py-2.5">
        <Marquee
          pauseOnHover={true}
          speed={60}
          gradient={true}
          gradientColor="white"
          gradientWidth={60}
        >
          <div className="flex items-center gap-12 text-sm md:text-base font-semibold text-zinc-700">
            {/* Item 1 */}
            <div className="flex items-center gap-2">
              <HiOutlineSparkles className="text-indigo-600 text-lg shrink-0" />
              <span>New Arrival:</span>
              <span className="font-extrabold text-indigo-600 hover:underline cursor-pointer">
                The Great Gatsby
              </span>
            </div>

            <span className="text-zinc-300 font-light">/</span>

            {/* Item 2 */}
            <div className="flex items-center gap-2">
              <IoFlameSharp className="text-amber-500 text-lg animate-pulse shrink-0" />
              <span>Special Discount:</span>
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-2xs">
                20% OFF
              </span>
            </div>

            <span className="text-zinc-300 font-light">/</span>

            {/* Item 3 */}
            <div className="flex items-center gap-2">
              <HiOutlineSparkles className="text-purple-600 text-lg shrink-0" />
              <span>Trending Book:</span>
              <span className="font-extrabold text-indigo-600 hover:underline cursor-pointer">
                Atomic Habits
              </span>
            </div>

            <span className="text-zinc-300 font-light pr-12">/</span>
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default HomeMarquee;
