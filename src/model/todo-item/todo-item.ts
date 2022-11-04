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

    animationIn(): Promise<Animation> {
        const animation = this.item.animate({
            transform: ['translate(-130%)', 'translateX(-130%)', 'translateX(0%)'],
            height: ['0px', '20px', '20px'],
        },
            {
                // timing options
                duration: 1000,
                easing: 'linear',
            });

        return animation.finished;

    }

    animationOut(): void {
        const animation = this.item.animate({
            transform: ['translate(0%)', 'translateX(-130%)', 'translateX(-130%)'],
            height: ['20px', '20px', '0px'],
        },
            {
                duration: 1000,
                easing: 'linear',
            });

        animation.finished.then(() => {
            this.destroy();
        });
    }

    destroy(): void {
        this.item.onclick = null;
        this.item.remove();
    }
}

export { TodoItem }