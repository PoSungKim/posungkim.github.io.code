import React from "react";
import CounterComp from "../CounterComp/CounterComp";
import {useDispatch, useSelector} from "react-redux";
import {decrease, increase} from "../Modules/counter";

function CounterContainer() {
    const number = useSelector(state  => state.counter);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase())
    };
    const onDecrease = () => {
        dispatch(decrease())
    };

    return (
        <CounterComp
            number = {number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    );
}

export default CounterContainer;