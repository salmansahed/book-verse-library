import Marquee from "react-fast-marquee";

const HomeMarquee = () => {
  return (
    <div className="container mx-auto my-6">
      <Marquee
        pauseOnHover={true}
        speed={80}
        gradient={true}
        gradientColor="white"
        gradientWidth={50}
        className="bg-red-50 border-y border-red-100 rounded-lg shadow-sm"
      >
        <div className="flex items-center py-4 gap-10 text-lg font-medium text-gray-800">
          <p>
            🚀 New Arrivals:{" "}
            <span className="font-bold text-indigo-600">The Great Gatsby</span>
          </p>
          <p className="text-gray-400">|</p>
          <p>
            🔥 Special Discount on Memberships:{" "}
            <span className="bg-red-600 text-white px-2 py-0.5 rounded text-sm font-bold">
              20% OFF
            </span>
          </p>
          <p className="text-gray-400">|</p>
          <p className="pr-10">
            📚 New Arrivals:{" "}
            <span className="font-bold text-indigo-600">Atomic Habits</span>
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default HomeMarquee;
