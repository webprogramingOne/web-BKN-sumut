/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import {
  BiCart,
  BiStore,
  BiFilm,
  BiComment,
  BiPhoneCall,
  BiQuestionMark,
} from "react-icons/bi";
import { Link } from "react-router-dom";
function Navigation() {
  const [togleState, setTotgleState] = useState(1);
  const [menu, setMenu] = useState(1);
  const toggleTab = (index) => {
    setTotgleState(index);
  };
  const menuSet = (index) => {
    setMenu(index);
  };
  return (
    <div className="navigasi w-3/4 items-center rounded-sm lg:flex fixed mt-10 mx-10 lg:mx-40 shadow-lg z-20 justify-center py-4 mb-12 bg-white">
      <div className="w-1/2 pl-4 lg:mr-[100px] mt-3 flex justify-center items-center lg:mt-0">
        <a
          href=""
          className="lg:mx-0 ml-28 text-lg  flex justify-center items-center transition ease-in-out delay-150  hover:-translate-y-1 duration-300 "
        >
          <strong className="text-sm font-bold text-md lg:text-lg text-teal-900  mr-2">
            Kantor Regional <span className="text-2xl">BKN</span>
          </strong>
          {"  "}
          <span className="mx-1 text-sm"> Sumatera Utara</span>
        </a>

        <div className="flex flex-row ml-[50px] lg:ml-0 gap-2">
          <a
            href="#"
            className={
              menu === 1
                ? "hover:text-teal-600 text-2xl -mr-20 transition ease-in-out delay-150 hover:scale-150 duration-300 lg:hidden"
                : "hidden"
            }
            onClick={() => menuSet(2)}
          >
            <IoIosMenu />
          </a>
          <a
            href="#"
            className={
              menu === 2
                ? "hover:text-teal-400 -ml-40 -mt-20 lg:hidden z-20 text-2xl "
                : "hidden"
            }
            onClick={() => menuSet(1)}
          >
            <IoMdClose />
          </a>
        </div>
      </div>

      <div
        className={
          menu === 1
            ? "hidden lg:flex gap-6"
            : "absolute py-[1000px] -mr-[78px] text-lg items-start  -mt-32  lg:mt-10 lg:py-0 pl-12 pr-60  lg:px-0 transition ease-in  justify-center pt-16  bg-teal-100 shadow-lg max-w-[250px] w-[150px] right-4 top-full lg:flex lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
        }
      >
        <a
          href="#"
          className={
            togleState === 1
              ? " text-teal-600 underline underline-offset-8"
              : " text-slate-600 transition ease-in-out delay-150  hover:-translate-y-1  hover:text-teal-600 lg:hover:scale-150 duration-300 "
          }
          onClick={() => toggleTab(1)}
        >
          <div className="flex items-center gap-1">
            <span className="lg:-mr-0 -mr-20">Home</span>
            <BiStore className="lg:hidden" />
          </div>
        </a>
        <a
          className={
            togleState === 2
              ? " py-2 lg:py-0 text-teal-600 block underline underline-offset-8"
              : " py-2 lg:py-0 text-slate-600 block transition ease-in-out delay-150  hover:-translate-y-1  hover:text-teal-600 lg:hover:scale-150 duration-300"
          }
          href="#order"
          onClick={() => toggleTab(2)}
        ></a>
        <a
          href="#myGalery"
          className={
            togleState === 3
              ? " text-teal-600 block underline underline-offset-8"
              : " text-slate-600 block transition ease-in-out delay-150  hover:-translate-y-1  hover:text-teal-600 lg:hover:scale-150 duration-300"
          }
          onClick={() => toggleTab(3)}
        >
          <div className="flex items-center gap-1">
            <span className="lg:-mr-0 -mr-20">Galeri</span>
            <BiFilm className="lg:hidden" />
          </div>
        </a>
        <a
          href="#testimoni"
          className={
            togleState === 4
              ? "py-2 lg:py-0 text-teal-600 block underline underline-offset-8"
              : " py-2 lg:py-0 text-slate-600 block transition ease-in-out delay-150   hover:text-teal-600 hover:-translate-y-1 lg:hover:scale-150 duration-300"
          }
          onClick={() => toggleTab(4)}
        ></a>
        <a
          href="#testimoni"
          className={
            togleState === 8
              ? " py-2 lg:py-0 text-teal-600 block underline underline-offset-8"
              : " py-2 lg:py-0 text-slate-600 block transition ease-in-out delay-150   hover:text-teal-600 hover:-translate-y-1 lg:hover:scale-150 duration-300"
          }
          onClick={() => toggleTab(8)}
        >
          <div className="flex items-center gap-1">
            <span className="lg:-mr-0 -mr-[110px]">Agenda</span>
            <BiQuestionMark className="lg:hidden" />
          </div>
        </a>
        <a
          href="#"
          className={
            togleState === 5
              ? " text-teal-600 underline underline-offset-8"
              : " text-slate-600 transition ease-in-out delay-150  hover:-translate-y-1 lg:hover:scale-150 duration-300 hover:text-teal-600  "
          }
          onClick={() => toggleTab(5)}
        >
          <div className="flex items-center gap-1">
            <span className="lg:-mr-0 -mr-[100px]">Contact</span>
            <BiPhoneCall className="lg:hidden" />
          </div>
        </a>
        <div className="flex items-center gap-3">
          <div className="lg:ml-[50px] flex -ml-8 items-center gap-2 lg:flex mt-[100px] lg:mt-0">
            <p>
              <Link
                to="/masuk"
                className={
                  togleState === 6
                    ? "  text-white bg-teal-800 lg:rounded-sm py-2 px-[50px] lg:px-4"
                    : " text-left lg:border-2 bg-gray-100  border-gray-200 lg:bg-white rounded-sm py-2 px-[30px] lg:px-4 text-slate-600 transition ease-in-out delay-150  hover:-translate-y-1 lg:hover:scale-130 duration-300 hover:text-white hover:bg-teal-900 hover:border-0"
                }
                onClick={() => toggleTab(6)}
              >
                Masuk
              </Link>
            </p>
            <hr className="lg:hidden" />
            <div className="lg:flex  items-center flex lg:mt-0">
              <p>
                <a
                  href="#"
                  className={
                    togleState === 7
                      ? "lg:mx-5   text-white bg-teal-800 lg:rounded-sm py-2 px-[50px] lg:px-4"
                      : "lg:mx-5  text-left lg:border-0   border-gray-200  lg:rounded-sm py-2 px-[30px] lg:px-4  transition ease-in-out delay-150  hover:-translate-y-1 lg:hover:scale-130 duration-300 text-white bg-teal-900 hover:translate-x-2 hover:transition hover:ease-in hover:text-slate-800 hover:bg-cyan-400"
                  }
                  onClick={() => toggleTab(7)}
                >
                  Daftar
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navigation;
