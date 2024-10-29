import React, { useState } from 'react'
import ChildC from "./ChildCo"

const Parent1 = () => {
    const [childData, setChildData] = useState("");

    const receivedDataFromChild = (data) => {
        setChildData(data)
    }
  return (
    <div>
        <h1>Parent Component </h1>
        <p>Data from Child  {childData}</p>
        <ChildC sendtoParent={receivedDataFromChild}/>      
    </div>
  )
}
export default Parent1
