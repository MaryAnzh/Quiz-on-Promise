import { IImageData } from './image-data.interface';

export interface IAppData {
    imagesData: IImageData[],
    questionNumber: number,
    gamePoint: number,
    trueAnswers: IImageData[],
    falseAnswers: IImageData[],
}