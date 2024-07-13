import { useEffect, useState } from "react";

export default function Section() {
  const [timedate, setTimeDate] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const days = new Date();
      const time = days.toLocaleTimeString();
      const date = days.toLocaleDateString();
      setTimeDate([`${time} ${date}`]);
    }, [1000]);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="bg-black h-full w-full flex text-center flex-col items-center justify-center fixed">
        <h1 className="text-white">{timedate}</h1>
        <h1 className=" text-sky-300 text-3xl mb-6">TODOLIST</h1>
        <section>
          <form action="">
            <input
              type="text"
              className="p-1 mb-4"
              value={input}
              onChange={handleInput}
            />
            <button
              className="bg-blue-400 border cursor-pointer rounded text-white px-3 py-1 ml-2"
              onClick={handleAdd}
            >
              Add
            </button>
          </form>
        </section>
        <section className="flex flex-col items-center justify-center gap-2 text-black">
          {todos.map((todo, index) => (
            <div
              key={index}
              className="flex justify-between gap-6 bg-purple-100 p-2 rounded-md mb-1"
            >
              {todo}
              <button
                onClick={handleRemove}
                className="bg-sky-600 p-2 rounded-md text-white hover:bg-sky-700"
              >
                Remove
              </button>
              <button
                onClick={handleDelete}
                className="bg-sky-600 p-2 rounded-md text-white hover:bg-sky-700"
              >
                Remove All
              </button>
            </div>
          ))}
        </section>
        ;
      </div>
    </div>
  );
}
