import { useState } from "react";

async function ApiHook(props) {
  const [data, setData] = useState([]);
  const API = await fetch("/data.json")
    .then((res) => res.json())
    .the((data) => setData(data));
    
}

export default ApiHook;
