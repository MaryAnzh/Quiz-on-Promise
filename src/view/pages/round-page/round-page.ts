import { IAppData } from '../../../data/app-data.intarface'
import { QuestionComponent } from '../../components/questionComponent/question';
import { AnswersComponent } from '../../components/answersComponent/answers';
import { NextRoundComponent } from '../../components/nextRoudComponent/next-round.component';
import { IAnswer } from '../../../data/answer.interface';

export class RoundPage {
    public wrapper: HTMLDivElement;
    public main: HTMLElement;
    public infoWrap: HTMLElement;
    public questionInfo: HTMLParagraphElement;
    public score: HTMLParagraphElement
    public question = new QuestionComponent();
    public answers = new AnswersComponent();
    public nextRoudSection = new NextRoundComponent();

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

        this.wrapper.append(this.main);
    }

    upDateRoundInfo(data: IAppData, roundAnswers: IAnswer[]): HTMLInputElement[] {
        this.questionInfo.innerHTML = `Вопрос ${data.questionNumber + 1} из 5`;
        this.score.innerHTML = `Score: <span>${data.gemePoint}</span>`;
        this.question.text.textContent = `Кто автор картины "${data.imagesData[data.questionNumber].name}"`;
        this.main.append(this.infoWrap, this.question.wrapper, this.answers.list, this.nextRoudSection.wrapper);
        const radioSet = this.answers.createItemsList(roundAnswers);
        return radioSet;
        // const result = new Promise<boolean>((res) => {

        // });
    }

    // roundResult(): Promise<boolean> {
    //     //return new Promise<boolean>(res => this.answers.result ));
    // }

    // onChangeHandler: (answer: boolean) => boolean = (answer: boolean) => {
    //     if ()
    //         return answer;
    // }
}