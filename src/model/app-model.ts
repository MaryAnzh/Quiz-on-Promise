import { IAppData } from '../data/app-data.intarface';
import magesData from '../data/magesData.json';


class AppModel {
    private _data: IAppData;

    constructor(initial: IAppData) {
        this._data = initial;
    }

    getDAta(): IAppData {
        return this._data;
    }

    setData(value: IAppData): void {
        this._data = value;
        this.onchange(value);
    }

    onchange: (data: IAppData) => IAppData = (data: IAppData) => {
        return data;
    }
}
const data = JSON.stringify(magesData);
const model = new AppModel(data);