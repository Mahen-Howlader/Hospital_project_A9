import { useEffect, useState } from "react";
function ApiHook() {
  const [data, setData] = useState([]);
  const [loadingData, setLodaingData] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      setLodaingData(true);
      const API = await fetch("/data.json");
      const data = await API.json();
      setData(data);
      setLodaingData(false);
    };
    loadData();
  }, []);
  // console.log(data)
  return { data, loadingData };
}

export default ApiHook;
