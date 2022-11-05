import { IImageData } from './image-data.interface';

export interface IAppData {
    questionNumber: number,
    gemePoint: number,
    trueAnswers: IImageData[],
    falseAnswers: IImageData[]
}