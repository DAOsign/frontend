import React from "react";
import styles from "../CloseIcon/index.module.css";

const Preview = () => {
  return (
    <div className={styles.previewIcon}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.7">
          <path
            d="M2.01677 10.5937C1.90328 10.414 1.84654 10.3241 1.81477 10.1855C1.79091 10.0814 1.79091 9.91727 1.81477 9.81317C1.84654 9.67458 1.90328 9.58473 2.01677 9.40503C2.95461 7.92005 5.74617 4.16602 10.0003 4.16602C14.2545 4.16602 17.0461 7.92005 17.9839 9.40503C18.0974 9.58473 18.1541 9.67458 18.1859 9.81317C18.2098 9.91727 18.2098 10.0814 18.1859 10.1855C18.1541 10.3241 18.0974 10.414 17.9839 10.5937C17.0461 12.0786 14.2545 15.8327 10.0003 15.8327C5.74617 15.8327 2.95461 12.0786 2.01677 10.5937Z"
            stroke="#CA5CF2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.0003 12.4993C11.381 12.4993 12.5003 11.3801 12.5003 9.99935C12.5003 8.61864 11.381 7.49935 10.0003 7.49935C8.61962 7.49935 7.50034 8.61864 7.50034 9.99935C7.50034 11.3801 8.61962 12.4993 10.0003 12.4993Z"
            stroke="#CA5CF2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default Preview;
