import Footer from "../Pages/Footer/Footer";
import Nav from "../Pages/Nav/Nav";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="mx-auto container">
      <Nav></Nav>
      <div className="min-h-[calc(100vh-350px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
