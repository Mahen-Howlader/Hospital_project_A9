import { useEffect, useRef } from "react";
import UseAuthHook from "../../CustomeHook/UseAuthHook";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import bgRegister from "/Register.svg";
import NotFount from "../NotFount/NotFount";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import auth from "../../Firebase/FirebaseConfig/firebase.config";
// ..
AOS.init();
import { toast } from "react-toastify";

function UpdateProfile() {
  //   console.log(user)

  const { user, userProfileUpdate, setLoading, setUser } = UseAuthHook(); // Assuming your authentication hook returns user and isLoading status
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setValue("Name", user.displayName);
      setValue("Photo", user.photoURL);
    }
  }, [user, setValue]);

  const ref = useRef();
    // console.log(ref.current);
 



  const onSubmitData = (data) => {
    // console.log(data);
    const { Name, Photo } = data;

    userProfileUpdate(Name, Photo)
      .then((result) => {
        setUser(auth.currentUser);
        toast.success("Wow Success");
        setLoading(false);
      })
      .catch((error) => {
        // alert(error.message);
        toast.error(`${error.message}`);
      });
  };

  return (
    <>
      {user ? (
        <div
          style={{ backgroundImage: `url(${bgRegister})` }}
          className="bg-no-repeat bg-cover mx-auto py-20 px-5 md:px-0  bg-center"
        >
          <Helmet>
            <title>Hospital || UpdateProfile</title>
          </Helmet>
          <div
            data-aos-duration="1000"
            data-aos="zoom-in-down"
            className="container mx-auto max-w-md  bg-white p-6 rounded-lg shadow-2xl border"
          >
            <h2 className="text-2xl font-bold text-center mb-6">
              Change Profile
            </h2>
            <form onSubmit={handleSubmit(onSubmitData)}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  {...register("Name")}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold">
                  Photo:
                </label>
                <input
                  type="text"
                  name="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  {...register("Photo")}
                />
              </div>

              <button
                type="submit"
                ref={ref}
                
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      ) : (
        <NotFount></NotFount>
      )}
    </>
  );
}

export default UpdateProfile;
