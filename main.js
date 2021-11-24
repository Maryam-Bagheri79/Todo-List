//! TodoList : 80

let todoList = [
    { id: 1, nameTodo: 'study', isDoing: false },
    { id: 2, nameTodo: 'programming', isDoing: true },
    { id: 3, nameTodo: 'exam', isDoing: false }
]

let userRequest = prompt("گزینه مورد نظر را انتخاب کنید: \n1.اضافه کردن \n2.حذف کردن \n3.انجام دادن")

if (userRequest === '1') {
    let addTodo = prompt("فعالیتی را به لیست اضافه کنید");
    let newTodoList = {
        id: todoList.length + 1,
        nameTodo: addTodo,
        isDoing: false
    }
    todoList.push(newTodoList)
} else if (userRequest === '2') {
    let removeTodo = prompt('نام فعالیتی را که می خواهید حذف کنید وارد نمایید.')
    let indexRemoveTodo = todoList.findIndex(function (todo) {
        return removeTodo === todo.nameTodo
    })

    todoList.splice(indexRemoveTodo, 1)

} else if (userRequest === '3') {
    let doneTodo = prompt('کدام فعالیت را می خواهید  در وضعیت انجام شده قرار دهید؟')
    todoList.forEach(function (todo) {
        if (doneTodo === todo.nameTodo) {
            todo.isDoing = true;
        }
    })
}

console.log(todoList)
