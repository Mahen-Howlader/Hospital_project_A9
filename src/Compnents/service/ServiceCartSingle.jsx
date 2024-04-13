import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ServiceCartSingle({ props }) {
  const { details, category, svg } = props;
  //   console.log(svg)
  //   console.log(props)
  return (
  <div className="md:group-hover:blur-sm md:hover:!blur-none">
      <div className="hover:scale-110   transition-all">
      <div className="bg-[#FFFFFF] hover:text-white hover:bg-[#13B2BA]  shadow-xl p-7 space-y-2 rounded">
      <div className="" dangerouslySetInnerHTML={{ __html: svg }} />
      <h1 className="text-2xl font-semibold ">{category}</h1>
      <p className="opacity-50 group-hover:opacity-100">{details}</p>
      <Link className="flex text-[#13B2BA] group-hover:text-white items-center gap-x-5">
        Read More <FaArrowRightLong />
      </Link>
    </div>
    </div>
  </div>
  );
}

export default ServiceCartSingle;
