import { useState } from "react";
import { Link, Form, useNavigation } from "react-router-dom";

import "../index.css";
import { BoatSvg, DeleteSvg, EditSvg, SpinnerSvg } from "../assets/SVGAssets";

const AccordionItem = ({ data }) => {
  const [active, setActive] = useState(false);
  const navigation = useNavigation();
  const navState = navigation.formData;
  const currNav = navState !== undefined ? Object.fromEntries(navState) : {};

  const convertDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: "Asia/Bangkok",
    };

    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  return (
    <div className="w-full bg-white1 my-1 rounded-lg divide-y-2 transition-all py-2 shadow-lg shadow-slate-700 hover:shadow-slate-500 delay-75 duration-200">
      <button
        className="w-full flex flex-row justify-between items-center p-3"
        onClick={() => {
          setActive(!active);
        }}
      >
        <span className="text-black text-xl font-medium tracking-wide">
          {data.name}
        </span>
        <span>
          <img
            src="./src/assets/anchor.svg"
            className={`transition-all ${active ? "" : "rotate-90"}`}
          />
        </span>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="grid-rows-[minmax(30px,_1fr)_repeat(5,55px)] grid-cols-1 gap-y-3 md:grid-cols-10 md:grid-rows-[minmax(50px,_1fr)_50px_50px] md:gap-3 bg-white1 rounded-b-xl px-3 grid overflow-hidden">
          {/* First row */}
          <p className="my-2 text-sm md:text-base text-black col-span-1 md:col-span-7 row-span-1 leading-relaxed md:leading-8 tracking-wide text-start">
            "{data.description}"
          </p>
          <p className="self-end md:self-auto col-span-1 md:col-span-3 text-black text-sm md:text-base row-span-1 md:text-end leading-loose tracking-tight">
            boat is currently{" "}
            <span className="text-black font-semibold tracking-normal">
              {data.is_sailing ? "on the seas" : "docked"}
            </span>
          </p>

          {/* Second row */}
          <div className="col-span-1 md:col-span-8 row-start-2 md:row-start-auto flex items-center">
            <div className="flex items-center gap-2 bg-slate-400 px-3 py-2 rounded-lg">
              <BoatSvg color={data.color} />
              <p className="text-black">: {data.capacity} people</p>
            </div>
          </div>
          <Form
            action="move"
            method="post"
            className="col-span-1 md:col-span-2"
            onSubmit={(event) => {
              if (
                !confirm(
                  data.is_sailing
                    ? "Call this boat to shore?"
                    : "Raise the anchors?"
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <input type="hidden" name="id" value={data.id} readOnly />
            <button
              className="flex justify-center items-center text-white1 bg-blue1 border-2 border-blue1 rounded-lg tracking-widest font-semibold w-full h-full hover:bg-white1 hover:text-blue1 transition-all"
              type="submit"
              disabled={navigation.state === "submitting"}
            >
              {navigation.state === "submitting" && currNav.id === data.id ? (
                <SpinnerSvg />
              ) : data.is_sailing ? (
                "Dock!"
              ) : (
                "Sail!"
              )}
            </button>
          </Form>

          {/* Third row */}
          <p className="text-black row-start-6 md:row-start-auto col-span-1 md:col-span-8 text-xs self-end tracking-wide">
            Updated: {convertDate(data.updated_at)}
            <br />
            Bought: {convertDate(data.bought_at)}
          </p>
          <div className="col-span-1 md:col-span-2 flex justify-between">
            <Link
              className="bg-[#36B933] border-2 border-[#36B933] group flex justify-center items-center w-2/5 rounded-md hover:bg-white transition-all"
              to={`/boats/${data.id}/edit`}
            >
              <EditSvg />
            </Link>

            <Form
              action="delete"
              method="post"
              className="w-2/5 h-full"
              onSubmit={(event) => {
                if (!confirm("Do you want to delete this boat?")) {
                  event.preventDefault();
                }
              }}
            >
              <input type="hidden" name="id" value={data.id} readOnly />
              <button
                className="bg-[#B94B33] border-2 border-[#B94B33] group flex justify-center items-center w-full h-full rounded-md hover:bg-white transition-all"
                type="submit"
              >
                <DeleteSvg />
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
