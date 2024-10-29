import React from 'react'
import ChildComponent from './ChildComponent'

const Parentcomponent = () => {
    const handleClick = () => {
        console.log("Button Clicked")
    }
  return (
    <div className='box'>
        <h3>Parent Component</h3>
        <ChildComponent handleClick={handleClick}/>
      
    </div>
  )
}

export default Parentcomponent
