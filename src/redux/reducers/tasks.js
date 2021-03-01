import * as type from './styles';

const initialState = {
    tasks: [],
    loading: false,
    error: null,
    totalCount: 0,
}

export default function tasks(state = initialState, action) {
    switch (action.type) {
        case type.GET_TASKS_REQUEST:
            return {
                ...state,
                loading: true,

            }
        case type.ADD_TASKS_REQUEST:
            return {
                ...state,
                loading: true,

            }
        case type.GET_TASKS_SUCCESS:
            return {
                ...state,
                loading: false,
                tasks: action.tasks.data,
                totalCount: action.tasks.count
            }
        case type.GET_TASKS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message

            }
        case type.UPDATE_TASKS_REQUEST:
            return {
                ...state,
                loading: true,

            }
        case type.DELETE_TASKS_REQUEST:
            return {
                ...state,
                loading: true,

            }
        default:
            return state
    }

  }