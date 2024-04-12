import CircleLoader from "react-spinners/ClipLoader";
function Spinner() {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <CircleLoader size={50} color="#36d7b7" />
    </div>
  );
}

export default Spinner;
