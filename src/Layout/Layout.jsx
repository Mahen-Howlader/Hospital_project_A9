import Spinner from "../Compnents/Spinnner/Spinner";
import ApiHook from "../CustomeHook/ApiHook";
import UseAuthHook from "../CustomeHook/UseAuthHook";
import Footer from "../Pages/Footer/Footer";
import Nav from "../Pages/Nav/Nav";
import { Outlet } from "react-router-dom";
function Layout() {
  const { loadingData } = ApiHook();
  const { loading } = UseAuthHook();

  if (loadingData) {
    return <Spinner></Spinner>;
  }

  return (
    <>
      {loading || (
        <div className="">
          <div>
            <Nav></Nav>
            <div className="">
              <div className="min-h-[calc(100vh-350px)]">
                <Outlet></Outlet>
              </div>
              <Footer></Footer>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
// https://startup.nextjstemplates.com/signin
// https://preview.uideck.com/items/medic/
// https://preview.uideck.com/items/medic/
