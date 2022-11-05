import { IAppData } from "../data/app-data.intarface"

class GameDataState {
    public appData: IAppData = {
        questionNumber: 0,
        gemePoint: 0,
        trueAnswers: [],
        falseAnswers: [],
    }

    constructor() {
    }

    createNewState(): IAppData {
        this.appData.questionNumber = 0;
        this.appData.gemePoint = 0;
        this.appData.trueAnswers = [];
        this.appData.falseAnswers = [];

        return this.appData;
    }

    updateData(data: IAppData): void {
        this.appData = data;
    }
}

export const gameState = new GameDataState();