/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon2 } from "../../icons/Icon2";
import "./style.css";

export const Logo = ({
  className,
  icon2StyleOverrideClassName,
  icon2Color = "#263238",
  nexcentClassName,
  nexcent = "https://cdn.animaapp.com/projects/65d0334b449bbb741dc6a86d/releases/65d05c9020131c11b142a074/img/nexcent.svg",
}) => {
  return (
    <div className={`logo ${className}`}>
      <Icon2 className={icon2StyleOverrideClassName} color={icon2Color} />
      <img className={`nexcent ${nexcentClassName}`} alt="Nexcent" src={nexcent} />
    </div>
  );
};

Logo.propTypes = {
  icon2Color: PropTypes.string,
  nexcent: PropTypes.string,
};
