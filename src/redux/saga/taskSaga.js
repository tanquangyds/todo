import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios'

const apiUrl = 'http://localhost:3000/tasks';

function getApi(params) {
    const urlWithParams = apiUrl + "?" + new URLSearchParams(params)
    console.log("AAAA", urlWithParams)
    return axios.get(urlWithParams)
    .then(response => {
        return {
            count: parseInt(response.headers['x-total-count']),
            data: response.data
        }
    })
    .catch((e) =>{throw e})
}

function addTask(newTask) {
    return axios.post(apiUrl, newTask)
    .then(response => {
        return console.log('add task', response.data)
    })
    .catch((e) =>{throw e})
}

function* fetchTasks(action) {
    try {
        const tasks = yield call(getApi, action.payload)
        yield put({type: 'GET_TASKS_SUCCESS', tasks: tasks})
    } catch (e) {
        yield put({type: 'GET_TASKS_FAILED', message: e.message})
    }
}

function* addNewTasks(action) {
    try {
        yield call(addTask, action.payload);
        yield put({type: 'ADD_TASKS_SUCCESS'})
    } catch (e) {
        console.log(e.message)
        // yield put({type: 'GET_TASKS_FAILED', message: e.message})
    }
}

function* taskSaga() {
    yield takeLatest('GET_TASKS_REQUEST', fetchTasks)
    yield takeLatest('ADD_TASKS_REQUEST', addNewTasks)
}

export default taskSaga;