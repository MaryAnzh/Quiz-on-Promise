import { IAnswer } from '../data/answer.interface';
import { IAppData } from '../data/app-data.intarface';
import { RoundPage } from './pages/round-page/round-page';

class PageRender {
    public body: HTMLElement | null;
    public wrapper: HTMLElement;
    public main: HTMLElement;
    public roundPage = new RoundPage();
    public nextRoundButton = document.createElement('button');

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
        this.nextRoundButton.classList.add('button');
    }

    renderPage(element: HTMLElement) {
        this.main.append(element);
    }

    renderRoundPage() {
        this.main.append(this.roundPage.wrapper);
    }

    updateRoundPage(data: IAppData, roundAnswers: IAnswer[]) {
        this.roundPage.upDateRoundInfo(data, roundAnswers);
        return new Promise<number>((resolve) => {
            const button = this.roundPage.nextRoudSection.button;
            button.onclick = () => {
                const checkedRadio: HTMLInputElement[] = this.roundPage.answers.radioInputsSet;
                checkedRadio.forEach((el, i) => {
                    if (el.checked) {
                        resolve(i);
                    }
                });
            }
        });
    }

    roundResultPage(data: IAppData, isTrueAnswre: boolean, trueAnswer: number): Promise<void> {
        if (isTrueAnswre) {
            this.main.innerHTML = `<h2>Поздравляем, вы ответили правильно!</h2>
                    <p>Ваш Score ${data.gemePoint}</p>
                    `;
        } else {
            this.main.innerHTML = `<h2>Вы ошиблись :(</h2>
            <p>Картину "${data.imagesData[trueAnswer].name}" нарисовал ${data.imagesData[trueAnswer].author}</p>        
            <p>Ваш Score ${data.gemePoint}</p>                `;
        }
        this.nextRoundButton.textContent = 'Next';
        this.main.append(this.nextRoundButton);

        return new Promise(resolve => {
            this.nextRoundButton.onclick = () => {
                this.main.innerHTML = '';
                resolve();
            }
        });
    }
}

const appRender = new PageRender();
export { appRender }