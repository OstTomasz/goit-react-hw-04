import css from "./ErrorMessage.module.css";

export const ErrorMessage = () => {
  return <p className={css.error}>Something went wrong... Try again!</p>;
};
