import { IAppData } from "../data/app-data.intarface";
import { GameModel } from '../model/game-model';
import { IAnswer } from "../data/answer.interface";

import { appRender } from '../view/pageRender';

export function wrapperFunction(data: IAppData): Promise<IAppData> {
    let questionNumber = 0;
    const trueAnswerPrice = 5;
    appRender.renderRoundPage();

    const game = () => {
        if (questionNumber < 6) {
            const gameModel = new GameModel();
            const roundAnswers: IAnswer[] = gameModel.createRoundAnswer(data.imagesData, questionNumber);
            appRender.updateRoundPage(data, roundAnswers).then((resolve) => {
                const isTruAnswer = gameModel.checkedAnswer(roundAnswers, resolve);
                if (isTruAnswer) {
                    data.gemePoint += trueAnswerPrice;
                    data.trueAnswers.push(data.imagesData[questionNumber]);
                } else {
                    data.falseAnswers.push(data.imagesData[questionNumber]);
                }
                appRender.roundResultPage(data, isTruAnswer, questionNumber).then((resolve) => {
                    questionNumber += 1;
                    game();
                });

            });

        } else {
            appRender.main.innerHTML = 'Игра окончена';
        }
    }
    game();


    // const result = new Promise<IAppData>((resolve) => {
    //     const elements: HTMLElement[] = [];

    //     elements[0].click = () => {
    //         resolve(data);
    //     }
    // });


    return new Promise<IAppData>((res) => res(data));
}