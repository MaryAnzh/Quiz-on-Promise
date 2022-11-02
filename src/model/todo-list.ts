import { LocalStorageService } from '../service/localStorage';

class TodoList {
    public wrapper: HTMLDivElement;
    public title: HTMLHeadingElement;
    public list: HTMLUListElement;

    public todoList: string[];
    public local = new LocalStorageService();

    constructor(perentNode: HTMLElement, listName: string) {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('list-wrap');
        this.title = document.createElement('h3');
        this.title.textContent = listName;
        this.list = document.createElement('ul');
        this.list.classList.add('list-wrap__list');
        this.wrapper.append(this.title, this.list);
        perentNode.append(this.wrapper);

        this.todoList = this.local.getData(listName);
        this.createTodoList();
    }

    createTodoList(): void {
        if (this.todoList) {
            this.todoList.forEach(el => {
                const item = document.createElement('li');
                item.textContent = el;
                this.list.append(item);
            });
        }

    }

}
export { TodoList }