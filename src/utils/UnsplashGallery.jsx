import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setImages } from "./imageSlice";

const UnsplashGallery = () => {
  const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  const dispatch = useDispatch();
  const images = useSelector((store) => store.images.images);
  console.log("working ");
  //calling upsplash to get images
  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query: "portrait", per_page: 12 },
          headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
        }
      );
      dispatch(setImages(response.data.results));
    } catch (err) {
      console.log("Error fetching images", err);
      alert("Limit reahed today try after some time ");
    }
  };
  useEffect(() => {
    if (images.length == 0) {
      fetchImages();
    }
  }, []);

  return null;
};

export default UnsplashGallery;
