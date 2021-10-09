const form = document.querySelector("form");
const test = document.querySelector('#test')
let todos = document.querySelector('#todos')
const header = document.querySelector('#header')

let todoArray = []

const search = document.querySelector('#search')

search.addEventListener('keyup', e => {
    todos.remove()
    todos = document.createElement("div")
    todos.classList.add("todos")

    
    const filterArr = todoArray.filter(todo => todo.includes(e.target.value))
    filterArr.map(todo => {
        let newTodo = filterTodo(todo)
        todos.append(newTodo)
    });
    
    
    header.insertAdjacentElement('afterbegin' , todos )


    console.dir(todoArray)


})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputTodo = form.newTodo.value;
    todoArray.push(inputTodo)
    const todoDiv = addTodo(todoArray)

    todos.append(todoDiv)

});


test.addEventListener('click', e => {
    console.dir(todoArray)
    if(e.target.tagName === "I"){
        e.target.parentElement.parentElement.remove();
        (todoArray = todoArray.filter(todo => todo !== (e.target.parentElement.parentElement.children[0].innerText) ))
    }
})




function addTodo (todoArray){

    const classList = "todoList d-flex align-items-center justify-content-around bg-danger fw-bold".split(' ')

    const todoDiv = document.createElement('div');
    const textSpan = document.createElement('span');
    const iconSpan = document.createElement('span');

    classList.map(clas => (todoDiv.classList.add(clas)))

    textSpan.textContent = todoArray[todoArray.length - 1]

    textSpan.classList.add('flex-grow-1')

    iconSpan.innerHTML = '<i class="fas fa-trash-alt"></i>'
    iconSpan.classList.add('mx-2')

    todoDiv.append(textSpan)
    todoDiv.append(iconSpan)
    
    document.querySelector('#newTodo').value = '';

  return todoDiv

}


function filterTodo (todo){

    const classList = "todoList d-flex align-items-center justify-content-around bg-danger fw-bold".split(' ')

    const todoDiv = document.createElement('div');
    const textSpan = document.createElement('span');
    const iconSpan = document.createElement('span');

    classList.map(clas => (todoDiv.classList.add(clas)))

    textSpan.textContent = todo

    textSpan.classList.add('flex-grow-1')

    iconSpan.innerHTML = '<i class="fas fa-trash-alt"></i>'
    iconSpan.classList.add('mx-2')

    todoDiv.append(textSpan)
    todoDiv.append(iconSpan)
    
    document.querySelector('#newTodo').value = '';

  return todoDiv

}