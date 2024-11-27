import { useEffect, useState } from "react";
import axios from "axios";

import css from "./ImageGallery.module.css";

import { Loader } from "../Loader/Loader";

const APIKEY = "S9B4Xc46HDCuoMTyqKnfQ6wPMSxgCiQjz9AMPlSbrsI";
const APIURL = `https://api.unsplash.com/photos/?client_id=${APIKEY}`;

export const ImageGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getImgs = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(APIURL);
        setGallery(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getImgs();
  }, []);

  return !isLoading ? (
    <Loader />
  ) : (
    <ul className={css.gallery}>
      {gallery.map((img) => (
        <li key={img.id}>
          <img
            src={img.urls.small}
            alt={img.alt_description}
            height={300}
            width={350}
          />
        </li>
      ))}
    </ul>
  );
};
