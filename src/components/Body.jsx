import { createBrowserRouter, RouterProvider } from "react-router";
import Main from "./Main";
import PopUpWindow from "./PopUpWindow"
import DisplayGallery from "./DisplayGallery"
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
  ]);
  return <RouterProvider router={appRouter} />;
}

export default Body
