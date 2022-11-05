import { IAnswer } from "../../../data/answer.interface";

export class AnswersComponent {
    list: HTMLUListElement;
    answerSet: IAnswer[] = [];
    radioInputsSet: HTMLInputElement[] = [];

    constructor() {
        this.list = document.createElement('ul');
        this.list.classList.add('question-list');
    }

    createItemsList(items: IAnswer[]): HTMLInputElement[] {
        this.answerSet = items;
        items.forEach(el => {
            const item = document.createElement('li');
            item.classList.add('question-list__item');
            const radio = document.createElement('input');
            radio.setAttribute('type', 'radio');
            radio.setAttribute('name', 'quiz-answer');
            const label = document.createElement('label');
            label.textContent = el.author;
            item.append(radio, label);
            this.list.append(item);
            this.radioInputsSet.push(radio);
        });
        return this.radioInputsSet;
    }
}