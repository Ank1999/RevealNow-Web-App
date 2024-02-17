/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const SixteenUserInterfaceLoading = ({ color = "white", className }) => {
  return (
    <svg
      className={`sixteen-user-interface-loading ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8 1.33331L8 3.33331"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
      />
      <path
        className="path"
        d="M8 12.6666L8 14.6666"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
      />
      <path
        className="path"
        d="M1.33301 8L3.33301 8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
      />
      <path
        className="path"
        d="M12.6665 8L14.6665 8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
      />
      <path
        className="path"
        d="M3.28598 3.28592L4.7002 4.70013"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
      />
      <path
        className="path"
        d="M11.2997 11.3L12.7139 12.7142"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
      />
      <path
        className="path"
        d="M12.714 3.28592L11.2998 4.70013"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
      />
      <path
        className="path"
        d="M4.69986 11.3L3.28564 12.7142"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
      />
    </svg>
  );
};

SixteenUserInterfaceLoading.propTypes = {
  color: PropTypes.string,
};
