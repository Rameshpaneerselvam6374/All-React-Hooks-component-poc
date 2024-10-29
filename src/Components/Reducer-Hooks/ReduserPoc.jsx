import { useReducer } from "react"

function reducer (state,action){
    console.log(state, action);
switch (action.type){
    case "increment":
        return {...state, count: state.count+1};
    case "decrement":
        return { ...state, count: state.count-1};
    case "reset":
        return { ...state,  count: state.count=0};
    default: 
    return "unauthorized command";
}
}

const initialState = {count:0};
export default function ReduserPoc () {
    const [state,dispatch] = useReducer (reducer, initialState);

    function Increace(){
        dispatch({type:"increment"})
    }
    function decreace () {
        dispatch ( { type : "decrement"})
    }
    function Reset () {
        dispatch ( { type:"reset"})
    }

  return (
    <>
    <div>
      <h1>count:{state.count}</h1>
      <button onClick={Increace}>Increment</button>
      <button onClick={decreace}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
    </>
  )
}
