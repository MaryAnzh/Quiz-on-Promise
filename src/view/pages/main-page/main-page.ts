import { wrapperFunction } from '../../../service/function-wrapper';
import { StartButton } from '../../components/start-button/start-button';
import { QuestionComponent } from '../../components/questionComponent/question';
import { AnswersComponent } from '../../components/answersComponent/answers';
import { NextRoundComponent } from '../../components/nextRoudComponent/next-round.component';

export class MainPage {
    public wrapper: HTMLDivElement;
    public main: HTMLElement;
    public startButton: StartButton;
    public score: HTMLParagraphElement
    public question = new QuestionComponent();
    public answers = new AnswersComponent();
    public nextRoudSection = new NextRoundComponent();

    constructor() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('wrapper');
        this.main = document.createElement('main');
        this.main.classList.add('mian');
        this.startButton = new StartButton(this.startGame);
        this.score = document.createElement('p');
        this.score.classList.add('mian__score');
        this.score.textContent = 'Score: 0';

        this.main.append(this.startButton.button);
        this.wrapper.append(this.main);
    }

    startGame = (): void => {
        const elements = {
            score: this.score,
            question: this.question,
            answesr: this.answers,
            nextRound: this.nextRoudSection,
        };
        const p = document.createElement('p');
        p.textContent = 'Игра началась';
        this.main.append(p);
    }


}