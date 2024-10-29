import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [number , setNumber] = useState(0);

const handleInputChange = (event) => {
  const inputValue = parseInt(event.target.value)
  setNumber(inputValue)
}

const computeFactorial = (n) => {
    console.log("Computting factorial",{number})
    let result = 1;
    for(let i= 1; i<=n; i++){
        result *=i;
    }
    return result;
}

   const memorizedFactorial = useMemo(()=> computeFactorial(number),[number])
  return (
    
    <div>
      <h1>Use Memo Hooks</h1>
      <input type="number" value={number} onChange={handleInputChange} />
      <p>Factorial of {number} is : {memorizedFactorial}</p>
    </div>
  )
}

export default UseMemo
