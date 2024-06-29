import { createContext, useState } from "react";
import "./App.css";
import Accordian from "./components/accordian";
import ApiFetching from "./components/Api-Fetching";
import TimerCount from "./components/Build-Timer";
import Home from "./components/context/Home";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TodoList from "./components/Todo-List";
import ToggleSwitch from "./components/Toggle-Switch";
import UserInput from "./components/user-input";

//Create Context
const Username = createContext();
function App() {
  const [fruit, setFruit] = useState("mango");
  //Pass Data using variable
  let myName = "Rahul";
  let myName2 = "Kumar";

  return (
    <div className="App">
      {/* {Accordian} */}
      {/* <Accordian /> */}

      {/* {Random-color} */}
      {/* <RandomColor /> */}

      {/* {star-rating} */}
      {/* <StarRating /> */}

      {/* User-input */}
      {/* <UserInput /> */}

      {/* Toggle Switch */}
      {/* <ToggleSwitch />  */}

      {/* API-FETCHING */}
      {/* <ApiFetching /> */}

      {/* BUILD SPECIFIED TIMER COUNT */}
      {/* <TimerCount /> */}

      {/* Todo List */}
      {/* <TodoList /> */}

      {/* CREATE CONTEXT */}
      <Username.Provider value={{ myName, myName2 }}>
        <fruit.Provider value={fruit}>
          <div>
            <h1>Im App.js</h1>

            <Home />
          </div>
        </fruit.Provider>
      </Username.Provider>
    </div>
  );
}

export default App;
export { Username, fruit };
