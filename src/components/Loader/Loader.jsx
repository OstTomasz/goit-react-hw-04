import { RevolvingDot } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={css.loader}>
      <RevolvingDot
        visible={true}
        height="10"
        width="40"
        color="rgb(28, 137, 173)"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
