import { IImageData } from './image-data.interface';

export interface IAppData {
    imagesData: IImageData[],
    questionNumber: number,
    gemePoint: number,
    trueAnswers: IImageData[],
    falseAnswers: IImageData[],
}