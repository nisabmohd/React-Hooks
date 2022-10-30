import React from "react";
import useDemo from "./hooks/useDemo";

export function UseDebugValueDemo() {
  const data = useDemo();
  return <div>{data}</div>;
}
