import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function WeDo() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10  items-center">
            <div  data-aos="zoom-in"    data-aos-delay="50" data-aos-duration="1000"   className="flex flex-col items-center text-center ">
                <img className="bg-gray-200 p-3 w-16 md:w-20 rounded-full h-16 md:h-20"  src="/src/assets/we-do/we-do-1.svg" alt="" />
                <h1 className="text-xl md:text-2xl font-semibold">Specialist Doctors</h1>
            </div> 
            <div data-aos="zoom-in"    data-aos-delay="70" data-aos-duration="1000" className="flex flex-col items-center text-center  ">
                <img className="bg-gray-200 p-3 w-16 md:w-20 rounded-full h-16 md:h-20"  src="/src/assets/we-do/we-do-2.svg" alt="" />
                <h1 className="text-xl md:text-2xl  font-semibold">Frequent Visits</h1>
            </div> 
            <div data-aos="zoom-in"    data-aos-delay="90" data-aos-duration="1000" className="flex flex-col items-center text-center ">
                <img className="bg-gray-200 p-3 w-16 md:w-20 rounded-full h-16 md:h-20"  src="/src/assets/we-do/we-do-3.svg" alt="" />
                <h1 className="text-xl md:text-2xl font-semibold">Cordial Administration</h1>
            </div> 
            <div data-aos="zoom-in"    data-aos-delay="110" data-aos-duration="1000" className="flex flex-col items-center text-center ">
                <img className="bg-gray-200 p-3 w-16 md:w-20 rounded-full h-16 md:h-20"  src="/src/assets/we-do/we-do-4.svg" alt="" />
                <h1 className="text-xl md:text-2xl font-semibold">Specialized Pharmacy</h1>
            </div>
        </div>
    );
}

export default WeDo;