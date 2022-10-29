import { useEffect, useState } from "react";

export function UseEffectDemo() {
  const [type, setType] = useState("posts");
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("After clean up this lines run")
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));

    return () => {
      //cleanup function
      console.log("This runs before entering useEffect");
    };
  }, [type]);
  return (
    <>
      <div>
        <button onClick={() => setType("posts")}>posts</button>
        <button onClick={() => setType("comments")}>comments</button>
        <button onClick={() => setType("users")}>users</button>
      </div>
      {data.map((item) => (
        <pre key={JSON.stringify(item)}>{JSON.stringify(item)}</pre>
      ))}
    </>
  );
}
