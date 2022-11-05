import { wrapperFunction } from '../../../service/function-wrapper';
import { StartButton } from '../../components/start-button/start-button';
import { QuestionComponent } from '../../components/questionComponent/question';

export class MainPage {
    public wrapper: HTMLDivElement;
    public main: HTMLElement;
    public startButton: StartButton;
    public score: HTMLParagraphElement
    public question: QuestionComponent;

    constructor() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('wrapper');
        this.main = document.createElement('main');
        this.main.classList.add('mian');
        this.startButton = new StartButton(this.startGame);
        this.score = document.createElement('p');
        this.score.classList.add('mian__score');
        this.score.textContent = 'Score: 0';
        this.question = new QuestionComponent;

        this.main.append(this.startButton.button);
        this.wrapper.append(this.main);
    }

    startGame = (): void => {
        const elements = {
            score: this.score,
            question: this.question,
            answer: '',
            nextButton: '',
        };
        this.main.append(this.score, this.question.wrapper);
    }
}