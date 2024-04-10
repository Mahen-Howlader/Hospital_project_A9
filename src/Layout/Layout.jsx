import Footer from "../Pages/Footer/Footer";
import Nav from "../Pages/Nav/Nav";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Nav></Nav>
      <div className="mx-auto container">
        <div className="min-h-[calc(100vh-350px)] ">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Layout;
// https://startup.nextjstemplates.com/signin
// https://preview.uideck.com/items/medic/
// https://preview.uideck.com/items/medic/
