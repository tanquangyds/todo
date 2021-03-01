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

export function deleteTask(idTask) {
    return {
        type: type.DELETE_TASKS_REQUEST,
        payload: idTask,
    }
    
}

export function updateTasks(taskUpdate) {
    return {
        type: type.UPDATE_TASKS_REQUEST,
        payload: taskUpdate,
    }
    
}