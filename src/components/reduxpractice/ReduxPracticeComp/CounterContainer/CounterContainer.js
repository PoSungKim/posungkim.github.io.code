import React from "react";
import CounterComp from "../CounterComp/CounterComp";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {decrease, increase, setDiff} from "../Modules/counter";

function CounterContainer() {

    // Container의 역할: rootReducer로 만든 Store 속 state에서 Counter Component에서 필요한 값들을 useSelector로 가져와서 props로 전달해줌
    {/*
    const {number, diff} = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff,
    }), (left, right) => left.number === right.number && left.diff === right.diff);
    */
    }

    const {number, diff} = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff,
    }), shallowEqual);

    const dispatch = useDispatch();
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = (diff) => dispatch(setDiff(diff));

    return <CounterComp
        number={number}
        diff={diff}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
    />;
}

export default CounterContainer;