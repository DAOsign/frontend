import React from "react";

export default function SignatureIcon({ color = "currentColor" }) {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="signature_icon"
    >
      <path
        d="M1.5 10.1667C4.2775 7.38917 5.66667 5.16667 5.66667 3.5C5.66667 1 4.83333 1 4 1C3.16667 1 2.30667 1.90417 2.33333 3.5C2.36167 5.20667 3.715 7.56417 4.41667 8.5C5.66667 10.1667 6.5 10.5833 7.33333 9.33333L9 6.83333C9.2775 9.05583 10.1108 10.1667 11.5 10.1667C11.9417 10.1667 13.6992 8.5 14 8.5C14.4308 8.5 15.2642 9.05583 16.5 10.1667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
