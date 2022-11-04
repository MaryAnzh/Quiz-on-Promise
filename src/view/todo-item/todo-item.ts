import { IItemData } from '../../data/data-item-intarface';

class TodoItem {
    public item: HTMLLIElement;
    public itemData: IItemData;
    public updatePerent: (data: IItemData) => void;

    constructor(data: IItemData, updatePerentList: (data: IItemData) => void) {
        this.item = document.createElement('li');
        this.item.classList.add('list-item');
        this.itemData = data;
        this.item.textContent = this.itemData.content;
        this.item.onclick = this.onClick;

        this.updatePerent = updatePerentList;
    }

    onClick = () => {
        this.animationOut().then(() => {
            this.destroy();
            this.updatePerent(this.itemData);
        });
    }

    animationIn(): void {
        const animation = this.item.animate({
            transform: ['translate(-130%)', 'translateX(-130%)', 'translateX(0%)'],
            height: ['0px', '20px', '20px'],
        },
            {
                // timing options
                duration: 1000,
                easing: 'linear',
            });
    }

    animationOut(): Promise<Animation> {
        const animation = this.item.animate({
            transform: ['translate(0%)', 'translateX(-130%)', 'translateX(-130%)'],
            height: ['20px', '20px', '0px'],
        },
            {
                duration: 1000,
                easing: 'linear',
            });

        return animation.finished;
    }

    destroy(): void {
        this.item.onclick = null;
        this.item.remove();
    }
}

export { TodoItem }