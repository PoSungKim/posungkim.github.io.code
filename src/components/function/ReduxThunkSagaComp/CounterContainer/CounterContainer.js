import React from "react";
import CounterComp from "../CounterComp/CounterComp";
import {useDispatch, useSelector} from "react-redux";
import {decrease, decreaseAsync, increase, increaseAsync} from "../Modules/counter";

function CounterContainer() {
    const number = useSelector(state  => state.counter);
    const dispatch = useDispatch();

    const onIncrease = () => {
        //dispatch(increase());

        // redux-thunk로 dispatch되는 순간에 추가적인 작업을 할 수 있음 --> 1초 뒤 increase() 호출
        dispatch(increaseAsync());
    };
    const onDecrease = () => {
        //dispatch(decrease());

        // redux-thunk로 dispatch되는 순간에 추가적인 작업을 할 수 있음 --> 1초 뒤 decrease() 호출
        dispatch(decreaseAsync());
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