import React, { useMemo, useState } from "react";

export function UseMemoDemo() {
  const [num, setNum] = useState(1);
  const doubleNumber = useMemo(() => {
    return slowFunction(num);
  }, [num]);
  const [dark, setDark] = useState(false);
  const theme = {
    backgroundColor: dark ? "black" : "#f0efef",
    color: dark ? "white" : "black",
    height: "100px",
    width: "300px",
  };
  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        min={1}
        id=""
      />
      <p>Double : {doubleNumber}</p>
      <div className="box" style={theme}>
        box
      </div>
      <br />
      <button onClick={() => setDark((prev) => !prev)}>toggle theme</button>
    </div>
  );
}

function slowFunction(num) {
  //   for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
