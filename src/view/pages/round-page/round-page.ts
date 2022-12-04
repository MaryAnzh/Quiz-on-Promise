import { IAppData } from '../../../data/app-data.interface'
import { QuestionComponent } from '../../components/questionComponent/question';
import { NextRoundComponent } from '../../components/nextRoundComponent/next-round.component';
import { IAnswer } from '../../../data/answer.interface';

export class RoundPage {
    public wrapper: HTMLDivElement;
    public main: HTMLElement;
    public infoWrap: HTMLElement;
    public questionInfo: HTMLParagraphElement;
    public score: HTMLParagraphElement
    public question = new QuestionComponent();
    public answersList = document.createElement('ul');
    private _radioInputsSet: HTMLInputElement[] = [];
    public nextRoundComponent = new NextRoundComponent();

    constructor() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('wrapper');
        this.main = document.createElement('main');
        this.main.classList.add('round-page');
        this.infoWrap = document.createElement('div');
        this.infoWrap.classList.add('round-page__info');
        this.questionInfo = document.createElement('p');
        this.questionInfo.classList.add('round-page__info__question-info');
        this.score = document.createElement('p');
        this.score.classList.add('round-page__info__score');
        this.infoWrap.append(this.questionInfo, this.score);
        this.answersList.classList.add('answers-list');
        this.wrapper.append(this.main);
    }

    upDateRoundInfo(data: IAppData, roundAnswers: IAnswer[]) {
        this.questionInfo.innerHTML = `Вопрос ${data.questionNumber + 1} из 5`;
        this.score.innerHTML = `Score: <span>${data.gamePoint}</span>`;
        this.question.text.textContent = `Кто автор картины "${data.imagesData[data.questionNumber].name}"`;
        this.main.append(this.infoWrap, this.question.wrapper, this.answersList, this.nextRoundComponent.wrapper);
        this.createItemsList(roundAnswers);
    }

    createItemsList(items: IAnswer[]): void {
        items.forEach((el, i) => {
            const item = document.createElement('li');
            item.classList.add('question-list__item');
            const radio = document.createElement('input');
            radio.setAttribute('type', 'radio');
            radio.setAttribute('name', 'question');
            radio.onchange = this.onChange;
            this._radioInputsSet.push(radio);
            const label = document.createElement('label');
            label.textContent = el.author;
            item.append(radio, label);
            this.answersList.append(item);
        });
    }

    awaitUserChecked(): Promise<number> {
        return new Promise<number>((resolve) => {
            const button = this.nextRoundComponent.button;
            button.onclick = () => {
                const checkedRadio: HTMLInputElement[] = this._radioInputsSet;
                checkedRadio.forEach((el, i) => {
                    if (el.checked) {
                        resolve(i);
                    }
                });
            }
        });
    }

    onChange = () => {
        this.nextRoundComponent.button.classList.remove('blocked');
        this.nextRoundComponent.message.textContent = 'Нажмите Next, для проверки ответа и перехода к следующему вопросу';
    }

    destroy() {
        this.wrapper.remove();
        this.question.destroy();
        this.nextRoundComponent.destroy();
        this._radioInputsSet.forEach(el => el.onchange = null);
    }
}