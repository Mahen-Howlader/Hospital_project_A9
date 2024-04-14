import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import UseAuthHook from "../../CustomeHook/UseAuthHook";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import RegisterAnimation from "../../AnimationALL/RegisterAnimation";
import bgRegister from "/Register.svg";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Register() {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const {
    createEmailPassword,
    TwitterCreate,
    googleCreate,
    userProfileUpdate,
    logOut,
    setUser,
  } = UseAuthHook();

  // react hook from
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // submit register data
  function refress() {
    setUser(null);
    logOut();
  }

  const onSubmit = (data) => {
    const { password, photo, email, name } = data;
    if (password.length < 6) {
      toast.error("Password must be at least 6 character");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Must have a Lowercase letter in the password");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Must have a Uppercase letter in the password");
      return;
    }
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(photo)) {
        toast.error('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
        return;
    }

    createEmailPassword(email, password)
      .then(() => {
        // alert("Success account create");

        refress();
        userProfileUpdate(name, photo)
          .then(() => {
            navigate("/login");
            toast.success("Wow Success");
          })
          .catch((error) => {
            toast.error(`${error.message}`);
          });
        // console.log(result.user);
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  // Social login
  function socilaLogin(socialAccount) {
    socialAccount()
      .then(() => {
        // console.log("Login success");
        navigate("/");
        toast.success("Login success");
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  }

  return (
    <div
      style={{ backgroundImage: `url(${bgRegister})` }}
      className="bg-no-repeat bg-cover mx-auto px-5 md:px-0  bg-center"
    >
      <Helmet>
        <title>Hospital || Register</title>
      </Helmet>
      <div className="mx-auto xl:px-20 container grid lg:items-center gap-y-10 lg:gap-y-0 lg:grid-cols-2 lg:gap-x-24 py-20 bg-no-repeat">
        <RegisterAnimation></RegisterAnimation>
        <div className="mx-5 lg:mx-10 border-2 md:bg-[#8B9BC1] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Create Account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold">
                Name:
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="mt-2 text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="mt-2 text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold">
                Photo URL:
              </label>
              <input
                type="text"
                name="photo"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                {...register("photo")}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-semibold">
                Password:
              </label>
              <div className="relative">
                <input
                  type={show ? "password" : "text"}
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  {...register("password", { required: true })}
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-10 top-[50%] text-xl translate-y-[-50%]"
                >
                  {" "}
                  {show ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && (
                <span className="mt-2 text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
            >
              Register
            </button>
          </form>
          <div className="grid lg:grid-cols-2 gap-5 mt-5">
            <button
              onClick={() => socilaLogin(TwitterCreate)}
              className="bg-blue-400 text-white py-2 px-4 rounded-md flex  justify-center gap-x-4 items-center hover:bg-blue-500"
            >
              <FaTwitter /> Twitter Login
            </button>
            <button
              onClick={() => socilaLogin(googleCreate)}
              id="googleLogin"
              className="bg-red-600 text-white py-2 px-4 rounded-md flex  justify-center gap-x-4 items-center hover:bg-red-700"
            >
              <FaGoogle /> Google Login
            </button>
          </div>
          <div className="text-center mt-6">
            <Link to="/login" className="text-black hover:underline">
              You have an account?{" "}
              <span className="font-semibold text-blue-800">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
