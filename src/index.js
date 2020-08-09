import React from 'react';
import App from "./App";
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from "./components/function/ReduxPracticeComp/Modules";

//하나의 Application에 하나의 Store만! 즉, rootReducer 안에 Applicaiton에 필요한 모든 reducer들을 넣고
const store = createStore(rootReducer);
console.log(store.getState());

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
