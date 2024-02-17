/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const SixteenArrowsDirectionsRight31 = ({ color = "white", className }) => {
  return (
    <svg
      className={`sixteen-arrows-directions-right-31 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.2502 11.0002L13.7199 8.53045C14.0129 8.23755 14.0129 7.76266 13.7199 7.46976L11.2502 5.00003M13.5003 8.0001L2.5 8.00011"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.1"
      />
    </svg>
  );
};

SixteenArrowsDirectionsRight31.propTypes = {
  color: PropTypes.string,
};
