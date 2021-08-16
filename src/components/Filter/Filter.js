import PropTypes from "prop-types";

import styles from "./Filter.module.css";

const Filter = ({ filterValue, onFilter }) => {
  return (
    <form className={styles.form}>
      <label>
        Find contacts by name
        <input
          type="text"
          className={styles.input}
          value={filterValue}
          onChange={onFilter}
        />
      </label>
    </form>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string,
  onFilter: PropTypes.func,
};

export default Filter;
