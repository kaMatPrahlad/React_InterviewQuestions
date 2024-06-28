import { useState } from "react";

export default function TodoList() {
  const [inputvalue, setInputvalue] = useState("");
  //Another useState for storing data
  const [task, setTask] = useState([]);

  const handleinput = (e) => {
    setInputvalue(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (!inputvalue) return;

    //Check the same matching word in the state
    if (task.includes(inputvalue)) return;
    //Push the value to the new state and store previous value as well
    setTask((prevTask) => [...prevTask, inputvalue]);
    setInputvalue("");
  };
  return (
    <div className="bg-black h-[80vh] w-full">
      <div className="text-2xl">
        <h1 className="text-4xl mb-5 text-white">Todo List</h1>
        <form action="" onSubmit={handleAdd}>
          <input
            onChange={handleinput}
            value={inputvalue}
            type="text"
            className="bg-slate-100 rounded-l-lg"
          />
          <button
            onSubmit
            className="bg-blue-400 border cursor-pointer rounded-r-lg text-white px-4"
          >
            Add
          </button>
        </form>

        <ul>{/* <button className="bg-white">Remove</button> */}</ul>
      </div>
    </div>
  );
}
