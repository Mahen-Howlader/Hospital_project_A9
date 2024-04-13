import { GiReturnArrow } from "react-icons/gi";
import UseAuthHook from "../CustomeHook/UseAuthHook";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Compnents/Spinnner/Spinner";

function Privaterouter({ children }) {
  const location = useLocation();
  const { user, loading } = UseAuthHook();
  
  // console.log(loading)

  if (loading) {    return <Spinner></Spinner>
  }

  if(user){
    return children
  }
  return <Navigate state={location?.pathname || "/"} to="/login"></Navigate>;

}

export default Privaterouter;
