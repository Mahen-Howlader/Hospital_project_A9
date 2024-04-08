import Footer from "../Pages/Footer/Footer";
import Nav from "../Pages/Nav/Nav";
import { Outlet  } from "react-router-dom";

function Layout() {
    return (
        <div className="mx-auto container">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Layout;