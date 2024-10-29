import React from 'react'
import Parentcomponent from './Parentcomponent'
import { createContext } from 'react';

export const GrandContext = createContext();

const GrandParentComponent = () => {
    const data = 'Hello from GrandParent My Home'
  return (
    <>
    <div className='box'>
        <h2>GrandParent Component</h2>
        <GrandContext.Provider value={data}>
        <Parentcomponent />
        </GrandContext.Provider>
     
    </div>
    </>
  )
}

export default GrandParentComponent
