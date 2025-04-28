import viteLogo from '/logo.svg';

export default function home() {
  const divElm = document.createElement("main") ;
  divElm.className = "main";

  // const baseURL = 'https://api.nytimes.com/svc/topstories/v2/';
  // const API_KEY = 'cnTesjSt30g0HpdGvpWqPLOGVpl7TgMv';
  
  
  const sections = ['health', 'sports', 'travel'];
  
  // const response = await  fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=health&api-key=cnTesjSt30g0HpdGvpWqPLOGVpl7TgMv`)
  // const data = await response.json()
  // console.log(data);    

  // const fetchAll = sections.map( section => {
  //   fetchData(section);
  // })

  // async function fetchData(section) {
  //   const response = await  fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${section}&api-key=cnTesjSt30g0HpdGvpWqPLOGVpl7TgMv`)
  // const data = await response.json()
  // console.log(data);    
  // }

  divElm.innerHTML = `
    <input type="search" id="news" name="news" placeholder="Search news">  
    <div class="sections">
      ${sections.map( section => 
        `<div class="section__list ${section}-section">
          <span>
          <img src="${viteLogo}" class="logo" alt="Vite logo"/>
          <p>${section}</p>
          </sapn>
        </div>
        <p>hi()</p>
        `
      ).join('')
    }
    </div>                    
  `

  return divElm;  


// function showSection(specificSection) {
        // fetch(`${baseURL}${sectionName}.json?api-key=${API_KEY}`)    
        //fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${specificSection}&api-key=cnTesjSt30g0HpdGvpWqPLOGVpl7TgMv`)
        // fetch(`https://api.nytimes.com/svc/topstories/v2/health.json?api-key=cnTesjSt30g0HpdGvpWqPLOGVpl7TgMv`)
      
        // .then(response => response.json())
        // .then( data => {
          // console.log(data)
          // const section = data.results[0].section;
          
          // const articles = data.response.docs.slice(0,3);
          // console.log(articles); 
          // const sectionName = data.response;
          // console.log(sectionName);  //
          // const articleAbstract = data.response.docs[0].abstract;
          // console.log(articleAbstract);  //
          // const articleTitle = data.response.docs[0].headline.main
          // console.log(articleTitle); 
          
          // articles.forEach(article => {}) 
           
            
        //     divElmEE.innerHTML += `  
        //     <input type="search" id="news" name="news" placeholder="Search news">                
        //     <div class="section">           
        //       <div class="section__list" id="${specificSection}-section">        
        //         <details name="reqs" class="article">
        //           <summary class="article__name">
        //             <span>
        //             <img src="${viteLogo}" class="logo" alt="Vite logo"/>
        //               <p>${specificSection}</p>
        //             </span>
        //           </summary>
        //           <ul class="article__lists">
        //           ${articles.map(article => `
        //               <li class="article__list">
        //                 <div class="article__imgDiv"><img src="${article.multimedia.default.url}" alt="picture no available"></div>
        //                 <div class="article__text">      
        //                   <h5>${article.headline.main}</h5>
        //                   <p class="article--ellipsis">${article.abstract}</p>
        //                 </div>
        //               </li>            
        //               `).join('')
        //             }
        //           </ul>
        //         </details>
        //       </div>        
        //     </div>  
        //   `
        //   const articleList = document.querySelector('.article__list');
        //   articleList.addEventListener('click',  () => {
        //     window.open(article.url, '_blank');
        //   });
        // })  
    
      // }
}
