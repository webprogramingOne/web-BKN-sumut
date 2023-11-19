import { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { IoPricetagsSharp } from "react-icons/io5";
import { RiVipCrownFill } from "react-icons/ri";
import Navigation from "./Navigation";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
const Managemen = () => {
  const dekorasi = [
    {
      type: "Vip1",
      img: "../pelaminan1.jpg",
      desc: "Lorem ",
    },
    {
      type: "Vip2",
      img: "../pelaminan2.jpeg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip3",
      img: "../pelaminan3.jpeg",
      desc: "Lorem ipsum dolor ",
    },

    {
      type: "Vip4",
      img: "../pelaminan-4.jpeg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip6",
      img: "../pelaminan4.jpeg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip7",
      img: "../pelaminan4.jpeg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip8",
      img: "../pelaminan4.jpeg",
      desc: "Lorem ipsum dolor ",
    },
  ];
  const tenda = [
    {
      type: "Vip1",
      img: "../card1.jpeg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip2",
      img: "../banner.jpg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip3",
      img: "../banner.jpg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip4",
      img: "../banner.jpg",
      desc: "Lorem ipsum dolor ",
    },
  ];
  const hena = [
    {
      type: "Vip1",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip2",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip3",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip4",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor ",
    },
  ];
  const photography = [
    {
      type: "Vip12",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip2",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip3",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip4",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor ",
    },
  ];

  return (
    <div>
      <div className="flex bg-slate-200 w-full items-center justify-between">
        <p className="font-semibold text-blue-500 p-4">
          <Link to="/">AGUNGMB</Link>
          <Link to="/" className="font-normal text-slate-900">
            Admin
          </Link>
        </p>
        <p className="mr-4 flex items-center gap-2">
          <CgProfile />
          Robby Jundi
        </p>
      </div>
      <div className="justify-center text-center mt-20 text-xl text-blue-900 font-semibold">
        <h1>Admin Management Page</h1>
        <p className="text-md text-slate-500 font-normal">
          you can edit, add and delete your galeri
        </p>
      </div>
    </div>
  );
};
export default Managemen;
