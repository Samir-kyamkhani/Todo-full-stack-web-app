import {Router} from 'express';
import { addTodo, deleteTodo, getTodos, updateTodo, isTodoCompleted } from '../controllers/todo.controller.js';

const router = Router();

router.route("/addTodo").post(addTodo);
router.route("/getTodos").get(getTodos);
router.route("/updateTodo/:_id").put(updateTodo);
router.route("/deleteTodo/:_id").delete(deleteTodo);
router.route("/isTodoCompleted/:_id").get(isTodoCompleted);

export default router;