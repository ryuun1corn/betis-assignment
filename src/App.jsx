import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import ErrorLayout from "./layouts/ErrorLayout";
import Home from "./pages/Home";
import Boats, { boatsLoader } from "./pages/View";
import { action as deleteAction } from "./pages/Delete";
import { action as moveAction } from "./pages/Move";
import Add, { action as addAction } from "./pages/Add";
import Edit, { loader as boatLoader, action as editAction } from "./pages/Edit";
import "./index.css";

const router = createBrowserRouter([ 
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "boats",
        element: <Boats />,
        loader: boatsLoader,
        children: [
          {
            path: "delete",
            action: deleteAction,
          },
          {
            path: "move",
            action: moveAction,
          },
        ],
      },
      {
        path: "add",
        element: <Add />,
        action: addAction,
      },
      {
        path: "/boats/:boatId/edit",
        element: <Edit />,
        loader: boatLoader,
        action: editAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
