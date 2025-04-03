const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = JSON.parse(localStorage.getItem('myFavBOMList')) || [];

function getChapterList(){
    chaptersArray.forEach(chapter => {
        displayList(chapter);
    });
};

button.addEventListener("click", () => {
    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value)
        setChapterList();
        input.value = '';
        input.focus();
    } else {
        alert('You did not enter a scripture')
        input.focus();
    }
});

function displayList(item){
    const li = document.createElement('li');
    const delButton = document.createElement('button');
    li.textContent = item;
    delButton.textContent = '❌';
    delButton.classList.add('delete')
    li.append(delButton);
    list.appendChild(li);
    delButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
};

function setChapterList(){
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
};

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

getChapterList();