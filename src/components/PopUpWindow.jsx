import { useState } from "react";

const PopUpWindow = () => {
  const [popUp, setPopUp] = useState(false);

  const handleClick = () => setPopUp(true);
  const handleCloseDiv = () => setPopUp(false);

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-green-400 via-green-300 to-green-200 w-full h-screen">
      <h1 className="text-3xl font-extrabold my-6 text-gray-800 drop-shadow">
        🎉 Popup Feature Test
      </h1>

      <button
        className="bg-black text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-800 transition-all duration-200"
        onClick={handleClick}
      >
        Open PopUp
      </button>

      {/* Popup Overlay */}
      {popUp && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-20">
          {/* Popup Content */}
          <div className="relative bg-white w-[70%] max-w-2xl h-[70%] rounded-2xl shadow-2xl flex flex-col items-center justify-center animate-fadeIn scale-95">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              🚀 This is a Popup Window
            </h1>
            <p className="text-gray-600 text-center px-6">
              You can style this however you want. Add forms, images, or even
              videos inside this popup.
            </p>

            {/* Clofe Button */}
            <button
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 transition-colors font-bold"
              onClick={handleCloseDiv}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUpWindow;
