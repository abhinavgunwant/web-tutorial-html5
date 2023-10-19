const button = document.querySelector("#entry-row button");
let todos = 0;
let dones = 0;

if (button) {
    button.addEventListener('click', onAddButtonClick)
}

function onAddButtonClick() {
    const input = document.querySelector('#entry-row input');
    console.log(input.value);
    addTodo(input.value);
}

function addTodo(text = ''){
    ++todos;
    const todoItems = document.querySelector('.todo-items');
    const todoDiv = document.createElement('div');

    const todoID = 'todo-' + todos;

    const todoCheckbox = document.createElement('input');
    todoCheckbox.setAttribute('type', 'checkbox');
    todoCheckbox.setAttribute('name', 'todo');
    todoCheckbox.setAttribute('id', todoID);

    todoCheckbox.addEventListener('click', toggleCheckbox);

    const todoLabel = document.createElement('label');
    todoLabel.setAttribute('for', todoID);

    const todoText = document.createTextNode(text);
    todoLabel.appendChild(todoText);

    todoDiv.appendChild(todoCheckbox);
    todoDiv.appendChild(todoLabel);

    todoItems.prepend(todoDiv);
}

function addDone(text = ''){
    ++dones;
    const doneItems = document.querySelector('.done-items');
    const doneDiv = document.createElement('div');

    const doneID = 'todo-done-' + dones;

    const doneCheckbox = document.createElement('input');
    doneCheckbox.setAttribute('type', 'checkbox');
    doneCheckbox.setAttribute('name', 'done');
    doneCheckbox.setAttribute('checked', true);
    doneCheckbox.setAttribute('id', doneID);

    doneCheckbox.addEventListener('click', toggleCheckbox);

    const doneLabel = document.createElement('label');
    doneLabel.setAttribute('for', doneID);

    const doneText = document.createTextNode(text);
    doneLabel.appendChild(doneText);

    doneDiv.appendChild(doneCheckbox);
    doneDiv.appendChild(doneLabel);

    doneItems.prepend(doneDiv);
}

function toggleCheckbox(e) {
    console.log('toggle!!');

    const parent = e.target.parentNode;
    const label = parent.querySelector('label');

    if (e.target.getAttribute('name') === 'todo') {
        addDone(label.textContent);
        parent.remove();
    } else {
        addTodo(label.textContent);
        parent.remove();
    }
}

