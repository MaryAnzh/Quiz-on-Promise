import { PageRenderer } from '../../../model/page-renderer.model';

class FormComponent implements PageRenderer {

    render(): Promise<string> {
        const view = `
        <form class="number-form">
          <labe class="number-form__title"l>Введите число</label>
        
        </form>
        `;
        return Promise.resolve(view);

    }

    after_render(): Promise<void> {

        return Promise.resolve();
    }
}
export { FormComponent };