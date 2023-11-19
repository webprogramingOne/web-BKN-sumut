import Gallery from "./components/Gallery";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import FormPesan from "./components/FormPesan";
import Testimoni from "./components/Testimoni";
import Footer from "./components/Footer";
import Service from "./components/Service";
import FromDb from "./components/test.get-firebase";
import { useState } from "react";
import Animasi from "./components/Animasi";
import { IoPersonCircleSharp } from "react-icons/io5";
function App() {
  const [scrol, setScroll] = useState();
  const onScroll = () => {
    if (window.scrollY == 80) {
      setScroll("ease-out");
    }
  };
  const testimoni = [
    {
      id: "1",
      name: "Kepala Kantor BKN",
      comment: "Rapat Di kementrian ",
      alamat: "Sumut, Medan",
      pukul: "09.00 WIB",
    },
    {
      id: "2",
      name: "Kepala Kantor BKN",
      comment: "Sosialisasi Juknis Kepada Calon ASN",
      alamat: "Sumut, Medan",
      pukul: "11.00 WIB",
    },
    {
      id: "3",
      name: "Kepala Kantor BKN",
      comment: "Rapat Dinas Bersama Staff BKN",
      alamat: "Sumut, Medan",
      pukul: "10.00 WIB",
    },
    {
      id: "4",
      name: "Kepala Kantor BKN",
      comment: "Sosialisasi Kepegawain",
      alamat: "Sumut, Medan",
      pukul: "08.00 WIB",
    },
    {
      id: "5",
      name: "Kepala Kantor BKN",
      comment: "Monitoring ASN di Wilayah Medan",
      alamat: "Sumut, Medan",
      pukul: "08.30 WIB",
    },
    {
      id: "6",
      name: "Kepala Kantor BKN",
      comment: "Perjalanan Dinas Luar Kota",
      alamat: "Sumut, Medan",
      pukul: "09.00 WIB",
    },
  ];
  return (
    <div className="font-primary w-full " onScroll={onScroll}>
      <img
        src="/bkn-logo.jpg"
        alt=""
        className="absolute h-[300px] w-1/2 bg-cover opacity-5 -z-20 mx-[400px] my-[300px]"
      />
      <div className={scrol}>
        <Navigation />
        <div className="pt-[300px] text-center text-2xl text-teal-800 font-bold pb-10">
          <h1>Agenda Kegiatan Kepala Kantor BKN</h1>
        </div>
        <div className=" ">
          <div className="flex pb-10">
            {testimoni.map((item) => {
              return (
                <div className="w-1/4  px-10" key={item.id}>
                  <div className="mt-5 mb-3 lg:mb-5 p-4 py-10   bg-white rounded-md drop-shadow-lg">
                    <div className=" ">
                      <div className="h-[200] flex  rounded-lg  items-center w-[300px] lg:w-[400px]">
                        <IoPersonCircleSharp className="text-4xl items-center justify-content-center " />
                        <h1 className="items-center">{item.name}</h1>
                      </div>
                      <div>
                        <p className="block"></p>
                      </div>
                      <div className="italic pt-3">{item.comment}</div>
                      <div className="w-full flex items-center mt-3">
                        <h3 className="font-semibold text-sm  text-teal-800  mr-10 flex items-center ">
                          {item.pukul}
                        </h3>
                        <p className="ml-5 font-medium text-base text-secondary flex items-center">
                          {item.alamat}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <Banner />
        <Service />
        <Gallery />
        */}
        {/* <hr />
        <FormPesan />

        <Footer /> */}
      </div>
    </div>
  );
}
export default App;
