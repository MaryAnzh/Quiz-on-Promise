import { LocalStorageService } from '../../service/localStorage';
import { IItemData } from '../../data/data-item-intarface';

class TodoItem {
    public item: HTMLLIElement;
    public itemData: IItemData;
    public onClick: (e: Event) => void;

    private _localStorge = new LocalStorageService();

    constructor(data: IItemData) {
        this.item = document.createElement('li');
        this.itemData = data;
        this.item.textContent = this.itemData.content;
        this.onClick = (e) => this.itemOnCkick(e);

        this.item.addEventListener('click', this.onClick);
    }

    itemOnCkick(e: Event) {
        console.log(`List: ${this.itemData.perentList}`);
        console.log(`${this.itemData.number}. ${this.itemData.content}`);

        //this.item.removeEventListener('click', this.onClick);
    }
}

export { TodoItem }