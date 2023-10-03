import PropTypes from "prop-types";
import css from "./Filter.module.css";

const Filter = ({ onChange }) => {
  const getSearchValue = (ev) => {
    const SearchValue = ev.target.value;
    onChange(SearchValue);
  };

  return (
    <div className={css.search_container}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="search"
          onChange={getSearchValue}
        ></input>
      </label>
    </div>
  );
};
export default Filter;
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
