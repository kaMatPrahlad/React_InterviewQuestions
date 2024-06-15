import { useState } from "react";
// IMPLEMENT A BASIC TOGGLE SWITCH COMPONENT

export default function index() {
  const [istoggled, setIstegoogled] = useState(false);
  const handlechange = () => {
    setIstegoogled(!istoggled);
  };
  return (
    <div className="">
      <input type="checkbox" onChange={handlechange} />
      <p>{istoggled ? "on" : "off"}</p>
    </div>
  );
}
