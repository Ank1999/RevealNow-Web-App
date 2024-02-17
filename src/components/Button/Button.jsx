/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { SixteenArrowsDirectionsRight31 } from "../../icons/SixteenArrowsDirectionsRight31";
import { SixteenUserInterface } from "../../icons/SixteenUserInterface";
import { SixteenUserInterfaceLoading } from "../../icons/SixteenUserInterfaceLoading";
import { SixteenUserInterfaceLoading5 } from "../../icons/SixteenUserInterfaceLoading5";
import { TwentyFourArrowsDirectionsRight5 } from "../../icons/TwentyFourArrowsDirectionsRight5";
import { TwentyFourUserInterface } from "../../icons/TwentyFourUserInterface";
import { TwentyFourUserInterfaceLoading5 } from "../../icons/TwentyFourUserInterfaceLoading5";
import "./style.css";

export const Button = ({ type, size, state, icon, className, divClassName, text = "Label", divClassNameOverride }) => {
  return (
    <button className={`button ${state} ${size} ${icon} ${type} ${className}`}>
      {(icon === "no" || icon === "right" || (icon === "left" && state === "loading")) && (
        <div
          className={`label ${
            icon === "left" || icon === "right" || (icon === "no" && state === "loading")
              ? divClassNameOverride
              : (icon === "no" && state === "click") ||
                (icon === "no" && state === "default") ||
                (icon === "no" && state === "disabled") ||
                (icon === "no" && state === "focus") ||
                (icon === "no" && state === "hover")
              ? divClassName
              : undefined
          }`}
        >
          {text}
        </div>
      )}

      {((icon === "right" && size === "medium" && state === "click") ||
        (icon === "right" && size === "medium" && state === "default") ||
        (icon === "right" && size === "medium" && state === "disabled") ||
        (icon === "right" && size === "medium" && state === "focus") ||
        (icon === "right" && size === "medium" && state === "hover") ||
        (icon === "right" && size === "small" && state === "click") ||
        (icon === "right" && size === "small" && state === "default") ||
        (icon === "right" && size === "small" && state === "disabled") ||
        (icon === "right" && size === "small" && state === "focus") ||
        (icon === "right" && size === "small" && state === "hover")) && (
        <SixteenArrowsDirectionsRight31
          className="instance-node"
          color={
            (state === "click" && type === "primary") ||
            (state === "default" && type === "primary") ||
            (state === "focus" && type === "primary") ||
            (state === "hover" && type === "primary")
              ? "white"
              : state === "disabled"
              ? "#ABBED1"
              : "#4CAF4F"
          }
        />
      )}

      {((icon === "left" && size === "medium" && state === "click") ||
        (icon === "left" && size === "medium" && state === "default") ||
        (icon === "left" && size === "medium" && state === "disabled") ||
        (icon === "left" && size === "medium" && state === "focus") ||
        (icon === "left" && size === "medium" && state === "hover") ||
        (icon === "left" && size === "small" && state === "click") ||
        (icon === "left" && size === "small" && state === "default") ||
        (icon === "left" && size === "small" && state === "disabled") ||
        (icon === "left" && size === "small" && state === "focus") ||
        (icon === "left" && size === "small" && state === "hover")) && (
        <SixteenUserInterface
          className="instance-node"
          color={
            (state === "click" && type === "primary") ||
            (state === "default" && type === "primary") ||
            (state === "focus" && type === "primary") ||
            (state === "hover" && type === "primary")
              ? "white"
              : state === "disabled"
              ? "#ABBED1"
              : "#4CAF4F"
          }
        />
      )}

      {((icon === "left" && size === "medium" && state === "loading") ||
        (icon === "right" && size === "medium" && state === "loading") ||
        (size === "small" && state === "loading")) && (
        <SixteenUserInterfaceLoading className="instance-node" color={type === "primary" ? "white" : "#4CAF4F"} />
      )}

      {icon === "no" && state === "loading" && size === "medium" && (
        <SixteenUserInterfaceLoading5 className="instance-node" color={type === "primary" ? "white" : "#4CAF4F"} />
      )}

      {((icon === "right" && size === "normal" && state === "click") ||
        (icon === "right" && size === "normal" && state === "default") ||
        (icon === "right" && size === "normal" && state === "disabled") ||
        (icon === "right" && size === "normal" && state === "focus") ||
        (icon === "right" && size === "normal" && state === "hover")) && (
        <TwentyFourArrowsDirectionsRight5
          className="instance-node-2"
          color={
            (state === "click" && type === "primary") ||
            (state === "default" && type === "primary") ||
            (state === "focus" && type === "primary") ||
            (state === "hover" && type === "primary")
              ? "white"
              : state === "disabled"
              ? "#ABBED1"
              : "#4CAF4F"
          }
        />
      )}

      {((icon === "left" && size === "normal" && state === "click") ||
        (icon === "left" && size === "normal" && state === "default") ||
        (icon === "left" && size === "normal" && state === "disabled") ||
        (icon === "left" && size === "normal" && state === "focus") ||
        (icon === "left" && size === "normal" && state === "hover")) && (
        <TwentyFourUserInterface
          className="instance-node-2"
          color={
            (state === "click" && type === "primary") ||
            (state === "default" && type === "primary") ||
            (state === "focus" && type === "primary") ||
            (state === "hover" && type === "primary")
              ? "white"
              : state === "disabled"
              ? "#ABBED1"
              : "#4CAF4F"
          }
        />
      )}

      {((icon === "left" && state === "click") ||
        (icon === "left" && state === "default") ||
        (icon === "left" && state === "disabled") ||
        (icon === "left" && state === "focus") ||
        (icon === "left" && state === "hover")) && <div className="text-wrapper">{text}</div>}

      {state === "loading" && size === "normal" && (
        <TwentyFourUserInterfaceLoading5 className="instance-node-2" color={type === "primary" ? "white" : "#4CAF4F"} />
      )}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  size: PropTypes.oneOf(["small", "medium", "normal"]),
  state: PropTypes.oneOf(["click", "default", "focus", "loading", "hover", "disabled"]),
  icon: PropTypes.oneOf(["right", "no", "left"]),
  text: PropTypes.string,
};
