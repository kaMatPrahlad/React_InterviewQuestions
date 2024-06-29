import React, { useContext } from "react";
import { Username } from "../../App";

export default function index() {
  const { myName, myName2, fruit } = useContext(Username);
  return (
    <div>
      <h1>Im Child Component</h1>
      <h1>
        My Name is {myName}
        {myName2}
      </h1>
      <h1>This fruit is {fruit}</h1>
      <button className="bg-blue-500 p-4">Tap</button>
    </div>
  );
}
