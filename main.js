'use strict';
const titleElement = document.querySelector('.title');
titleElement.innerHTML = 'Bienvenida';
titleElement.innerHTML = titleElement.innerHTML + ' adalaber';

const listElement = document.querySelector('.list');
const content = '<li><a href=#>Home</a></li><li><a href=#>Contact</a></li>';
listElement.innerHTML = content;