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

function putTask(taskUpdate) {
    const urlWithParams = `${apiUrl}/${taskUpdate.id}`
    return axios.put(urlWithParams, taskUpdate.newTask)
    .then(response => {
        return console.log('put task', response.data)
    })
    .catch((e) =>{throw e})
}


function deleteTask(idTask) {
    const urlWithParams = `${apiUrl}/${idTask}`
    return axios.delete(urlWithParams)
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
    } catch (e) {
        console.log(e.message)
    }
}

function* updateTasks(action) {
    try {
        yield call(putTask, action.payload);
    } catch (e) {
        console.log(e.message)
    }
}

function* callDeleteTask(action) {
    try {
        yield call(deleteTask, action.payload);
    } catch (e) {
        console.log(e.message)
    }
}

function* taskSaga() {
    yield takeLatest('GET_TASKS_REQUEST', fetchTasks)
    yield takeLatest('ADD_TASKS_REQUEST', addNewTasks)
    yield takeLatest('DELETE_TASKS_REQUEST', callDeleteTask)
    yield takeLatest('UPDATE_TASKS_REQUEST', updateTasks)
}

export default taskSaga;