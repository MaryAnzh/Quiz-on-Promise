import { IItemData } from '../../data/data-item-intarface';

class TodoItem {
    public item: HTMLLIElement;
    public itemData: IItemData;
    public updatePerent: Function;

    constructor(data: IItemData, updatePerentList: Function) {
        this.item = document.createElement('li');
        this.item.classList.add('list-item');
        this.itemData = data;
        this.item.textContent = this.itemData.content;
        this.item.onclick = this.onClick;

        this.updatePerent = updatePerentList;
    }

    onClick = () => {
        this.item.classList.add('out');
        setTimeout(() => {
            this.destroy();
            this.updatePerent(this.itemData);
        }, 850);
    }

    animationIn() {
        // const animation = this.item.animate([

        //     { transform: 'translate(0%)' },
        //     {
        //         transform: 'translateX(-130%)',
        //     },
        // ], {
        //     // timing options
        //     duration: 1000,
        //     easing: 'linear',
        //     fill: 'forwards'
        // });

    }

    destroy() {
        this.item.onclick = null;
        this.item.remove();
    }
}

export { TodoItem }