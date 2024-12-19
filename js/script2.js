const infoSection = document.getElementById('info');
const ulElement = document.createElement('ul');
const listItems = [
    'Введение в DOM',
    'Создание элементов',
    'Изменение атрибутов'
];
listItems.forEach(text => {
    const liElement = document.createElement('li');
    liElement.textContent = text;
    ulElement.appendChild(liElement);
});

infoSection.appendChild(ulElement);

//--------------------------------------

const header = document.getElementById('header');
const link = document.createElement('a');
link.textContent = 'Мой профиль в https://www.instagram.com/'
link.setAttribute('href', 'https://www.instagram.com/')
link.setAttribute('target', '_blank')
header.appendChild(link);

//--------------------------------------

const main = document.getElementById('main');
const section = document.createElement('section')
section.getAttribute('class', 'dynamic')

const h2 = document.createElement('h2');
  h2.textContent = 'Обучение JavaScript';

const p = document.createElement('p');
  p.textContent = 'Динамическое создание элементов позволяет улучшить интерфейс пользователя';
  
section.appendChild(h2);
section.appendChild(p);

main.prepend(section);