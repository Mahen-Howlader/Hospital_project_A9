import ApiHook from "../../CustomeHook/ApiHook";
import HospitalityShowData from "./HospitalityShowData";

function Hospitality() {
    const {data} = ApiHook()
    // console.log(data)
    return (
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {data.map((val,index) => <HospitalityShowData data={val} key={index}></HospitalityShowData>)}
        </div>
    );
}

export default Hospitality;