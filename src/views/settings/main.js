import '../../styles/style.scss';

import header from '../components/header';
import setting from '../components/settings';
import footer from '../components/footer';

const divElm = document.querySelector('#app');
divElm.append(header(), setting(), footer());