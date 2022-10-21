export const getTodoListFromLS = () => {
    const data = localStorage.getItem('todos');
    return data ? JSON.parse(data) : []
}