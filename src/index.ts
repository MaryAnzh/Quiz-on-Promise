"use strict";

import './assets/style/style.scss';
import { TodoList } from './model/todo-list/todo-list';
import { toDo, done } from './data/lists-data';
import { LocalStorageService } from './service/localStorage';
import { IItemData } from './data/data-item-intarface';
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

        this.toDoList = new TodoList(this.main, this.toDoTitle, this.updateItemsInList);
        this.doneList = new TodoList(this.main, this.doneTitle, this.updateItemsInList);
    }

    updateItemsInList: (data: IItemData) => void =
        (itemData: IItemData) => {
            const currentperentList = itemData.perentList;
            const newPerent = this.changePerent(currentperentList);
            const curretDataList = this._localStorge.getData(currentperentList);

            const updateDataRemoveItem = curretDataList.filter(el => el.id !== itemData.id);
            this._localStorge.setData(currentperentList, updateDataRemoveItem);

            itemData.perentList = newPerent;
            const updateDataAddItem = this._localStorge.getData(newPerent);
            updateDataAddItem.push(itemData);
            this._localStorge.setData(newPerent, updateDataAddItem);

            if (currentperentList == "toDo") {
                this.doneList.addItemInList(itemData);
            }
            if (currentperentList === 'Done') {
                this.toDoList.addItemInList(itemData);
            }
        }

    changePerent(perentList: string): string {
        return perentList === 'toDo' ? 'Done' : 'toDo';
    }
}

const page = () => new PageModel();

window.addEventListener('load', page);