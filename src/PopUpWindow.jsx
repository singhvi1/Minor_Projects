import { useState } from "react";

const PopUpWindow = () => {
  const [popUp, setPopUp] = useState(false);
  console.log(popUp);

  const handleClick = () => {
    setPopUp(true);
    console.log(popUp);
  };
  const handleCloseDiv = () => {
    setPopUp(false);
  };
  return (
    <div className="flex flex-col items-center bg-green-300 w-full h-[100vh] ">
      <h1 className="text-lg font-black ">
        this is window for testing popUp feature
      </h1>
      <button className="bg-black text-white rounded" onClick={handleClick}>
        PopUp
      </button>

      {popUp && (
        <div className="BgDiv fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="PopUpdiv relative m-4 p-4 bg-red-800 w-[70%] h-[80%] flex justify-center items-center rounded z-10">
            <h1 className="text-white">This is a popup div</h1>
            <button
              className="absolute top-2 right-2 bg-white text-red-600 rounded px-2 hover:bg-gray-200 "
              onClick={handleCloseDiv}
            >
              ❌
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUpWindow;
