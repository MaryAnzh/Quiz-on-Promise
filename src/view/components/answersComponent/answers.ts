import { IAnswer } from "../../../data/answer.interface";
import { Radio } from '../radio';

type RadiodInfo = {
    radio: HTMLInputElement,
    number: number,
}

export class AnswersComponent {
    list: HTMLUListElement;
    answerSet: IAnswer[] = [];
    roundInfo: RadiodInfo[] = [];
    radioInputsSet: HTMLInputElement[] = [];

    constructor() {
        this.list = document.createElement('ul');
        this.list.classList.add('answers-list');
    }

    createItemsList(items: IAnswer[]): HTMLInputElement[] {
        this.answerSet = items;
        items.forEach((el, i) => {
            const item = document.createElement('li');
            item.classList.add('question-list__item');
            const radio = new Radio(el);

            const label = document.createElement('label');
            label.textContent = el.author;
            item.append(radio.redio, label);
            this.list.append(item);
        });

        return this.radioInputsSet;
    }
}