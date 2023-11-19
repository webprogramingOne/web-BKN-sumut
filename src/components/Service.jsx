const Service = () => {
  return (
    <div className="lg:mt-32 mt-[600px] pt-10 bg-white pb-10" id="order">
      {" "}
      <hr className="mb-4" />
      <h1 className="lg:text-center text-xl lg:text-3xl mx-10 font-semibold mb-4">
        Mengapa anda harus memilih kami ?
      </h1>
      <div className="w-full  lg:flex md:flex">
        <div className="lg:w-full w-9/10 mr-4 ml-10 lg:ml-20 items-center justify-items-center place-content-center text-lg lg:text-2xl">
          <h1 className=" text-blue-900 font-semibold">Paket Lengkap </h1>
          <div className="overflow-x-hidden mr-4">
            <ul className=" text-lg pt-4 flex lg:gap-12 gap-2 overflow-auto">
              <li>Pelaminan</li>
              <li>Tenda</li>
              <li>Undangan</li>
              <li>Henna</li>
              <li>Makeup</li>
              <li>Photografer</li>
              <li>Orgen</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
