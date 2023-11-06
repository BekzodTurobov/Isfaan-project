import React from "react";
import { Link } from "react-router-dom";
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
              <Link className={classes.navTopLink} to="#">
                {t("header.company")}
              </Link>
            </li>
            <li className={classes.navTopItem}>
              <span className={classes.navTopIcon}>{headPhonesIcon}</span>
              <Link className={classes.navTopLink} to="#">
                {t("header.contacts")}
              </Link>
            </li>
          </ul>
          {/* //////////////// */}
          <div className={classes.navBottom}>
            <ul className={classes.navBottomItems}>
              <li className={classes.navBottomitem}>
                <Link
                  className={`${classes.navBottomLink} ${classes.underline}`}
                  to="#"
                >
                  {t("header.building")}
                </Link>
              </li>
              <li className={classes.navBottomItem}>
                <Link
                  className={`${classes.navBottomLink} ${classes.underline}`}
                  to="#"
                >
                  {t("header.production")}
                </Link>
              </li>
              <li className={classes.navBottomItem}>
                <Link
                  className={`${classes.navBottomLink} ${classes.underline}`}
                  to="#"
                >
                  {t("header.textiles")}
                </Link>
              </li>
              <li className={classes.navBottomItem}>
                <Link
                  className={`${classes.navBottomLink} ${classes.underline}`}
                  to="#"
                >
                  {t("header.news")}
                </Link>
              </li>
              <li className={classes.navBottomItem}>
                <Link
                  className={`${classes.navBottomLink} ${classes.underline}`}
                  to="#"
                >
                  {t("header.gallery")}
                </Link>
              </li>
              <li className={classes.navBottomItem}>
                <Link
                  className={`${classes.navBottomLink} ${classes.underline}`}
                  to="#"
                >
                  {t("header.catalog")}
                </Link>
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
