import { useEffect, useState } from "react";

export default function TodoList() {
  const [inputvalue, setInputvalue] = useState("");
  //Another useState for storing data
  const [task, setTask] = useState([]);

  const [datetime, setDateTime] = useState();

  const handleinput = (e) => {
    setInputvalue(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (!inputvalue) return;

    //Check the same matching word in the state
    if (task.includes(inputvalue)) {
      setInputvalue("");
      return;
    }
    //Push the value to the new state and store previous value as well
    setTask((prevTask) => [...prevTask, inputvalue]);
    setInputvalue("");
  };

  const handledelete = (e) => {
    setTask(e.target.value['']);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formatdate = now.toLocaleDateString();
      const formattime = now.toLocaleTimeString();
      setDateTime(`${formatdate} ${formattime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black">
      <div className="text-2xl">
        <h1 className="text-4xl mb-5 text-white">Todo List</h1>
        <h1 className="text-4xl mb-5 text-white">{datetime} </h1>
        <form action="" onSubmit={handleAdd}>
          <input
            onChange={handleinput}
            value={inputvalue}
            type="text"
            className="bg-slate-100 rounded-l-lg"
          />
          <button
            className="bg-blue-400 border cursor-pointer rounded-r-lg text-white px-4"
            onSubmit={handleAdd}
          >
            Add
          </button>
        </form>
      </div>
      <section className="bg-black text-white">
        <ul className="">
          {
            //Map the state and display the value
            task.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  <button
                    className="bg-red-400 border cursor-pointer rounded-lg text-white px-4"
                    onClick={handledelete}
                  >
                    Remove
                  </button>
                </li>
              );
            })
          }
        </ul>
      </section>
    </div>
  );
}
