import React, { useState } from "react";

export default function UserInput() {
  const [input, setInput] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <p>User Input:{input}</p>
    </div>
  );
}
