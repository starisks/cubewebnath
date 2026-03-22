import { useState } from "react";
import { Link } from "react-router";

export default function Home() {
  const [msg, setMsg] = useState("");

  const fetchAPI = async () => {
    const res = await fetch("/api/hello");
    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1> CubeWebNath</h1>

      <button onClick={fetchAPI}>Test API</button>
      <p>{msg}</p>

      <br />
      <Link to="/timer">Go to Timer →</Link>
    </div>
  );
}
