import logo from '/src/assets/images/logo.svg';
import chevronicon from '/src/assets/images/chevronicon.svg';
import swiper from './swiper';
import bookmark from './bookmark';

export default function home() {
  const divElm = document.createElement("main") ;
  divElm.className = "main";

  const inputElm = document.createElement('input');
  inputElm.type = 'search';
  inputElm.placeholder='Search news';
  divElm.append(inputElm);

  const sectionElm = document.createElement('section');
  sectionElm.className = 'sections';
  divElm.append(sectionElm);
  
  const categories = JSON.parse(localStorage.getItem("nyt-categories"));
  // console.log(sections);

  let sections = [];
  for (const [key, value] of Object.entries(categories)) {
    if(value) {
      sections.push(`${key}`);
    }
  }
  // console.log(sections); 
  
  const baseURL = 'https://api.nytimes.com/svc/topstories/v2/';
  const API_KEY = import.meta.env.NYT_API_KEY;
  
  const newsContainer = document.querySelector(".news-container");

  Promise.all( sections.map((section, index) => 
    // console.log(section);
    fectchNews(section, index)
    ));

  async function fectchNews(section, index) {
     const response = await  fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${section}&api-key=cnTesjSt30g0HpdGvpWqPLOGVpl7TgMv`)
    const data = await response.json()
    // console.log(data.response.docs.slice(0, 6));
    const sectionDataResults = data.response.docs;
    showSection(section, sectionDataResults, index);      
  }

  function showSection(section, articles, index) {
    // console.log(index)
    // console.log(section);
    // console.log(section.length)
   
      const secNameElm = document.createElement('div');
      secNameElm.className =  `section ${section}-section data-id = "${index}"`;
        const SecElm = document.createElement('div');
        SecElm.className =  'section__name';
          const spanElmOne = document.createElement('span');    
            const spanImgElm = document.createElement('img');
            spanImgElm.src = logo;
          
            const spanHeadingElm = document.createElement('h3');
            spanHeadingElm.className = 'section--title';
            spanHeadingElm.textContent = section;
          spanElmOne.append(spanImgElm, spanHeadingElm);
          
          const spanElmTwo = document.createElement('span');
          // spanElmTwo.className = ('chevron--img')
          const spanImgElmTwo = document.createElement('img');
          spanImgElmTwo.className = ('chevron--img')
            spanImgElmTwo.src = chevronicon;
          spanElmTwo.append(spanImgElmTwo);
        SecElm.append(spanElmOne, spanElmTwo);
        
        const articlesElm = document.createElement('div');
        articlesElm.className = 'articles__list';            
        const showarticles = articles.slice(0, 3);          
        showarticles.forEach(article => {
          articlesElm.append(createArticle(article));
        });            
      secNameElm.append(SecElm,articlesElm);
      sectionElm.append(secNameElm);     

    secNameElm.addEventListener('click', ()=> {  
      const articleList = secNameElm.querySelector('.articles__list');  
      console.log(articleList);
      const chevronImg = secNameElm.querySelector('.chevron--img');  
      articleList.classList.toggle('showActive');
      chevronImg.classList.toggle('rotate');
    })    

    //-----
    
  // Bookmark -------
  const bookmarks = sectionElm.querySelectorAll('.section');
  // console.log(bookmarks);   
  bookmarks.forEach(book => {
    // console.log(book);
  })
  //   // bookmark(bookmarks);      
  
  // bookmarks.forEach(bookmark => {
  //   bookmark(bookmark);      
  // })
  
  
  // bookmarks.forEach(book => {
  //   console.log(book);
  // })
  
  // const bookmarks = secNameElm.querySelector('.section');
  // console.log(bookmarks);

  }

  // const bookmarks = sectionElm.querySelector('.section');  
  // console.log(bookmarks);
  

 

  function createArticle(article) {
    // console.log(article);   
    const articleElm = document.createElement('div');
    articleElm.className = 'article__content';
      const articleContElm = document.createElement('div');
      articleContElm.className = 'article__card';
    
      // article image
        const imgElm = document.createElement('img');
        imgElm.className ='article__img';
        imgElm.src = article.multimedia.default.url;
        imgElm.alt = article.headline.main;

        const articleTextElm = document.createElement('div');
        articleTextElm.className = 'article--text';
        
          const headline = document.createElement('h6');
          headline.textContent = article.headline.main;
          
          const absElm = document.createElement('p');
          absElm.className = 'article--ellipsis';
          absElm.textContent = article.abstract;
        articleTextElm.append(headline, absElm);
      articleContElm.append(imgElm, articleTextElm);
    articleElm.append(articleContElm);
    
    // Read article to a new page--  
    // const readArticles = document.querySelectorAll('.article__card');
    // // console.log(readArticles);
    // readArticles.forEach(ar => {
    //   ar.addEventListener('click',  () => {
    //             window.open(article.web_url, '_blank');
    //       });      
    //   })
    //------

    // swipe articles-----
    const containers = document.querySelectorAll('.articles__list');
    containers.forEach(container => {
      swiper(container);      
    })
    //--

    return articleElm;
  }


  // Dark mode--
  if (localStorage.getItem('darkmode') === 'true') {
    // document.documentElement.classList.add('dark');
    document.documentElement.setAttribute("data-mode", "dark");
  }
  //----

  
  return divElm;
}
