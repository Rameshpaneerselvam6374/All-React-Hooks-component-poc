import { useState } from 'react';
function Counter(){
   const [counter, setCounter] = useState(0);
   const Increment = () => {
      setCounter(counter + 1);
   }

   const Decrement = () => {
      if(counter !==0)
        setCounter(counter - 1);
   }

   return(
    <>
            <div className='counter'>
               <h1 className='h1'>Counter App using Functional Component</h1>
               <p>Count={counter}</p>
      <button onClick={Increment}> Increment </button>
      <button onClick={Decrement}>Decrement</button>
      </div>
      </>
      );
}
export default Counter;