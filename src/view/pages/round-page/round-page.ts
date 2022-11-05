import { IAppData } from '../../../data/app-data.intarface'
import { QuestionComponent } from '../../components/questionComponent/question';
import { AnswersComponent } from '../../components/answersComponent/answers';
import { NextRoundComponent } from '../../components/nextRoudComponent/next-round.component';
import { IImageData } from '../../../data/image-data.interface';

export class RoundPage {
    public wrapper: HTMLDivElement;
    public main: HTMLElement;
    public score: HTMLParagraphElement
    public question = new QuestionComponent();
    public answers = new AnswersComponent();
    public nextRoudSection = new NextRoundComponent();

    constructor(data: IAppData, quwstionNumber: number) {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('wrapper');
        this.main = document.createElement('main');
        this.main.classList.add('mian');
        this.score = document.createElement('p');
        this.score.classList.add('mian__score');
        this.score.textContent = `Score: ${data.gemePoint}`;
        this.question.text.textContent = `Кто автор картины ${data.imagesData[quwstionNumber].name}`;


        this.wrapper.append(this.main);
        this.main.append(this.score, this.question.wrapper);
    }
}