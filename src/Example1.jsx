// import { useState, useEffect } from "react";

// function Example1 (){
 
//     const [count, setCount] = useState(null);

//     useEffect (() => {
//         document.title = `UseEffect change ${count}`;
//     } ,[count])

//     return(
//         <>
//         <div className="counter">
//             <h2>Tittle Change to UseEffect</h2>
//             <p>using to javascript and react </p>
//             <p>Count = {count}</p>

//             <button onClick={()=>setCount((name)=>(name+1))}>Change tittle{count}</button>
//         </div>
//         </>
//     )
// }


// export default Example1;


import { useState } from "react";
function Example1(){
// API for get requests
const [data ,setData] = useState();
let fetchRes = fetch(
"https://random-data-api.com/api/users/random_user");
    
// FetchRes is the promise to resolve
// it by using.then() method
fetchRes.then(res =>
    res.json())
    .then(d => {
        setData(d)
    })

    return(
        <>
        <div className="fetch">
           {data &&
           (
            <div>
                <h2>User Information </h2>
            <p>id:{data.id}</p>
            <p>User Name :{data.username}</p>
            <p>First Name: {data.first_name}</p>
            <p>Last Name: {data.last_name}</p>
            <p>Password : {data.password}</p>
           </div>
           )}
        </div>
        </>
    );
    }
    export default Example1;
