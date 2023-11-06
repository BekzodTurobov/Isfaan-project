import React from "react";
import classes from "./BottomNav3.module.css";

import img1 from "../img/WEBP/night-1.webp";
import img2 from "../img/WEBP/night-2.webp";
import img3 from "../img/WEBP/night-3.webp";
import img4 from "../img/WEBP/night-4.webp";
import img5 from "../img/WEBP/night-5.webp";
import img6 from "../img/WEBP/night-6.webp";
import img7 from "../img/WEBP/night-7.webp";

const imgs = [
  {
    id: Math.random().toString(),
    img: img1,
    projectDescription: "Navoiy shahridagi uylar",
  },
  {
    id: Math.random().toString(),
    img: img2,
    projectDescription: "Beton zavodi",
  },
  {
    id: Math.random().toString(),
    img: img3,
    projectDescription: "Oilaviy xonadonlar",
  },
  {
    id: Math.random().toString(),
    img: img4,
    projectDescription: "G'isht zavodi",
  },
  { id: Math.random().toString(), img: img5, projectDescription: "" },
  { id: Math.random().toString(), img: img6, projectDescription: "" },
  { id: Math.random().toString(), img: img7, projectDescription: "" },
];

function BottomNav3() {
  return (
    <ul className={classes.projects}>
      {imgs.map((item) => (
        <li className={classes.project} key={item.id}>
          <img
            className={classes.projectImg}
            src={item.img}
            alt="related works"
          />
          <p className={classes.projectName}>{item.projectDescription}</p>
        </li>
      ))}
    </ul>
  );
}

export default BottomNav3;
