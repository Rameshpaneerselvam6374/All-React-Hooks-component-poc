import React, { useCallback, useState } from 'react'

const UseCallback = () => {
    const [count , setCount] = useState(0);

    const increment =  useCallback(() => {
        console.log("increment func called")
       setCount(prev => prev+1)
    },[count])

    console.log("component Re-rener")

  return (
    <div>
      <h1>Use Callback Hook</h1>
      <p>Count : {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UseCallback
