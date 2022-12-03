"use strict";
import './assets/style/style.scss';
import { appRender } from './view/pageRender';
import { startPage } from './view/pages/start-page/start-page';

const page = () => {
    appRender.renderPage(startPage.wrapper);
};

window.onload = page;