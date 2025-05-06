import './styles/style.scss';

import header from './views/conponents/header';
import setting from './views/settings';
import footer from './views/conponents/footer';

const divElm = document.querySelector('#app');
divElm.append(header(), setting(), footer());