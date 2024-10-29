import { useState, useEffect } from "react";
function FunctionHook () {
    const [color , setColor] = useState({color1:" Red ",color2:"pink"});
    const [model, setModel] = useState("bmw");
    const [count, setCount] = useState(0);
    const [name, setName] = useState("RAMESH");
    const updateColor = () => {
        setColor(previousColor=>{return{...previousColor,color2:"Mango"}});    
    } 
        useEffect(() => {
          setTimeout(() => {
            setCount((count) => count + 1);
          }, 1000);
        },[10]);
        
//         fetch("https://jsonplaceholder.typicode.com/todos")
//           .then((x)=>x.json())
//           .then(name=>name.name())
// },[]);
return( 
    <>
     <h1> My Faviourite color {color.color2}</h1>
     <h2>Enter your Name {name}</h2>
     <h3>Car  {model}</h3>
     <h2>Count = {count} </h2>
     <button onClick={()=>setColor("Yellow")}>Change Color</button>
     <button onClick={()=>setModel("kia")}>Change model</button>
     <button onClick={()=>setName("Dhinesh")}>Change name</button>
     <button onClick={updateColor}>Previous Color</button>
   
    </>
);
}
export default FunctionHook;