import {Todo} from "../redux/sliceTodo";


export const apiTodo = {
    getAll(): Todo[] {
        const data = localStorage.getItem('todos');
        return  data ? JSON.parse(data) : []
    },
    saveAll(todoList: Todo[]): void {
        const json = JSON.stringify(todoList);
        localStorage.setItem('todos', json);

    }
}

// export const apiTodo = (todo: Todo, getState: any) => {
//     const todoList = selectTodoList(getState() as RootState)
//     const json = JSON.stringify(todoList);
//     localStorage.setItem('todos', json);
// }