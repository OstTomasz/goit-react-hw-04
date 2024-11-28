import css from "./ImageGallery.module.css";

import { ImageCard } from "../ImageCard/ImageCard";
import { useGetImages } from "../../Hooks/useGetImages";

export const ImageGallery = () => {
  const { gallery } = useGetImages();
  console.log(gallery);
  return gallery.length > 0 ? (
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
    </>
  ) : null;
};
