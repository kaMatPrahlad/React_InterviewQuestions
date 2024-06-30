import React, { useContext } from "react";
import { UserName } from "../../context/UserName";

export default function Child() {
  const { myName, myName2 } = useContext(UserName);
  //   const { fruit, setFruit } = useContext(UserName);
  const handleTask = () => {
    setFruit("apple");
  };
  return (
    <div className="h-52 border-blue-500 border-2">
      <h1>Im Child Component</h1>
      <h1 className="text-black">
        Hi, Im {myName}
        {myName2}
      </h1>
      {/* <h2>This Fruit is {fruit}</h2>
      <button className="px-8 bg-blue-800" onClick={handleTask}>
        Button{" "}
      </button> */}
    </div>
  );
}
