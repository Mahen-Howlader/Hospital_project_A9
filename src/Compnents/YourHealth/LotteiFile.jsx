// import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import { useEffect, useState } from "react";

function LotteiFile() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("animationhart.json")
      .then((val) => val.json())
      .then((data) => setData(data));
  }, []);

  const options = {
    animationData: data,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
}

export default LotteiFile;
