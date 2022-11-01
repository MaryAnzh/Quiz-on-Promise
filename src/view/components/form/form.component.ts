import { PageRenderer } from '../../../model/page-renderer.model';
import { FormService } from '../../../services/formService';

class FormComponent implements PageRenderer {
    public formServ: null | FormService = null;

    public form: null | HTMLFormElement = null;
    public buttons: null | NodeListOf<Element> = null;

    render(): Promise<string> {
        const view = `
        <form class="number-form">
          <labe class="number-form__title"l>Введите число</label>
          <dov class="number-form__input-block">
            <button class="number-form__input-block__button" data-type="prev">-</button>
            <input
              name="number"
              type="number"
              class="number-form__input-block__field"
              value="0"
              />
            <button class="number-form__input-block__button" data-type="next">+</button>
          </div>
        </form>
        `;
        return Promise.resolve(view);

    }

    after_render(): Promise<void> {
        this.form = document.querySelector('.number-form');
        this.buttons = document.querySelectorAll('.number-form__input-block__button');
        this.formServ = new FormService(this.form);

        this.buttons.forEach(el => el.addEventListener('click', (e) => this.changeValueOnClick(e)));

        return Promise.resolve();
    }

    changeValueOnClick(e: Event): void {
        e.preventDefault();

        const elem = <HTMLElement>e.target;
        const type = elem.dataset.type;
        let value = +this.formServ.getInputValue();
        if (Number.isNaN(value)) {
            value = 0;
        }
        if (type) {
            if (type === 'prev') {
                const prevNumber = value - 1;
                if (prevNumber > 0) {
                    this.formServ.setInputValue(prevNumber);
                }
            }
            if (type === 'next') {

                const nextNumber = value + 1;
                this.formServ.setInputValue(nextNumber);
            }
        }
        //наверное костыль, т.к. не срабатывал слушатель при событии
        this.formServ.generateInputEvrnt();
    }
}

export { FormComponent }