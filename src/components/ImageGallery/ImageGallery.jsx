import css from "./ImageGallery.module.css";

import { ImageCard } from "../ImageCard/ImageCard";

export const ImageGallery = ({ gallery }) => {
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
