import React, { useState } from 'react'
import Child from './child'
const Parent = () => {
    const message = "Hello from Ramesh"
    const [data,setData] = useState("Hello Parent")
  return (
    <div>
      <h1>Parent Component</h1>

      <Child greeting={data}/>
    </div>
  )
}

export default Parent
