

<input type="search" id="news" name="news" placeholder="Search news">  
              <div>
                ${sections.map( section => 
                  `
                  <p>${section}</p>
                  `
                ).join('')
                }
              </div>                    

              
import viteLogo from '/logo.svg';

export default function home() {
  const divElm = document.createElement("main") ;
  divElm.className = "main";
  const baseURL = 'https://api.nytimes.com/svc/topstories/v2/';
  const API_KEY = 'cnTesjSt30g0HpdGvpWqPLOGVpl7TgMv';

  // const sections = ['health', 'sports', 'travel'];

  function showSection(sectionName) {
    // fetch(`${baseURL}${sectionName}.json?api-key=${API_KEY}`)    
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${sectionName}&api-key=cnTesjSt30g0HpdGvpWqPLOGVpl7TgMv`)
    // fetch(`https://api.nytimes.com/svc/topstories/v2/health.json?api-key=cnTesjSt30g0HpdGvpWqPLOGVpl7TgMv`)
  
    .then(response => response.json())
    .then( data => {
      console.log(data)
      // const section = data.results[0].section;
      const articleAbstract = data.response.docs[0].abstract;
      console.log(articleAbstract);  //
      const articleTitle = data.response.docs[0].headline.main
      console.log(articleTitle); 
      // const articles = data.results.slice(0,3);
      // console.log(articles); 
      // articles.forEach(article => {}) 
      
      // divElm.innerHTML = `  
      //   <input type="search" id="news" name="news" placeholder="Search news">
      //   <ul class="section">
      //     <li class="section__list" id="${section}-section">        
      //       <details name="reqs" class="article">
      //         <summary class="article__name">
      //         <span>
      //         <img src="${viteLogo}" class="logo" alt="Vite logo"/>
      //         <p>${section}</p>
      //         </span>
      //         </summary>
      //         <ul class="article__lists">
      //           ${articles.map(article => `
      //             <li class="article__list">
      //               <div class="article__imgDiv"><img src="${(article.multimedia && article.multimedia.length > 0) ? article.multimedia[0].url : 'no pic'}" alt="picture no available"></div>
      //               <div class="article__text">      
      //                 <h5>${article.title}</h5>
      //                 <p class="article--ellipsis">${article.abstract}</p>
      //               </div>
      //             </li>            
      //             `).join('')
      //           }
      //         </ul>
      //       </details>
      //     </li>        
      //   </ul>  
      // `
      // const articleList = document.querySelector('.article__list');
      // articleList.addEventListener('click',  () => {
      //   window.open(article.url, '_blank');
      // });
    })  

  }
  showSection('health')


  return divElm;  
}