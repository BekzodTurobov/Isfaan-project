import React from "react";
import classes from "./Footer.module.css";
import { facebookIcon } from "../svg/svg";
import { instagramIcon } from "../svg/svg";
import { telegramIcon } from "../svg/svg";
import { phoneIcon } from "../svg/svg";
import { messageIcon } from "../svg/svg";
import FooterForm from "./FooterForm";
import useIntersectObs from "./useIntersectObs";

export default function Footer(props) {
  const { myRef } = useIntersectObs();

  return (
    <footer className={`${classes.footer} ${props.animation}`}>
      <div ref={myRef} className={classes.footerContainer}>
        <div className={classes.footerSubContainer}>
          <h2 className={classes.footerText}>Bizning kontaktlarimiz</h2>
          <div className={classes.footerFeedback}>
            <span className={classes.callBtn}>{phoneIcon}</span>
            <div>
              <p>+998 78 123 45 67</p>
              <p>+998 78 123 45 67</p>
            </div>
          </div>

          <div className={classes.footerFeedback}>
            <span className={classes.callBtn}>{messageIcon}</span>
            <div>
              <p>isfaan_buildings@mail.uz</p>
              <p>isfaan-buildings.com</p>
            </div>
          </div>

          <div className={classes.footerFeedback}>
            <a className={classes.footerLink} href="#">
              {facebookIcon}
            </a>
            <a className={classes.footerLink} href="#">
              {instagramIcon}
            </a>
            <a className={classes.footerLink} href="#">
              {telegramIcon}
            </a>
          </div>
        </div>
        <FooterForm />
        <p className={classes.copyrightText}>
          &copy; 2010-2023 Isfaan Buildings. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
}
