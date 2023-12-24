import { Link, useRouteError } from "react-router-dom";
import "../index.css";

const ErrorLayout = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-dancingScript text-9xl font-bold text-center my-16 w-fit border-b-2 pb-1">
        Oops...
      </h1>
      <p className="text-center text-xl tracking-wide leading-relaxed">
        Something went wrong!
        <br />
        Click the button below to return to the main page:
      </p>
      <Link
        to="/"
        className="bg-blue1 text-white my-6 rounded-full shadow-2xl p-5 px-7 text-2xl font-medium transition ease-in-out delay-100 hover:text-blue-700 hover:bg-white hover:-translate-y-1 duration-300"
      >
        Home
      </Link>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorLayout;
