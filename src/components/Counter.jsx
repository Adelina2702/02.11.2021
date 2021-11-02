import React, { useState } from 'react';
import "./Counter.css"

const Counter = () => {
    const [script, setScript] = useState(0)
  

    function increment (){
        setScript((prevState) => prevState + 1)
    }
    
    function decrement() {
        setScript(script - 1)
    }


    return (
        <>
            <div>
                <h1>COUNTER: {script} </h1>
            <button onClick={increment} className="xbt">+</button>
            <button onClick={decrement} className="xbt">-</button>
        </div>
        </>
    );
};

export default Counter;