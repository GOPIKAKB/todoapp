import React from 'react'
import { useState, useEffect } from 'react'


function Counter() {
    useEffect(() => {
        console.log("mounting");
        return ()=> {
            console.log("unmount")
        }
    },[]);
    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h1>Hello i am Component : {count}</h1>
        </div>
    )
}

export default Counter
