import { IAppData } from "../data/app-data.intarface";

export class CustomEventOnChange {

    constructor() { }

    onChange: (data: IAppData) => CustomEvent = () => {
        return new CustomEvent('onchange');
    }
}