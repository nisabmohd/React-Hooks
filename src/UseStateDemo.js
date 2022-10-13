import { useState } from "react"

export  function UseStateDemo() {
    const [count,setCount]=useState(0)
    const updateCount=(payload)=>{
        setCount(current=>current+payload)
    }
  return (
    <div style={{display:'flex',flexDirection:'row',alignItems:'center',width:'120px',justifyContent:'space-around'}}>
        <button onClick={()=>updateCount(-1)}>-</button>
        <p>{count}</p>
        <button onClick={()=>updateCount(1)}>+</button>
    </div>
  )
}
