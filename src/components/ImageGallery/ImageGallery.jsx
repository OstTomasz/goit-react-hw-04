import { useEffect, useState } from "react";
import axios from "axios";

import css from "./ImageGallery.module.css";

const APIKEY = "S9B4Xc46HDCuoMTyqKnfQ6wPMSxgCiQjz9AMPlSbrsI";
const APIURL = `https://api.unsplash.com/photos/?client_id=${APIKEY}`;

export const ImageGallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const getImgs = async () => {
      const response = await axios.get(APIURL);
      setGallery(response.data);
    };
    getImgs();
  }, []);

  return (
    <ul className={css.gallery}>
      {gallery.map((img) => (
        // {
        //   console.log("img:", img);
        // }
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
