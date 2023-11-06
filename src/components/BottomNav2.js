import React from "react";
import classes from "./BottomNav2.module.css";
import CountUp from "react-countup";
import useIntersectObs from "./useIntersectObs";

function BottomNav2() {
  const { myRef, isIntersecting } = useIntersectObs();

  return (
    <div ref={myRef} className={classes.containerBottom}>
      <ul className={classes.advItems}>
        <li className={classes.advItem}>
          <div>
            <span className={classes.advNum}>
              {isIntersecting && (
                <CountUp start={0} end={5} delay={2.5} duration={3} />
              )}
            </span>
          </div>
          <p className={classes.advLink}>Mintaqa</p>
        </li>
        <li className={classes.advItem}>
          <div>
            <span className={classes.advNum}>
              {isIntersecting && (
                <CountUp start={0} end={15} delay={2.5} duration={3} />
              )}
            </span>
          </div>
          <p className={classes.advLink}>Loyiha</p>
        </li>
        <li className={classes.advItem}>
          <div>
            <span className={classes.advNum}>
              {isIntersecting && (
                <CountUp start={0} end={25} delay={2.5} duration={3} />
              )}
            </span>
          </div>
          <p className={classes.advLink}>Yil bozorda</p>
        </li>
        <li className={classes.advItem}>
          <div>
            <span className={classes.advNum}>
              {isIntersecting && (
                <CountUp start={0} end={33} delay={2.5} duration={3} />
              )}
            </span>
          </div>
          <p className={classes.advLink}>Ming xodim</p>
        </li>
      </ul>
    </div>
  );
}

export default BottomNav2;
