import logo from '/logo.svg';
import chevronicon from '/chevronicon.svg';

export default function home() {
  const divElm = document.createElement("main") ;
  divElm.className = "main";

  // const inputElm = document.createElement('input');
  // inputElm.type = 'search';
  // inputElm.placeholder='Search news';
  // divElm.append(inputElm);

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
  const API_KEY = 'cnTesjSt30g0HpdGvpWqPLOGVpl7TgMv';
  
  const newsContainer = document.querySelector(".news-container");

  Promise.all( sections.map(section => 
    // console.log(section);
    fectchNews(section)
    ));

  async function fectchNews(section) {
     const response = await  fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${section}&api-key=cnTesjSt30g0HpdGvpWqPLOGVpl7TgMv`)
    const data = await response.json()
    // console.log(data.response.docs.slice(0, 6));
    const sectionDataResults = data.response.docs;
    showSection(section, sectionDataResults);      
  }

  function showSection(section, articles) {
    // console.log(section);
    // console.log(articles);        
      const secNameElm = document.createElement('div');
      secNameElm.className =  `section ${section}-section`;
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
          spanElmTwo.className = ('chevron--img')
            const spanImgElmTwo = document.createElement('img');
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
    // divElm.append(sectionElm); 
    
    // show articls
    const sectsAll = document.querySelectorAll('.section');
    // const sectionsAll = Array.from(sectsAll);
    // console.log(sectsAll)
    sectsAll.forEach( sect => {
      // console.log(sect);      
      sect.addEventListener('click', ()=> {  
        const articleList = sect.querySelector('.articles__list');  
        console.log(articleList);
        const chevronImg = sect.querySelector('.chevron--img');  
        articleList.classList.toggle('showActive');
        chevronImg.classList.toggle('rotate');
      })
    })

    //-------
    // const sect = document.querySelector('.section__name');
    // sect.addEventListener('click', ()=> {
    //   const articleList = document.querySelector('.articles__list');  
    //   const chevronImg = document.querySelector('.chevron--img');  

    //   articleList.classList.toggle('showActive');
    //   chevronImg.classList.toggle('rotate');
    // })
    //------------

    
  }

  function createArticle(article) {
    // console.log(article);   
    const articleElm = document.createElement('div');
    articleElm.className = 'article__card';
    
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
    articleElm.append(imgElm, articleTextElm);
    
    return articleElm;
  }

  
  return divElm;
}
