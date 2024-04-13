import LotteiFile from "./LotteiFile";

function Yourhealth() {
  return (
    <div>
      <div className="mx-auto md:w-4/6 lg:w-3/6 text-center space-y-2">
        <h1 className="text-3xl text-[#00ADB5]">What We Do</h1>
        <h2 className="text-4xl">What We Provide for Your Health</h2>
        <p className="text-gray-600">
          We offer a comprehensive range of health services tailored to your
          needs, including preventive care, diagnostics, treatment, and wellness
          programs.
        </p>
      </div>

      <div className="w-6/12 mx-auto">
        <LotteiFile></LotteiFile>
      </div>
    </div>
  );
}

export default Yourhealth;
