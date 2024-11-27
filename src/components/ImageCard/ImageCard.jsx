import css from "./ImageCard.module.css";

export const ImageCard = ({ id, src, alt }) => {
  return (
    <li key={id}>
      <img className={css.card} src={src} alt={alt} height={300} width={350} />
    </li>
  );
};
