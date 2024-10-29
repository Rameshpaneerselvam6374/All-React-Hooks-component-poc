import { useState } from "react";
import { useEffect } from "react";

function UseEffect(){
    const [data , setData] = useState(0);

    // useEffect(()=>{
    //     console.log("useEffect render")
    //     document.title = (`hello welcome ${data}`)
    // },{data})

    const increment = () => {
        setData(data + 1);
    }
     return(
        <>
        <div>
            <h2>Count the data</h2>
            <p>Welcome to useState</p>
            <p>count = {data}</p>
            <button onClick={increment}>Change Data</button>
        </div>
        </>
     )
}

export default UseEffect;