import { useEffect, useState } from "react";
import axios from "axios";

const APIKEY = "S9B4Xc46HDCuoMTyqKnfQ6wPMSxgCiQjz9AMPlSbrsI";
const APIURL = `https://api.unsplash.com/photos/?client_id=${APIKEY}`;

export const ImageGallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const getImgs = async () => {
      const response = await axios.get(APIURL);
      setGallery(response.data);
      console.log("gallery:", gallery);
    };
    getImgs();
  }, []);

  return (
    <ul>
      {gallery.map((img) => {
        // {
        //   console.log("img:", img);
        // }
        <li key={img.id}>
          <img src={img.urls.small} alt={img.alt_description} />
        </li>;
      })}
    </ul>
  );
};
