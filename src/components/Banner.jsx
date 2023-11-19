import { AiOutlineSearch } from "react-icons/ai";
const Banner = () => {
  return (
    <div className=" relative  bg-gray-500">
      <div className="relative w-full ">
        <img
          src="../bg-banner.jpeg"
          alt=""
          className="absolute  object-cover translate-x-0  w-full h-[400px] lg:h-[650px]  shadow-lg"
        />
        <div className=" absolute lg:mt-0 mt-20   lg:h-[500px] z-10 ml-10 lg:ml-40 ">
          <h1 className="lg:text-4xl mt-[100px] lg:mt-[200px] text-3xl justify-center font-bold text-white ">
            {" "}
            Cari Jasa WO?
          </h1>
          <h3 className="lg:text-2xl text-lg text-white font-bold mb-2">
            WO Agung MB solusinya
          </h3>
          <p className="lg:text-xl text-slate-200">
            Harga Terjangkau 100% amanah
          </p>
          <button className=" items-center mt-6 hover:shadow-blue-500  bg-white   shadow-md px-4 lg:px-8 py-3 rounded-sm   text-sm  lg:mt-12 hover:bg-white hover:text-blue-900 font-semibold">
            Tentukan Pilihamu
          </button>
          <button className=" items-center mt-6 ml-2 lg:ml-6  text-white shadow-sm shadow-white bg-blue-900 px-4 lg:px-8 py-3 rounded-sm   text-sm  lg:mt-12 hover:bg-white hover:text-blue-700 font-semibold">
            Hubungi Kami
          </button>
          <button className="hidden items-center mt-6 lg:ml-60  bg-white bg-opacity-25   px-6 py-3 rounded-sm   text-sm  lg:mt-12  hover:text-blue-700 font-semibold">
            <div className="flex">
              <input
                className="font-normal border-0  pr-10 w-full py-2 px-4  focus:outline-none hover:to-blue-900 "
                type="text"
                placeholder="masukan pencarian"
              />
              <AiOutlineSearch
                size={30}
                className="pt-1 z-10 -ml-8 text-slate-400 hover:text-blue-900"
              />
              <button className=" text-white"></button>
            </div>
          </button>
          <div className="lg:w-3/4 lg:mt-40 mt-20 block lg:flex lg:gap-4   ">
            <div className="bg-slate-200 p-6 shadow-md mb-2">
              <h1 className="text-blue-800 text-lg font-bold">Lebih Murah</h1>
              <p>menggunakan jasa kami sangat mudah karena sudah komplit</p>
            </div>
            <div className="bg-slate-200 p-6 mb-2 shadow-md">
              <h1 className="text-blue-800 text-lg font-bold">
                Bayar disatu tempat
              </h1>
              <p>menggunakan jasa kami sangat mudah karena sudah komplit</p>
            </div>
            <div className="bg-slate-200 p-6 mb-2 shadow-md">
              <h1 className="text-blue-800 text-lg font-bold">
                Bisa fokus pada persiapan acara pernikahan
              </h1>
              <p>menggunakan jasa kami sangat mudah karena sudah komplit</p>
            </div>
            <div className="bg-slate-200 p-6 shadow-md">
              <h1 className="text-blue-800 text-lg font-bold">
                Tentunya gak terjebak permainan owner
              </h1>
              <p>menggunakan jasa kami sangat mudah karena sudah komplit</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-gradient-to-r to-90% blue-700 via-70%  from-blue-900 from-40%   w-full h-[400px] lg:h-[650px] "></div>
    </div>
  );
};
export default Banner;
