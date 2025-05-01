import './styles/style.scss';

import header from './views/conponents/header';
import popular from './views/conponents/popular';
import footer from './views/conponents/footer';

const divElm = document.querySelector('#app');
divElm.append(header(),popular(),footer());
