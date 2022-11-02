class TodoList {
    public wrapper: HTMLDivElement;
    public title: HTMLHeadingElement;
    public list: HTMLUListElement;

    public todoList: string[];

    constructor(perentNode: HTMLElement, listType: string, listData: string[]) {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('list-wrap');
        this.title = document.createElement('h3');
        this.title.textContent = listType;
        this.list = document.createElement('ul');
        this.list.classList.add('list-wrap__list');
        this.wrapper.append(this.title, this.list);
        perentNode.append(this.wrapper);

        this.todoList = listData;
        this.createTodoList();
    }

    createTodoList(): void {
        this.todoList.forEach(el => {
            const item = document.createElement('li');
            item.textContent = el;
            this.list.append(item);
        });
    }

}
export { TodoList }