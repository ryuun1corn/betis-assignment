import "../index.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[1.75rem] sm:text-6xl lg:text-8xl xl:text-9xl font-dancingScript font-bold text-center my-16 w-fit border-b-2 pb-1">
        Miss Beti&#39;s Seabreeze Pier
      </h1>
      <p className="text-center text-xs tracking-wide leading-relaxed sm:text-lg">
        Welcome to Miss Beti&#39;s Dockyard! <br />
        To get started with your boats, click the button below:
      </p>
      <Link
        to="/boats"
        className="text-sm sm:text-lg lg:text-xl lg:px-6 bg-blue1 text-white my-6 tracking-wide rounded-full shadow-2xl p-3 px-5 font-medium transition ease-in-out delay-100 hover:text-blue-700 hover:bg-white hover:-translate-y-1 duration-300"
      >
        View my boats
      </Link>
    </div>
  );
};

export default Home;
