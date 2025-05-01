import './styles/style.scss';

import header from './views/conponents/header';
import archive from './views/conponents/archive';
import footer from './views/conponents/footer';

const divElm = document.querySelector('#app');
divElm.append(header(),archive(),footer());
