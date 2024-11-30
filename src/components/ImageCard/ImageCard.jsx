import css from "./ImageCard.module.css";

export const ImageCard = ({ src, alt }) => {
  return (
    <div>
      <img className={css.card} src={src} alt={alt} height={300} width={350} />
    </div>
  );
};
