import { gameState } from "./state-game.model";
import { wrapperFunction } from '../service/function-wrapper';
import { appRender } from '../view/pageRender';

export class StartGame {

    constructor() {
    }

    startGame() {
        gameState.createNewState();
        const data = gameState.appData;
        wrapperFunction(data).then((resolve) => {
            console.log('Игра окончена');
            appRender.main.innerHTML = '';
            appRender.startPageRender();
        });
    }
}