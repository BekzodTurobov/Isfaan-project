import React from "react";
import classes from "./FooterForm.module.css";

function FooterForm() {
  return (
    <aside className={classes.footerContainer}>
      <form className={classes.form}>
        <div className={classes.formItem}>
          <label className={classes.label} htmlFor="tel">
            Telefon
          </label>
          <input id="tel" type="text" placeholder="+998 90 123 45 67" />
        </div>
        <div className={classes.formItem}>
          <label className={classes.label} htmlFor="name">
            Sizning ismingiz
          </label>
          <input id="name" type="text" placeholder="Ismingiz" />
        </div>
        <div className={classes.formItem}>
          <label className={classes.label} htmlFor="time">
            Qachon qo'ng'iroq qilish kerak
          </label>
          <select name="whenToCall" id="time" placeholder="">
            <option value="1">Istalgan vaqtda</option>
            <option value="2">Tushdan keyin</option>
            <option value="3">Tunda</option>
            <option value="4">Ertalab</option>
          </select>
        </div>
        <button className={classes.formBtn}>So'rov yuboring</button>
      </form>
      <p className={classes.subText}>
        So'rov qoldiring hodimimiz yaqin orada siz bilan bog'lanadi
      </p>
    </aside>
  );
}

export default FooterForm;
