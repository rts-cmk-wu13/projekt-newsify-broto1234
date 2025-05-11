export default function bookmark(bmks) {

  console.log(bmks);
  

  const bookmarks = JSON.parse(localStorage.getItem('bookmarkedArticles') || '[]');

    // Set icon states
    bmks.forEach(bmk => {
      console.log(bmk);
      
      const id = bmk.dataset.id;
      const icon = bmk.querySelector('.bookmark');

      // console.log(icon);
      

      if (bookmarks.includes(id)) {
        icon.classList.remove('far');
        icon.classList.add('fas');
      }

    //   icon.addEventListener('click', () => {
    //     const index = bookmarks.indexOf(id);

    //     if (index === -1) {
    //       bookmarks.push(id);
    //       icon.classList.remove('far');
    //       icon.classList.add('fas');
    //     } else {
    //       bookmarks.splice(index, 1);
    //       icon.classList.remove('fas');
    //       icon.classList.add('far');
    //     }

    //     localStorage.setItem('bookmarkedArticles', JSON.stringify(bookmarks));
    //   });
    });
  
}