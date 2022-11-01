import { PageRenderer } from '../../../model/page-renderer.model';
import { FormComponent } from '../../components/form/form.component';

class Main implements PageRenderer {
  public numberForm: FormComponent = new FormComponent();
  public formWrap: null | HTMLFormElement = null;

  render(): Promise<string> {
    const view =  /*html*/`
    <div class="main-wrapper">
      <h2 class="main-wrapper__title">Free Task</h2>
      <section class="main-wrapper__form-view"></section>
      <section class="main-wrapper__form-result"></section>
    </div>
    `;
    return Promise.resolve(view);
  }

  async after_render(): Promise<void> {
    this.formWrap = <HTMLFormElement>document.querySelector('.main-wrapper__form-view');
    this.formWrap.innerHTML = await this.numberForm.render();


    return Promise.resolve();
  }
}

export { Main };