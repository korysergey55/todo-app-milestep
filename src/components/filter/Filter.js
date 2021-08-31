import React from "react";
import styles from "./FilterStyled.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, } from "../../redax/filter/filterActions";
import { filterSelector} from "../../redax/filter/filterSelectors";

const Filter = () => {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const onHandleChange = (event) => {
    const felterInputValue = event.target.value;
    dispatch(setFilter(felterInputValue));
  };

  return (
    <>
      <div className={styles.filterMainContainer}>
        <div className={styles.filterContainer}>
          <label className={styles.filterLabel}>
            Find Task by Title
            <input
              className={styles.filterInput}
              type="text"
              value={filter}
              onChange={onHandleChange}
              placeholder="Enter title to find task "
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default Filter;
