import { Link } from "react-router-dom";

function NotFount() {
    return (
        <div>
            <div className="h-[50vh] md:h-[90vh] flex flex-col space-y-5 justify-center items-center">
                            <h1 className="text-[100px] font-bold mochiy-pop">Oopps!</h1>
                            <p className="text-xl poppins-medium  font-semibold">404 page/ not found page</p>
                            <Link to="/" className="px-5 py-3 bg-blue-800 text-white rounded-full poppins-medium ">GO BACK</Link>
            </div>
        </div>
    );
}

export default NotFount;