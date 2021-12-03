let $ = document

let inputTodo = $.querySelector('.m-auto')

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
      <i class="fa fa-trash-o delete"></i>
    </li>`

      todos.insertAdjacentHTML("beforeend", newTodo)


      inputTodo.value = ''

    }



  }

}

inputTodo.addEventListener('keydown', keyDownInput)

deleteTodo.forEach(function (event) {


  event.addEventListener('click', function (event) {

    // event.preventDefault()

    event.target.parentElement.remove()

  })

})
