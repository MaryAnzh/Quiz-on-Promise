import { IItemData } from '../data/data-item-intarface';
import { ILocalStorgeKey } from '../data/localstorge-key-interface';

class LocalStorageService {
    public keys: string[] = ['toDo', 'Done'];

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

    getAllKeys(): ILocalStorgeKey[] {
        return this.keys.map(key => {
            const listInfo: ILocalStorgeKey = {
                name: key,
                data: this.getData(key),
            }
            return listInfo;
        });
    }
}

export { LocalStorageService }
    ;