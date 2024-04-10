import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import UseAuthHook from "../../CustomeHook/UseAuthHook";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import RegisterAnimation from "../../AnimationALL/RegisterAnimation";

function Register() {
  const [show, setShow] = useState(true);
  // navigate
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const {
    createEmailPassword,
    TwitterCreate,
    googleCreate,
    userProfileUpdate,
    logOut,
    setUser
  } = UseAuthHook();

  // react hook from
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // submit register data
  const onSubmit = (data) => {
    const { password, photo, email, name } = data;
    if (password.length < 6) {
      alert("Password must be at least 6 character");
      return;
    } else if (!/[a-z]/.test(password)) {
      alert("Must have a Lowercase letter in the password");
      return;
    } else if (!/[A-Z]/.test(password)) {
      alert("Must have a Uppercase letter in the password");
      return;
    }

    function refress (){
      setUser(null);
      logOut();
    }

    createEmailPassword(email, password)
      .then((result) => {
        // alert("Success account create");

        refress()
        userProfileUpdate(name, photo)
        .then(() => {
            navigate("/login");
            // alert("Success message");
          })
          .catch((error) => {
            alert(error.message);
          });
        console.log(result.user);
      })

      .catch((error) => {
        alert(error.message);
      });
  };
  // Social login
  function socilaLogin(socialAccount) {
    socialAccount()
      .then(() => {
        console.log("Login success");
        // navigate()
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <div className="grid lg:items-center gap-y-10 lg:gap-y-0 lg:grid-cols-2 lg:gap-x-24  bg-red-300">
      <RegisterAnimation className=""></RegisterAnimation>
      <div className="lg:mx-10 border-2  p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
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
        <div className="grid grid-cols-2 gap-5 mt-5">
          <button
            onClick={() => socilaLogin(TwitterCreate)}
            className="bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-500"
          >
            Twitter Login
          </button>
          <button
            onClick={() => socilaLogin(googleCreate)}
            id="googleLogin"
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
          >
            Google Login
          </button>
        </div>
        <div className="text-center mt-6">
          <Link to="/login" className="text-blue-500 hover:underline">
            You have an account? Login.
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
