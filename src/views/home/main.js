import '../../styles/style.scss';

import header from '../components/header';
import home from '../components/home';
import footer from '../components/footer';

const divElm = document.querySelector('#app');
divElm.append(header(),home(),footer());
