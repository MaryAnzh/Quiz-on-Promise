import { LocalStorageService } from '../../service/localStorage';
import { IItemData } from '../../data/data-item-intarface';
import { ILocalStorgeKey } from '../../data/localstorge-key-interface';

class TodoItem {
    public item: HTMLLIElement;
    public itemData: IItemData;
    public onClick: (e: Event) => void;
    public updatePerent: Function;

    private _localStorge = new LocalStorageService();

    constructor(data: IItemData, updatePerentList: Function) {
        this.item = document.createElement('li');
        this.itemData = data;
        this.item.textContent = this.itemData.content;
        this.onClick = (e) => this.changeItemsPerentOnCkick(e);
        this.updatePerent = updatePerentList;

        this.item.addEventListener('click', this.onClick);
    }

    changeItemsPerentOnCkick(e: Event) {
        this.item.classList.add('out');
        setTimeout(() => {
            this.destroy();
            this.updatePerent(this.itemData);
        }, 310);

    }

    destroy() {
        this.item.removeEventListener('click', this.onClick);
        this.item.remove();
    }
}

export { TodoItem }