import css from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

export const SearchBar = () => {
  return (
    <header className={css.header}>
      <form className={css.form}>
        <button className={css.button} type="submit">
          <CiSearch size={20} />
        </button>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
