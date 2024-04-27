import {
    ADD_TODO_REQUEST,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,

    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE,

    UPDATE_TODO_REQUEST,
    UPDATE_TODO_SUCCESS,
    UPDATE_TODO_FAILURE,

    DELETE_TODO_REQUEST,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_FAILURE,

    IS_TODO_COMPLETED_REQUEST,
    IS_TODO_COMPLETED_SUCCESS,
    IS_TODO_COMPLETED_FAILURE
} from "../actions/todoActions.js"

const initialState = {
    loading: false,
    error: null,
    todos: []
}

const todoReducer = (
    state = initialState,
    action
) =>  {
    switch (action.type) {
        case ADD_TODO_REQUEST:
        case UPDATE_TODO_REQUEST:
        case DELETE_TODO_REQUEST: 
        case FETCH_TODOS_REQUEST:
        case IS_TODO_COMPLETED_REQUEST:
        return {
            ...state,
            loading: true,
            error: null,
        }
        case ADD_TODO_SUCCESS: 
        return {
            ...state,
            loading: false,
            todos: [...state.todos, action.payload]
        }
        case FETCH_TODOS_SUCCESS:
        return {
            ...state,
            loading: false,
            todos: action.payload
        }

        case UPDATE_TODO_SUCCESS:
            const updatedTodos = state.todos.map((todo) => todo._id === action.payload._id ? action.payload : todo)
        return {
            ...state,
            loading: false,
            todos: updatedTodos
        }
        case DELETE_TODO_SUCCESS:
            const filteredTodos = state.todos.filter((todo) => todo._id !== action.payload._id)
        return {
            ...state,
            loading: false,
            todos: filteredTodos
        }
        case IS_TODO_COMPLETED_SUCCESS:
            const isCompleted = state.todos.map((todo) => todo._id === action.payload._id ? {...todo, isCompleted: !todo.isCompleted} : todo)
        return {
            ...state,
            loading: false,
            todos: isCompleted
        }
        case ADD_TODO_FAILURE:
        case UPDATE_TODO_FAILURE:
        case DELETE_TODO_FAILURE:
        case FETCH_TODOS_FAILURE:
        case IS_TODO_COMPLETED_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload
        }
        
        default:
            return state;
    }
}

export default todoReducer;