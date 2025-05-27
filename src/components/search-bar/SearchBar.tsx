import style from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={style.searchBar}>
      <input type="text" placeholder="Search a topic..." />
      <button type="submit" className={style.searchButton}>
        Find
      </button>
    </div>
  );
}
