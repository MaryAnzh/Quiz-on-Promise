export class NextRoundComponent {
    wrapper: HTMLElement;
    message: HTMLParagraphElement;
    button: HTMLButtonElement;

    constructor() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('next-round-wrapper');
        this.message = document.createElement('p');
        this.message.classList.add('next-round-wrapper__message');
        this.message.textContent = 'Ожидаем ваш выбор';
        this.button = document.createElement('button');
        this.button.classList.add('blocked');
        this.button.textContent = 'Next';
        this.wrapper.append(this.message, this.button);
    }
}