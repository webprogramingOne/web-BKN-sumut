import { IoLogoWhatsapp } from "react-icons/io";
const FormPesan = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const phoneNumber = "+6282111426273";
    const name = event.target.name.value;
    const alamat = event.target.alamat.value;
    const noHp = event.target.noHP.value;
    const pesan = event.target.pesan.value;
    const url = `https://wa.me/${phoneNumber}?text=*Nama :* ${name}%0a *Alamat :* ${alamat}%0a *NoHp:* ${noHp}%0a *pesan:*  ${pesan}`;
    console.log(url);

    window.open(url, "_blank");
  };
  return (
    <div className=" relative mt-5 ">
      <h1 className="text-center font-semibold lg:text-2xl text-lg text-gray-400">
        Please enter your question
      </h1>
      <form onSubmit={handleLogin}>
        <div className="w-full lg:w-1/3 md:mx-auto md:w-2/3 lg:mx-auto pb-5 mt-6">
          <div className="content-center w-full self-center px-4 mb-8">
            <label htmlFor="name" className="text-base font-bold text-primary">
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full text-slate-300 bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              placeholder="type your name....."
            ></input>
          </div>
          <div className="content-center w-full self-center px-4 mb-8">
            <label
              htmlFor="alamat"
              className="text-base font-bold text-primary"
            >
              Alamat
            </label>
            <input
              type="text"
              id="alamat"
              name="alamat"
              placeholder="Jln....."
              className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
            ></input>
          </div>
          <div className="content-center w-full self-center px-4 mb-8">
            <label
              htmlFor="nomorHP"
              className="text-base font-bold text-primary"
            >
              Nomor HP
            </label>
            <input
              type="text"
              id="nomorHP"
              name="noHP"
              placeholder="+6285xxx....."
              className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
            ></input>
          </div>
          <div className="content-center w-full self-center px-4 mb-8">
            <label
              htmlFor="pesan"
              placeholder="your message....."
              className="text-base font-bold text-primary"
            >
              Pesan
            </label>
            <textarea
              type="text"
              id="pesan"
              name="pesan"
              className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
            ></textarea>
          </div>
          <div className="text-center w-full flex px-4">
            <button
              type="submit"
              className="text-white font-bold text-lg items-center bg-blue-900  flex gap-3 py-3 w-full rounded-lg"
              onClick={() => {}}
            >
              <h1 className="text-center justify-center align-top mx-auto flex items-center ">
                Send to whatsapp
                <IoLogoWhatsapp className="text-xl text-center" />
              </h1>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default FormPesan;
