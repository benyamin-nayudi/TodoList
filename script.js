const form = document.querySelector("form");
const todos = document.querySelector('#todos')


form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const addTodo = form.newTodo.value;

    const classList = "todoList d-flex align-items-center justify-content-around bg-danger fw-bold".split(' ')

    const todoDiv = document.createElement('div');
    const textSpan = document.createElement('span');
    const iconSpan = document.createElement('span');

    classList.map(clas => (todoDiv.classList.add(clas)))

    textSpan.textContent= addTodo
    textSpan.classList.add('flex-grow-1')

    iconSpan.innerHTML = '<i class="fas fa-trash-alt"></i>'
    iconSpan.classList.add('mx-2')

    todoDiv.append(textSpan)
    todoDiv.append(iconSpan)


    todos.append(todoDiv)

     document.querySelector('#newTodo').value= ''

   
});


