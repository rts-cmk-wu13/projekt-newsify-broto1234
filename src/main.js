import './styles/style.scss';

import header from './views/conponents/header';
import home from './views/conponents/home';
import footer from './views/conponents/footer';

const divElm = document.querySelector('#app');
divElm.append(header(),home(),footer());
