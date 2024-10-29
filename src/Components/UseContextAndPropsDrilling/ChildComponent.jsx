import React, { useContext } from 'react'
import { GrandContext } from './GrandParentComponent'



const ChildComponent = ({handleClick}) => { 
    const value = useContext(GrandContext);  //destructuring data
  return (
    <div className='box'>
      <h3>Child Component</h3>
      <p>{value}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default ChildComponent
