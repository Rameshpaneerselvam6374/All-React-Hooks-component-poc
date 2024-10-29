import React, { useEffect, useState } from 'react'

const FetchApiData = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    
    const url = 'https://jsonplaceholder.typicode.com/users';
  
  useEffect(()=>{
    Fetchdata();
  },[]);

  const Fetchdata =async() =>{
    const getapi = await fetch(url);
    if(getapi.ok){
        setData(await getapi.json());
        setLoading(false);
    }
    else{
        setError("data error");
        setLoading(false);
    }
    
  }
  
    return (
    <div>
        {
            loading==true ? 
            <>Data Loading...</> : 
            data.map((value,index)=>(
                <li key={index}>{value.name}</li>
            ))
        }
    </div>
  )
}

export default FetchApiData
