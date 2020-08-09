// ActionType 생성
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// Action 생성
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

// InitialState 생성
const initialState = 0;

// Counter Reducer 생성
export default function counter (state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}