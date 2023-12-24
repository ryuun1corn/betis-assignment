import { redirect } from "react-router-dom";
import { moveBoat } from "../utility/api_utils";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  await moveBoat(values.id);
  return redirect("/boats");
};
