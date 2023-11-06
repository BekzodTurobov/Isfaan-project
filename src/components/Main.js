import React from "react";
import classes from "./Main.module.css";
import useIntersectObs from "./useIntersectObs";

function Main(props) {
  const { myRef } = useIntersectObs();
  return (
    <section className={`${classes.main} ${props.animation}`}>
      <div className={classes.container}>
        <div ref={myRef} className={classes.subContainer}>
          <div className={classes.containerTop}>
            <h1 className={classes.mainText}>{props.mainText}</h1>
            <p className={classes.subText}>{props.subText}</p>
            <div className={classes.mainBtns}>
              <button className={`${classes.btn} ${classes.btnFull}`}>
                {props.btnText}
              </button>
              {props.isBtn && (
                <button className={`${classes.btn} ${classes.btnAlt}`}>
                  Kompaniya haqida
                </button>
              )}
            </div>
          </div>
          {props.bottomComponent}
        </div>
      </div>
    </section>
  );
}

export default Main;
