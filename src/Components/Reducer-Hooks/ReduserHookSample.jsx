// import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";

function reducer (state , action){
    console.log(state, action);

    switch(action.type) {
        case "increment":
            return {...state, count: state.count+1};
        case "decrement":
            return {...state, count: state.count-1};
        case "reset":
            return {...state, count: state.count = initialState};    
        default:
            return "No changes in State unregonized command";
    }
}

const initialState = {count : 0};


export default function ReduserHookSample() {
    const [state, dispatch] = useReducer (reducer , initialState);

    
function handleIncrement() {
    dispatch({type: "increment"});
}

function handleDecrement() {
    dispatch({type: "decrement"});
}

// function handleReset() {

// }

// function handleDefault() {

// }

    return(
        <>
        <h1>Count {state.count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        {/* <button onClick={handleReset}>Reset</button>
        <button onClick={handleDefault}>Default</button> */}
        </>
    );

}