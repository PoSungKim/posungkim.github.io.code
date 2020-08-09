import React from "react";

function CounterComp({ number, diff, onIncrease, onDecrease, onSetDiff }) {
    const onChange = event => {
        onSetDiff(parseInt(event.target.value, 10));
    };

    return (
        <div>
            <h1>{number}</h1>
            <input type="number" value={diff} onChange={onChange}/>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

export default CounterComp;