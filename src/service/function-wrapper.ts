import { IAppData } from "../data/app-data.intarface";

export function wrapperFunction(data: IAppData): Promise<IAppData> {

    console.log('Function work');
    return new Promise((resolve) => {


        resolve(data);
    });
}