import { all } from 'redux-saga/effects';
import taskSaga from './taskSaga';

export default function* rootSaga() {
    yield all([taskSaga()])
}