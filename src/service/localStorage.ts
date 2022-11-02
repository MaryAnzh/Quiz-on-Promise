class LocalStorageService {
    constructor() { }

    setData(key: string, value: string[]): void {
        if (value) {
            localStorage.setItem(
                key, JSON.stringify(value)
            );
        } else {
            localStorage.removeItem(key);
        }
    }

    getData(key: string): string[] | null {
        const data = localStorage.getItem(key);
        return data
            ? JSON.parse(data) :
            null;
    }
}

export { LocalStorageService }
    ;