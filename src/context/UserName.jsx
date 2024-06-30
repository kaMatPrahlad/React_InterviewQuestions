import { createContext } from "react";
import { MdFireHydrantAlt } from "react-icons/md";

const UserName = createContext();

const Hero = ({ children }) => {
  //Create the value that you want to show in child component
  let myName = "Prahlad";
  let myName2 = "Kamat";

  return (
    <UserName.Provider value={{ myName, myName2 }}>
      {children}
    </UserName.Provider>
  );
};

//  export default Hero;
export { UserName, Hero };
