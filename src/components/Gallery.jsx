import { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { IoPricetagsSharp } from "react-icons/io5";
import { RiVipCrownFill } from "react-icons/ri";
const Gallery = () => {
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

  const [gal, setGal] = useState(dekorasi);

  const TgalAria = (index) => {
    setGalAria(index);
  };
  const [galAria, setGalAria] = useState(1);
  const toggleGalery = (index) => {
    setGal(index);
  };
  const [curr, setCurr] = useState(0);
  const prev = () => setCurr((curr) => (curr == 0 ? gal.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr == gal.length - 1 ? 0 : curr + 1));
  return (
    <div
      className="absolute w-full mt-[50px] lg:mt-[50px] bg-white drop-shadow"
      id="toggle"
    >
      <h1 className="text-2xl font-semibold ml-12 pt-5 text-center">
        {" "}
        Temukan pilihan menarik disini
      </h1>
      <div className="flex pb-8 gap-8 text-lg lg:text-xl mt-5 flex-row overflow-hidden text-gray-400 lg:justify-center w-full">
        <div
          className={
            galAria === 1
              ? " text-blue-600 underline underline-offset-8 decoration-4 text-center "
              : " hover:text-blue-600 text-center"
          }
          onClick={() => TgalAria(1)}
        >
          <a
            className={
              gal === dekorasi
                ? "ml-6  text-blue-600 "
                : "ml-6  hover:text-blue-600 cursor-pointer "
            }
            onClick={() => toggleGalery(dekorasi)}
          >
            Pelaminan
          </a>
        </div>{" "}
        <div
          className={
            galAria === 2
              ? " text-blue-600 underline underline-offset-8 decoration-4"
              : " hover:text-blue-600"
          }
          onClick={() => TgalAria(2)}
        >
          <a
            className={
              gal === tenda
                ? " text-blue-600"
                : " hover:text-blue-600 cursor-pointer "
            }
            onClick={() => toggleGalery(tenda)}
          >
            Tenda
          </a>
        </div>
        <div
          className={
            galAria === 3
              ? " text-blue-600 underline underline-offset-8 decoration-4"
              : " hover:text-blue-600"
          }
          onClick={() => TgalAria(3)}
        >
          <a
            className={
              gal === hena
                ? " text-blue-600"
                : " hover:text-blue-600 cursor-pointer  "
            }
            onClick={() => toggleGalery(hena)}
          >
            Hena{" "}
          </a>
        </div>
        <div
          className={
            galAria === 4
              ? " text-blue-600 underline underline-offset-8 decoration-4"
              : " hover:text-blue-600  "
          }
          onClick={() => TgalAria(4)}
        >
          <a
            className={
              gal === photography
                ? " text-blue-600"
                : "mr-4 hover:text-blue-600 cursor-pointer "
            }
            onClick={() => toggleGalery(photography)}
          >
            Photography
          </a>
        </div>
      </div>

      <hr id="hr" />
      <div className="galerry lg:w-9/10 lg:mx-20  " id="myGalery">
        <div className="flex-row pb-8   text-lg lg:text-xl mt-5   text-gray-400 w-full">
          <div className="w-full    flex overflow-hidden  lg:ml-0">
            <div className="flex overflow-hidden  ">
              <div className="absolute inset-0 flex mt-32 items-center justify-between z-10 lg:-z-10">
                <button
                  onClick={prev}
                  className=" hover:bg-blue-600  shadow-lg p-1 rounded-full bg-slate-100 hover:text-white"
                >
                  <IoIosArrowDropleft size={40} />
                </button>
                <button
                  onClick={next}
                  className=" hover:bg-blue-600  shadow-lg p-1 rounded-full bg-slate-100 hover:text-white"
                >
                  <IoIosArrowDropright size={40} />
                </button>
              </div>
              {gal.map((item) => {
                return (
                  <div
                    key={item.type}
                    className=" mt-5 mb-3 lg:mb-5 p-4 transition ease-in-out delay-150  hover:-translate-y-5 duration-300"
                  >
                    <div
                      className=" w-[400px] transition-transform  ease-out duration-500 "
                      style={{ transform: `translateX(-${curr * 100}%)` }}
                    >
                      <img
                        src={item.img}
                        alt=""
                        className="h-[200px]  lg:h-[300px] rounded-lg bg-cover "
                      />
                      <div className=" flex mt-3 lg:justify-between">
                        <h3 className="font-semibold text-lg  text-blue-800  flex  ">
                          {item.type}
                          <RiVipCrownFill className="text-xl mr-2" />
                        </h3>
                        <p className="flex lg:justify-end items-center">
                          <IoPricetagsSharp />
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
