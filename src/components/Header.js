import React, { useState } from "react";
import logo from "../img/logo.png";
import classes from "./Header.module.css";
import { briefCaseFullIcon } from "../svg/svg";
import { headPhonesIcon } from "../svg/svg";
import { phoneIcon } from "../svg/svg";
import { useTranslation } from "react-i18next";

function Header() {
  const [t, i18n] = useTranslation("global");

  function clickHandler(e) {
    document.querySelectorAll("button").forEach((el) => {
      el.classList.remove(classes.active);
    });
    e.target.classList.add(classes.active);
  }

  function changeLangHandler(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <header className={classes.mainHeader}>
      <div className={classes.container}>
        <div className={classes.logoBox}>
          <img className={classes.logo} src={logo} alt="logo" />
        </div>
        <nav className={classes.navbar}>
          <ul className={classes.navTopItems}>
            <li className={classes.navTopItem}>
              <button
                onClick={(e) => {
                  changeLangHandler("ru");
                  clickHandler(e);
                }}
                className={`${classes.navTopLink} ${classes.active}`}
              >
                Русский
              </button>
            </li>
            <li className={classes.navTopItem}>
              <button
                onClick={(e) => {
                  changeLangHandler("uz");
                  clickHandler(e);
                }}
                className={classes.navTopLink}
              >
                O'zbekcha
              </button>
            </li>
            <li className={classes.navTopItem}>
              <button
                onClick={(e) => {
                  changeLangHandler("en");
                  clickHandler(e);
                }}
                className={classes.navTopLink}
              >
                English
              </button>
            </li>
            <li className={classes.navTopItem}>
              <span className={classes.navTopIcon}>{briefCaseFullIcon}</span>
              <a className={classes.navTopLink} href="#">
                {t("header.company")}
              </a>
            </li>
            <li className={classes.navTopItem}>
              <span className={classes.navTopIcon}>{headPhonesIcon}</span>
              <a className={classes.navTopLink} href="#">
                {t("header.contacts")}
              </a>
            </li>
          </ul>
          {/* //////////////// */}
          <div className={classes.navBottom}>
            <ul className={classes.navBottomItems}>
              <li className={classes.navBottomitem}>
                <a
                  className={`${classes.navBottomLink} ${classes.underline}`}
                  href="#"
                >
                  {t("header.building")}
                </a>
              </li>
              <li className={classes.navBottomItem}>
                <a
                  className={`${classes.navBottomLink} ${classes.underline}`}
                  href="#"
                >
                  {t("header.production")}
                </a>
              </li>
              <li className={classes.navBottomItem}>
                <a
                  className={`${classes.navBottomLink} ${classes.underline}`}
                  href="#"
                >
                  {t("header.textiles")}
                </a>
              </li>
              <li className={classes.navBottomItem}>
                <a
                  className={`${classes.navBottomLink} ${classes.underline}`}
                  href="#"
                >
                  {t("header.news")}
                </a>
              </li>
              <li className={classes.navBottomItem}>
                <a
                  className={`${classes.navBottomLink} ${classes.underline}`}
                  href="#"
                >
                  {t("header.gallery")}
                </a>
              </li>
              <li className={classes.navBottomItem}>
                <a
                  className={`${classes.navBottomLink} ${classes.underline}`}
                  href="#"
                >
                  {t("header.catalog")}
                </a>
              </li>
            </ul>
            <div className={classes.callCentreBox}>
              <button className={classes.callBtn}>{phoneIcon}</button>
              <p className={classes.phoneNumBox}>
                <span className={classes.phoneNumber}>78 770-20-20</span>
                <span className={classes.phoneNumText}>
                  {t("header.support")}
                </span>
              </p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
