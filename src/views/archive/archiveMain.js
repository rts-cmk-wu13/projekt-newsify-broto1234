import '../../styles/style.scss';

import header from '../components/header';
import archive from '../components/archive';
import footer from '../components/footer';

const divElm = document.querySelector('#app');
divElm.append(header(),archive(),footer());
