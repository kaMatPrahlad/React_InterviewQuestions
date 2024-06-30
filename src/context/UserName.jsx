import { createContext, useState } from "react";

const UserName = createContext();

const Hero = ({ children }) => {
  //For useState Rendering
  //   const [fruit, setFruit] = useState("mango");

  //Create the value that you want to show in child component
  let myName = "Emily";
  let myName2 = "Marker";

  return (
    <UserName.Provider value={{ myName, myName2 }}>
      //For UseState
      {/* <UserName.Provider value={{ fruit, setFruit }}> */}
      {children}
      {/* </UserName.Provider> */}
    </UserName.Provider>
  );
};

// export { UserName, Hero, fruit, setFruit };
export { UserName, Hero };
