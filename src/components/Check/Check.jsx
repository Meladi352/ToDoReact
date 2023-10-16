import React from "react";
import { BsCheck } from "react-icons/bs";
import styles from "./Check.module.css";

function Check({ isCompleted }) {
  return (
    <div className={styles.container}>
      <div className={`${styles.icon} ${isCompleted ? styles.checked : ""}`}>
        {isCompleted ? (
          <BsCheck />
        ) : null}
      </div>
    </div>
  );
}

export default Check;
