import { IAnswer } from "../../../data/answer.interface";

export class AnswersComponent {
    list: HTMLUListElement;
    answerSet: IAnswer[] = [];
    radioInputsSet: HTMLInputElement[] = [];
    labelSet: HTMLLabelElement[] = [];
    activeNextButtpn: (num: number) => void;

    constructor(activeNextButtpn: (num: number) => void) {
        this.list = document.createElement('ul');
        this.list.classList.add('answers-list');
        this.activeNextButtpn = activeNextButtpn;
    }

    createItemsList(items: IAnswer[]): HTMLInputElement[] {
        this.answerSet = items;
        items.forEach((el, i) => {
            const item = document.createElement('li');
            item.classList.add('question-list__item');
            const radio = document.createElement('input');
            radio.setAttribute('type', 'radio');
            radio.setAttribute('name', 'question');
            this.radioInputsSet.push(radio);
            const label = document.createElement('label');
            this.labelSet.push(label);
            label.textContent = el.author;
            item.append(radio, label);
            this.list.append(item);
            radio.onchange = () => this.onChange(i);
        });

        return this.radioInputsSet;
    }

    onChange = (num: number) => {
        this.activeNextButtpn(num);
    }

    destroy() {
        this.radioInputsSet.forEach(el => {
            el.onchange = null;
            el.remove();
        });
        this.labelSet.forEach(label => label.remove());
        this.list.remove();
        this.answerSet = [];
        this.radioInputsSet = [];
        this.labelSet = [];
    }

}