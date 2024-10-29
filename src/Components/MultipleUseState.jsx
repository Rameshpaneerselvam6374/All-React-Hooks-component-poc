import { useState } from "react";

function MultipleUseState () {
    const [count , setCount] = useState(0);
    const [isEvent , setIsEvent] = useState(false);

    // const increment = () => {
    //     setCount(count+1);
    // }

    // const ChangeEvenOdd = () => {
    //     setIsEvent(!isEvent);
    // }
    return(
        <>
        <div>
            <h1>Welcome to UseState</h1>
            <p>count = {count}</p>
            <p>{isEvent ? 'even' : 'odd'}</p>
            <button onClick={() => setCount(count+1)}>Change count</button>
            <button onClick={() => setIsEvent(!isEvent)}>Change Even \ Odd</button>
        </div>
        </>
    );
}

export default MultipleUseState;