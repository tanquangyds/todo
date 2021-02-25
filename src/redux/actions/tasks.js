import * as type from '../reducers/styles';

export function getTasks(params) {
    return {
        type: type.GET_TASKS_REQUEST,
        payload: params,
    }
    
}

export function addTasks(newTask) {
    return {
        type: type.ADD_TASKS_REQUEST,
        payload: newTask,
    }
    
}