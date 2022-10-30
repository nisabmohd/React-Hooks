import React from "react";
import { useTransition } from "react";
import { useState } from "react";

export const UseTransitionDemo = () => {
  const [isPending, startTransition] = useTransition();
  //set priority to low startTransition
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const LIST_SIZE = 20000;
  const onInputChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      let arr = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        arr.push(e.target.value);
      }
      setList(arr);
    });
  };
  return (
    <div>
      <input value={input} onChange={(e) => onInputChange(e)} type="text" />
      {isPending
        ? "Loading..."
        : list.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </div>
  );
};
