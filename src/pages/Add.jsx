import { useFormik } from "formik";
import * as Yup from "yup";
import {
  useSubmit,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { addBoat } from "../utility/api_utils";
import { SpinnerSvg } from "../assets/SVGAssets";

import "../index.css";

const Add = () => {
  const navigation = useNavigation();
  const actionData = useActionData();
  const { error } = actionData || {};
  const colors = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Indigo",
    "Violet",
    "White",
    "Black",
  ];

  const submit = useSubmit();

  // Formik logic
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      capacity: "",
      color: "RED",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, "Name must be 100 characters or less.")
        .required("Name is required"),
      description: Yup.string()
        .max(200, "Description must be 200 characters or less")
        .required("Description is required"),
      capacity: Yup.number()
        .positive("Capacity has to be a positive number")
        .required("Capacity is required"),
    }),

    onSubmit: async (values) => {
      submit(values, { method: "post" });
    },
  });

  return (
    <div className="flex flex-col items-center h-full">
      <div>
        <h2 className="tracking-widest text-5xl sm:text-8xl font-dancingScript my-5 font-bold border-b-2">
          Buy a boat!
        </h2>
        <p className="text-center text-md md:text-lg my-2 tracking-wider">
          The sea's the limit
        </p>
      </div>
      <form
        method="post"
        className="bg-white w-5/6 md:w-1/2 rounded-lg my-5 p-5"
        onSubmit={formik.handleSubmit}
      >
        <div className="w-full flex flex-col gap-2">
          <label
            htmlFor="name"
            className={`tracking-wider ${
              formik.errors.name && formik.touched.name
                ? "text-red-500"
                : "text-black"
            }`}
          >
            {formik.errors.name && formik.touched.name
              ? formik.errors.name
              : "Name"}
          </label>
          <input
            type="text"
            name="name"
            className="border-2 border-white1 p-2 rounded-md tracking-wider text-black1"
            placeholder="Boat name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label
            htmlFor="description"
            className={`tracking-wider ${
              formik.errors.description && formik.touched.description
                ? "text-red-500"
                : "text-black"
            }`}
          >
            {formik.errors.description && formik.touched.description
              ? formik.errors.description
              : "Description"}
          </label>
          <input
            type="message"
            name="description"
            className="p-2 rounded-md border-2 border-white1 text-black1"
            placeholder="Boat description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label
            htmlFor="capacity"
            className={`tracking-wider ${
              formik.errors.capacity && formik.touched.capacity
                ? "text-red-400"
                : "text-black"
            }`}
          >
            {formik.errors.capacity && formik.touched.capacity
              ? formik.errors.capacity
              : "Capacity"}
          </label>
          <input
            type="number"
            name="capacity"
            className="p-2 rounded-md border-2 border-white1 text-black1"
            placeholder="Boat capacity"
            value={formik.values.capacity}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="color" className="text-black tracking-wider">
            Color{" "}
          </label>
          <select
            name="color"
            id=""
            className="p-2 rounded-md bg-white border-2 border-white1 text-black1"
            value={formik.values.color}
            onChange={formik.handleChange}
          >
            {colors.map((color, index) => (
              <option
                value={color.toUpperCase()}
                key={index}
                className={`text-black p-2 rounded-md tracking-wider border-2 border-white1 bg-${color.toLocaleLowerCase()}`}
              >
                {color}
              </option>
            ))}
          </select>
          <button
            className="font-medium bg-blue1 text-white w-2/3 md:w-1/3 p-3 rounded-md self-center my-3 tracking-widest flex justify-center"
            type="submit"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? <SpinnerSvg /> : "Buy!"}
          </button>
          <p className="text-red-400 text-center text-sm">{error}</p>
        </div>
      </form>
    </div>
  );
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  const status = await addBoat(values);
  if (status) {
    return redirect("/boats");
  }
  return { error: "Something went wrong" };
};

export default Add;
