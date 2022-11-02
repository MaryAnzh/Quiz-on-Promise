"use strict";

import './assets/style/style.scss';
import { TodoList } from './model/todo-list';
import { toDo, done } from './data/lists-data';

const viewPage = () => {
    //основная структура старницы
    const body = document.querySelector('body');
    const main = document.createElement('main');
    main.classList.add('page');

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    body.append(wrapper);
    wrapper.append(main);

    //рендер списков
    const toDoList = new TodoList(main, 'toDo', toDo);
    const doneList = new TodoList(main, 'Done', done);
}

window.addEventListener('load', viewPage);