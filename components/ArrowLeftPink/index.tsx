import React from "react";
import styles from "./styles.module.css";

const ArrowLeftPink = () => {
  return (
    <div className={styles.arrowLeftPink}>
      <svg
        width="20"
        height="21"
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.75 11L5.25 7.5L8.75 4"
          stroke="#CA5CF2"
          stroke-width="1.16667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default ArrowLeftPink;
