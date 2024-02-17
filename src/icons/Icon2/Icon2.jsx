/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon2 = ({ color = "white", className }) => {
  return (
    <svg
      className={`icon-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 35 24"
      width="35"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M18.7863 13.134L13.3954 22.3669L8.00448 13.134H18.7863ZM20.2305 12.3088H6.55444L13.3954 24L20.2305 12.3088Z"
        fill={color}
      />
      <path
        className="path"
        d="M28.1591 1.65038L33.55 10.8833H22.7681L28.1591 1.65038ZM28.1591 0L21.3181 11.6912H35L28.1591 0Z"
        fill={color}
      />
      <path className="path" d="M0 0L5.7359 10.3409L12.0038 0.259661L0 0Z" fill="#4CAF4F" />
      <path className="path" d="M13.3955 0.905884L19.4121 11.189H7.36728L13.3955 0.905884Z" fill="#4CAF4F" />
      <path className="path" d="M20.9615 13.434L26.9839 24H14.6526L20.7744 13.434H20.9615Z" fill="#4CAF4F" />
      <path className="path" d="M22.2653 12.7935L28.1591 23.1978L34.1347 12.7935H22.2653Z" fill="#4CAF4F" />
    </svg>
  );
};

Icon2.propTypes = {
  color: PropTypes.string,
};
