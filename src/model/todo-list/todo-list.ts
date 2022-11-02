import { LocalStorageService } from '../../service/localStorage';
import { TodoItem } from '../todo-item/todo-item';

class TodoList {
    public wrapper: HTMLDivElement;
    public title: HTMLHeadingElement;
    public list: HTMLUListElement;

    public listName: string;

    public todoData: string[];
    public localStorage = new LocalStorageService();

    constructor(perentNode: HTMLElement, listName: string, localStorageKey: string[]) {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('list-wrap');
        this.listName = listName;
        this.title = document.createElement('h3');
        this.title.textContent = listName;
        this.list = document.createElement('ul');
        this.list.classList.add('list-wrap__list');
        this.wrapper.append(this.title, this.list);
        perentNode.append(this.wrapper);

        this.todoData = this.localStorage.getData(listName);
        this.createtodoList();
    }

    createtodoList(): void {
        if (this.todoData) {
            this.todoData.forEach((el, i) => {
                const itemComponent = new TodoItem(el, i, this.listName);
                this.list.append(itemComponent.item);
            });
        }

    }
}

export { TodoList }