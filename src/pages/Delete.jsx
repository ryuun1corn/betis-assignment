import { redirect } from "react-router-dom";
import { deleteBoat } from "../utility/api_utils";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  await deleteBoat(values.id);
  return redirect("/boats");
};
