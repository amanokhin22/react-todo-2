import {Todo} from "../redux/sliceTodo";
import {selectTodoList} from "../redux/selectors";
import {RootState} from "../redux/store";


// export const apiTodo = {
//     getAll(): Todo[] {
//         return apiTodo.getAll()
//     },
//     saveAll(todoList: Todo[]): Todo[] {
//         const json = JSON.stringify(todoList);
//         localStorage.setItem('todos', json);
//         return apiTodo.saveAll(todoList)
//     }
// }

export const apiTodo = (todo: Todo, getState: any) => {
    const todoList = selectTodoList(getState() as RootState)
    const json = JSON.stringify(todoList);
    localStorage.setItem('todos', json);
}