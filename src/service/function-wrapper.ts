import { IAppData } from "../data/app-data.intarface";
import { RoundPage } from "../view/pages/round-page/round-page";
import { GameModel } from '../model/game-model';
import { IAnswer } from "../data/answer.interface";

export function wrapperFunction(data: IAppData): Promise<IAppData> {
    let questionNumber = 0;
    const body = document.querySelector('body');
    const roundPage = new RoundPage();

    if (questionNumber < 6) {
        body.append(roundPage.wrapper);
        const gameModel = new GameModel();
        const roundAnswers: IAnswer[] = gameModel.createRoundAnswer(data.imagesData, questionNumber);
        
        roundPage.upDateRoundInfo(data, questionNumber, roundAnswers);

    }

    return new Promise((resolve) => {


        resolve(data);
    })
}