import axios from "axios"
import { baseUrl } from "../../utils/constant"

// Action Type 
export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST"
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS"
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE"

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const UPDATE_TODO_REQUEST = "UPDATE_TODO_REQUEST"
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS"
export const UPDATE_TODO_FAILURE = "UPDATE_TODO_FAILURE"

export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST"
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS"
export const DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE"

export const IS_TODO_COMPLETED_REQUEST = "IS_TODO_COMPLETED_REQUEST"
export const IS_TODO_COMPLETED_SUCCESS = "IS_TODO_COMPLETED_SUCCESS"
export const IS_TODO_COMPLETED_FAILURE = "IS_TODO_COMPLETED_FAILURE"

// Action Creaters

export const addTodoRequest = () => ({
    type: ADD_TODO_REQUEST
})

export const addTodoSuccess = (todo) => ({
    type: ADD_TODO_SUCCESS,
    payload: todo
})
export const addTodoFailure = (error) => ({
    type: ADD_TODO_FAILURE,
    payload: error
})

export const fetchTodosRequest = () => ({
    type: FETCH_TODOS_REQUEST
})

export const fetchTodosSuccess = (todos) => ({
    type: FETCH_TODOS_SUCCESS,
    payload: todos
})

export const fetchTodosFailure = (error) => ({
    type: FETCH_TODOS_FAILURE,
    payload: error
})

export const updateTodoRequest = () => ({
    type: UPDATE_TODO_REQUEST
})

export const updateTodoSuccess = (updatedTodo) => ({
    type: UPDATE_TODO_SUCCESS,
    payload: updatedTodo
})

export const updateTodoFailure = (error) => ({
    type: UPDATE_TODO_FAILURE,
    payload: error
})

export const deleteTodoRequest = () => ({
    type: DELETE_TODO_REQUEST,
})

export const deleteTodoSuccess = (_id) => ({
    type: DELETE_TODO_SUCCESS,
    payload: _id
})

export const deleteTodoFailure = (error) => ({
    type: DELETE_TODO_FAILURE,
    payload: error
})

export const isTodoCompletedRequest = () => ({
    type: IS_TODO_COMPLETED_REQUEST
})

export const isTodoCompletedSuccess = (_id) => ({
    type: IS_TODO_COMPLETED_SUCCESS,
    payload: _id
})

export const isTodoCompletedFailure = (error) => ({
    type: IS_TODO_COMPLETED_FAILURE,
    payload: error
})

// Async Action Creator for API Call
    export const addTodo = (todo) => (
    async (dispatch) => {
        dispatch(addTodoRequest());
        try {
            const response = await axios.post(`${baseUrl}/addTodo`, todo)
            dispatch(addTodoSuccess(response.data))
        } catch (error) {
            dispatch(addTodoFailure(error.message));
        }
    }
)

export const fetchTodos = () => (
    async (dispatch) => {
        dispatch(fetchTodosRequest());
        try {
            const response = await axios.get(`${baseUrl}/getTodos`)
            dispatch(fetchTodosSuccess(response.data.data))
        } catch (error) {
            dispatch(fetchTodosFailure(error.message))
        }
    }
)

export const updatedTodo = (_id, updateTodo) => (
    async (dispatch) => {
        dispatch(updateTodoRequest());
        try {
            const response = await axios.put(`${baseUrl}/updateTodo/${_id}`, updateTodo)
            dispatch(updateTodoSuccess(response.data))
        } catch (error) {
            dispatch(updateTodoFailure(error.message))
        }
    }
)

export const deleteTodo = (_id) => (
    async (dispatch) => {
        dispatch(deleteTodoRequest());
        try {
            await axios.delete(`${baseUrl}/deleteTodo/${_id}`)
            dispatch(deleteTodoSuccess(_id))
        } catch (error) {
            dispatch(deleteTodoFailure(error.message))
        }
    }
)

export const isTodoCompleted = (_id) => (
    async (dispatch) => {
        dispatch(isTodoCompletedRequest());
        try {
            await axios.get(`${baseUrl}/isTodoCompleted/${_id}`)
            dispatch(isTodoCompletedSuccess(_id))
        } catch (error) {
            dispatch(isTodoCompletedFailure(error.message))
        }
    }
)

