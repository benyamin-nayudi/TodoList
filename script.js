const form = document.querySelector("form");
const todos = document.querySelector('#todos')
const test = document.querySelector('#test')
let todoArray = []

const search = document.querySelector('#search')

search.addEventListener('keyup' , e => {
    const filterArr =  todoArray.filter(todo => todo.includes(e.target.value))
    console.log(filterArr)
})


form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const addTodo = form.newTodo.value;
    todoArray.push(addTodo)

    const classList = "todoList d-flex align-items-center justify-content-around bg-danger fw-bold".split(' ')

    const todoDiv = document.createElement('div');
    const textSpan = document.createElement('span');
    const iconSpan = document.createElement('span');

    classList.map(clas => (todoDiv.classList.add(clas)))

    textSpan.textContent= todoArray[todoArray.length - 1]

    textSpan.classList.add('flex-grow-1')
    
    iconSpan.innerHTML = '<i class="fas fa-trash-alt"></i>'
    iconSpan.classList.add('mx-2')

    todoDiv.append(textSpan)
    todoDiv.append(iconSpan)

    todos.append(todoDiv)
    
     document.querySelector('#newTodo').value= '';

         
});


test.addEventListener('click' , e=>{
    e.target.tagName=== "I" && e.target.parentElement.parentElement.remove()
})

