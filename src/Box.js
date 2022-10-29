import React from "react";
import { useTheme } from "./context/ThemeContext";
export function Box() {
  const context = useTheme();
  return (
    <>
      <button onClick={context.toggleTheme}>toggle</button>
      <div
        style={{
          height: "300px",
          width: "300px",
          color: context.dark ? "white" : "black",
          backgroundColor: context.dark ? "black" : "rgb(236 236 236)",
          marginTop: "30px",
        }}
      >
        Box
      </div>
    </>
  );
}
