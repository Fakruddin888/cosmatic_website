import React from "react";
import css from "./footer.module.css";
import Logo from "../../assets/logo.png";
import { HiLocationMarker } from "react-icons/hi";
import {BsTelephoneForward} from "react-icons/bs"
import {CgMail} from "react-icons/cg"
import {IoIosLogIn} from "react-icons/io"
import {FcAbout} from "react-icons/fc"
import {MdPrivacyTip} from "react-icons/md"

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} />
          <span>amazon</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <HiLocationMarker className={css.icon} />
              <span>111 north avenue Orlando,FL 32801</span>
            </span>

            <span className={css.pngLine}>
              <BsTelephoneForward className={css.icon} />
              <span>1234-234-4567</span>
            </span>

            <span className={css.pngLine}>
              <CgMail className={css.icon} />
              <span>fakru.dilkhush@gmail.com</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <IoIosLogIn className={css.icon} />
              <span>Sign in</span>
            </span>
             </div>
            </div>

            <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <FcAbout className={css.icon} />
              <span>About Us</span>
            </span>
             </div>
            </div>

            <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <MdPrivacyTip className={css.icon} />
              <span>Safty/Privacy&Terms</span>
            </span>
             </div>
            </div>
      </div>

      <div className={css.copyRight}>
        <span>copyRight @2023 by Amazon</span>
        <span>All Right Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
