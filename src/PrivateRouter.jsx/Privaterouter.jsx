import UseAuthHook from "../CustomeHook/UseAuthHook";
import { Navigate, useLocation } from "react-router-dom";

function Privaterouter({ children }) {
  const location = useLocation();
  const { user } = UseAuthHook();

  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
  }

  return <div>{children}</div>;
}

export default Privaterouter;
