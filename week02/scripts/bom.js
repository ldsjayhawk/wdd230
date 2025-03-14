const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener("click", () => {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const delButton = document.createElement('button');
        li.textContent = input.value;
        delButton.textContent = '❌';
        li.append(delButton);
        list.appendChild(li);
        delButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';
        input.focus();

    } else {
        alert('You did not enter a scripture')
        input.focus();
    }
});