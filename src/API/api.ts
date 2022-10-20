import {Todo} from "../redux/sliceTodo";
import {AddTodoDTO} from "../components/AddForm/AddTodo";
import {get} from "https";


export const apiTodo = {
    async getAll() {
        const res = get<Todo[]>('');
        return res.data
    },

    async create(data: AddTodoDTO) {
        await post('', data);
    },

    async delete(todo: Todo) {
        await axiosInstance.delete(`/${todo.id}`);
    },

    async put(todo: Todo) {
        await axiosInstance.put(`/${todo.id}`, {...todo, completed: !todo.completed});
    },
}

