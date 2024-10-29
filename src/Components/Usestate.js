import { useState } from "react";
function Usestate(){
const [color,setColor] = useState("red");
return(
    <>
    <div>
        <h1>Use usestate update Track state </h1>
        <p>My Favorite color  {color}</p>
        <button onClick={()=>setColor('Green')}>Click</button>
    </div>
    </>
);
}
export default Usestate