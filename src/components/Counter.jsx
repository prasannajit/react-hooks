import React, {useState} from 'react';

const Counter = ()=>{
    console.log("I am in Counter");
    const [counter,setCounter]=useState(0);
    const onBtnClick = ()=>{
        setCounter(counter+1);
    }
    return (
        <div>
            <button onClick={onBtnClick}>Click me</button>
            <p>{counter}</p>
        </div>
    )
};

export default Counter;