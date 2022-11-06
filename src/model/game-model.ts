import { IAnswer } from '../data/answer.interface';
import { IImageData } from '../data/image-data.interface';

export class GameModel {
    constructor() { }

    createRoundAnswer(imagesData: IImageData[], questionNumber: number): IAnswer[] {
        const answersCount = 5;
        const trueAnswer: IAnswer = {
            isTrue: true,
            author: imagesData[questionNumber].author,
            number: questionNumber,
        }

        const falseAnswersArr: IImageData[] = [...imagesData];
        falseAnswersArr.splice(questionNumber, 1);
        falseAnswersArr.sort(() => Math.random() - 0.5);
        falseAnswersArr.splice(answersCount - 1, falseAnswersArr.length - 1);
        const roundAnswers: IAnswer[] = falseAnswersArr.map((answer): IAnswer => {
            return {
                isTrue: false,
                number: +answer.imageNum,
                author: answer.author,
            }
        });
        roundAnswers.push(trueAnswer);
        roundAnswers.sort(() => Math.random() - 0.5);
        console.log(roundAnswers);
        return roundAnswers;
    }

    checkedAnswer(answers: IAnswer[], number: number): boolean {
        return answers[number].isTrue;
    }
}