import React, { useEffect, useRef, useState } from "react";

export function UseRefDemo() {
  const [name, setName] = useState("");
  // useref is similar to state and it persist the renders and doesnt cause to render
  // useRef can also be used to refrence elements from dom
  const renderCount = useRef(0);
  const focusRef = useRef();
  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div>
      <input
        ref={focusRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => focusRef.current.focus()}>focus</button>
      <p>{name}</p>
      <p>rensered : {renderCount.current}</p>
    </div>
  );
}
