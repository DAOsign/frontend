import React from "react";
import styles from "./index.module.css";

const CloseIcon = () => {
  return (
    <div className={styles.closeIcon}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#CA5CF2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18M6 6L18 18"
          stroke="#CA5CF2"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default CloseIcon;
