let $ = document

let inputTodo = $.querySelector('.form-control')

let deleteTodo = $.querySelectorAll('.delete')

let todos = $.querySelector('.todos')

function keyDownInput(event) {


  if (event.key === 'Enter') {

    event.preventDefault()

    if (inputTodo.value) {

      let newTodo = `<li
      class="
        list-group-item
        d-flex
        justify-content-between
        align-items-center
      "
    >
      <span>${inputTodo.value}</span>
      <i class="fa fa-trash-o delete" onclick = 'removeTodo(event)'></i>
    </li>`

      todos.insertAdjacentHTML("beforeend", newTodo)

      inputTodo.value = ''

    }


  }

}

inputTodo.addEventListener('keydown', keyDownInput)

function removeTodo(event) {

  event.target.parentElement.remove();

}
