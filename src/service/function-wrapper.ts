import { IAppData } from "../data/app-data.intarface";
import { GameModel } from '../model/game-model';
import { IAnswer } from "../data/answer.interface";

import { appRender } from '../view/pageRender';

export function wrapperFunction(data: IAppData): Promise<IAppData> {
    let questionNumber = 0;
    appRender.renderRoundPage();

    if (questionNumber < 6) {
        const gameModel = new GameModel();
        const roundAnswers: IAnswer[] = gameModel.createRoundAnswer(data.imagesData, questionNumber);
        appRender.updateRoundPage(data, questionNumber, roundAnswers);
    }

    return new Promise((resolve) => {


        resolve(data);
    })
}