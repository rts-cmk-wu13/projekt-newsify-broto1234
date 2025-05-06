import './styles/style.scss';

// import { getMostPopular } from './views/conponents/popular';
// const newsArticles = getMostPopular('viewed', 7);
// articleSearch();
// console.log(newsArticles);
// document.querySelector('#app').innerHTML = ``

import header from './views/conponents/header';
import popular from './views/conponents/popular';
import footer from './views/conponents/footer';

const divElm = document.querySelector('#app');
divElm.append(header(),popular(),footer());
