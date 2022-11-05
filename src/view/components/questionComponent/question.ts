export class QuestionComponent {
    public wrapper: HTMLElement;
    public text: HTMLParagraphElement;

    constructor() {
        this.wrapper = document.createElement('section');
        this.wrapper.classList.add('guestion');
        this.text = document.createElement('p');
        this.text.classList.add('guestion__text');
        this.wrapper.append(this.text);
        this.text.textContent = 'Заглушка';
    }
}