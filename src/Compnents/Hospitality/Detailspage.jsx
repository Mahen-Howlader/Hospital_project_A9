import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiHook from "../../CustomeHook/ApiHook";
import { Helmet } from "react-helmet-async";
function Detailspage() {
  const [details, setDetails] = useState({});
  let { id } = useParams();
  const { data } = ApiHook();
  console.log(details);
  const {
    description,
    status,
    area,
    location,
    estate_title,
    image,
    facilities,
    price,
  } = details || {};
  useEffect(() => {
    if (data) {
      const findData = data.find((val) => val.id === id);
      setDetails(findData);
    }
  }, [id, data]);

  const imageStyle = {
    width: "100%",
    height: "500px",
  };

  const textStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#4B5563",
  };

  const buttonStyle = {
    padding: "0.75rem 1rem",
    backgroundColor: "#3B82F6",
    color: "#FFFFFF",
    fontWeight: "600",
    borderRadius: "0.375rem",
    cursor: "pointer",
  };

  const listItemStyle = {
    marginBottom: "0.75rem",
  };
  console.log(facilities);
  return (
    <div>
      <Helmet>
        <title>Hospital || Details</title>
      </Helmet>
      <div className="container px-28 mx-auto py-6">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Product Image */}
          <div className="w-full">
            <img src={image} alt="Product Image" style={imageStyle} />
          </div>
          {/* Product Details */}
          <div className="p-6">
            {/* Product Title */}
            <h2 style={textStyle} className="text-xl font-semibold mb-2">
              {estate_title}
            </h2>
            {/* Product Description */}
            <p className="text-gray-700 mb-4">{description}</p>
            {/* Product Price */}
            <div className="flex items-center justify-between mb-4">
              <span
                style={textStyle}
                className="text-lg font-semibold text-gray-800"
              >
                Price : {price}
              </span>
              {/* Add to Cart Button */}
              <button
                style={buttonStyle}
                className="hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
            {/* Facilities */}
            <div className="mb-4 space-y-2">
              <p className="text-lg">
                <span className="font-bold">status : </span>
                {status}
              </p>
              <p className="text-lg">
                <span className="font-bold">Area :</span> {area}
              </p>
              <p className="text-lg">
                <span className="font-bold">Location :</span> {location}
              </p>
            </div>
            <h3 style={textStyle} className="text-base font-semibold mb-3">
              Facilities
            </h3>
            <ul
              style={listItemStyle}
              className="list-disc list-inside mb-4 bg-gray-100 p-4 rounded-lg"
            >
              {facilities &&
                facilities.map((val, index) => (
                  <li key={index} className="p-2 rounded-lg lg:font-semibold ">
                    {val}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailspage;
