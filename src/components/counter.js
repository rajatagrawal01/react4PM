import {useState} from 'react';

function Counter(){
    const [count,setCount] =useState(0);
    const Increment = () => {
        setCount(count+1);
    }
    const Decrement = () => {
        setCount(count-1);
    }
    return(
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            input
        </div>
    )
}

export default Counter;