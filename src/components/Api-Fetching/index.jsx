// API Fetching from random Data
import React, { useEffect, useState } from "react";

export default function ApiFetching() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div className="">
      {/* <h1>Title: {data.userId}</h1> */}
      <h2>Body: {data.body}</h2>
      {/* {data ? <h1>Title: {data.title}</h1> : <div>Loading...</div>} */}
    </div>
  );
}
