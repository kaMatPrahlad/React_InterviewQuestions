import { useState } from "react";
import Section from "./Section";

export default function TodoList2() {
  const [input, setInput] = useState("");
  //Add Task
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();

    if (todos.includes(input)) {
      setInput("");
      return;
    }
    //Add to new todo
    setTodos([...todos, input]);
    setInput("");
  };

  // Delete task
  const handleRemove = () => {
    const data = todos.filter();
  };

  //Delete Task to delete all
  const handleDelete = () => {
    setTodos([]);
  };

  return <Section />;
}
