import axios from "axios";
import { baseUrl } from "../utils/constant";

const addTodo = async (todo) => {
    try {
        const response = await axios.post(`${baseUrl}/addTodo`, todo)
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

const updateTodo = async (_id, updatedTodo) => {
    try {
        const response = await axios.put(`${baseUrl}/updateTodo/${_id}`, updatedTodo)
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

const fetchTodos = async () => {
    try {
        const response = await axios.get(`${baseUrl}/getTodos`)
        return response.data.data;
    } catch (error) {
        throw new Error(error.response.data.message)
    }
} 

const deleteTodo = async (_id) => {
    try {
        await axios.delete(`${baseUrl}/deleteTodo${_id}`)
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

const isTodoCompleted = async (_id, isCompleted) => {
    try {
        const response = await axios.put(`${baseUrl}/isTodoCompleted/${_id}`, isCompleted)
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}


export {
    addTodo,
    updateTodo,
    deleteTodo,
    fetchTodos,
    isTodoCompleted
}