export class StartButton {
    public button: HTMLButtonElement;
    private _startGame: () => void;

    constructor(startGame: () => void) {
        this.button = document.createElement('button');
        this.button.classList.add('button');
        this.button.textContent = 'Start';
        this._startGame = startGame;
        this.button.onclick = this.onClick;
    }

    onClick: () => void = () => {
        this.destroy();
        this._startGame();
    }

    destroy() {
        this.button.onclick = null;
        this.button.remove();
    }
}
