const name = document.getElementById('name');
const date = document.getElementById('date');
const amount = document.getElementById('amount');
const submit = document.getElementById('submit');
const expense = document.getElementById('expense');
const del = document.getElementById('#newBottom');
const tbody = document.querySelector('.tbodyTag');
const add = (event) => {
    event.preventDefault();
    const tbody = document.querySelector('.tbodyTag');
    let nameValue =  name.value;
    let dateValue = date.value;
    let amountValue = amount.value;
    const newTr = document.createElement('tr');
    const newTd = document.createElement('td');
    
    let store = check(nameValue,dateValue,amountValue);
    if(store === 1)
    {
        return;
    }
    
    // store data to list
    const bookmarks = [];
    bookmarks.push(nameValue,dateValue,amountValue);

    newTr.classList.add('expense-table');
    
    for (let bookmark of bookmarks) {
        const newTd = document.createElement('td');
        newTd.innerHTML = bookmark
        newTr.appendChild(newTd);
    }

    const newBottom = document.createElement('bottom');
    newBottom.classList.add("newBottom");
    newBottom.innerHTML = 'x';

    newTd.appendChild(newBottom);

    expense.style.display = 'none';

    newTr.appendChild(newTd);
    tbody.appendChild(newTr);
}

function check(a,b,c)
{
    if (a === '' || b ==='' || c ==='' || a.trim() === '' || b.trim() === '' || c.trim() === '')
    {
        return 1;
    }
  
}

const fnDel = (event) => {
    const item = event.target;
    const bottom = item.classList[0]
    if (bottom === 'newBottom')
    {
        item.parentNode.parentNode.remove();
    }
    // console.log('he')
  
}

tbody.addEventListener('click',fnDel);
submit.addEventListener('click', add);