import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const loginToggle = () => {
    navigate("/upload");
  };
  return (
    <div className="flex justify-center  min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-teal-600 text-xl font-bold mb-2">
          Login to admin account
        </h1>
        <p className="mb-4">Please login to your latest account</p>
        <form onSubmit={loginToggle}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm text-slate-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full border rounded text-slate-700 py-2 px-3 placeholder:opacity-50"
              placeholder="jhondoe@gmail.com"
              name="email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm text-slate-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="text"
              className="w-full border rounded text-slate-700 py-2 px-3 placeholder:opacity-50"
              placeholder="******"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded py-2 px-3 text-white bg-teal-800"
          >
            Login
          </button>
          <p>
            <Link to="/">home</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
