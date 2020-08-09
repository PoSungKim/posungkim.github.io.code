import React from 'react';
import App from "./App";
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Setup for ReduxPraticeComp and ReduxMiddleWarePracticeComp
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension/index";

// ReduxPraticeComp
// import rootReducer from "./components/function/ReduxPracticeComp/Modules";

// ReduxMiddleWarePracticeComp
import rootReducer from "./components/function/ReduxMiddleWarePracticeComp/Modules";
import {applyMiddleware} from "redux";

// myLogger vs. redux-logger
// import myLogger from "./components/function/ReduxMiddleWarePracticeComp/Middlewares/myLogger";
import logger from "redux-logger";

//하나의 Application에 하나의 Store만! 즉, rootReducer 안에 Applicaiton에 필요한 모든 reducer들을 넣어서 통합 관리
// const store = createStore(rootReducer, );
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

ReactDOM.render(
    <React.StrictMode>
        <Provider store = {store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();