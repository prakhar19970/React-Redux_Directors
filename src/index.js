import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import rootSaga from './ReduxComponents/sagas';
import createSagaMiddleware from 'redux-saga';

import { reducer } from "./ReduxComponents/Directorsreducer.js";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(rootSaga);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
