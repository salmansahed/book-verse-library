import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-[80vh] sm:min-h-screen flex flex-col items-center justify-center px-4">
      <div className="flex font-black text-[125px] md:text-[190px] leading-none tracking-tighter">
        <span className="text-indigo-600">4</span>
        <span className="text-rose-500">0</span>
        <span className="text-amber-500">4</span>
      </div>

      <div className="text-center mt-6">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-500 font-medium">
          The page you are looking for doesn&apos;t exist.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="bg-gray-900 text-white text-sm font-bold px-10 py-4 rounded-full hover:bg-indigo-800 transition-all shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
