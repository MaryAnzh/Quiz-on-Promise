"use strict";
import './assets/style/style.scss';

import { MainPage } from './view/pages/main-page/main-page';

const body = document.querySelector('body');
const main = new MainPage();

const page = () => {
    body.append(main.wrapper);
};

window.onload = page;