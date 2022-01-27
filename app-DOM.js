const container = document.getElementById('container');

const contain = document.querySelector('#container');

const second = document.getElementsByClassName('second');

const ol = document.querySelector('ol .third');

contain.textContent = "Hello!";

const foot = document.querySelector('.footer');

foot.classList.add('main');

foot.classList.remove('main');

const newLi = document.createElement('li');
newLi.innerText = "four";

const ul = document.querySelector('ul');

ul.append(newLi);

const olLi = document.querySelectorAll('ol li');
for(let li of olLi){
    li.style.backgroundColor = 'green';
}

let footer = document.querySelector('.footer');
footer.remove();