import {useEffect, useState} from 'react';

function Counter(){
    const [count,setCount] =useState(0);

    useEffect(()=>{
        console.log("component mounted"); // this will run only once when the component is mounted
        return () => {
            console.log("component unmounted");
        } // this will run when the component is unmounted
    },[]); 

    useEffect(()=>{
        console.log("Initial count",count); // this will run when the count state changes
        //this will return initial value of count
        return () => {
            console.log("Final count",count);
        } 
        // this will run when the component is mounted and when the count state changes
        //this will return the final value of count
    },[count]);





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
        </div>
    )
}

export default Counter;