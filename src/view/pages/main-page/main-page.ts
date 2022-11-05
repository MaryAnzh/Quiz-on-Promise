import { StartButton } from '../../components/start-button/start-button';

export class MainPage {
    public wrapper: HTMLDivElement;
    public main: HTMLElement;
    public startButton: StartButton;

    constructor() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('wrapper');
        this.main = document.createElement('main');
        this.main.classList.add('mian');
        this.startButton = new StartButton(this.startGame);

        this.main.append(this.startButton.button);
        this.wrapper.append(this.main);
    }

    startGame = (): void => {
        console.log('The game is start');
    }
}