class TodoItem {
    public item: HTMLLIElement;
    public content: string;
    public onClick: (e: Event) => void;

    constructor(itemName: string) {
        this.item = document.createElement('li');
        this.item.textContent = itemName;
        this.content = itemName;
        this.onClick = (e) => this.itemOnCkick(e);

        this.item.addEventListener('click', this.onClick);

    }

    itemOnCkick(e: Event) {
        console.log(this.content);
    }
}

export { TodoItem }