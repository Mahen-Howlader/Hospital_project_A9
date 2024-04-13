function WeDo() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10  items-center">
            <div className="flex flex-col items-center text-center ">
                <img className="bg-gray-200 p-3 w-16 md:w-20 rounded-full h-16 md:h-20"  src="/src/assets/we-do/we-do-1.svg" alt="" />
                <h1 className="text-xl md:text-2xl font-semibold">Specialist Doctors</h1>
            </div> 
            <div className="flex flex-col items-center text-center  ">
                <img className="bg-gray-200 p-3 w-16 md:w-20 rounded-full h-16 md:h-20"  src="/src/assets/we-do/we-do-2.svg" alt="" />
                <h1 className="text-xl md:text-2xl  font-semibold">Frequent Visits</h1>
            </div> 
            <div className="flex flex-col items-center text-center ">
                <img className="bg-gray-200 p-3 w-16 md:w-20 rounded-full h-16 md:h-20"  src="/src/assets/we-do/we-do-3.svg" alt="" />
                <h1 className="text-xl md:text-2xl font-semibold">Cordial Administration</h1>
            </div> 
            <div className="flex flex-col items-center text-center ">
                <img className="bg-gray-200 p-3 w-16 md:w-20 rounded-full h-16 md:h-20"  src="/src/assets/we-do/we-do-4.svg" alt="" />
                <h1 className="text-xl md:text-2xl font-semibold">Specialized Pharmacy</h1>
            </div>
        </div>
    );
}

export default WeDo;