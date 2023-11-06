import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import classes from "./Wrapper.module.css";
import BottomNav1 from "./BottomNav1";
import BottomNav2 from "./BottomNav2";
import BottomNav3 from "./BottomNav3";
import Footer from "./Footer";

const informations = [
  {
    id: Math.random().toString(),
    mainText: "Isfaan Buildings",
    subText: `Qurilish, toshli minerallarni qayta ishlash, plastmassa, metall konstruktsiyalar, shuningdek temir-beton va g'isht zavodi.`,
    btnText: " Bizning xizmatlarimiz",
    animation: classes.img1,
    isBtn: true,
    bottomComponent: <BottomNav1 />,
  },
  {
    id: Math.random().toString(),
    mainText: "Kompaniya haqida",
    subText: `O'zbekiston nafaqat madaniyat, san'at va yodgorliklarning vatani, balki yirik sanoat mahsulotlarining vatani hamdir. Va ulardan biri - bu Isfaan Buildings bo'lib, u O'zbekiston sanoatining markazida, Navoiy shahrida joylashgan.`,
    btnText: "Kompaniya haqida ko'proq mal'lumot",
    animation: classes.img2,
    isBtn: false,
    bottomComponent: <BottomNav2 />,
  },
  {
    id: Math.random().toString(),
    mainText: "Bizning loyihalarimiz",
    subText: `O'zbekiston nafaqat madaniyat, san'at va yodgorliklarning vatani, balki yirik sanoat mahsulotlarining vatani hamdir`,
    btnText: "Barcha loyihalarimiz",
    animation: classes.img3,
    isBtn: false,
    bottomComponent: <BottomNav3 />,
  },
  {
    id: Math.random().toString(),
    mainText: "Kompaniya menedjmenti",
    subText: `O'zbekiston nafaqat madaniyat, san'at va yodgorliklarning vatani, balki yirik sanoat mahsulotlarining vatani hamdir. Va ulardan biri - bu Isfaan Buildings bo'lib, u O'zbekiston sanoatining markazida, Navoiy shahrida joylashgan.`,
    btnText: "Jamoamiz",
    animation: classes.img4,
    isBtn: false,
    bottomComponent: <BottomNav1 />,
  },
  {
    id: Math.random().toString(),
    mainText: "Yangiliklar",
    subText: "",
    btnText: "Barcha yangiliklar",
    animation: classes.img5,
    isBtn: false,
    bottomComponent: <BottomNav1 />,
  },
];

function Wrapper() {
  return (
    <div className={classes.wrapper}>
      <Header />
      {informations.map((item) => (
        <Main
          key={item.id}
          mainText={item.mainText}
          subText={item.subText}
          btnText={item.btnText}
          animation={item.animation}
          isBtn={item.isBtn}
          bottomComponent={item.bottomComponent}
        />
      ))}
      <Footer animation={informations[4].animation} />
    </div>
  );
}

export default Wrapper;
