import {keyframes } from 'styled-components';

export const transitions = {
    moveLeftRight: keyframes`
        0% {
            transform: translateX(-40px);
        }
        25% {
            transform: translateX(20px);
        }
        50% {
            transform: translateX(-10px);
        }
        75% {
            transform: translateX(5px);
        }
        100% {
            transform: translateX(0px);
        }
    `
};