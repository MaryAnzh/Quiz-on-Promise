export class StartButton {
    public button: HTMLButtonElement;

    constructor() {
        this.button = document.createElement('button');
        this.button.classList.add('button');
        this.button.textContent = 'Start';
    }
}
