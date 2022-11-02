import { LocalStorageService } from '../../service/localStorage';

class TodoItem {
    public item: HTMLLIElement;
    public number: number;
    public content: string;
    public onClick: (e: Event) => void;

    public listName: string;

    private _localStorge = new LocalStorageService();

    constructor(itemName: string, itemNum: number, listName: string) {
        this.item = document.createElement('li');
        this.item.textContent = itemName;
        this.number = itemNum;
        this.content = itemName;
        this.onClick = (e) => this.itemOnCkick(e);
        this.listName = listName;

        this.item.addEventListener('click', this.onClick);
    }

    itemOnCkick(e: Event) {
        console.log(this.listName, (this.number + 1), this.content);
    }
}

export { TodoItem }