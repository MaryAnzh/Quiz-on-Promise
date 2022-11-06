import { StartGame } from '../../../model/start-game.model';
import { StartButton } from '../../components/start-button/start-button';

class StartPage {
    public wrapper: HTMLElement;
    public startButton: StartButton;
    private _startGame = new StartGame();

    constructor() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('start-pages');
        this.startButton = new StartButton(this.startGame);
        this.wrapper.append(this.startButton.button);
    }

    startGame = (): void => {
        this._startGame.startGame();
        this.wrapper.remove();
    }
}

const startPage = new StartPage();
export {StartPage, startPage}