import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSage from './saga/index';


// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

// const store = compose(
//     applyMiddleware(sagaMiddleware),
//     window.devToolsExtension && window.devToolsExtension(),
// )(createStore)(rootReducer);

sagaMiddleware.run(rootSage);

export default store;
