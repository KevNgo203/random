console.log(document);

const list = document.getElementById('ingredients');
console.log(list);

const class1 = document.getElementsByClassName('container');
console.log(class1);

const heading = document.querySelector('h1');
console.log(heading);

const newDiv = document.createElement('div');
newDiv.innerHTML = 'Hello Bro';
const ingredients = document.querySelector('#ingredients');
ingredients.appendChild(newDiv);
newDiv.remove();

const button = document.querySelector('#SIU');
console.log(button);

const list1 = document.querySelector('#food');

button.addEventListener('click', () => {
    const listElement = document.createElement('li');
    listElement.innerHTML = 'SIUUUUU';
    list1.appendChild(listElement);
});
