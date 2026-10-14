const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');



// Adds the input for the todo onto the html
const generateTemplate = (todo => {

    const html = ` 
        <li class="list-group-item d-flex justify-content-between text-warning align-items-center">
         <span>${todo}</span>
         <i class="fas fa-trash-alt delete">
        </i>
    `;

    list.innerHTML += html;


})

//on submit grabs input and cuts spaces and adds it to todo
addForm.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }

   

});

// delete todos
list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();

    }
});

// filters todos
const filterTodos = (term) => {

    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'))

     Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove('filtered'))

    

    
}

// keyup event

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);



});


