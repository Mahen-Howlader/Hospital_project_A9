import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
function HospitalityShowData({ data }) {
//   console.log(data);
  const {description,status,estate_title,id,image,facilities,price} = data;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
          className="h-72 object-cover w-full hover:scale-150 hover:rotate-6 overflow-hidden hover:transition-all"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body poppins-light">
          <h2 className="card-title">{estate_title.slice(0,25)} {estate_title.length >= 25 && "..."}</h2>
          <p className="font-normal text-[14px] text-gray-500">{description.slice(0,100)}...</p>
                <p><span className="font-bold">Price : </span>{price}</p>
          <div className="card-actions  justify-start ">
            <Link to={`/details/${id}`} className="text-[#00ADB5] flex items-center gap-x-5">Read More <FaArrowRightLong /></Link>
          </div>
        </div>
      </div>    
    </div>
  );
}

export default HospitalityShowData;
