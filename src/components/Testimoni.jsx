import { IoPersonCircleSharp } from "react-icons/io5";
const Testimoni = () => {
  const testimoni = [
    {
      id: "1",
      name: "Jhon Doe",
      comment: "Response cepat dan sellernya ramah",
      alamat: "Payolebar, Singkut 2",
    },
    {
      id: "2",
      name: "Jhon Doe",
      comment: "Response cepat dan sellernya ramah",
      alamat: "Payolebar, Singkut 2",
    },
    {
      id: "3",
      name: "Jhon Doe",
      comment: "Response cepat dan sellernya ramah",
      alamat: "Payolebar, Singkut 2",
    },
    {
      id: "4",
      name: "Jhon Doe",
      comment: "Response cepat dan sellernya ramah",
      alamat: "Payolebar, Singkut 2",
    },
    {
      id: "5",
      name: "Jhon Doe",
      comment: "Response cepat dan sellernya ramah",
      alamat: "Payolebar, Singkut 2",
    },
    {
      id: "6",
      name: "Jhon Doe",
      comment: "Response cepat dan sellernya ramah",
      alamat: "Payolebar, Singkut 2",
    },
  ];
  return (
    <div
      className="pt-10  galerry w-full mt-[600px] lg:mt-[700px] bg-blue-900 "
      id="testimoni"
    >
      <h1 className="text-white text-center mt-4 text-3xl">Testimoni</h1>
      <div className="flex overflow-auto pb-10">
        {testimoni.map((item) => {
          return (
            <div className="w-full  px-10" key={item.id}>
              <div className="mt-5 mb-3 lg:mb-5 p-4 py-10  flex  bg-white rounded-md drop-shadow-lg">
                <div className=" overflow-hidden">
                  <div className="h-[200] flex  rounded-lg  items-center w-[300px] lg:w-[400px]">
                    <IoPersonCircleSharp className="text-4xl items-center justify-content-center " />
                    <h1 className="items-center">{item.name}</h1>
                  </div>
                  <div>
                    <p className="block"></p>
                  </div>
                  <div className="italic pt-3">{item.comment}</div>
                  <div className="w-full flex items-center mt-3">
                    <h3 className="font-semibold text-lg  text-blue-800  mr-10 flex items-center ">
                      ⭐⭐⭐⭐⭐
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
  );
};
export default Testimoni;
