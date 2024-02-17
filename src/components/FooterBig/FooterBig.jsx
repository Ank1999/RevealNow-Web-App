/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { EssentialIconsSend2 } from "../../icons/EssentialIconsSend2";
import { SocialIcons4 } from "../../icons/SocialIcons4";
import { SocialIcons6 } from "../../icons/SocialIcons6";
import { SocialIcons7 } from "../../icons/SocialIcons7";
import { StyleColorSocialDribbble } from "../../icons/StyleColorSocialDribbble";
import { Logo } from "../Logo";
import "./style.css";

export const FooterBig = ({
  className,
  logoNexcent = "https://cdn.animaapp.com/projects/65d0334b449bbb741dc6a86d/releases/65d05c9020131c11b142a074/img/nexcent-1.svg",
  text = "Copyright © 2020 Landify UI Kit.",
}) => {
  return (
    <div className={`footer-big ${className}`}>
      <div className="company-info">
        <Logo
          className="logo-instance"
          icon2Color="white"
          icon2StyleOverrideClassName="design-component-instance-node"
          nexcent={logoNexcent}
          nexcentClassName="logo-2"
        />
        <div className="copyright">
          <p className="div">{text}</p>
          <div className="text-wrapper-2">All rights reserved</div>
        </div>
        <div className="social-links">
          <SocialIcons4 className="social-icons" color="white" fill="white" />
          <StyleColorSocialDribbble className="social-icons" color="white" fill="white" opacity="0.1" />
          <SocialIcons6 className="social-icons" color="white" fill="white" opacity="0.1" />
          <SocialIcons7 className="social-icons" color="white" fill="white" opacity="0.1" />
        </div>
      </div>
      <div className="links">
        <div className="col">
          <div className="text-wrapper-3">Company</div>
          <div className="list-items">
            <div className="text-wrapper-4">About us</div>
            <div className="text-wrapper-5">Blog</div>
            <div className="text-wrapper-5">Contact us</div>
            <div className="text-wrapper-5">Pricing</div>
            <div className="text-wrapper-5">Testimonials</div>
          </div>
        </div>
        <div className="col">
          <div className="text-wrapper-3">Support</div>
          <div className="list-items">
            <div className="text-wrapper-4">Help center</div>
            <div className="text-wrapper-5">Terms of service</div>
            <div className="text-wrapper-5">Legal</div>
            <div className="text-wrapper-5">Privacy policy</div>
            <div className="text-wrapper-5">Status</div>
          </div>
        </div>
        <div className="col-2">
          <div className="text-wrapper-3">Stay up to date</div>
          <div className="email-input-field">
            <div className="overlap-group">
              <div className="input-field-BG" />
              <EssentialIconsSend2 className="essential-icons-send" />
              <div className="text-wrapper-6">Your email address</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterBig.propTypes = {
  logoNexcent: PropTypes.string,
  text: PropTypes.string,
};
