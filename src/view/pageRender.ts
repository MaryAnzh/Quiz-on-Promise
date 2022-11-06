import { IAnswer } from '../data/answer.interface';
import { IAppData } from '../data/app-data.intarface';
import { RoundPage } from './pages/round-page/round-page';

class PageRender {
    public body: HTMLElement | null;
    public wrapper: HTMLElement;
    public main: HTMLElement;
    public roundPage = new RoundPage();

    constructor() {
        this.body = document.querySelector('body');
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('wrapper');
        this.main = document.createElement('main');
        this.main.classList.add('main');
        if (this.body === null) {
            return;
        }
        this.body.append(this.wrapper);
        this.wrapper.append(this.main);
    }

    renderPage(element: HTMLElement) {
        this.main.append(element);
    }

    renderRoundPage() {
        this.main.append(this.roundPage.wrapper);
    }

    updateRoundPage(data: IAppData, roundAnswers: IAnswer[]) {
        this.roundPage.upDateRoundInfo(data, roundAnswers);
    }
}

const appRender = new PageRender();
export { appRender }