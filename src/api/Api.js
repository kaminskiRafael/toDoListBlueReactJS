const Api = {
    apiUrl: 'https://rfktodolistnode.herokuapp.com/todolist',
    fetchGetAll: () => fetch(Api.apiUrl),
    fetchGetById: id => fetch(`${Api.apiUrl}/${id}`),
    fecthPost: (tarefa) => {
        return fetch(`${Api.apiUrl}/add`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(tarefa)
        })
    },
    fecthPut: (tarefa, id) => {
        return fetch(`${Api.apiUrl}/${id}`, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(tarefa)
        })
    },
    fetchDelete: (id) => {
        return fetch(`${Api.apiUrl}/${id}`, {
            method: 'DELETE',
        })
    }
}
export default Api;