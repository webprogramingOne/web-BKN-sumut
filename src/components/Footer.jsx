import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { BsYoutube, BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="w-full bg-blue-900 pb-10">
      <div className="lg:flex md:flex ml-5 mt-5">
        <div className="lg:w-1/3 mt-[20px] block text-white  items-center justify-content-center relative ">
          <h1 className="mb-4 pt-10 lg:pt-0 md:pt-0 text-slate-300 text-md lg:text-lg font-semibold uppercase">
            Topic in this blog
          </h1>

          <a href="" className=" block mb-1">
            Home
          </a>
          <a href="" className=" block mb-1">
            Order
          </a>
          <a href="" className=" block mb-1">
            Galerry
          </a>
          <a href="" className=" block mb-1">
            Testimoni
          </a>
          <a href="" className=" block mb-1">
            Question
          </a>
          <a href="" className=" block mb-1">
            Contact
          </a>
          <a href="" className=" block mb-1">
            About Us
          </a>
        </div>
        <div className="lg:w-1/3 mt-[20px]  text-white  items-center justify-content-center relative">
          <h1 className="text-md lg:text-lg font-semibold uppercase text-slate-300">
            Contact us in our social media
          </h1>
          <div className="lg:text-2xl lg:gap-6 flex">
            <a
              href="https://wa.me/+6282111426273/"
              className="flex items-center my-3"
            >
              {" "}
              <IoLogoWhatsapp className=" mr-3" />
            </a>
            <a href="" className="flex items-center my-3">
              {" "}
              <AiFillInstagram className=" mr-3" />
            </a>
            <a href="" className="flex items-center my-3">
              {" "}
              <BsYoutube className=" mr-3" />
            </a>
            <a href="" className="flex items-center my-3">
              {" "}
              <FaTiktok className=" mr-3" />
            </a>
            <a href="" className="flex items-center my-3">
              {" "}
              <BsFacebook className=" mr-3" />
            </a>
          </div>
        </div>
        <div className="1/3 mt-[20px]  text-white  items-center justify-content-center relative">
          <h1 className="text-md lg:text-lg font-semibold uppercase text-slate-300">
            Alamat
          </h1>
          <p>
            jalan. Poros MTsN 3 Sarolangun Ptk. 16 RT. 22 Dusun IV Desa Pasar
            Singkut
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
