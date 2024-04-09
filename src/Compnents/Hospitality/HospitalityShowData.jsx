import { Link } from "react-router-dom";

function HospitalityShowData({ data }) {
//   console.log(data);
  const {description,status,estate_title,id,image,facilities,price} = data;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
          className="h-72 object-cover w-full"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title.slice(0,25)} {estate_title.length >= 25 && "..."}</h2>
          <p>{description.slice(0,100)}...</p>
                <p><span className="font-bold">Price : </span>{price}</p>
            <p className="font-bold pb-1 border-b">Facilities</p>
            <ul className="list-disc list-inside">
                {facilities.slice(0,2).map((facility,index) => <li key={index}>{facility}</li>)}
            </ul>

          <div className="card-actions justify-end border-t pt-4">
            <Link to={`/details/${id}`} className="btn w-full btn-primary mochiy-pop">Details Info</Link>
          </div>
        </div>
      </div>    
    </div>
  );
}

export default HospitalityShowData;
