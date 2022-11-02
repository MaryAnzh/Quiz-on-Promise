class TodoList {
    public wrapper: HTMLDivElement;
    public title: HTMLHeadingElement;
    public list: HTMLUListElement;

    constructor(perentNode: HTMLElement, listType: string, listData: string[]) {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('list-wrap');
        this.title = document.createElement('h3');
        this.title.textContent = listType;
        this.list = document.createElement('ul');
        this.wrapper.append(this.title, this.list);

        perentNode.append(this.wrapper);
    }

}
export { TodoList }