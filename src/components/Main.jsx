import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-extrabold mb-10 tracking-wide">
        🚀 Minor Project Dashboard
      </h1>
      <div className="flex gap-6">
        <NavLink
          to="/popUp"
          className={({ isActive }) =>
            `px-6 py-3 rounded-2xl font-semibold transition-all shadow-md 
            ${
              isActive
                ? "bg-red-600 text-white scale-105"
                : "bg-gray-700 text-gray-200 hover:bg-red-500 hover:text-white"
            }`
          }
        >
          PopUp
        </NavLink>

        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            `px-6 py-3 rounded-2xl font-semibold transition-all shadow-md 
            ${
              isActive
                ? "bg-blue-600 text-white scale-105"
                : "bg-gray-700 text-gray-200 hover:bg-blue-500 hover:text-white"
            }`
          }
        >
          GalleryPopUp
        </NavLink>

        <NavLink
          to={"/timer"}
          className={({ isActive }) =>
            `px-6 py-3  rounded-2xl font-semibold ${
              isActive
                ? "bg-green-700"
                : "bg-gray-700 text-gray-200 hover:bg-green-500 hover:text-white"
            }`
          }
        >
          Timer 1.0
        </NavLink>
      </div>
    </div>
  );
};

export default Main;
