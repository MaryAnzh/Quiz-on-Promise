"use strict";

import './assets/style/style.scss';

import { toDo, done } from './data/lists-data';
import { LocalStorageService } from './service/localStorage';
import { MainPage } from './view/main-page/main-page';

const addDatatoLocalStorge = () => {
    const localStorge = new LocalStorageService();
    const toDoTitle = 'toDo';
    const doneTitle = 'Done';
    localStorge.setData(toDoTitle, toDo);
    localStorge.setData(doneTitle, done);
}
addDatatoLocalStorge();

const body = document.querySelector('body');

const page = () => new MainPage(body);
window.onload = page;