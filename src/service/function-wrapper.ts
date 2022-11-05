import { IAppData } from "../data/app-data.intarface";
import { RoundPage } from "../view/pages/round-page/round-page";

export function wrapperFunction(data: IAppData): Promise<IAppData> {
    let questioncount = 0;
    const body = document.querySelector('body');
    const roundPage = new RoundPage(data, questioncount);
    body.append(roundPage.wrapper);

    return new Promise((resolve) => {


        resolve(data);
    })
}