import { useState } from "react";
import { fetchPhotos } from "../API/API";

export const useGetImages = () => {
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getImgs = async (query) => {
    try {
      setIsLoading(true);
      const photos = await fetchPhotos(query);
      setGallery(photos);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      console.log(gallery);
    }
  };

  return {
    gallery,
    isLoading,
    error,
    getImgs,
  };
};
