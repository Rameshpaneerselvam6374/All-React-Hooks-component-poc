import { useRef, useState } from "react";

const RefForm = () => {
    const inputRef = useRef();
    const outputRef = useRef(0);
    const [count , setCount] = useState(0);

    const increment = () => {
        console.log("increment function" , count);
        setCount(count+1);
    }

    const handleButton = () => {
        console.log("Input value",inputRef.current.value);

        inputRef.current.focus();
        inputRef.current.select();

        outputRef.current++;
        console.log("OutputRef value" , outputRef.current)
    }



    return(


        <>
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleButton}>Click</button>
            <button onClick={increment}>count</button>
        </div>
        </>
    );
}

export default RefForm;