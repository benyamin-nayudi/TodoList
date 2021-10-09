const form = document.querySelector("form");
const todos = document.querySelector('#todos')
console.log(todos)

const classes = "todoList d-flex align-items-center justify-content-around bg-danger fw-bold".split(' ')
console.log(classes)
/*
    <span class="flex-grow-1">play</span>
    <span class="mx-2"><i class="fas fa-trash-alt"></i></span>
</div>
                
*/
form.addEventListener('submit' , (e)=>{
    e.preventDefault();
   const addTodo = form.search.value;
   const input = document.createElement('input');
   const todoDiv = document.createElement('div');
//    todoDiv.classList.add('todoList')
//    todoDiv.classList.add('d-flex')
//    todoDiv.classList.add('align-items-center')
//    todoDiv.classList.add('justify-content')
//    todoDiv.classList.add('bg-danger')
//    todoDiv.classList.add('fw-bold')

    // classes.map(class => {

    // })

    todoDiv.innerText = 'hello'





    todos.append(todoDiv)
   
});

()=>{
            
        classes.map ( class  => {
            console.log(class)
        })    
}