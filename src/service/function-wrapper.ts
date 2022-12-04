import { IAppData } from "../data/app-data.interface";
import { GameModel } from '../model/game-model';
import { IAnswer } from "../data/answer.interface";

import { appRender } from '../view/pageRender';

export function wrapperFunction(data: IAppData): Promise<IAppData> {
    return new Promise<IAppData>((dataResolve) => {
        let questionNumber = 0;
        const trueAnswerPrice = 5;
        const answerInGame = 5;
        const gameModel = new GameModel();
        let roundAnswers: IAnswer[];

        const game = () => {
            if (questionNumber < answerInGame) {
                appRender.renderRoundPage();
                roundAnswers = gameModel.createRoundAnswer(data.imagesData, questionNumber);

                appRender.updateRoundPage(data, roundAnswers).then((resolve) => {
                    const isTruAnswer = gameModel.checkedAnswer(roundAnswers, resolve);
                    if (isTruAnswer) {
                        data.gamePoint += trueAnswerPrice;
                        data.trueAnswers.push(data.imagesData[questionNumber]);
                    } else {
                        data.falseAnswers.push(data.imagesData[questionNumber]);
                    }
                    appRender.destroyRoundPage();
                    appRender.roundResultPage(data, isTruAnswer, questionNumber).then((resolve) => {

                        data.questionNumber += 1;
                        questionNumber = questionNumber + 1;
                        roundAnswers = [];
                        game();
                    });

                });

            } else {
                appRender.gameResultPage(data).then(() => {                 
                    dataResolve(data);
                });
            }
        }
        game();
    });
}