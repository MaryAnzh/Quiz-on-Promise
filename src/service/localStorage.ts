import { IItemData } from '../data/data-item-intarface';

class LocalStorageService {
    constructor() { }

    setData(key: string, value: IItemData[]): void {
        if (value) {
            localStorage.setItem(
                key, JSON.stringify(value)
            );
        } else {
            localStorage.removeItem(key);
        }
    }

    getData(key: string): IItemData[] | null {
        const data = localStorage.getItem(key);
        return data
            ? JSON.parse(data) :
            null;
    }
}

export { LocalStorageService }
    ;