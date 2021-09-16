const api = axios.create({
    baseURL: "http://localhost:4444",
    headers: { "Content-Type": "application/json;charset=utf-8" },
});

api.interceptors.response.use(
    (response) => {
        return [response.data, null];
    },
    (error) => {
        return [null, error];
    }
);

function getCars() {
    return api.get("/cars");
}

function createdFavoriteCars(newFavCar) {
    return api.post("/cars", newFavCar);
}

function updatedFavoriteCars(id, updatedFavoriteCar) {
    return api.patch(`/cars/${id}`, updatedFavoriteCar);
}

function deletedFavoriteCars(id) {
    return api.delete(`/cars/${id}`);
}

// const api = axios.create({
//     baseURL: 'http://localhost:4545',
//     headers: { 'Content-Type': 'application/json;charset=utf-8' }
// });

// api.interceptors.response.use((response) => {
//     return [response.data, null];
// }, (error) => {
//     return [null, error];
// });

// function getTodos() {
//     return api.get('/todos')
// }
// function createTodo(newTodo) {
//     return api.post('/todos', newTodo)
// }
// function updateTodo(id, updateData) {
//     return api.patch(`/todos/${id}`, updateData)
// }
// function deleteTodo(id) {
//     return api.delete(`/todos/${id}`)
// }
