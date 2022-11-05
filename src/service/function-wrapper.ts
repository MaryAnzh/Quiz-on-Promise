import { IAppData } from "../data/app-data.intarface";

export function wrapper(data: IAppData): Promise<IAppData> {
    return new Promise((resolve) => {


        resolve(data);
    });
}