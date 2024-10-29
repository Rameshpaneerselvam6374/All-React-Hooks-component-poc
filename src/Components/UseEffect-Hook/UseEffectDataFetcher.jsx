import { useState , useEffect } from "react";

const UseEffectDataFetcher = () => {
    // const [count , setCount] = useState(null);

    // useEffect(
    //     () => {
    //         fetch('https://api.example.com/data')
    //         .then((response) => response.json)
    //         .then((result) => setCount(result))
    //         .catch((error) => console.log("error the data", error))
    //     },[]
    // )

    // return(
    //     <>
    //     <div>
    //         {count ? (
    //     <ul>
    //       {count.map((item) => (
    //         <li key={item.id}>{item.name}</li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p>Loading data...</p>
    //   )}
    //     </div>
    //     </>
    // );
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
  
      // Cleanup function to clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []); // Empty dependency array for initial setup only
  
    return <p>Seconds: {seconds}</p>;
  
}


export default UseEffectDataFetcher;