import { useState } from "react";
import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ getMoreImg }) => {
  const [page, setPage] = useState(2);
  const handleClick = () => {
    setPage((prev) => prev + 1);
    getMoreImg(page);
  };

  return (
    <div className={css.wrapper}>
      <button className={css.button} onClick={handleClick}>
        Load More
      </button>
    </div>
  );
};
