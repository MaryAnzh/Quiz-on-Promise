import { IAppData } from "../data/app-data.interface"
import { IImageData } from "../data/image-data.interface";
import { imagesSet } from '.././data/data';

class GameDataState {
    public imagesData: IImageData[] = imagesSet;
    public appData: IAppData = {
        imagesData: [],
        questionNumber: 0,
        gamePoint: 0,
        trueAnswers: [],
        falseAnswers: [],
    }

    constructor() {
    }

    createNewState(): IAppData {
        this.appData.imagesData = this.imagesData;
        this.appData.questionNumber = 0;
        this.appData.gamePoint = 0;
        this.appData.trueAnswers = [];
        this.appData.falseAnswers = [];

        return this.appData;
    }

    updateData(data: IAppData): void {
        this.appData = data;
    }
}

export const gameState = new GameDataState();