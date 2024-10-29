import React, { useReducer } from 'react'

const initialState = [
    { id: 1, name: "Book" },
    { id: 2, name: "Cook" }
];

function reducer(state, action) {
    switch (action.type) {
        case 'add-task':
            return [...state, { id: Date.now(), name: action.payload }];
        case 'delete-task':
            return state.filter((item) => item.id !== action.payload);
        case 'update-task':
            return state.map((item) => (item.id === action.payload.id ? {
                ...item,
                name: action.payload.newName
            } : item))
        default:
            return state;
    }
}

const ReducerApp = () => {
    const [items, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>Reducer App</h2>
            <button onClick={() => dispatch({ type: "add-task", payload: prompt("Enter Item Name:") })}>Add Item</button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}
                        <button onClick={() => dispatch({
                            type: "update-task", payload: {
                                id: item.id, newName: prompt("Enter Item Name:",
                                    item.name
                                )
                            }
                        })}>Update</button>
                        <button onClick={() => dispatch({ type: "delete-task", payload: item.id })}>Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default ReducerApp
