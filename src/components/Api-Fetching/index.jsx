// API Fetching from random Data
//In fecth API we cannot access data directly,
//  for accessing data from API we have to use loop Condition
// Example
{
  /* <h1>Title: {data.title}</h1>; */
}
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
      {data ? (
        <div>
          <h1>Title: {data.title}</h1>
          <h1>Body: {data.body}</h1>
          <h3>UserId: {data.userId}</h3>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
