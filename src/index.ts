"use strict";
import './assets/style/style.scss';

import { main } from './view/pages/main-page/main-page';

const body = document.querySelector('body');

const page = () => {
    body.append(main.wrapper);
};

window.onload = page;