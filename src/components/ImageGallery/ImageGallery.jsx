import { useEffect, useState } from "react";
import axios from "axios";

import css from "./ImageGallery.module.css";

import { Loader } from "../Loader/Loader";
import { ImageCard } from "../ImageCard/ImageCard";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

const APIKEY = "S9B4Xc46HDCuoMTyqKnfQ6wPMSxgCiQjz9AMPlSbrsI";
const APIURL = `https://api.unsplash.com/photos/?client_id=${APIKEY}`;

export const ImageGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getImgs = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(APIURL);
        setGallery(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
        console.log(error);
      }
    };
    getImgs();
  }, []);

  return error ? (
    <ErrorMessage />
  ) : isLoading ? (
    <Loader />
  ) : (
    <>
      <ul className={css.gallery}>
        {gallery.map((img) => (
          <ImageCard
            key={img.id}
            src={img.urls.small}
            alt={img.alt_description}
          />
        ))}
      </ul>
      {gallery.length > 0 ? <LoadMoreBtn /> : null}
    </>
  );
};
