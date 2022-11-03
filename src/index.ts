"use strict";

import './assets/style/style.scss';
import { TodoList } from './model/todo-list/todo-list';
import { toDo, done } from './data/lists-data';
import { LocalStorageService } from './service/localStorage';
import { ILocalStorgeKey } from './data/localstorge-key-interface';

const addDatatoLocalStorge = () => {
    const localStorge = new LocalStorageService();
    const toDoTitle = 'toDo';
    const doneTitle = 'Done';
    localStorge.setData(toDoTitle, toDo);
    localStorge.setData(doneTitle, done);
}
addDatatoLocalStorge();

class PageModel {
    public toDoTitle = 'toDo';
    public doneTitle = 'Done';
    public toDoList: TodoList;
    public doneList: TodoList;

    public body: HTMLElement;
    public main: HTMLElement;
    public wrapper: HTMLElement;

    private _localStorge = new LocalStorageService();

    constructor() {
        this.body = document.querySelector('body');
        this.main = document.createElement('main');
        this.main.classList.add('page');
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('wrapper');
        this.body.append(this.wrapper);
        this.wrapper.append(this.main);

        this.toDoList = new TodoList(this.main, this.toDoTitle);
        this.doneList = new TodoList(this.main, this.doneTitle);
    }

    updateList(data: ILocalStorgeKey) {

    }
}

const page = () => new PageModel();

window.addEventListener('load', page);