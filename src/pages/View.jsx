import "../index.css";
import { Link, useLoaderData } from "react-router-dom";
import { getBoats } from "../utility/api_utils";

import BoatsAccordion from "../components/BoatsAccordion";

const Boats = () => {
  const boats = useLoaderData();

  return (
    <div className="flex flex-col items-center h-max">
      {boats.length !== 0 ? (
        <div className="flex flex-col justify-center items-center my-10 w-full">
          <h2 className="text-base text-center md:text-3xl">{`You have ${boats.length} boat(s) at your disposal.`}</h2>
          <BoatsAccordion boats={boats} />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h2 className="font-dancingScript text-3xl md:text-7xl font-bold text-center my-16 w-fit pb-1">
            How are we supposed to sail with no boat...?
          </h2>
          <p className="text-md text-center mx-2 md:text-2xl">Add a boat by clicking the button below!</p>
          <Link
            to="/add"
            className="bg-blue1 text-white my-6 tracking-wide rounded-full shadow-2xl p-5 px-7 text-md md:text-2xl font-medium transition ease-in-out delay-100 hover:text-blue-700 hover:bg-white hover:-translate-y-1 duration-300"
          >
            Add a boat!
          </Link>
        </div>
      )}
    </div>
  );
};

export const boatsLoader = async () => {
  const data = await getBoats();
  const boats = data.daftarPerahu.sort((a, b) => {
    let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  return boats;
};

export default Boats;
