import { PageRenderer } from '../../../model/page-renderer.model';

class FormComponent implements PageRenderer {

    render(): Promise<string> {
        const view = `
        <form class="number-form">
          <labe class="number-form__title"l>Введите число</label>
          <dov class="number-form__input-block">
            <button class="number-form__input-block__prev">-</button>
            <input type="number" class="number-form__input-block__field"/>
            <button class="number-form__input-block__next">+</button>
          </div>
        </form>
        `;
        return Promise.resolve(view);

    }

    after_render(): Promise<void> {

        return Promise.resolve();
    }
}
export { FormComponent };