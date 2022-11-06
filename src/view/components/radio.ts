import { IAnswer } from "../../data/answer.interface";

export class Radio {
    redio = document.createElement('input');
    isTrue: boolean;

    constructor(answer: IAnswer) {
        this.redio.setAttribute('type', 'radio');
        this.redio.setAttribute('name', 'questions');
        this.isTrue = answer.isTrue;
        this.redio.onchange = this.onChang;
    }

    onChang = () => {
        const t = this.isTrue ? 'Ответ верный' : 'Ответ не верный'
        console.log(t);
    }
}