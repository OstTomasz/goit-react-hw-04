import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = () => {
  return (
    <div className={css.wrapper}>
      <button className={css.button}>Load More</button>
    </div>
  );
};
