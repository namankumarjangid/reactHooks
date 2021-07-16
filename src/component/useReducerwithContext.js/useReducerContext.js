import React, { createContext, useContext, useReducer } from 'react';

const myContext = createContext();

const initialState = {
    "name": "naman"
}


const reducer = (state, action) => {
// we can also use if condition here instead switch statement
    switch (applicationCache.type) {
        case "CHANGE_NAME":
            return {
                name: action.payload
            }

        default:
            return state;
    }
}

// component 1
const Coder3 = () => {
    const myname = useContext(myContext)
    return (
        <div>
            <h1>i am coder</h1>
            <h2>{myname.name}</h2>
            <button onClick={() => myname.dispatch({ type: "CHANGE_NAME", payload: "hitesh" })}>change it</button>
        </div>
    )
}

// component 2
const Coder2 = () => {
    const myname = useContext(myContext)

    return (
        <div>
            <h1>i am coder2</h1>
            <h2>{myname.name}</h2>
            <button onClick={() => myname.dispatch({ type: "CHANGE_NAME", payload: "suresh" })}>change it</button>
            <Coder3 />
        </div>
    )
}

// component 3
const Coder = () => {
    const myName = useContext(myContext)
    return (
        <div>
            <h1>i am coder1</h1>
            <h2>{myName.name}</h2>
            <Coder2 />
        </div>
    )
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <myContext.Provider value={{ name: state.name, dispatch: dispatch }}>
            <div>
                <Coder />
            </div>
        </myContext.Provider>

    )
}