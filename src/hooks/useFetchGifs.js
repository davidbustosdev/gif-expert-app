import { useEffect, useState } from "react";
import { gifRequest } from "../helpers/gifRequest";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImagesFromApi = async () => {
    const allImages = await gifRequest(category);
    setImages(allImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImagesFromApi();
  }, []);

  return { images, isLoading };
};
