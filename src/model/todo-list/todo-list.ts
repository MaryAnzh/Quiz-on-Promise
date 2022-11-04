import { LocalStorageService } from '../../service/localStorage';
import { TodoItem } from '../todo-item/todo-item';
import { IItemData } from '../../data/data-item-intarface';

class TodoList {
    public wrapper: HTMLDivElement;
    public title: HTMLHeadingElement;
    public list: HTMLUListElement;

    public listName: string;

    public todoData: IItemData[];
    public updateItemsInMain: Function;

    public localStorage = new LocalStorageService();

    constructor(perentNode: HTMLElement, listName: string, updateItemsBind: Function) {
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
        this.updateItemsInMain = updateItemsBind;

        this.createtodoList();
    }

    createtodoList(): void {
        if (this.todoData) {
            this.todoData.forEach((elData) => {
                const itemComponent = new TodoItem(elData, this.updateListInfoInPerent.bind(this));
                this.list.append(itemComponent.item);
            });
        }

    }

    addItemInList(data: IItemData): void {
        data.perentList = this.listName;
        const itemComponent = new TodoItem(data, this.updateListInfoInPerent);
        this.list.append(itemComponent.item);
        itemComponent.animationIn();
    }

    updateListInfoInPerent = (itemData: IItemData) => {
        this.updateItemsInMain(itemData);
    }
}

export { TodoList }