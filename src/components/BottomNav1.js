import React from "react";

import checkedIcon from "../svg/guarantee.svg";
import briefCaseAltIcon from "../svg/suitcase.svg";
import settingsIcon from "../svg/settings.svg";
import classes from "./BottomNav.module.css";

function BottomNav1() {
  return (
    <div className={classes.containerBottom}>
      <ul className={classes.advItems}>
        <li className={classes.advItem}>
          <img src={checkedIcon} className={classes.advIcon} alt="Icon" />
          <span className={classes.advLink}>Sifatni tekshirish</span>
        </li>
        <li className={classes.advItem}>
          <img src={briefCaseAltIcon} className={classes.advIcon} alt="Icon" />
          <span className={classes.advLink}>Professionallar ishlaydi</span>
        </li>
        <li className={classes.advItem}>
          <img src={settingsIcon} className={classes.advIcon} alt="Icon" />
          <span className={classes.advLink}>Vijdonan ishlash</span>
        </li>
      </ul>
    </div>
  );
}

export default BottomNav1;
