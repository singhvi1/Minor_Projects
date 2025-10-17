import { createBrowserRouter, RouterProvider } from "react-router";
import Main from "./Main";
import PopUpWindow from "./PopUpWindow"
import DisplayGallery from "./DisplayGallery"
import Timer from "./Timer";
const Body = () => {
const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/popUp",
      element: <PopUpWindow />,
    },
    {
      path: "/gallery",
      element: <DisplayGallery />,
    },
    {
      path: "/timer",
      element: <Timer />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default Body
