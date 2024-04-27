import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {Todo} from "../models/todo.model.js";

const addTodo = asyncHandler(async (req, res) => {

    const {todo, isCompleted} = req.body
    

    const cretedTodo = await Todo.create({
        todo,
        isCompleted,
        // description
    })

    if (!cretedTodo) {
        throw new ApiError(404, "Todo not found")
    }
    
    return res
    .status(200)
    .json(new ApiResponse(200, "Todo added successfully", cretedTodo.data))
})

const getTodos = asyncHandler(async (req, res,) => {
    const todos = await Todo.find({}).sort({createdAt: -1})

    if (!todos) {
        throw new ApiError(404, "Todos not found")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, "Todos fetched successfully", todos))
})

const updateTodo = asyncHandler(async (req, res,) => {
    const {_id} = req.params
    const {todo} = req.body


    const updateTodo = await Todo.findByIdAndUpdate(_id, 
        {
            $set: {
                todo,
                // isCompleted,
                // description
            },
        },
        {
            new: true
        }
    )
    
    if (!updateTodo) {
        throw new ApiError(404, "Todo not found")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, "Todo updated successfully", updateTodo))
})

const deleteTodo = asyncHandler(async (req, res,) => {
    const {_id} = req.params
    
   const todo =  await Todo.findByIdAndDelete(_id)
    
    return res
    .status(200)
    .json(new ApiResponse(200, "Todo deleted successfully", todo))
})

const isTodoCompleted = asyncHandler(async (req, res) => {
    const {_id} = req.params

    const todo = await Todo.findById(_id)

    const isComplete = await Todo.findByIdAndUpdate(_id, 
        {
            $set: {
                isCompleted: !todo.isCompleted,
            },
        },
        {
            new: true
        }
    )

    await isComplete.save()

    if (!isComplete) {
        throw new ApiError(404, "Todo not found!!!")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, "Todo updated successfully", isComplete))

    
})

export { 
    addTodo,
    getTodos,
    updateTodo,
    deleteTodo,
    isTodoCompleted
}