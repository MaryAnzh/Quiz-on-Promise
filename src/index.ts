"use strict";

import './assets/style/style.scss';

import { PageRenderer } from './model/page-renderer.model';
import { Main } from './view/pages/main/main';

const page: PageRenderer = new Main();

const viewPage = async (): Promise<void> => {
    const body = document.querySelector('body');
    const content = document.createElement('main');
    content.classList.add('page');

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    body.append(wrapper);
    wrapper.append(content);

    content.innerHTML = await page.render();
    await page.after_render();
}

window.addEventListener('load', viewPage);