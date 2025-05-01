import './styles/style.scss';

import header from './views/header';
import home from './views/home';
import footer from './views/footer';

const divElm = document.querySelector('#app');
divElm.append(header(),home(),footer());
