import { useDebugValue, useState } from "react";

export default function useDemo() {
  const [data] = useState(parseInt(Math.random() * 1000));
  useDebugValue(data)
  return data;
}
