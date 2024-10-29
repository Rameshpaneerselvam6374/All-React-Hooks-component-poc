import React from 'react'

const ChildC = (sendtoParent) => {
    const sendData = () => {
        const data = "hello from Ramesh Child Component";
        sendtoParent(data)
    }
  return (
    <div>
      <h1>Child Component</h1>
        <button onClick={sendData}>Send to Parent</button>
    </div>
  )
}

export default ChildC
