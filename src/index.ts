"use strict";

import './assets/style/style.scss';
import { TodoList } from './model/todo-list';
import { toDo, done } from './data/lists-data';
import { LocalStorageService } from './service/localStorage';

class PageModel {
    public local = new LocalStorageService();
    public toDoTitle = 'toDo';
    public doneTitle = 'Done';
    public todoData: string[];
    private doneData: string[];

    public body: HTMLElement;
    public main: HTMLElement;
    public wrapper: HTMLElement;

    constructor(todoD: string[], doneD: string[]) {
        this.todoData = todoD;
        this.doneData = doneD;
        this.addDataToLocalStorage();

        this.body = document.querySelector('body');
        this.main = document.createElement('main');
        this.main.classList.add('page');
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('wrapper');
        this.body.append(this.wrapper);
        this.wrapper.append(this.main);

        const toDoList = new TodoList(this.main, this.toDoTitle);
        const doneList = new TodoList(this.main, this.doneTitle);
    }

    addDataToLocalStorage(): void {
        this.local.setData(this.toDoTitle, this.todoData);
        this.local.setData(this.doneTitle, this.doneData);
    }
}

const page = () => new PageModel(toDo, done);

window.addEventListener('load', page);