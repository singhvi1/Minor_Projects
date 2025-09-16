import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import UnsplashGallery from "../utils/UnsplashGallery";

const DisplayGallery = () => {
  const images = useSelector((state) => state.images.images);
  const [image, setImage] = useState(null);
  // console.log(image);
  UnsplashGallery()
 useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  return (
    <>
      {image && (
        <div className="BgDiv fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-10" onClick={() => setImage(null)}>
          <div className="PopUpdiv relative  w-[100vw] h-[95vh] flex justify-center items-center rounded  overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img
              src={image}
              alt="#"
              className="object-contain max-w-full max-h-full"
            />
            <button
              className="absolute top-4 right-4 bg-white text-red-600 rounded px-3 py-1 hover:bg-gray-200 "
              onClick={() => setImage(null)}
            >
              ❌
            </button>
          </div>
        </div>
      )}
      <div className="m-2 p-2">
        <div className="">
          <h1 className="text-2xl font-bold flex items-center justify-center">
            📸 PhotoWall
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4 p-5">
          {images.map((img) => (
            <button key={img.id} onClick={() => setImage(img.urls.regular)}>
              <img
                src={img.urls.small}
                alt={img.alt_description}
                className="rounded-lg hover:scale-105 transition-transform cursor-pointer"
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayGallery;
