import { PageRenderer } from '../../../model/page-renderer.model';

class Main implements PageRenderer {

  render(): Promise<string> {
    const view =  /*html*/`
    <div class="main-wrapper">
      <h2>Free Task</h2>
      <section class="main-wrapper__form-view"></section>
      <section class="main-wrapper__form-result"></section>
    </div>
    `;
    return Promise.resolve(view);
  }

  after_render(): Promise<void> {


    return Promise.resolve();
  }
}

export { Main };