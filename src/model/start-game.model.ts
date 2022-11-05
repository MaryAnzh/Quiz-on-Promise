import { gameState } from "./state-game.model";
import { wrapperFunction } from '../service/function-wrapper';

export class StartGame {

    constructor() {
    }

    startGame() {
        gameState.createNewState();
        const data = gameState.appData;
        wrapperFunction(data);
    }
}