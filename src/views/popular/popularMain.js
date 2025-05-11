import '../../styles/style.scss';

// import getMostPopular from '/src/views/conponents/popular.js';
// const popularArticles = getMostPopular('viewed', 7);
// console.log(popularArticles);
// articleSearch();
// document.querySelector('#app').innerHTML = ``


import header from '../components/header';
import popular from '../components/popular';
import footer from '../components/footer';

const divElm = document.querySelector('#app');
divElm.append(header(), popular(), footer());
