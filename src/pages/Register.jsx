import { useEffect, useState } from "react";
import bitcoin from "../assets/bitcoin.png";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { registerUser } from "../features/auth/authSlice";

const Register = () => {
  const { theme } = useSelector((state) => state.theme);

  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords not match", {
        position: "top-center",
        theme: "dark",
      });
    } else {
      dispatch(registerUser(formData));
    }
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
            ? "shadow border-3 border-gray-700 rounded-sm p-4 md:pd-5 flex flex-col md:flex-row items-center justify-between"
            : "shadow border-3 border-gray-300 rounded-sm p-4 md:pd-5 flex flex-col md:flex-row items-center justify-between"
        }
      >
        <div className=" w-full md:w-1/2">
          <h1
            className={
              theme
                ? "my-3 font-bold text-3xl ml-2 uppercase text-white"
                : "my-3 font-bold text-3xl ml-2 uppercase text-gray-500 border-gray-300"
            }
          >
            Register Here
          </h1>
          <p
            className={
              theme
                ? "my-3 ml-2 text-sm text-white"
                : "my-3 ml-2 text-sm text-gray-600"
            }
          >
            Kindly Enter Your Details
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className={
                theme
                  ? "border-2 rounded-md p-2 w-full my-2 bg-gray-900 border-gray-700 text-white"
                  : "border-2 rounded-md p-2 w-full my-2 border-gray-300"
              }
              placeholder="Enter Name"
              required
              value={name}
              name="name"
              onChange={handleChange}
            />
            <input
              type="email"
              className={
                theme
                  ? "border-2 rounded-md p-2 w-full my-2 bg-gray-900 border-gray-700 text-white"
                  : "border-2 rounded-md p-2 w-full my-2 border-gray-300"
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
                  ? "border-2 rounded-md p-2 w-full my-2 bg-gray-900 border-gray-700 text-white"
                  : "border-2 rounded-md p-2 w-full my-2 border-gray-300"
              }
              placeholder="Enter Password"
              required
              value={password}
              name="password"
              onChange={handleChange}
            />
            <input
              type="password"
              className={
                theme
                  ? "border-2 rounded-md p-2 w-full my-2 bg-gray-900 border-gray-700 text-white"
                  : "border-2 rounded-md p-2 w-full my-2 border-gray-300"
              }
              placeholder="Confirm Password"
              required
              value={password2}
              name="password2"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-teal-500 text-white font-bold py-2 px-5 rounded-md my-3 w-full md:w-1/2 hover:bg-teal-600 duration-200 hover:cursor-pointer"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="w-1/2 hidden md:block flex items-center justify-center px-35">
          <img className="h-96" src={bitcoin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
