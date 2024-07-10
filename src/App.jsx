// import { UserProvider } from "./UserContext";
import "./App.css";
import Accordian from "./components/accordian";
import ApiFetching from "./components/Api-Fetching";
import TimerCount from "./components/Build-Timer";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TodoList from "./components/Todo-List";
import ToggleSwitch from "./components/Toggle-Switch";
import UserInput from "./components/user-input";
import { Hero } from "./context/UserName";

function App() {
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
      <TodoList />

      {/* CREATE CONTEXT */}
      {/* <Hero>
        <div>
          <h1>Im App.js</h1>
          <Home />
        </div>
      </Hero>
    </div> */}
    </div>
  );
}

export default App;
