import { createContext, useState } from "react";

const UserName = createContext();

const Hero = ({ children }) => {
  const [fruit, setFruit] = useState("mango");
  //Create the value that you want to show in child component
  //   let myName = "Prahlad";
  //   let myName2 = "Kamat";

  return (
    // <UserName.Provider value={{ myName, myName2}}>
    <UserName.Provider value={{ fruit, setFruit }}>
      {children}
    </UserName.Provider>
  );
};

// export { UserName, Hero, fruit, setFruit };
export { UserName, Hero };
