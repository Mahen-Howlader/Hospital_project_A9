import { GiReturnArrow } from "react-icons/gi";
import UseAuthHook from "../CustomeHook/UseAuthHook";
import { Navigate, useLocation } from "react-router-dom";

function Privaterouter({ children }) {
  const location = useLocation();
  const { user, loading } = UseAuthHook();
  // console.log(loading)
  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  if(user){
    return children
  }
  return  <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
}

export default Privaterouter;
