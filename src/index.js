import React from 'react';
import App from "./App";
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Redux, React-Redux
import logger from "redux-logger";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension/index";

// ReduxThunk
import ReduxThunk from 'redux-thunk';

// ReduxSaga
import createSagaMiddleware from 'redux-saga';
import {customHistory} from './router/AppRouter';

// MiddleWare 사용에 필요한 컴포넌트
import rootReducer from "./_reducers/indexReducer";
import {rootSaga} from "./_reducers/indexReducer";

const sagaMiddleware = createSagaMiddleware({
    context: {
        history: customHistory
    }
});

const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(
            ReduxThunk.withExtraArgument({history: customHistory}),
            sagaMiddleware,
            // logger
        )
    )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();