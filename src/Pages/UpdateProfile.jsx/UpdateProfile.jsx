import { useEffect } from "react";
import UseAuthHook from "../../CustomeHook/UseAuthHook";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function UpdateProfile() {
  //   console.log(user)
  const { user,userProfileUpdate } = UseAuthHook(); // Assuming your authentication hook returns user and isLoading status
  const { register, handleSubmit, setValue } = useForm();
    const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      setValue("Name", user.displayName);
      setValue("Photo", user.photoURL);
    }
  }, [user, setValue]);

  //   console.log(displayName);

  const onSubmitData = (data) => {
    // console.log(data);
    const {Name,Photo} = data;
        userProfileUpdate(Name, Photo)
        .then((result) => {
          alert("Success update");
          navigate("/profile")
        })
        .catch((error) => {
          alert(error.message);
        });
  };

  return (
    <div>
      <div className="container mx-auto max-w-md mt-20 bg-white p-6 rounded-lg shadow-2xl border">
        <h2 className="text-2xl font-bold text-center mb-6">Change Profile</h2>
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
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
