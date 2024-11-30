import { useContext, useState } from "react";
import css from "./LoadMoreBtn.module.css";
import { queryContext } from "../../providers/ContextProvider";
import { scrollToBottom } from "../../Hooks/useGetImages";

export const LoadMoreBtn = ({ getMoreImg }) => {
  const { searchQuery } = useContext(queryContext);
  const [page, setPage] = useState(2);
  const handleClick = () => {
    setPage((prev) => prev + 1);
    getMoreImg(searchQuery, page).then(scrollToBottom);
  };

  return (
    <div className={css.wrapper}>
      <button className={css.button} onClick={handleClick}>
        Load More
      </button>
    </div>
  );
};
