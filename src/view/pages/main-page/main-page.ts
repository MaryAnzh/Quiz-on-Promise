import { StartGame } from '../../../model/start-game.model';
import { StartButton } from '../../components/start-button/start-button';

class MainPage {
    public wrapper: HTMLDivElement;
    public main: HTMLElement;
    public startButton: StartButton;
    private _startGame = new StartGame();

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
        this._startGame.startGame();
        this.wrapper.remove();
    }
}

export const main = new MainPage();