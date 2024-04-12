function Doctorcard({ props }) {
  console.log(props);
  const { doctor_name, doctor_category, doctor_image } = props;

  return (
    <>
      <div className="card w-72 p-0 bg-base-100 shadow-xl mr-10 shadow-2xl">
        <figure>
          <img className="h-72 object-cover w-full" src={doctor_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{doctor_name}</h2>
          <p>{doctor_category}</p>
        </div>
      </div>
    </>
  );
}

export default Doctorcard;
