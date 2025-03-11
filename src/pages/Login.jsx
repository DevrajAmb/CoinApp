import { useEffect, useState } from "react";
import bitcoin from "../assets/bitcoin.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../features/auth/authSlice";
import Loading from "../components/Loading";

const Login = () => {
  const { theme } = useSelector((state) => state.theme);

  const { user, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }

    if (isError && message) {
      toast.error(message, { position: "top-center", theme: "dark" });
    }
  }, [isError, message, user]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      className={
        theme
          ? "min-h-[90vh] py-16 px-8 md:px-16 bg-gray-900 "
          : "min-h-[90vh] py-16 px-8 md:px-16 "
      }
    >
      <div
        className={
          theme
            ? "shadow border-gray-700 shadow-gray-500/50 border-3 rounded-sm p-4 md:pd-5 flex flex-col md:flex-row items-center justify-between"
            : "shadow  border-gray-300 shadow-gray-500/50 border-3 rounded-sm p-4 md:pd-5 flex flex-col md:flex-row items-center justify-between"
        }
      >
        <div className=" w-full md:w-1/2">
          <h1
            className={
              theme
                ? "my-3 font-bold text-3xl ml-2 uppercase text-white"
                : "my-3 font-bold text-3xl ml-2 uppercase text-gray-600"
            }
          >
            Log In
          </h1>
          <p
            className={
              theme
                ? "my-3 ml-2 text-sm text-gray-600 text-white "
                : "my-3 ml-2 text-sm text-gray-600 "
            }
          >
            Kindly Enter Your Email & Password
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className={
                theme
                  ? "border-3 rounded-md p-2 w-full my-2 bg-gray-900 border-gray-700 text-white"
                  : "border-3 rounded-md p-2 w-full my-2 border-gray-300"
              }
              placeholder="Enter Email"
              required
              value={email}
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              className={
                theme
                  ? "border-3 rounded-md p-2 w-full my-2 bg-gray-900 border-gray-700 text-white"
                  : "border-3 rounded-md p-2 w-full my-2 border-gray-300"
              }
              placeholder="Enter Password"
              required
              value={password}
              name="password"
              onChange={handleChange}
            />
            <button className="bg-teal-500 text-white font-bold py-2 px-5 rounded-md my-3 w-full md:w-1/2 hover:bg-teal-600 duration-200 hover:cursor-pointer">
              Sign In
            </button>
          </form>
        </div>
        <div className="w-1/2 hidden md:block px-30">
          <img className="h-96 " src={bitcoin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
