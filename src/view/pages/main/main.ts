import { PageRenderer } from '../../../model/page-renderer.model';
import { FormComponent } from '../../components/form/form.component';
import { FormService } from '../../../services/formService';

class Main implements PageRenderer {
  public formServ: FormService | null = null;

  public numberForm: FormComponent = new FormComponent();
  public formWrap: null | HTMLFormElement = null;
  public form: null | HTMLFormElement = null;
  public numberInput: null | HTMLInputElement = null;

  public inputView: null | HTMLElement = null;

  render(): Promise<string> {
    const view =  /*html*/`
    <div class="main-wrapper">
      <h2 class="main-wrapper__title">Free Task</h2>
      <section class="main-wrapper__form-view"></section>
      <section class="main-wrapper__form-result">
        <h4 class="main-wrapper__form-result__title">Вы ввели число:</h4>
        <div class="main-wrapper__form-result__result-view"></div>
      </section>
    </div>
    `;
    return Promise.resolve(view);
  }

  async after_render(): Promise<void> {
    this.formWrap = <HTMLFormElement>document.querySelector('.main-wrapper__form-view');
    this.formWrap.innerHTML = await this.numberForm.render();
    this.form = document.querySelector('.number-form');
    this.numberInput = document.querySelector('.number-form__input-block__field');
    this.inputView = document.querySelector('.main-wrapper__form-result__result-view');
    this.formServ = new FormService(this.form);

    this.numberInput.addEventListener('input', (e) => this.listenInputVslue(e));
    return Promise.resolve();
  }

  listenInputVslue(e: Event): void {
    const elem = <HTMLInputElement>e.target;
    const value = elem.value;
    this.inputView.textContent = value;
  }
}

export { Main };